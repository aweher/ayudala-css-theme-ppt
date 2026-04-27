/* ============================================================
   Ayuda.LA Reveal.js — lógica genérica del curso
   ============================================================
   Adapta el objeto MODULES con los títulos de tu presentación.
   La key es el valor de data-module en cada <section> horizontal.
   ============================================================ */

const MODULES = {
  0: 'Apertura',
  // 1: 'Módulo 1 · Título del módulo 1',
  // 2: 'Módulo 2 · Título del módulo 2',
  // 3: 'Módulo 3 · Título del módulo 3',
};

function updateBreadcrumb(event) {
  const slide = event && event.currentSlide ? event.currentSlide : Reveal.getCurrentSlide();
  if (!slide) return;
  let section = slide;
  let mod = section.getAttribute('data-module');
  if (!mod && section.parentElement && section.parentElement.tagName === 'SECTION') {
    mod = section.parentElement.getAttribute('data-module');
  }
  const crumb = document.querySelector('.course-footer .module-crumb');
  if (crumb) {
    crumb.textContent = MODULES[mod] || 'Apertura';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Reveal !== 'undefined') {
    Reveal.on('ready', updateBreadcrumb);
    Reveal.on('slidechanged', updateBreadcrumb);
  }
});
