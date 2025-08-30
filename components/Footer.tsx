export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">GONZALEZ Web Agency</h3>
            <p style={{ color: '#ccc', marginBottom: '1rem' }}>
              Diseño digital impulsado por IA para pequeñas y medianas empresas.
            </p>
          </div>
          
          <div>
            <h3 className="footer-title">Enlaces rápidos</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#services">Servicios</a></li>
              <li className="footer-link"><a href="#portfolio">Portafolio</a></li>
              <li className="footer-link"><a href="#testimonials">Testimonios</a></li>
              <li className="footer-link"><a href="#about">Nosotros</a></li>
              <li className="footer-link"><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Contacto</h3>
            <address style={{ color: '#ccc', fontStyle: 'normal' }}>
              <p>email: info@gonzalezagency.com</p>
              <p style={{ marginTop: '0.5rem' }}>tel: +1 234 567 8900</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GONZALEZ Web Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}