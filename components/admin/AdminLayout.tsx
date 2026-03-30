import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../styles/panel.css';

interface Props {
  children: React.ReactNode;
  title: string;
}

const NAV_ITEMS = [
  { href: '/admin',          label: 'Dashboard', icon: '📊' },
  { href: '/admin/projetos', label: 'Projetos',  icon: '📁' },
  { href: '/admin/alunos',   label: 'Alunos',    icon: '👥' },
];

export default function AdminLayout({ children, title }: Props) {
  const { pathname } = useRouter();

  return (
    <div className="panel-wrapper">
      <aside className="panel-sidebar admin-theme">
        <div className="panel-sidebar-header">
          <div>
            <div className="panel-logo-title">Instituto Gênesis</div>
            <div className="panel-logo-sub">Painel Admin</div>
          </div>
        </div>

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
