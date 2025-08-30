import { motion } from 'framer-motion'

const projects = [
  {
    title: "Tienda de Ropa Local",
    category: "E-commerce",
    description: "Implementación completa de Shopify con diseño personalizado"
  },
  {
    title: "Cafetería Artesanal",
    category: "Landing Page + Branding",
    description: "Diseño moderno y sistema de reservas integrado"
  },
  {
    title: "Restaurante Gourmet",
    category: "UX/UI + Web App",
    description: "Sistema de pedidos online con seguimiento en tiempo real"
  },
  {
    title: "Zapatería Familiar",
    category: "E-commerce + SEO",
    description: "Catálogo digital con más de 200 productos optimizado para buscadores"
  },
  {
    title: "Pastelería Creativa",
    category: "Branding + Web",
    description: "Identidad visual completa y tienda online para pedidos personalizados"
  },
  {
    title: "Boutique de Regalos",
    category: "Landing Page con IA",
    description: "Diseño generado con IA y integración con redes sociales"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nuestro Portafolio
        </motion.h2>
        
        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="portfolio-image">{index + 1}</div>
              <div className="portfolio-content">
                <div className="portfolio-category">{project.category}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}