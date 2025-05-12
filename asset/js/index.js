document.getElementById('year').textContent = new Date().getFullYear();

function scroll_listener() {

  let scrollPosition = window.scrollY;
  
  const aside = document.getElementById("aside");

  let newTop = scrollPosition + (window.innerHeight / 2 - aside.offsetHeight / 2);

  const section = document.getElementById("section");
  const sectionRect = section.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionBottom = sectionRect.bottom + window.scrollY;
  
  const minTop = sectionTop;
  const maxTop = sectionBottom - aside.offsetHeight;
  
  newTop = Math.max(minTop, Math.min(newTop, maxTop));
  
  aside.style.top = newTop + "px";
}

window.addEventListener("scroll", scroll_listener);

// Código JavaScript para agregar y quitar la clase highlight
document.querySelectorAll("#aside a").forEach(link => {
  link.addEventListener("click", function() {
    const targetId = this.getAttribute("href").substring(1);
    const targetElem = document.getElementById(targetId);
    
    if (targetElem) {
      targetElem.classList.add("highlight");
      setTimeout(() => {
        targetElem.classList.remove("highlight");
      }, 500);
    }
  });
});

