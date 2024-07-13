document.addEventListener('DOMContentLoaded', function() {
    const jsSlideContainer = document.querySelector('.jsSlider-container');
    const slides = document.querySelectorAll('.jsSlider-slide');
    const prevButton = document.querySelector('.jsSlider-button-prev');
    const nextButton = document.querySelector('.jsSlider-button-next');
    let currentIndex = 0;
  
    function updatejsSlide() {
      const slideWidth = slides[0].clientWidth;
      jsSlideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
      updatejsSlide();
    });
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
      updatejsSlide();
    });
    document.addEventListener('keydown', function(event) {
      switch(event.key) {
          case 'ArrowLeft':
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updatejsSlide();
              break;
          case 'ArrowRight':
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updatejsSlide();
              break;
          default:
              break;
      }
  });
  
    window.addEventListener('resize', updatejsSlide);
    updatejsSlide();
  });