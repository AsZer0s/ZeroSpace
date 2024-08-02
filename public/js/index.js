const canvasEl = document.getElementById("bg");
StarrySky.init(canvasEl);
StarrySky.render();
StarrySky.setStarSpeedLevel(0.0005);
const avatar = document.querySelector('.avatar');
avatar.addEventListener('mouseover', function () {
  StarrySky.setStarSpeedLevel(0.008);
});
avatar.addEventListener('mouseout', function () {
  StarrySky.setStarSpeedLevel(0.0005);
});
