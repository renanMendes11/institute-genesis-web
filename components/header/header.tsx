import Link from "next/link";
import "./header.css";
import Image from "next/image";

export default function Header() {
 
  const handleMenuToggle = () => {
    const nav = document.querySelector('.nav');
    if(!nav?.classList.contains('active')) {
      nav?.classList.toggle('active');
    }else {
      nav?.classList.remove('active');
    }
  }
  return (
  
    <header className="header">
      <div className="header-container">
          <Link href="/">
            <Image
                className="logo"
                src="/assets/logoheader.png"
                alt="Logo Instituto Gênesis"
                width={140}
                height={60}
                priority
              />
          </Link>
            
      </div>
      <div className="nav-container" onClick={handleMenuToggle}>
          <button className="menu-toggle" aria-label="Abrir menu">☰</button>
          <nav className="nav">
            <ul>
                <li><a href="./quem-somos">Quem somos</a></li>
                <li><a href="./projetos">Projetos</a></li>
                <li><a href="./contribua">Contribua</a></li>
          </ul>
          </nav>
      </div>
    </header>
  );
}
