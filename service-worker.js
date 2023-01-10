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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c42fa676aa34a92a69297f88a131327e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.49ec13d0.css",
    "revision": "b956064276122139c5041c20a821752f"
  },
  {
    "url": "assets/img/createTaskInput.f977c275.png",
    "revision": "f977c2754b0d572f7b1046eddf2c9517"
  },
  {
    "url": "assets/img/createTaskOutput.fda94da6.png",
    "revision": "fda94da621bcd16e8e6119f733d97504"
  },
  {
    "url": "assets/img/deleteTaskInput.690e6f41.png",
    "revision": "690e6f414a259204a4460e5025e9c7cf"
  },
  {
    "url": "assets/img/deleteTaskOutput.4e2699c3.png",
    "revision": "4e2699c32016835c1d3e3e89cbb491ec"
  },
  {
    "url": "assets/img/getAllTasks.7a2b0cfc.png",
    "revision": "7a2b0cfcbeb6f188924092ac68ab1080"
  },
  {
    "url": "assets/img/getTaskByDate.ad1c71f9.png",
    "revision": "ad1c71f9cd7eef4a6dd79e33e2cef19c"
  },
  {
    "url": "assets/img/getTaskByID.0cf512a2.png",
    "revision": "0cf512a2af515753e77aa8a6999448b8"
  },
  {
    "url": "assets/img/getTaskWithNoDate.6aa58029.png",
    "revision": "6aa5802946e826375fdfc170ee00b87f"
  },
  {
    "url": "assets/img/getTaskWithNoID.34b1f416.png",
    "revision": "34b1f416283dfab237b58c0f2e2c8bac"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updateTaskInput.7d08b5eb.png",
    "revision": "7d08b5eb5192fb84edac466e40b18062"
  },
  {
    "url": "assets/img/updateTaskoOutput.a75e0eae.png",
    "revision": "a75e0eae1a111bda1de297d44f9adbdf"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.867d6bf2.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.f2c9e40d.js",
    "revision": "ce486e5afa51e440295da51ab01cf9e1"
  },
  {
    "url": "assets/js/14.c4e924d0.js",
    "revision": "a5fa3be4087ea846ea72c874302fffe7"
  },
  {
    "url": "assets/js/15.3f39b9ff.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.3d9624ee.js",
    "revision": "08debb62fd91f0c6b740bd753dec2471"
  },
  {
    "url": "assets/js/17.46e489ad.js",
    "revision": "f17064642363b2d0bd03f649a4e7a7d3"
  },
  {
    "url": "assets/js/18.ccad545d.js",
    "revision": "ec9e257e4f8a40e33d5d7ad93db89f52"
  },
  {
    "url": "assets/js/19.3901d4bf.js",
    "revision": "af98ec083ee23ee73cdd8a4d08893f10"
  },
  {
    "url": "assets/js/2.759216fb.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.1ea3a510.js",
    "revision": "cd3e4cb90711e8219ba18fcf84d56826"
  },
  {
    "url": "assets/js/21.839a3c8a.js",
    "revision": "dc215d2751a732574ec2f1d76e1e23b3"
  },
  {
    "url": "assets/js/22.22287127.js",
    "revision": "95dd63370b2d462fa080cbd89c6b2041"
  },
  {
    "url": "assets/js/23.24a5e477.js",
    "revision": "cf440c0cf54cc1663332b832eb54ee30"
  },
  {
    "url": "assets/js/24.c3640ecb.js",
    "revision": "b7053f8dad64387d09886e70022eedbf"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.792d48f3.js",
    "revision": "63192768967a0af960c2a8f2bef2e238"
  },
  {
    "url": "assets/js/4.3d4ed436.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.88dc06d3.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.ee7b8065.js",
    "revision": "e05cfecb8b998ce7ed559cbfb3d31272"
  },
  {
    "url": "assets/js/8.6f612280.js",
    "revision": "01495fbb68a73fd61d9cf58424c08299"
  },
  {
    "url": "assets/js/9.6eacf766.js",
    "revision": "4ded6a42f572773e8079384dcbba57db"
  },
  {
    "url": "assets/js/app.5365494f.js",
    "revision": "e3b337e0fdd345145cbd7a671f2de32e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "26eb8d49f692fb18b26edd97107110a3"
  },
  {
    "url": "design/index.html",
    "revision": "febcb30336ce4a05163cb115a6b627a1"
  },
  {
    "url": "index.html",
    "revision": "84f74b3105c434f69044969d1e53d85d"
  },
  {
    "url": "intro/index.html",
    "revision": "34c4941f441ed7c7f300a04a42a97680"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "410c0005434d5aa8e95ed86233ac88fa"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "38218d3ceb0529acf35cac7fa0291808"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3867417c44b42e29f9de7fd393f234ae"
  },
  {
    "url": "software/index.html",
    "revision": "1499316cfc19935cd58ad4e2a2a43491"
  },
  {
    "url": "test/index.html",
    "revision": "3e652cdedd9a09f1f63408c9177ee0e5"
  },
  {
    "url": "use cases/index.html",
    "revision": "4ef42f3cbccc4b037724b000e5f39f44"
  }
].concat(self.__precacheManifest || []);
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
