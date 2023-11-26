document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in-section");
  
    const fadeIn = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const sectionObserver = new IntersectionObserver(fadeIn, {
      rootMargin: "0px 0px -150px 0px" // Adjust this value as needed
    });
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  });
  