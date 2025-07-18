import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Buenos Aires, Argentina',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 11 1234-5678',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hola@novadev.com.ar',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 9:00 - 18:00',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding hero-gradient">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¡Mensaje Enviado!
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Gracias por contactarnos. Te responderemos en las próximas 24 horas.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Enviar Otro Mensaje
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para Innovar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Transformemos tu visión en una realidad digital extraordinaria. 
            Contáctanos y descubre cómo podemos potenciar tu negocio.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Estamos aquí para ayudarte a hacer realidad tu próximo proyecto digital. 
                  No dudes en contactarnos por cualquier consulta.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-white/80">{item.content}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">¿Por qué elegirnos?</h4>
                <div className="space-y-2">
                  {[
                    'Consulta inicial gratuita',
                    'Presupuesto sin compromiso',
                    'Respuesta en 24 horas',
                    'Soporte continuo'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInRight" delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Cuéntanos tu proyecto</h3>
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { 
                    required: 'El nombre es obligatorio',
                    minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                  })}
                  className="input-field"
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm mt-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="input-field"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm mt-1"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="input-field"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-white font-medium mb-2">
                  Tipo de Proyecto *
                </label>
                <select
                  id="projectType"
                  {...register('projectType', { required: 'Selecciona un tipo de proyecto' })}
                  className="input-field"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Sitio Web</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app">Aplicación Móvil</option>
                  <option value="redesign">Rediseño</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="other">Otro</option>
                </select>
                {errors.projectType && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm mt-1"
                  >
                    {errors.projectType.message}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { 
                    required: 'El mensaje es obligatorio',
                    minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' }
                  })}
                  className="input-field resize-none"
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm mt-1"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-gradient-to-r from-accent-500 to-accent-400 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-accent-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;