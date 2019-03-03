const svgPath = document.querySelectorAll('.path');

const svgText = anime({
  targets: svgPath,
  loop: false,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInSine',
  duration: 700,
  delay: (el, i) => { return i * 500 }
});