import { motion } from 'framer-motion';
import { Rocket, Smartphone, ShoppingCart, Zap, Palette, Wrench } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Desarrollo Web Personalizado',
      description: 'Sitios web únicos diseñados específicamente para tu negocio, con tecnologías modernas y rendimiento optimizado.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas que brindan experiencias excepcionales en iOS y Android con diseño intuitivo.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Avanzado',
      description: 'Tiendas online completas con sistemas de pago seguros, gestión de inventario y análisis de ventas.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Optimización de Rendimiento',
      description: 'Mejoramos la velocidad y SEO de tu sitio web para maximizar conversiones y visibilidad en buscadores.',
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Diseño UX/UI',
      description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la retención.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento y Soporte',
      description: 'Actualizaciones continuas, respaldos automáticos y soporte técnico 24/7 para tu tranquilidad.',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <section id="servicios" className="section-padding navy-section">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones digitales completas para impulsar tu negocio hacia el éxito. 
            Cada servicio está diseñado para maximizar tu presencia online y generar resultados reales.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center h-full group">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos potenciar tu presencia digital
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Consulta Gratuita
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;