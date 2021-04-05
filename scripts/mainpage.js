const data = {
  gifs: [
    { "url": "./gifs/1.gif" },
    { "url": "./gifs/2.gif" },
    { "url": "./gifs/3.gif" },
    { "url": "./gifs/4.gif" },
    { "url": "./gifs/5.gif" },
    { "url": "./gifs/6.gif" },
    { "url": "./gifs/7.gif" },
    { "url": "./gifs/8.gif" },
    { "url": "./gifs/9.gif" },
    { "url": "./gifs/10.gif" },
    { "url": "./gifs/11.gif" },
    { "url": "./gifs/12.gif" },
    { "url": "./gifs/13.gif" },
  ]
}

var app = new Vue({
  el: '#app',
  data: {
    randImgUrl: (data.gifs[Math.floor(Math.random() * data.gifs.length)].url)
  }
})