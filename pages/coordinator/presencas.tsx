import { useState } from 'react';
import CoordinatorLayout from '@/components/coordinator/CoordinatorLayout';
import { MOCK_STUDENTS, MOCK_ATTENDANCE, AttendanceRecord } from '@/data/mockData';

const COORD_PROJECT_ID   = 1;
const COORD_PROJECT_NAME = 'Escola de Ballet';

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

export default function CoordinatorPresencas() {
  const projectStudents = MOCK_STUDENTS.filter(
    (s) => s.projectId === COORD_PROJECT_ID && s.status === 'Ativo',
  );

  const [allAttendance, setAllAttendance] = useState<AttendanceRecord[]>(MOCK_ATTENDANCE);
  const [selectedDate, setSelectedDate]  = useState(todayStr());

  // Build the "register" panel: for each active student, present/absent for selectedDate
  const existingForDate = allAttendance.filter(
    (a) => a.projectId === COORD_PROJECT_ID && a.date === selectedDate,
  );

  const initialChecks = () =>
    Object.fromEntries(
      projectStudents.map((s) => {
        const existing = existingForDate.find((a) => a.studentId === s.id);
        return [s.id, existing ? existing.present : true];
      }),
    );

  const [checks, setChecks]     = useState<Record<number, boolean>>(initialChecks);
  const [saved, setSaved]       = useState(false);
  const [filterDate, setFilterDate] = useState('');

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSaved(false);
    const existing = allAttendance.filter(
      (a) => a.projectId === COORD_PROJECT_ID && a.date === date,
    );
    setChecks(
      Object.fromEntries(
        projectStudents.map((s) => {
          const rec = existing.find((a) => a.studentId === s.id);
          return [s.id, rec ? rec.present : true];
        }),
      ),
    );
  };

  const handleSave = () => {
    setAllAttendance((prev) => {
      // Remove existing records for this date + project
      const cleaned = prev.filter(
        (a) => !(a.projectId === COORD_PROJECT_ID && a.date === selectedDate),
      );
      const maxId = Math.max(0, ...prev.map((a) => a.id));
      const newRecords: AttendanceRecord[] = projectStudents.map((s, i) => ({
        id: maxId + i + 1,
        studentId:   s.id,
        studentName: s.name,
        projectId:   COORD_PROJECT_ID,
        date:        selectedDate,
        present:     checks[s.id] ?? true,
      }));
      return [...cleaned, ...newRecords];
    });
    setSaved(true);
  };

  // History: unique dates with summary
  const projectAttendance = allAttendance.filter((a) => a.projectId === COORD_PROJECT_ID);
  const dates = [...new Set(projectAttendance.map((a) => a.date))].sort().reverse();

  const filteredDates = filterDate
    ? dates.filter((d) => d === filterDate)
    : dates;

  const presentCount = projectStudents.filter((s) => checks[s.id]).length;
  const totalCount   = projectStudents.length;

  return (
    <CoordinatorLayout title="Presenças" projectName={COORD_PROJECT_NAME}>
      <div className="grid-2" style={{ alignItems: 'start' }}>

        {/* Left: Register attendance */}
        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Registrar Presença</h2>
          </div>
          <div className="panel-card-body">
            <div className="form-group">
              <label className="form-label">Data da aula</label>
              <input
                className="form-control"
                type="date"
                value={selectedDate}
                max={todayStr()}
                onChange={(e) => handleDateChange(e.target.value)}
              />
            </div>

            <div
              style={{
                background: '#f7f8fa',
                borderRadius: 8,
                padding: '14px 16px',
                marginBottom: 16,
                fontSize: 13,
                color: '#555',
              }}
            >
              <strong style={{ color: '#2D3359' }}>{presentCount}</strong> de{' '}
              <strong style={{ color: '#2D3359' }}>{totalCount}</strong> alunas presentes
              {totalCount > 0 && (
                <span style={{ marginLeft: 8, color: '#888' }}>
                  ({Math.round((presentCount / totalCount) * 100)}%)
                </span>
              )}
            </div>

            {projectStudents.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-icon">👤</div>
                <div className="empty-state-text">Nenhuma aluna ativa neste projeto.</div>
              </div>
            )}

            {projectStudents.map((s) => (
              <div key={s.id} className="attendance-row">
                <input
                  className="attendance-checkbox"
                  type="checkbox"
                  id={`check-${s.id}`}
                  checked={checks[s.id] ?? true}
                  onChange={(e) =>
                    setChecks((prev) => ({ ...prev, [s.id]: e.target.checked }))
                  }
                />
                <label className="attendance-name" htmlFor={`check-${s.id}`}>
                  {s.name}
                </label>
                <span
                  className={`badge ${checks[s.id] ? 'badge-presente' : 'badge-ausente'}`}
                  style={{ fontSize: 11 }}
                >
                  {checks[s.id] ? 'Presente' : 'Ausente'}
                </span>
              </div>
            ))}

            {projectStudents.length > 0 && (
              <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
                <button className="btn-primary" onClick={handleSave}>
                  💾 Salvar Presença
                </button>
                {saved && (
                  <span style={{ color: '#27a96c', fontSize: 13, fontWeight: 600 }}>
                    ✓ Salvo com sucesso!
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: Attendance history */}
        <div className="panel-card">
          <div className="panel-card-header">
            <h2 className="panel-card-title">Histórico de Presenças</h2>
            <input
              className="form-control"
              type="date"
              style={{ width: 160 }}
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              placeholder="Filtrar por data"
            />
          </div>

          {filteredDates.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📅</div>
              <div className="empty-state-text">Nenhum registro encontrado.</div>
            </div>
          ) : (
            filteredDates.map((date) => {
              const recs     = projectAttendance.filter((a) => a.date === date);
              const present  = recs.filter((a) => a.present).length;
              const pct      = recs.length > 0 ? Math.round((present / recs.length) * 100) : 0;
              return (
                <div key={date} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <div
                    style={{
                      padding: '12px 22px 8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{date}</span>
                      <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>
                        {present}/{recs.length} presentes
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: pct >= 75 ? '#27a96c' : '#700202',
                      }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div className="panel-table-wrap">
                    <table className="panel-table">
                      <thead>
                        <tr>
                          <th>Aluna</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recs.map((r) => (
                          <tr key={r.id}>
                            <td style={{ fontSize: 13 }}>{r.studentName}</td>
                            <td>
                              <span className={`badge ${r.present ? 'badge-presente' : 'badge-ausente'}`}>
                                {r.present ? 'Presente' : 'Ausente'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </CoordinatorLayout>
  );
}
