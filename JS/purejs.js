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
  
    window.addEventListener('resize', updatejsSlide);
    updatejsSlide();
  });