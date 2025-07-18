import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { 
      icon: Target,
      number: 150, 
      suffix: '+', 
      label: 'Proyectos Completados',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Users,
      number: 50, 
      suffix: '+', 
      label: 'Clientes Satisfechos',
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: Clock,
      number: 5, 
      suffix: '', 
      label: 'Años de Experiencia',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      icon: Award,
      number: 24, 
      suffix: '/7', 
      label: 'Soporte Técnico',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  // Counter animation hook
  const useCounter = (end, duration = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return count;
  };

  return (
    <section id="nosotros" className="section-padding bg-navy-800">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-8">
              <div>
                <h2 className="section-title text-left">
                  Innovación que Impulsa 
                  <span className="block text-gradient">Resultados</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mb-6"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  En <span className="font-semibold text-accent-400">NovaDev</span>, combinamos creatividad con tecnología de punta para crear soluciones digitales que trascienden las expectativas. Nuestro equipo de expertos trabaja incansablemente para transformar visiones en realidades digitales impactantes.
                </p>
                <p>
                  Cada proyecto es una oportunidad para innovar, optimizar y crear experiencias que conecten marcas con sus audiencias de manera significativa. Utilizamos las últimas tecnologías y metodologías ágiles para garantizar resultados excepcionales.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Metodología Ágil',
                  'Tecnologías Modernas',
                  'Diseño Responsivo',
                  'SEO Optimizado'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"></div>
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <AnimatedSection animation="fadeInRight" delay={0.2}>
            <div ref={ref} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const count = useCounter(stat.number, 2.5);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-navy-700/50 backdrop-blur-md p-6 rounded-2xl border border-accent-500/20 shadow-lg hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 text-center group"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Number */}
                    <div className="text-3xl font-bold text-white mb-2">
                      {inView ? count : 0}{stat.suffix}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Los principios que guían cada proyecto y nos permiten entregar resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovación',
                description: 'Siempre a la vanguardia de las últimas tecnologías y tendencias del desarrollo web.',
                emoji: '🚀'
              },
              {
                title: 'Calidad',
                description: 'Cada línea de código y cada pixel están cuidadosamente diseñados para la excelencia.',
                emoji: '⭐'
              },
              {
                title: 'Compromiso',
                description: 'Tu éxito es nuestro éxito. Trabajamos como tu equipo interno para lograr tus objetivos.',
                emoji: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-navy-700/30 backdrop-blur-md border border-accent-500/20 hover:bg-navy-600/40 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;