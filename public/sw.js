if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const o=e=>n(e,t),r={module:{uri:t},exports:i,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(c(...e),i)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Xangq4ejM5E7B37Vuqoc6/_buildManifest.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/Xangq4ejM5E7B37Vuqoc6/_middlewareManifest.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/Xangq4ejM5E7B37Vuqoc6/_ssgManifest.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/main-b82de7430d8403b8.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/pages/_app-9cd1d19dd7237c4c.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/pages/index-70ee9aa51986e730.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/css/149b18973e5508c7.css",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/_next/static/css/27d177a30947857b.css",revision:"Xangq4ejM5E7B37Vuqoc6"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7cd61bfc34c4c7e3225d1c36ea2d08f9"},{url:"/icon-256x256.png",revision:"dc1f8c1ed3be8753459cc9b7085daddf"},{url:"/icon-384x384.png",revision:"90ab1c251a34fb2d3f85555aa05236c6"},{url:"/icon-512x512.png",revision:"85d0ef7601bbf11984c26578bc561270"},{url:"/manifest.json",revision:"eaa16e7989aace09125aad6fb736c852"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
