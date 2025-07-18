import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', href: '#servicios' },
        { name: 'Aplicaciones Móviles', href: '#servicios' },
        { name: 'E-commerce', href: '#servicios' },
        { name: 'Diseño UX/UI', href: '#servicios' },
        { name: 'Mantenimiento', href: '#servicios' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#' },
        { name: 'Testimonios', href: '#' },
        { name: 'Carrera', href: '#' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Contacto', href: '#contacto' },
        { name: 'FAQ', href: '#' },
        { name: 'Documentación', href: '#' },
        { name: 'Estado del Servicio', href: '#' },
        { name: 'Términos de Uso', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  const backgroundPatternStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    backgroundRepeat: 'repeat'
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={backgroundPatternStyle}></div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent mb-4">
                  NovaDev
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Transformamos ideas en experiencias digitales extraordinarias. 
                  Innovación, calidad y resultados garantizados para tu negocio.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={18} className="text-accent-400 flex-shrink-0" />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={18} className="text-accent-400 flex-shrink-0" />
                    <span>+54 11 1234-5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={18} className="text-accent-400 flex-shrink-0" />
                    <span>hola@novadev.com.ar</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-accent-400">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="max-w-md">
              <h4 className="text-lg font-semibold mb-4 text-accent-400">
                Newsletter
              </h4>
              <p className="text-gray-300 mb-4">
                Mantente actualizado con nuestras últimas noticias y proyectos
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Tu email..."
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent-400 focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-400 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Suscribirse
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto container-padding py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>&copy; 2025 NovaDev. Todos los derechos reservados.</span>
                <span className="hidden sm:inline">|</span>
                <div className="hidden sm:flex items-center gap-1">
                  <span>Hecho con</span>
                  <Heart size={16} className="text-red-500" />
                  <span>en Argentina</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;