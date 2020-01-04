function getImgBase64(img, outputFormat = 'image/jpg') {
  let canvas = document.createElement('CANVAS');
  const ctx = canvas.getContext('2d');

  canvas.height = img.height;
  canvas.width = img.width;
  ctx.drawImage(img, 0, 0);
  const dataUrl = canvas.toDataURL(outputFormat);
  canvas = null;

  return dataUrl;
};

module.exports = function processUrl(imgUrl) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onerror = (e) => {
      reject(e);
    };
    xhr.onload = () => {
      const objectUrl = URL.createObjectURL(xhr.response);
      const img = new Image();
      img.setAttribute("crossOrigin",'Anonymous');
      img.onerror = (e) => {
        reject(e);
      };
      img.onload = () =>  {
        resolve(getImgBase64(img));
        URL.revokeObjectURL(objectUrl);
      };
      img.src = imgUrl;
    };
    xhr.open('GET', imgUrl, true);
    xhr.send();
  });
};