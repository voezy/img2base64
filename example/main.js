const img2base64 = require('../src/index');

const testBtn = document.querySelector('#test');

testBtn && testBtn.addEventListener('click', function() {
  const url = document.querySelector('#url').value;
  const img = document.querySelector('#example');
  const p = document.querySelector('#base64');
  img2base64(url)
  .then(function(base64) {
    img.src = base64;
    p.innerHTML = base64;
  })
  .catch(function(e) {
    console.log(e);
  });
});