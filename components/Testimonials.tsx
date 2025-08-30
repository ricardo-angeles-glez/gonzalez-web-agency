import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}