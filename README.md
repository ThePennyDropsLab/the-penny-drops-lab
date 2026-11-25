# The Penny Drops Lab — blog

Blog de divulgación de ingeniería e IA, hecho **a mano con HTML5, CSS3 y JavaScript** (sin frameworks ni build).
Actividad 1 de *Desarrollo de Aplicaciones en Red* (UNIR) — autor: **David Rojas**.

## 🔗 Enlaces
- **Sitio publicado:** <https://thepennydropslab.github.io/the-penny-drops-lab/>
- **Repositorio:** <https://github.com/ThePennyDropsLab/the-penny-drops-lab>

## ✨ Qué incluye
- **4 páginas** navegables: inicio, 3 entradas completas y una página "Sobre".
- **Diseño responsive** (móvil → escritorio) con tema oscuro cinematográfico.
- **Interactividad en JavaScript:** modo claro/oscuro persistente (`localStorage`), menú móvil, animación de scroll-reveal y barra de progreso de lectura.
- **Imágenes propias en SVG** (logo, portada de cada entrada, avatar) — ligeras y nítidas.
- **CSS a mano:** variables de diseño, grid, `@keyframes` (la moneda que cae) y `prefers-reduced-motion`.

## 📁 Estructura
```
blog-penny-drops/
├── index.html                      # Inicio + rejilla de entradas
├── about.html                      # Sobre
├── posts/
│   ├── automatizar-informe-con-ia.html
│   ├── como-funciona-una-base-de-datos.html
│   └── canal-con-mi-voz.html
├── css/style.css                   # Estilos (sin frameworks)
├── js/main.js                      # Interactividad (vanilla JS)
└── assets/                         # Imágenes SVG
```

## ▶️ Verlo en local
Al no tener build, basta con abrir `index.html` en el navegador, o servirlo:
```bash
python3 -m http.server 8080
# luego abre http://localhost:8080
```

## 🚀 Desplegar en GitHub Pages
Ver `DESPLIEGUE.md`.

---
Hecho con la asistencia de IA (Claude) para el andamiaje y el diseño; contenido, criterio y revisión, de David Rojas.
