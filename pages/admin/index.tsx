import AdminLayout from '@/components/admin/AdminLayout';
import { MOCK_PROJECTS, MOCK_STUDENTS } from '@/data/mockData';
import Link from 'next/link';

export default function AdminDashboard() {
  const projects = MOCK_PROJECTS;
  const students = MOCK_STUDENTS;

  const totalProjects    = projects.length;
  const activeProjects   = projects.filter((p) => p.status === 'Ativo').length;
  const totalStudents    = students.length;
  const activeStudents   = students.filter((s) => s.status === 'Ativo').length;
  const totalBeneficiary = projects.reduce((acc, p) => acc + p.studentCount, 0);

  const kpis = [
    { label: 'Projetos',         value: totalProjects,   sub: `${activeProjects} ativos`,       icon: '📁', color: '#2D3359' },
    { label: 'Alunos Cadastrados', value: totalStudents, sub: `${activeStudents} ativos`,       icon: '👥', color: '#700202' },
    { label: 'Beneficiários',    value: totalBeneficiary, sub: 'total nos projetos',            icon: '🌟', color: '#f5b921' },
    { label: 'Projetos Ativos',  value: activeProjects,  sub: `de ${totalProjects} registrados`, icon: '✅', color: '#27a96c' },
  ];

  const maxStudents = Math.max(...projects.map((p) => p.studentCount), 1);

  const barColors: Record<string, string> = {
    Arte:        '#2D3359',
    Educação:    '#700202',
    Alimentação: '#f5b921',
    Saúde:       '#27a96c',
    Esporte:     '#e67e22',
  };

  return (
    <AdminLayout title="Dashboard">
      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi-card">
            <div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value" style={{ color: k.color }}>{k.value}</div>
              <div className="kpi-sub">{k.sub}</div>
            </div>
            <div className="kpi-icon-wrap">{k.icon}</div>
          </div>
        ))}
      </div>

      {/* Bar chart + recent students */}
      <div className="grid-2">
        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Beneficiários por Projeto</h2>
          </div>
          <div className="panel-card-body bar-chart">
            {projects.map((p) => (
              <div key={p.id} className="bar-item">
                <div className="bar-meta">
                  <span>{p.name}</span>
                  <strong>{p.studentCount}</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(p.studentCount / maxStudents) * 100}%`,
                      background: p.status === 'Inativo' ? '#ccc' : (barColors[p.category] || '#2D3359'),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Últimos Alunos Cadastrados</h2>
            <Link href="/admin/alunos" style={{ fontSize: 13, color: '#2D3359', textDecoration: 'underline' }}>
              Ver todos
            </Link>
          </div>
          <div className="panel-table-wrap">
            <table className="panel-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Projeto</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[...students].reverse().slice(0, 6).map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.name}</td>
                    <td style={{ fontSize: 12, color: '#777' }}>{s.projectName}</td>
                    <td>
                      <span className={`badge badge-${s.status.toLowerCase()}`}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Projects table */}
      <div className="panel-card mt-20">
        <div className="panel-card-header">
          <h2 className="panel-card-title">Resumo dos Projetos</h2>
          <Link href="/admin/projetos" style={{ fontSize: 13, color: '#2D3359', textDecoration: 'underline' }}>
            Gerenciar
          </Link>
        </div>
        <div className="panel-table-wrap">
          <table className="panel-table">
            <thead>
              <tr>
                <th>Projeto</th>
                <th>Categoria</th>
                <th>Coordenador</th>
                <th>Início</th>
                <th>Beneficiários</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.coordinator}</td>
                  <td>{p.startDate}</td>
                  <td>{p.studentCount}</td>
                  <td>
                    <span className={`badge badge-${p.status.toLowerCase()}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
