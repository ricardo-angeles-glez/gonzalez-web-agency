import { motion } from 'framer-motion'

const services = [
  {
    title: "Consultoría UX/UI",
    description: "Diseñamos experiencias de usuario intuitivas y atractivas que convierten visitantes en clientes."
  },
  {
    title: "Branding",
    description: "Desarrollamos identidades de marca sólidas que comunican tu valor único en el mercado."
  },
  {
    title: "Landing Pages con IA",
    description: "Creamos landing pages optimizadas y personalizadas en tiempo récord gracias a nuestra tecnología de IA."
  },
  {
    title: "E-commerce (Shopify)",
    description: "Implementamos tiendas online completas y fáciles de gestionar con Shopify."
  },
  {
    title: "Mantenimiento Web",
    description: "Mantenemos tu sitio web actualizado, seguro y funcionando perfectamente."
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

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nuestros Servicios
        </motion.h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}