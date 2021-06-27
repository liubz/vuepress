/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "30e58a3821c2e1dbfab1d985020ab476"
  },
  {
    "url": "assets/css/0.styles.e5007594.css",
    "revision": "fe06dbad76ae52427069ce1fb687b72c"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.88bf304a.js",
    "revision": "f79079346e200f887428c09dda90c6fe"
  },
  {
    "url": "assets/js/11.30b54cb4.js",
    "revision": "8c4dbda081e0a938717ff86b91870c41"
  },
  {
    "url": "assets/js/12.1079dfaa.js",
    "revision": "84f658a8b3c9eb426fa1a119ec01e80d"
  },
  {
    "url": "assets/js/13.c2133e4c.js",
    "revision": "894bff51c07b0c3ad2d3f8dc0333e32a"
  },
  {
    "url": "assets/js/14.05c3b296.js",
    "revision": "f491e6d8a25cb8ba2e9e44134d20f887"
  },
  {
    "url": "assets/js/15.6cfa3be4.js",
    "revision": "abb225cd723c77f054a4ed91bc8c8e66"
  },
  {
    "url": "assets/js/16.ca0f4c0f.js",
    "revision": "966c9b61eb7a2795b2084b56aa9fa4b0"
  },
  {
    "url": "assets/js/17.80deff9b.js",
    "revision": "38160930c2cff250f074e153565152b1"
  },
  {
    "url": "assets/js/18.53321ce0.js",
    "revision": "ffe1e271c7976773d992ade7ef8b5a65"
  },
  {
    "url": "assets/js/19.3daed838.js",
    "revision": "ea943b589ce79b1aeaa435b3fac157ff"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.34123967.js",
    "revision": "50192bc5bc1c7c751789d08d541b0149"
  },
  {
    "url": "assets/js/21.e24b385c.js",
    "revision": "f937f19e5d72dbbc07617c1519f0ea24"
  },
  {
    "url": "assets/js/22.3e731693.js",
    "revision": "0b6e04886a69d4f0698b00943ef0272b"
  },
  {
    "url": "assets/js/23.5b3ff083.js",
    "revision": "80588b8bd218443ed8ae5431cc404865"
  },
  {
    "url": "assets/js/24.32816d47.js",
    "revision": "8e9f12ad64fb848fb09eff370d5fbbee"
  },
  {
    "url": "assets/js/25.56f8e1ec.js",
    "revision": "8deb03497fbc0906034ef5898f599efd"
  },
  {
    "url": "assets/js/26.a09b1d80.js",
    "revision": "ea43f793e75775b0007055590871fe6b"
  },
  {
    "url": "assets/js/27.22b5cf2e.js",
    "revision": "66392222318fa7c79fa494f50e88a720"
  },
  {
    "url": "assets/js/28.6bd9a00d.js",
    "revision": "37c13697c35095b616f68eb46ed0a1ea"
  },
  {
    "url": "assets/js/29.f5750487.js",
    "revision": "4bfc482ea58e65e7b0b60aa550b91524"
  },
  {
    "url": "assets/js/3.9eb19156.js",
    "revision": "c36abbfe274080a8dd9ced045f02de9a"
  },
  {
    "url": "assets/js/30.fc15bf7c.js",
    "revision": "7016ff6807ad1cce51cc929f0406048d"
  },
  {
    "url": "assets/js/31.22a4eda3.js",
    "revision": "6db0886c18fb2e3c48c05fc998fcc31f"
  },
  {
    "url": "assets/js/32.bd2edf29.js",
    "revision": "53915a85d0b37af8948b7937092cffa5"
  },
  {
    "url": "assets/js/33.c361c12a.js",
    "revision": "9ee324f44a23a22bce055d30407c5bad"
  },
  {
    "url": "assets/js/34.59b49b25.js",
    "revision": "6c3f0770a6a04eabfeb7801c8d67c9cd"
  },
  {
    "url": "assets/js/35.5331b34c.js",
    "revision": "9f161a31a524a5184ebd0619c31a0d1f"
  },
  {
    "url": "assets/js/36.da444dc2.js",
    "revision": "20bbf44928ae7a83f9b8d50ba25f3b39"
  },
  {
    "url": "assets/js/37.49f00be8.js",
    "revision": "2d107ba9b1dc072f973d4980952cfb44"
  },
  {
    "url": "assets/js/38.7a0a24e0.js",
    "revision": "8cf22d7bae919a78db2d365f1d40f9e2"
  },
  {
    "url": "assets/js/39.8d232676.js",
    "revision": "9aa630e1ff7c506cd8a5fa6930517e45"
  },
  {
    "url": "assets/js/4.ea6ae4c0.js",
    "revision": "e4623755468fc26f34c143f930f3cc7f"
  },
  {
    "url": "assets/js/40.7d925103.js",
    "revision": "c50ee147c15e3eeddf8dbf95f7f9cc68"
  },
  {
    "url": "assets/js/41.d8d89063.js",
    "revision": "a782d6db131640210cc0b5d99fe9dd68"
  },
  {
    "url": "assets/js/42.3122b6ac.js",
    "revision": "984d945cca27d82c2505c8052fec87af"
  },
  {
    "url": "assets/js/43.484a5a30.js",
    "revision": "d0d730d05ca33cc47468918e3e3d27ef"
  },
  {
    "url": "assets/js/44.635fa0c3.js",
    "revision": "9fd2330b490c61074742efe78cae39eb"
  },
  {
    "url": "assets/js/45.ef30756d.js",
    "revision": "49660a1f2a35778ce2be657011e5f096"
  },
  {
    "url": "assets/js/5.666cc2e3.js",
    "revision": "71fc04b77ff27861aeb5436fa59ddea6"
  },
  {
    "url": "assets/js/6.9e417b4d.js",
    "revision": "78618a7eaeda07d6e6f0e81d59b08fd4"
  },
  {
    "url": "assets/js/7.32e5833a.js",
    "revision": "3d0f98617749fa9d418f171c77c8ea47"
  },
  {
    "url": "assets/js/8.ac022a0c.js",
    "revision": "d00ebcc07062d7aaa701e05113079e97"
  },
  {
    "url": "assets/js/9.882e625c.js",
    "revision": "2b73b22baf14e1e662965da3aaf76e8b"
  },
  {
    "url": "assets/js/app.3d754e30.js",
    "revision": "a6417e126042fc29c0aa843493e28082"
  },
  {
    "url": "config/index.html",
    "revision": "e30879cd9cb15a0b9c6d23f8a051ce45"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f4609e89b81f4038c1b8944e3511b83a"
  },
  {
    "url": "guide/assets.html",
    "revision": "453bb28df53b09f55b2915c625982057"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9a1be5c997f40c0b103f6a71bf2c4309"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "21e75d967b077b31dbca0615be309ef4"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8e83703df77ef0cd97a9a30276f22680"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9f799a086e14d5eb14f198b8b55c6f4e"
  },
  {
    "url": "guide/i18n.html",
    "revision": "e3a6fa5eb31d3522ab0a0dfa44bfde26"
  },
  {
    "url": "guide/index.html",
    "revision": "28ecfdecc7cb50aceb510cbc0e60e0e1"
  },
  {
    "url": "guide/markdown.html",
    "revision": "53a29dfd46ed42cbb4cb2fe07b42e8fb"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "6c12acadebe2985c8ff55e1a1c537e2b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "img/1546010431.png",
    "revision": "fd1a953299af1752ecc2b68d969ec6e5"
  },
  {
    "url": "img/1546011014.png",
    "revision": "7ec3e82654155489fcb547f105f4bc13"
  },
  {
    "url": "img/1546011061.png",
    "revision": "fc314065da4542c0773197c7a10a20aa"
  },
  {
    "url": "img/1546012885.png",
    "revision": "e271ba041d8034ed7a7cef4d0741133c"
  },
  {
    "url": "img/1575920682-5aa8738170650.png",
    "revision": "30b160e339e6cc64f98ddcecdf9d8e8c"
  },
  {
    "url": "img/1867034-18c70f637b5c01c2.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "img/1867034-d1537e355abdd298.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "img/20200526154028.png",
    "revision": "cf37ba444ecafc96aa2e41cb584bee20"
  },
  {
    "url": "img/20200607170604.jpg",
    "revision": "7e5c65c4e00d6c0fcc33f343ead447bb"
  },
  {
    "url": "img/261939139273322.png",
    "revision": "ca6f2f563ccbe1718725f42f7f1e651b"
  },
  {
    "url": "img/4820992-82913323252fde95.png",
    "revision": "dfa7f279ae9859e1036208e99083efd0"
  },
  {
    "url": "img/bubbleSort.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "img/css3.png",
    "revision": "d84ec90d893d780247c997f512a93302"
  },
  {
    "url": "img/flex_20190423115618.jpg",
    "revision": "61e91543150db09748e302620d49304c"
  },
  {
    "url": "img/mvvm.png",
    "revision": "9ad547ad07a20db703b49652ee334840"
  },
  {
    "url": "img/scope-a-defined.png",
    "revision": "1c1192b5346a2498fbfe7cfe9b899487"
  },
  {
    "url": "img/scope-a-doing.png",
    "revision": "6801cedcb9d6e92d19395f7c5827d731"
  },
  {
    "url": "img/scope-b-defined.png",
    "revision": "9f0f4051983fd4d52ef231e432521b2a"
  },
  {
    "url": "img/scope-b-doing.png",
    "revision": "1eca6bb9916fb90aa032b60488ac1d1c"
  },
  {
    "url": "img/selectionSort.gif",
    "revision": "1c7e20f306ddc02eb4e3a50fa7817ff4"
  },
  {
    "url": "img/stack.png",
    "revision": "aa701355cf7ef69b4f3a25904935a7c1"
  },
  {
    "url": "index.html",
    "revision": "acc2d265e60d1b3cf42f98e3f9f4e4b9"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "web/BOM.html",
    "revision": "543725d06b121f59685a6dead2353701"
  },
  {
    "url": "web/console.html",
    "revision": "28fec6bd3952ca067c9d59191c5427d1"
  },
  {
    "url": "web/css.html",
    "revision": "c40580bde09c12173b74302f804fee95"
  },
  {
    "url": "web/data-structure.html",
    "revision": "1351a79c67f574bae49774ce5fea96f9"
  },
  {
    "url": "web/git.html",
    "revision": "7bb058d0f96122b2f8739abdffd55d2b"
  },
  {
    "url": "web/HTTP.html",
    "revision": "4a72cea002d18d851972a21b89f6c683"
  },
  {
    "url": "web/index.html",
    "revision": "dc8ff65419b181056bdaa671a20912f1"
  },
  {
    "url": "web/JavaScript.html",
    "revision": "42f6be0089fcf3e6845755651e9ed325"
  },
  {
    "url": "web/mobile.html",
    "revision": "883a9dd485152499cf3387cbf8c1c6d4"
  },
  {
    "url": "web/mode.html",
    "revision": "c15e8a4b723c48289d2619229203ca02"
  },
  {
    "url": "web/model.html",
    "revision": "34b16a765a11ef64117522140efcf5bb"
  },
  {
    "url": "web/MongoDB.html",
    "revision": "47daf7f3b5d79139eda854cfa97206e8"
  },
  {
    "url": "web/test.html",
    "revision": "e1c880f56f021c33ad02a162d5da4fd1"
  },
  {
    "url": "web/webpack.html",
    "revision": "94eb06da66925ec130228335a6fcd48d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0f90ec8e4662574e8473a30d859e9cd7"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "938fdbad40ad7896ea201b89a4ddbf44"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "9c5ece8da6416a7ef20587ab16f95904"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "9649babcb4c91f001efce5935ec62737"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "d6c6a14a9b91e40718aa536982e6fea2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d70405455f561577c8b4d1ed28fb70fc"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "333365340b9aaaa193ecfd3b7e0e991a"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "69d2208592a58fed00a0c1d85e80fa42"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b25f4140512b47785b73de0078aab783"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "521c8179348b2b5379e88eddae7490ae"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "088d39908c832309d50ae6653924be98"
  },
  {
    "url": "zh/index.html",
    "revision": "21ba9f7d00520329bff9fc9cb87cada9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
