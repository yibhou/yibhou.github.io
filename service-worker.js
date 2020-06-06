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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d065f7c233af634a214577538dd26e0"
  },
  {
    "url": "assets/css/0.styles.9a9a7039.css",
    "revision": "163d92a0eb5ce6e24498c3d50332f3e8"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/object2number.e83b2e0c.png",
    "revision": "e83b2e0c3aa3b0e37e1d076083f9d62a"
  },
  {
    "url": "assets/img/object2string.e1d1a792.png",
    "revision": "e1d1a7921e80ab82f5c513380918753b"
  },
  {
    "url": "assets/img/scope-chain.032d5a5b.png",
    "revision": "032d5a5b7aa975f45e45cd7b4b6c917c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0b127030.js",
    "revision": "312fd7b19813cf888c4d6277cfb3fc48"
  },
  {
    "url": "assets/js/10.78ec3373.js",
    "revision": "3b533be57879c29efe1747ffb7671a75"
  },
  {
    "url": "assets/js/11.4a50bb2f.js",
    "revision": "5f4d18bbe36c2436d944ef7f91353d55"
  },
  {
    "url": "assets/js/12.932b1e80.js",
    "revision": "9e0906826c3652cd698bd9076c8044e9"
  },
  {
    "url": "assets/js/13.089b917a.js",
    "revision": "a6c68c96d710e9fbfc7d1954831551e6"
  },
  {
    "url": "assets/js/14.ad9d6fe0.js",
    "revision": "a21fd9746d790a91a5b403f07402bcb1"
  },
  {
    "url": "assets/js/15.4d7fac21.js",
    "revision": "9bcfea9c196fcdd808b3035a3679cbf3"
  },
  {
    "url": "assets/js/16.4b6a3176.js",
    "revision": "b8f241dd786fb9c877efc854f4296e3e"
  },
  {
    "url": "assets/js/17.a330e63d.js",
    "revision": "fba177948885d8e1229de78e026c10d4"
  },
  {
    "url": "assets/js/18.3d2fdabb.js",
    "revision": "10f3faeaa09ec6c679decd4fafba005a"
  },
  {
    "url": "assets/js/19.68a7e869.js",
    "revision": "abd10ef00df5710c293ac3e4388573fb"
  },
  {
    "url": "assets/js/20.4ebc96ee.js",
    "revision": "4e513822da62991241b21363a7221dd3"
  },
  {
    "url": "assets/js/21.40d874d6.js",
    "revision": "25798c43441e787640459bd800cffa07"
  },
  {
    "url": "assets/js/22.edbf5235.js",
    "revision": "4119b5731d88e876e33cd2dc79b00312"
  },
  {
    "url": "assets/js/23.99131bb5.js",
    "revision": "988206ed3e77ec6e935ab25b6795555f"
  },
  {
    "url": "assets/js/4.2efa178c.js",
    "revision": "6e9d7fdaec5c7fbd323bd7ea669c7466"
  },
  {
    "url": "assets/js/5.cd94e518.js",
    "revision": "04b62f1c086d414fbda4659121842890"
  },
  {
    "url": "assets/js/6.cd22085d.js",
    "revision": "c9fdcc637caad3e8c13afb86720a16d8"
  },
  {
    "url": "assets/js/7.35b6108c.js",
    "revision": "914fbe5846bc0a1c24e98808ec5f1c5b"
  },
  {
    "url": "assets/js/8.17061641.js",
    "revision": "7060e154e63b00c84949e8f2bb759ccc"
  },
  {
    "url": "assets/js/9.1866e629.js",
    "revision": "882bb20d0b9b9850528344921d9fc753"
  },
  {
    "url": "assets/js/app.bdce5e38.js",
    "revision": "16668382d9b002c4f690506e2a20a8b1"
  },
  {
    "url": "assets/js/vuejs-paginate.0d9cdb99.js",
    "revision": "68d49f8ffb109ff26a81680b037db9cb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "f8cda105dee0b6bec3d6bbe39618af93"
  },
  {
    "url": "post/2020/02/08/javascript-definitive-guide-notes-1/index.html",
    "revision": "52946146470a00f908a66f82e5546cdb"
  },
  {
    "url": "post/2020/02/20/javascript-definitive-guide-notes-2/index.html",
    "revision": "e6a8374b8e16ad544408ce2e90a62064"
  },
  {
    "url": "post/index.html",
    "revision": "0061dfac699631aa9794dbb92f5e1c8a"
  },
  {
    "url": "tag/index.html",
    "revision": "d2a5038f7eb029f02560b1e3bfb5187d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "068642b04c94596f2db65e010fdca561"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "965ca8bcaf0ee97c10e0b783ce68c6fa"
  },
  {
    "url": "vuepress.html",
    "revision": "77bb58989f1cdfc2b14e275f68d13f44"
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
