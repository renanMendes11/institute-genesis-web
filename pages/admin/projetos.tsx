import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { MOCK_PROJECTS, Project, ProjectStatus, Category } from '@/data/mockData';

const CATEGORIES: Category[]       = ['Arte', 'Educação', 'Alimentação', 'Saúde', 'Esporte'];
const STATUSES: ProjectStatus[]    = ['Ativo', 'Inativo', 'Planejado'];

const emptyForm = (): Omit<Project, 'id'> => ({
  name: '', description: '', category: 'Arte', status: 'Ativo',
  studentCount: 0, startDate: '', coordinator: '',
});

export default function AdminProjetos() {
  const [projects, setProjects]         = useState<Project[]>(MOCK_PROJECTS);
  const [showModal, setShowModal]       = useState(false);
  const [editTarget, setEditTarget]     = useState<Project | null>(null);
  const [form, setForm]                 = useState(emptyForm());
  const [search, setSearch]             = useState('');
  const [deleteId, setDeleteId]         = useState<number | null>(null);

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.coordinator.toLowerCase().includes(search.toLowerCase()),
  );

  const openCreate = () => {
    setEditTarget(null);
    setForm(emptyForm());
    setShowModal(true);
  };

  const openEdit = (p: Project) => {
    setEditTarget(p);
    setForm({ name: p.name, description: p.description, category: p.category, status: p.status, studentCount: p.studentCount, startDate: p.startDate, coordinator: p.coordinator });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editTarget) {
      setProjects((prev) => prev.map((p) => (p.id === editTarget.id ? { ...p, ...form } : p)));
    } else {
      const nextId = Math.max(0, ...projects.map((p) => p.id)) + 1;
      setProjects((prev) => [...prev, { id: nextId, ...form }]);
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    if (deleteId == null) return;
    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  const set = <K extends keyof Omit<Project, 'id'>>(key: K, val: Omit<Project, 'id'>[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  return (
    <AdminLayout title="Projetos">
      <div className="panel-card">
        <div className="panel-card-header">
          <h2 className="panel-card-title">Projetos ({filtered.length})</h2>
          <div className="panel-toolbar">
            <input
              className="form-control"
              style={{ width: 220 }}
              placeholder="Buscar por nome ou coordenador…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn-primary" onClick={openCreate}>+ Novo Projeto</button>
          </div>
        </div>

        <div className="panel-table-wrap">
          <table className="panel-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Coordenador</th>
                <th>Início</th>
                <th>Beneficiários</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td style={{ color: '#bbb', fontSize: 12 }}>{p.id}</td>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.coordinator}</td>
                  <td>{p.startDate}</td>
                  <td>{p.studentCount}</td>
                  <td>
                    <span className={`badge badge-${p.status.toLowerCase()}`}>{p.status}</span>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <button className="btn-sm-edit"   onClick={() => openEdit(p)}>Editar</button>
                    <button className="btn-sm-delete" onClick={() => setDeleteId(p.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className="empty-state">
                      <div className="empty-state-icon">📂</div>
                      <div className="empty-state-text">Nenhum projeto encontrado.</div>
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
            <h2 className="panel-modal-title">{editTarget ? 'Editar Projeto' : 'Novo Projeto'}</h2>

            <div className="form-group">
              <label className="form-label">Nome *</label>
              <input className="form-control" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Nome do projeto" />
            </div>

            <div className="form-group">
              <label className="form-label">Descrição</label>
              <textarea className="form-control" value={form.description} onChange={(e) => set('description', e.target.value)} placeholder="Descrição do projeto" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Categoria</label>
                <select className="form-control" value={form.category} onChange={(e) => set('category', e.target.value as Category)}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control" value={form.status} onChange={(e) => set('status', e.target.value as ProjectStatus)}>
                  {STATUSES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Coordenador(a)</label>
                <input className="form-control" value={form.coordinator} onChange={(e) => set('coordinator', e.target.value)} placeholder="Nome do coordenador" />
              </div>
              <div className="form-group">
                <label className="form-label">Data de Início</label>
                <input className="form-control" type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Nº de Beneficiários</label>
              <input className="form-control" type="number" min={0} value={form.studentCount} onChange={(e) => set('studentCount', Number(e.target.value))} />
            </div>

            <div className="panel-modal-footer">
              <button className="btn-outline" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleSave} disabled={!form.name.trim()}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId != null && (
        <div className="panel-modal-overlay" onClick={(e) => e.target === e.currentTarget && setDeleteId(null)}>
          <div className="panel-modal modal-sm">
            <h2 className="panel-modal-title">Confirmar Exclusão</h2>
            <p style={{ color: '#555', fontSize: 14 }}>
              Tem certeza que deseja excluir este projeto? A ação não pode ser desfeita.
            </p>
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
