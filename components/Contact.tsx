'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title text-center">Contáctanos</h2>
        
        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <h3 className="contact-title">¿Listo para impulsar tu negocio?</h3>
              <p className="contact-description">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para discutir cómo podemos ayudarte a alcanzar tus objetivos digitales.
              </p>
            </div>
            
            <a href="#" className="btn" style={{ marginBottom: '1rem', display: 'block' }}>
              Agenda una asesoría gratuita
            </a>
            
            <p className="contact-description" style={{ fontSize: '0.875rem' }}>
              Sin compromisos, solo ideas valiosas para hacer crecer tu negocio.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="fade-in">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="btn" style={{ width: '100%', backgroundColor: '#1a1a1a' }}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}