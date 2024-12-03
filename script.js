document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-up'); 
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fadeInUp');
      }, index * 200);
    });
  });