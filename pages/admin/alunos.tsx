import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { MOCK_STUDENTS, MOCK_PROJECTS, Student, StudentStatus } from '@/data/mockData';

const STATUSES: StudentStatus[] = ['Ativo', 'Inativo'];

const emptyForm = (): Omit<Student, 'id'> => ({
  name: '', email: '', phone: '', age: 0,
  projectId: MOCK_PROJECTS[0].id,
  projectName: MOCK_PROJECTS[0].name,
  enrollmentDate: '',
  status: 'Ativo',
});

export default function AdminAlunos() {
  const [students, setStudents]     = useState<Student[]>(MOCK_STUDENTS);
  const [showModal, setShowModal]   = useState(false);
  const [editTarget, setEditTarget] = useState<Student | null>(null);
  const [form, setForm]             = useState(emptyForm());
  const [search, setSearch]         = useState('');
  const [filterProject, setFilterProject] = useState<string>('');
  const [deleteId, setDeleteId]     = useState<number | null>(null);

  const filtered = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase());
    const matchProject = filterProject ? s.projectId === Number(filterProject) : true;
    return matchSearch && matchProject;
  });

  const openCreate = () => {
    setEditTarget(null);
    setForm(emptyForm());
    setShowModal(true);
  };

  const openEdit = (s: Student) => {
    setEditTarget(s);
    setForm({
      name: s.name, email: s.email, phone: s.phone, age: s.age,
      projectId: s.projectId, projectName: s.projectName,
      enrollmentDate: s.enrollmentDate, status: s.status,
    });
    setShowModal(true);
  };

  const handleProjectChange = (projectId: number) => {
    const project = MOCK_PROJECTS.find((p) => p.id === projectId);
    setForm((f) => ({ ...f, projectId, projectName: project?.name ?? '' }));
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editTarget) {
      setStudents((prev) => prev.map((s) => (s.id === editTarget.id ? { ...s, ...form } : s)));
    } else {
      const nextId = Math.max(0, ...students.map((s) => s.id)) + 1;
      setStudents((prev) => [...prev, { id: nextId, ...form }]);
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    if (deleteId == null) return;
    setStudents((prev) => prev.filter((s) => s.id !== deleteId));
    setDeleteId(null);
  };

  const set = <K extends keyof Omit<Student, 'id'>>(key: K, val: Omit<Student, 'id'>[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  return (
    <AdminLayout title="Alunos">
      <div className="panel-card">
        <div className="panel-card-header">
          <h2 className="panel-card-title">Alunos ({filtered.length})</h2>
          <div className="panel-toolbar">
            <input
              className="form-control"
              style={{ width: 200 }}
              placeholder="Buscar por nome ou e-mail…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="form-control"
              style={{ width: 200 }}
              value={filterProject}
              onChange={(e) => setFilterProject(e.target.value)}
            >
              <option value="">Todos os projetos</option>
              {MOCK_PROJECTS.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <button className="btn-primary" onClick={openCreate}>+ Novo Aluno</button>
          </div>
        </div>

        <div className="panel-table-wrap">
          <table className="panel-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Idade</th>
                <th>Projeto</th>
                <th>Matrícula</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td style={{ color: '#bbb', fontSize: 12 }}>{s.id}</td>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ fontSize: 13, color: '#555' }}>{s.email}</td>
                  <td style={{ fontSize: 13 }}>{s.phone}</td>
                  <td>{s.age}</td>
                  <td style={{ fontSize: 13 }}>{s.projectName}</td>
                  <td style={{ fontSize: 13, color: '#777' }}>{s.enrollmentDate}</td>
                  <td>
                    <span className={`badge badge-${s.status.toLowerCase()}`}>{s.status}</span>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <button className="btn-sm-edit"   onClick={() => openEdit(s)}>Editar</button>
                    <button className="btn-sm-delete" onClick={() => setDeleteId(s.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9}>
                    <div className="empty-state">
                      <div className="empty-state-icon">👤</div>
                      <div className="empty-state-text">Nenhum aluno encontrado.</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Modal */}
      {showModal && (
        <div className="panel-modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="panel-modal">
            <h2 className="panel-modal-title">{editTarget ? 'Editar Aluno' : 'Novo Aluno'}</h2>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome completo *</label>
                <input className="form-control" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Nome do aluno" />
              </div>
              <div className="form-group">
                <label className="form-label">Idade</label>
                <input className="form-control" type="number" min={0} max={99} value={form.age} onChange={(e) => set('age', Number(e.target.value))} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input className="form-control" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="email@exemplo.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Telefone</label>
                <input className="form-control" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(00) 00000-0000" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Projeto</label>
                <select className="form-control" value={form.projectId} onChange={(e) => handleProjectChange(Number(e.target.value))}>
                  {MOCK_PROJECTS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control" value={form.status} onChange={(e) => set('status', e.target.value as StudentStatus)}>
                  {STATUSES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Data de Matrícula</label>
              <input className="form-control" type="date" value={form.enrollmentDate} onChange={(e) => set('enrollmentDate', e.target.value)} />
            </div>

            <div className="panel-modal-footer">
              <button className="btn-outline" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleSave} disabled={!form.name.trim()}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId != null && (
        <div className="panel-modal-overlay" onClick={(e) => e.target === e.currentTarget && setDeleteId(null)}>
          <div className="panel-modal modal-sm">
            <h2 className="panel-modal-title">Confirmar Exclusão</h2>
            <p style={{ color: '#555', fontSize: 14 }}>Tem certeza que deseja excluir este aluno? A ação não pode ser desfeita.</p>
            <div className="panel-modal-footer">
              <button className="btn-outline" onClick={() => setDeleteId(null)}>Cancelar</button>
              <button className="btn-danger" onClick={handleDelete}>Sim, excluir</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
