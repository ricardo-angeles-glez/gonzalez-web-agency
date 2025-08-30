const testimonials = [
  {
    name: "María López",
    company: "Dulces María",
    text: "GONZALEZ Web Agency transformó completamente mi negocio. En solo dos semanas tenía una tienda online profesional que ha duplicado mis ventas."
  },
  {
    name: "Carlos Rodríguez",
    company: "Café Aroma",
    text: "La landing page que crearon con su tecnología de IA es impresionante. Atrae clientes y comunica perfectamente nuestra esencia."
  },
  {
    name: "Ana Martínez",
    company: "Boutique Elegance",
    text: "El proceso fue rápido y los resultados superaron mis expectativas. Ahora tengo una presencia online que realmente representa la calidad de mis productos."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title text-center">Lo que dicen nuestros clientes</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card fade-in delay-${index % 3}`}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}