document.addEventListener('DOMContentLoaded', () => {
  const slideTime = 5000;
  const slider = document.querySelector('#slider');
  const control1 = document.querySelector('#control-1');
  const control2 = document.querySelector('#control-2');

  const controls = [control1, control2];

  let index = 1;

  function slide() {
    if (index > 1) {
      index = 0;
    }

    const control = controls[index];

    control.checked = true;
    index++;
  }

  let sliderInterval = setInterval(slide, slideTime);

  slider.addEventListener('mouseover', () => {
    clearInterval(sliderInterval);
    sliderInterval = null;
  });

  slider.addEventListener('mouseout', () => {
    sliderInterval = setInterval(slide, slideTime);
  });
});