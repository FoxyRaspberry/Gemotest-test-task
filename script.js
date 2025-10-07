document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const offset = 3;
  const mobileWrapperWidth = 256;

  // Calculations
  const [container] = document.getElementsByClassName('medical-services__service-card-container');
  const [firstCard] = document.getElementsByClassName('medical-services__service-card');
  const maxOffset = calculateMaxOffset(container);

  // Animation
  let firstCardMarginLeft = 0;
  setInterval(() => {
    firstCardMarginLeft -= offset;
    if (firstCardMarginLeft <= -maxOffset) {
      firstCardMarginLeft = 0;
    }
    firstCard.style.marginLeft = `${firstCardMarginLeft}px`;
  }, 100);

  function calculateMaxOffset(container) {
    const containerWidth = container.clientWidth;
    return containerWidth - mobileWrapperWidth;
  }
});
