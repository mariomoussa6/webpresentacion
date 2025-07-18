import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Building, Smartphone } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStore Online',
      category: 'E-commerce',
      description: 'Tienda online completa con gestión de inventario, pagos seguros y panel administrativo avanzado.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-500 to-purple-600',
      icon: ShoppingCart
    },
    {
      id: 2,
      title: 'Constructora Premium',
      category: 'Corporativo',
      description: 'Sitio web corporativo con sistema de proyectos, blog y formularios de contacto avanzados.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Tailwind', 'Sanity CMS'],
      color: 'from-emerald-500 to-teal-600',
      icon: Building
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      category: 'App Móvil',
      description: 'Aplicación móvil para seguimiento de ejercicios con sincronización en tiempo real y analytics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      color: 'from-orange-500 to-red-600',
      icon: Smartphone
    },
    {
      id: 4,
      title: 'Restaurant Manager',
      category: 'SaaS',
      description: 'Sistema de gestión integral para restaurantes con reservas, pedidos y análisis de ventas.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      color: 'from-purple-500 to-pink-600',
      icon: Building
    },
    {
      id: 5,
      title: 'Learning Platform',
      category: 'Educación',
      description: 'Plataforma de aprendizaje online con cursos interactivos, progreso de estudiantes y certificaciones.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      color: 'from-indigo-500 to-blue-600',
      icon: Building
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      category: 'Inmobiliaria',
      description: 'Portal inmobiliario con búsqueda avanzada, tours virtuales y sistema de leads automatizado.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Nuxt.js', 'Strapi', 'Mapbox'],
      color: 'from-green-500 to-emerald-600',
      icon: Building
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
    <section id="portfolio" className="section-padding navy-section">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">Portfolio de Proyectos</h2>
          <p className="section-subtitle">
            Explora algunos de nuestros trabajos más destacados. Cada proyecto refleja nuestro 
            compromiso con la excelencia y la innovación en el desarrollo web.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="bg-navy-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-accent-500/20 shadow-lg hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-accent-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-500/30 transition-colors duration-200"
                          >
                            <ExternalLink size={18} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-accent-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-500/30 transition-colors duration-200"
                          >
                            <Github size={18} />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-navy-700/60 text-gray-300 text-sm rounded-full font-medium hover:bg-accent-500/20 hover:text-accent-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Cuéntanos tu idea y la convertiremos en una realidad digital extraordinaria
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Discutir Mi Proyecto
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;