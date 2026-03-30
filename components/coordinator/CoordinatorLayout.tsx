import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../styles/panel.css';

interface Props {
  children: React.ReactNode;
  title: string;
  projectName?: string;
}

const NAV_ITEMS = [
  { href: '/coordinator',            label: 'Dashboard', icon: '📊' },
  { href: '/coordinator/alunos',     label: 'Alunos',    icon: '👥' },
  { href: '/coordinator/presencas',  label: 'Presenças', icon: '✅' },
];

export default function CoordinatorLayout({ children, title, projectName }: Props) {
  const { pathname } = useRouter();

  return (
    <div className="panel-wrapper">
      <aside className="panel-sidebar coordinator-theme">
        <div className="panel-sidebar-header">
          <div>
            <div className="panel-logo-title">Instituto Gênesis</div>
            <div className="panel-logo-sub">Coordenador</div>
          </div>
        </div>

        {projectName && (
          <div className="panel-project-badge">
            <div className="panel-project-badge-label">Projeto</div>
            <div className="panel-project-badge-name">{projectName}</div>
          </div>
        )}

        <nav className="panel-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`panel-nav-item ${pathname === item.href ? 'active' : ''}`}
            >
              <span className="panel-nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="panel-sidebar-footer">
          <Link href="/" className="panel-back-link">← Voltar ao site</Link>
        </div>
      </aside>

      <div className="panel-main">
        <div className="panel-topbar">
          <h1 className="panel-page-title">{title}</h1>
        </div>
        <div className="panel-content">{children}</div>
      </div>
    </div>
  );
}
