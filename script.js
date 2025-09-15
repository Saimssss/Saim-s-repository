const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");
let index = 0;

// actualizar el desplazamiento del slider
function updateSlider() {
  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  // 🔑 Actualizar indicadores
  indicators.forEach(dot => dot.classList.remove("active"));
  indicators[index].classList.add("active");
}

// mover a la diapositiva anterior
prev.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : slides.children.length - 1;
  updateSlider();
});

// mover a la diapositiva siguiente
next.addEventListener("click", () => {
  index = (index < slides.children.length - 1) ? index + 1 : 0;
  updateSlider();
});

// permitir click en los indicadores
indicators.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// ajustar al cambiar el tamaño de la ventana
window.addEventListener("resize", updateSlider);
