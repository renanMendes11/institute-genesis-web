import { useState } from 'react';
import CoordinatorLayout from '@/components/coordinator/CoordinatorLayout';
import { MOCK_STUDENTS, Student, StudentStatus } from '@/data/mockData';

const COORD_PROJECT_ID   = 1;
const COORD_PROJECT_NAME = 'Escola de Ballet';
const STATUSES: StudentStatus[] = ['Ativo', 'Inativo'];

const emptyForm = (): Omit<Student, 'id'> => ({
  name: '', email: '', phone: '', age: 0,
  projectId: COORD_PROJECT_ID,
  projectName: COORD_PROJECT_NAME,
  enrollmentDate: '',
  status: 'Ativo',
});

export default function CoordinatorAlunos() {
  const initialStudents  = MOCK_STUDENTS.filter((s) => s.projectId === COORD_PROJECT_ID);
  const [students, setStudents]     = useState<Student[]>(initialStudents);
  const [showModal, setShowModal]   = useState(false);
  const [editTarget, setEditTarget] = useState<Student | null>(null);
  const [form, setForm]             = useState(emptyForm());
  const [search, setSearch]         = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [deleteId, setDeleteId]     = useState<number | null>(null);
  const [viewTarget, setViewTarget] = useState<Student | null>(null);

  const filtered = students.filter((s) => {
    const matchSearch  = s.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus  = filterStatus ? s.status === filterStatus : true;
    return matchSearch && matchStatus;
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

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editTarget) {
      setStudents((prev) => prev.map((s) => (s.id === editTarget.id ? { ...s, ...form } : s)));
    } else {
      const nextId = Math.max(0, ...students.map((s) => s.id), 100) + 1;
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

  const activeCount   = students.filter((s) => s.status === 'Ativo').length;
  const inactiveCount = students.filter((s) => s.status === 'Inativo').length;

  return (
    <CoordinatorLayout title="Alunos" projectName={COORD_PROJECT_NAME}>
      {/* Summary row */}
      <div className="kpi-grid" style={{ marginBottom: 20 }}>
        <div className="kpi-card">
          <div>
            <div className="kpi-label">Total de Alunas</div>
            <div className="kpi-value" style={{ color: '#2D3359' }}>{students.length}</div>
          </div>
          <div className="kpi-icon-wrap">👥</div>
        </div>
        <div className="kpi-card">
          <div>
            <div className="kpi-label">Ativas</div>
            <div className="kpi-value" style={{ color: '#27a96c' }}>{activeCount}</div>
          </div>
          <div className="kpi-icon-wrap">✅</div>
        </div>
        <div className="kpi-card">
          <div>
            <div className="kpi-label">Inativas</div>
            <div className="kpi-value" style={{ color: '#700202' }}>{inactiveCount}</div>
          </div>
          <div className="kpi-icon-wrap">⏸️</div>
        </div>
      </div>

      <div className="panel-card">
        <div className="panel-card-header">
          <h2 className="panel-card-title">Lista de Alunas ({filtered.length})</h2>
          <div className="panel-toolbar">
            <input
              className="form-control"
              style={{ width: 200 }}
              placeholder="Buscar por nome…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="form-control"
              style={{ width: 140 }}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Todos status</option>
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button className="btn-danger" onClick={openCreate}>+ Adicionar Aluna</button>
          </div>
        </div>

        <div className="panel-table-wrap">
          <table className="panel-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Idade</th>
                <th>Matrícula</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ fontSize: 13, color: '#555' }}>{s.email}</td>
                  <td style={{ fontSize: 13 }}>{s.phone}</td>
                  <td>{s.age}</td>
                  <td style={{ fontSize: 13, color: '#777' }}>{s.enrollmentDate}</td>
                  <td>
                    <span className={`badge badge-${s.status.toLowerCase()}`}>{s.status}</span>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <button className="btn-sm-edit"   onClick={() => setViewTarget(s)}>Ver</button>
                    <button className="btn-sm-edit"   onClick={() => openEdit(s)}>Editar</button>
                    <button className="btn-sm-delete" onClick={() => setDeleteId(s.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="empty-state">
                      <div className="empty-state-icon">👤</div>
                      <div className="empty-state-text">Nenhuma aluna encontrada.</div>
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
            <h2 className="panel-modal-title">{editTarget ? 'Editar Aluna' : 'Adicionar Aluna'}</h2>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome completo *</label>
                <input className="form-control" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Nome da aluna" />
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
                <label className="form-label">Data de Matrícula</label>
                <input className="form-control" type="date" value={form.enrollmentDate} onChange={(e) => set('enrollmentDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control" value={form.status} onChange={(e) => set('status', e.target.value as StudentStatus)}>
                  {STATUSES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="panel-modal-footer">
              <button className="btn-outline" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-danger"  onClick={handleSave} disabled={!form.name.trim()}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewTarget && (
        <div className="panel-modal-overlay" onClick={(e) => e.target === e.currentTarget && setViewTarget(null)}>
          <div className="panel-modal modal-sm">
            <h2 className="panel-modal-title">Detalhes da Aluna</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              {[
                ['Nome',       viewTarget.name],
                ['E-mail',     viewTarget.email],
                ['Telefone',   viewTarget.phone],
                ['Idade',      `${viewTarget.age} anos`],
                ['Projeto',    viewTarget.projectName],
                ['Matrícula',  viewTarget.enrollmentDate],
                ['Status',     viewTarget.status],
              ].map(([label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontWeight: 600, minWidth: 90, color: '#666' }}>{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="panel-modal-footer">
              <button className="btn-outline"  onClick={() => setViewTarget(null)}>Fechar</button>
              <button className="btn-sm-edit"  style={{ padding: '9px 18px', fontSize: 14 }} onClick={() => { openEdit(viewTarget); setViewTarget(null); }}>Editar</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId != null && (
        <div className="panel-modal-overlay" onClick={(e) => e.target === e.currentTarget && setDeleteId(null)}>
          <div className="panel-modal modal-sm">
            <h2 className="panel-modal-title">Confirmar Exclusão</h2>
            <p style={{ color: '#555', fontSize: 14 }}>Tem certeza que deseja remover esta aluna do projeto?</p>
            <div className="panel-modal-footer">
              <button className="btn-outline" onClick={() => setDeleteId(null)}>Cancelar</button>
              <button className="btn-danger"  onClick={handleDelete}>Sim, remover</button>
            </div>
          </div>
        </div>
      )}
    </CoordinatorLayout>
  );
}
