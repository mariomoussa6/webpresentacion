# NovaDev - Sitio Web de Agencia de Desarrollo

Una página web moderna y responsiva para una agencia de desarrollo web, construida con React, Vite y Tailwind CSS.

## 🚀 Características

- **React 18** - Framework moderno de JavaScript
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas
- **React Hook Form** - Manejo de formularios
- **React Intersection Observer** - Animaciones en scroll
- **Lucide React** - Iconos modernos
- **Diseño Responsivo** - Optimizado para todos los dispositivos
- **SEO Optimizado** - Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- React 18.2
- Vite 4.5
- Tailwind CSS 3.3
- Framer Motion 10.16
- React Hook Form 7.48
- React Intersection Observer 9.5
- Lucide React 0.294

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/novadev-web.git
cd novadev-web
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗️ Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── AnimatedSection.jsx
│   ├── layout/             # Componentes de layout
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── sections/           # Secciones de la página
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── Portfolio.jsx
│       └── Contact.jsx
├── hooks/                  # Hooks personalizados
│   └── useScrollAnimation.js
├── styles/
│   └── index.css          # Estilos globales y Tailwind
├── App.jsx                # Componente principal
└── main.jsx              # Punto de entrada
```

## 🎨 Paleta de Colores

- **Primary**: `#667eea` → `#764ba2`
- **Accent**: `#ff6b6b` → `#4ecdc4`
- **Secondary**: `#45b7d1`
- **Gray Scale**: Tailwind defaults

## 🔧 Personalización

### Cambiar Colores
Edita el archivo `tailwind.config.js` en la sección `theme.extend.colors`.

### Modificar Animaciones
Las animaciones se pueden ajustar en:
- `tailwind.config.js` - Para animaciones CSS
- Componentes individuales - Para animaciones de Framer Motion

### Agregar Nuevas Secciones
1. Crear componente en `src/components/sections/`
2. Importar y agregar a `App.jsx`
3. Actualizar navegación en `Header.jsx`

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Optimizaciones de Performance

- **Code Splitting** automático con Vite
- **Lazy Loading** de imágenes
- **Animaciones optimizadas** con GPU
- **Bundle analysis** incluido
- **CSS purging** automático con Tailwind

## 🌐 SEO y Accesibilidad

- Meta tags optimizados
- Open Graph y Twitter Cards
- Estructura semántica HTML5
- Contrastes de color accesibles
- Navegación por teclado
- ARIA labels donde corresponde

## 🚀 Deploy

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### Vercel
```bash
npx vercel
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para usar carpeta dist/
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hola@novadev.com.ar
- **Website**: https://novadev.com.ar
- **GitHub**: https://github.com/novadev-agency

---

Hecho con ❤️ por el equipo de NovaDev