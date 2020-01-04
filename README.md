## 用途
利用 url 下载图片并将其转换为 base64。

## 过程
1. Ajax 下载图片，利用 URL.createObjectURL API 将响应创建为本地 blob 地址并赋给一个新建的 image 对象。
2. 利用 canvas 绘图 API 将图片绘制到画布，再利用 canvas 的 toDataURL API 将图片输出为 base64

## 兼容性

## 用法
```
const url = 'http://www.example.com/eg.jpg';
img2base64(url).then(function(imgBase64) {
  console.log('We did it!);
});
```