import CoordinatorLayout from '@/components/coordinator/CoordinatorLayout';
import { MOCK_PROJECTS, MOCK_STUDENTS, MOCK_ATTENDANCE } from '@/data/mockData';
import Link from 'next/link';

// The coordinator is assigned to project ID 1 (Escola de Ballet)
const COORD_PROJECT_ID = 1;

export default function CoordinatorDashboard() {
  const project  = MOCK_PROJECTS.find((p) => p.id === COORD_PROJECT_ID)!;
  const students = MOCK_STUDENTS.filter((s) => s.projectId === COORD_PROJECT_ID);
  const attendance = MOCK_ATTENDANCE.filter((a) => a.projectId === COORD_PROJECT_ID);

  const activeStudents   = students.filter((s) => s.status === 'Ativo').length;
  const inactiveStudents = students.filter((s) => s.status === 'Inativo').length;

  const attendanceDates  = [...new Set(attendance.map((a) => a.date))].sort().reverse();
  const lastDate         = attendanceDates[0];
  const lastDateRecords  = attendance.filter((a) => a.date === lastDate);
  const lastPresent      = lastDateRecords.filter((a) => a.present).length;
  const lastTotal        = lastDateRecords.length;
  const lastPct          = lastTotal > 0 ? Math.round((lastPresent / lastTotal) * 100) : 0;

  // Overall attendance rate
  const totalPresent = attendance.filter((a) => a.present).length;
  const overallPct   = attendance.length > 0 ? Math.round((totalPresent / attendance.length) * 100) : 0;

  const kpis = [
    { label: 'Alunos Ativos',     value: activeStudents,    sub: `${inactiveStudents} inativos`, icon: '👥', color: '#700202' },
    { label: 'Total de Alunos',   value: students.length,   sub: 'no projeto',                  icon: '📋', color: '#2D3359' },
    { label: 'Frequência Geral',  value: `${overallPct}%`,  sub: `${totalPresent} de ${attendance.length} presenças`, icon: '✅', color: '#27a96c' },
    { label: 'Última Aula',       value: `${lastPct}%`,     sub: lastDate ? `${lastDate} — ${lastPresent}/${lastTotal}` : 'sem registro', icon: '📅', color: '#f5b921' },
  ];

  // Per-student attendance stats
  const studentStats = students.map((s) => {
    const recs    = attendance.filter((a) => a.studentId === s.id);
    const present = recs.filter((a) => a.present).length;
    const pct     = recs.length > 0 ? Math.round((present / recs.length) * 100) : 0;
    return { ...s, present, total: recs.length, pct };
  });

  return (
    <CoordinatorLayout title="Dashboard" projectName={project.name}>
      {/* Project header */}
      <div className="project-header-card coord-project-card">
        <div>
          <div className="project-header-name">{project.name}</div>
          <div className="project-header-meta">Coordenador(a): Ana Paula Silva &nbsp;·&nbsp; Desde {project.startDate}</div>
        </div>
        <div className="project-header-pill">{project.category}</div>
      </div>

      {/* KPIs */}
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

      {/* Attendance + Students */}
      <div className="grid-2">
        {/* Attendance by student */}
        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Frequência por Aluna</h2>
            <Link href="/coordinator/presencas" style={{ fontSize: 13, color: '#700202', textDecoration: 'underline' }}>
              Registrar presença
            </Link>
          </div>
          <div className="panel-card-body bar-chart">
            {studentStats.filter((s) => s.status === 'Ativo').map((s) => (
              <div key={s.id} className="bar-item">
                <div className="bar-meta">
                  <span>{s.name}</span>
                  <strong style={{ color: s.pct >= 75 ? '#27a96c' : '#700202' }}>{s.pct}%</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${s.pct}%`, background: s.pct >= 75 ? '#27a96c' : '#700202' }}
                  />
                </div>
              </div>
            ))}
            {studentStats.filter((s) => s.status === 'Ativo').length === 0 && (
              <p style={{ color: '#aaa', fontSize: 14 }}>Sem alunos ativos.</p>
            )}
          </div>
        </div>

        {/* Recent attendance */}
        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Presenças Recentes</h2>
          </div>
          <div className="panel-table-wrap">
            <table className="panel-table">
              <thead>
                <tr>
                  <th>Aluna</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[...attendance].reverse().slice(0, 8).map((a, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{a.studentName}</td>
                    <td style={{ fontSize: 13, color: '#777' }}>{a.date}</td>
                    <td>
                      <span className={`badge ${a.present ? 'badge-presente' : 'badge-ausente'}`}>
                        {a.present ? 'Presente' : 'Ausente'}
                      </span>
                    </td>
                  </tr>
                ))}
                {attendance.length === 0 && (
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', color: '#aaa', padding: 20 }}>
                      Nenhum registro de presença ainda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="panel-card mt-20">
        <div className="panel-card-header">
          <h2 className="panel-card-title">Ações Rápidas</h2>
        </div>
        <div className="panel-card-body" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/coordinator/alunos">
            <button className="btn-danger">👥 Gerenciar Alunos</button>
          </Link>
          <Link href="/coordinator/presencas">
            <button className="btn-primary">✅ Registrar Presença</button>
          </Link>
        </div>
      </div>
    </CoordinatorLayout>
  );
}
