import { motion } from 'framer-motion'

export default function Hero() {
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Diseño Digital <span className="accent-text">Impulsado por IA</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Creamos experiencias digitales excepcionales en tiempo récord para pequeñas y medianas empresas
        </motion.p>
        
        <motion.a 
          href="#contact"
          className="btn"
          onClick={(e) => {
            e.preventDefault()
            handleSmoothScroll('#contact')
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Impulsa tu negocio con IA
        </motion.a>
      </div>
    </section>
  )
}