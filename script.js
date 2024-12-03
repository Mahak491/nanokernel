document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-up'); // Add this class to your content sections
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fadeInUp');
      }, index * 200);
    });
  });