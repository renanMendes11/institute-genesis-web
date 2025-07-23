import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
  
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <h2>Instituto Gênesis</h2>
        <p>Promovendo educação, acolhimento e transformação social.</p>
      </div>

      <div className="footer-links">
        <h3>Institucional</h3>
        <ul>
          <li><Link href="/quem-somos">Sobre</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/contribua">Contribua</Link></li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Redes sociais</h3>
        <div className="social-icons">
          <a href="https://instagram.com/somosgenesis" target="_blank">Instagram</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 Instituto Gênesis. Todos os direitos reservados.</p>
    </div>
</footer>

  );
}