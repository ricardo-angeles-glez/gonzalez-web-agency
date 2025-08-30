'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ]

  const handleSmoothScroll = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GONZALEZ<span className="accent-text">.</span>
          </motion.div>
          
          <nav className="desktop-nav">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSmoothScroll(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <motion.button 
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            
            <ul className="mobile-nav-list">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className="mobile-nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSmoothScroll(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}