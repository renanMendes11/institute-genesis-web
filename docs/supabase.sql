-- ============================================================
-- Instituto Gênesis - Schema Supabase
-- Cenário:
--   Admin        → acesso total
--   Coordenador  → CRUD no(s) seu(s) projeto(s)
--   Membro       → somente leitura no(s) seu(s) projeto(s)
-- ============================================================

-- 1. ENUM para roles
CREATE TYPE user_role AS ENUM ('admin', 'coordenador', 'membro');

-- 2. Perfis de usuário (vinculado ao auth.users do Supabase)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  role user_role NOT NULL DEFAULT 'membro',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Projetos
CREATE TABLE projetos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(200) NOT NULL,
  descricao TEXT,
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Equipes (membros vinculados a um projeto)
CREATE TABLE equipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id UUID NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  membro_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  funcao VARCHAR(100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (projeto_id, membro_id)
);

-- 5. Alunos
CREATE TABLE alunos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(200) NOT NULL,
  data_nascimento DATE,
  responsavel VARCHAR(200),
  telefone VARCHAR(20),
  endereco TEXT,
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. Matrículas (vínculo aluno <-> projeto)
CREATE TABLE matriculas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id UUID NOT NULL REFERENCES alunos(id) ON DELETE CASCADE,
  projeto_id UUID NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  data_matricula DATE NOT NULL DEFAULT CURRENT_DATE,
  ativa BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (aluno_id, projeto_id)
);

-- 7. Presença
CREATE TABLE presencas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  matricula_id UUID NOT NULL REFERENCES matriculas(id) ON DELETE CASCADE,
  data DATE NOT NULL DEFAULT CURRENT_DATE,
  presente BOOLEAN NOT NULL DEFAULT false,
  observacao TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (matricula_id, data)
);

-- ============================================================
-- ÍNDICES
-- ============================================================
CREATE INDEX idx_equipes_projeto ON equipes(projeto_id);
CREATE INDEX idx_equipes_membro ON equipes(membro_id);
CREATE INDEX idx_matriculas_aluno ON matriculas(aluno_id);
CREATE INDEX idx_matriculas_projeto ON matriculas(projeto_id);
CREATE INDEX idx_presencas_matricula ON presencas(matricula_id);
CREATE INDEX idx_presencas_data ON presencas(data);

-- ============================================================
-- FUNÇÃO AUXILIAR: retorna o role do usuário autenticado
-- ============================================================
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS user_role
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$;

-- ============================================================
-- FUNÇÃO AUXILIAR: verifica se o usuário é membro da equipe do projeto
-- ============================================================
CREATE OR REPLACE FUNCTION is_member_of_project(p_projeto_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM equipes WHERE projeto_id = p_projeto_id AND membro_id = auth.uid()
  );
$$;

-- ============================================================
-- TRIGGER: atualizar updated_at automaticamente
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_projetos_updated_at BEFORE UPDATE ON projetos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_alunos_updated_at BEFORE UPDATE ON alunos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_matriculas_updated_at BEFORE UPDATE ON matriculas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- RLS (Row Level Security)
-- ============================================================

-- ---------- PROFILES ----------
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a profiles"
  ON profiles FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver próprio perfil"
  ON profiles FOR SELECT
  USING (id = auth.uid());

-- ---------- PROJETOS ----------
ALTER TABLE projetos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a projetos"
  ON projetos FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver seus projetos"
  ON projetos FOR SELECT
  USING (is_member_of_project(id));

-- ---------- EQUIPES ----------
ALTER TABLE equipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a equipes"
  ON equipes FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver equipe do seu projeto"
  ON equipes FOR SELECT
  USING (is_member_of_project(projeto_id));

-- ---------- ALUNOS ----------
ALTER TABLE alunos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a alunos"
  ON alunos FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver alunos do seu projeto"
  ON alunos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.aluno_id = alunos.id
        AND is_member_of_project(m.projeto_id)
    )
  );

CREATE POLICY "Coordenador: criar alunos"
  ON alunos FOR INSERT
  WITH CHECK (get_my_role() = 'coordenador');

CREATE POLICY "Coordenador: atualizar alunos do seu projeto"
  ON alunos FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.aluno_id = alunos.id
        AND is_member_of_project(m.projeto_id)
    )
  );

CREATE POLICY "Coordenador: excluir alunos do seu projeto"
  ON alunos FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.aluno_id = alunos.id
        AND is_member_of_project(m.projeto_id)
    )
  );

-- ---------- MATRÍCULAS ----------
ALTER TABLE matriculas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a matriculas"
  ON matriculas FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver matriculas do seu projeto"
  ON matriculas FOR SELECT
  USING (is_member_of_project(projeto_id));

CREATE POLICY "Coordenador: criar matricula no seu projeto"
  ON matriculas FOR INSERT
  WITH CHECK (is_member_of_project(projeto_id));

CREATE POLICY "Coordenador: atualizar matricula do seu projeto"
  ON matriculas FOR UPDATE
  USING (is_member_of_project(projeto_id));

CREATE POLICY "Coordenador: excluir matricula do seu projeto"
  ON matriculas FOR DELETE
  USING (is_member_of_project(projeto_id));

-- ---------- PRESENÇAS ----------
ALTER TABLE presencas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin: acesso total a presencas"
  ON presencas FOR ALL
  USING (get_my_role() = 'admin')
  WITH CHECK (get_my_role() = 'admin');

CREATE POLICY "Coordenador/Membro: ver presencas do seu projeto"
  ON presencas FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.id = presencas.matricula_id
        AND is_member_of_project(m.projeto_id)
    )
  );

CREATE POLICY "Coordenador/Membro: registrar presenca no seu projeto"
  ON presencas FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.id = matricula_id
        AND is_member_of_project(m.projeto_id)
    )
  );

CREATE POLICY "Coordenador/Membro: atualizar presenca do seu projeto"
  ON presencas FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM matriculas m
      WHERE m.id = presencas.matricula_id
        AND is_member_of_project(m.projeto_id)
    )
  );

-- ============================================================
-- TRIGGER: criar perfil automaticamente ao cadastrar usuário
-- ============================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO profiles (id, nome, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'nome', ''),
    NEW.email,
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'membro')
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
