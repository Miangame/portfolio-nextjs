if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,c,n)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return i;case"module":return r;default:return e(a)}})).then(e=>{const a=n(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/470444a3005f64a3e856db561cb0e488319f5391.242e8c32e8f0fe1944ee.js",revision:"1ae94403295c34475f465fc1638382eb"},{url:"/_next/static/chunks/6ef5d3de85eb40b9b9d17c3ab1277739d54999b9.5b0e2dcf17bbc268feff.js",revision:"c9a5a8472d75b4b2b410a3f7e411f402"},{url:"/_next/static/chunks/framework.cb9d4afe4d07c46063c3.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-ef9d5c4ddd8816ce06e3.js",revision:"c560fada05fbf5fc4c074c91cf25711b"},{url:"/_next/static/chunks/pages/_app-f5085cb3d5d98038ee79.js",revision:"45e7255365b6a9716afca821ef17f2bb"},{url:"/_next/static/chunks/pages/_error-4f0601949c71cd429f69.js",revision:"273dcac8fdda1fa392833a393033de36"},{url:"/_next/static/chunks/pages/contacto-4c1de64e7b9a37c868b6.js",revision:"14afb2ea5e66574c0c8eb0bb39ae390a"},{url:"/_next/static/chunks/pages/devto-posts-0fbf49ba613be2cacae7.js",revision:"379bd065073cf9ed877ca01408fdbf14"},{url:"/_next/static/chunks/pages/index-f5cd6619cafb878235c0.js",revision:"de0fc01be834db8af76c0933d3074a5f"},{url:"/_next/static/chunks/pages/ponencias-b447efc246a9227dd08e.js",revision:"b8872af651910ab40088d57cc31b60ac"},{url:"/_next/static/chunks/pages/proyectos-2dcd65046cc26023c95a.js",revision:"0db3ca7d3c30e86ed903776270640f7d"},{url:"/_next/static/chunks/polyfills-a5b86a38e61b63f3b3a9.js",revision:"5bfe7580c50dc3ab541a7ccc333814de"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/41cda607c7d5d0e48911.css",revision:"f032f1f31a72ebda010cebddccb26738"},{url:"/_next/static/ltmMXgz0ilCJOax7evdSs/_buildManifest.js",revision:"cdbe58a022fe8eb01e92a8d5d17a7589"},{url:"/_next/static/ltmMXgz0ilCJOax7evdSs/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/android-icon-144x144.png",revision:"5ec125577e15eaa33702c2fb35efb616"},{url:"/android-icon-192x192.png",revision:"5a8f1431a45668967ae8ae69369c3e03"},{url:"/android-icon-36x36.png",revision:"7aac72f4043795f1f177ea6bf36b2b25"},{url:"/android-icon-48x48.png",revision:"32a1d1e53f59823f1e378784a844a087"},{url:"/android-icon-512x512.png",revision:"cb3e731a670188fdcd5728dff44eb309"},{url:"/android-icon-72x72.png",revision:"0183fb0dbd763c539e5a287c7dfd4161"},{url:"/android-icon-96x96.png",revision:"a241ebb57c483afbcfbac785d5301596"},{url:"/apple-icon-114x114.png",revision:"293edb9388306003a567a8e4a2e9e5b6"},{url:"/apple-icon-120x120.png",revision:"c3b75c027a3a3d25c07e8a5aa4bcb7a1"},{url:"/apple-icon-144x144.png",revision:"5ec125577e15eaa33702c2fb35efb616"},{url:"/apple-icon-152x152.png",revision:"fe5f9bc774ea7d6e5edf0e302028e298"},{url:"/apple-icon-180x180.png",revision:"b86eb090880fd149b5f97fd83ecf2eb7"},{url:"/apple-icon-57x57.png",revision:"da7ebeac87910382900a8b7ac3520769"},{url:"/apple-icon-60x60.png",revision:"81ae578e70e5e800228088b27067e50b"},{url:"/apple-icon-72x72.png",revision:"0183fb0dbd763c539e5a287c7dfd4161"},{url:"/apple-icon-76x76.png",revision:"e444444f3e14c74816517a3fea4d9ca4"},{url:"/apple-icon-precomposed.png",revision:"8de56db57d12d93c38c31b90c2f11ed3"},{url:"/apple-icon.png",revision:"8de56db57d12d93c38c31b90c2f11ed3"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"3f7242cf2cce4cdff8411d2c53d7b1fe"},{url:"/favicon-32x32.png",revision:"3c0207b0d2ddb224eb6ee3a65d4b0160"},{url:"/favicon-96x96.png",revision:"a241ebb57c483afbcfbac785d5301596"},{url:"/favicon.ico",revision:"5e647c93ec7e69a77c0d636d1a70f99f"},{url:"/img/avatar.png",revision:"ba36e6f36e3640be70be386871a1d2b2"},{url:"/img/botTelegramLogo.png",revision:"de94412b8d900f3776bb7fbd889d374c"},{url:"/img/buscadorAjaxjQuery.png",revision:"3bca8f8c5c2f1f5946d65b9ad6f0aeb6"},{url:"/img/buscaminasjQuery.png",revision:"df4810ac0750d9d711dcaa398038712b"},{url:"/img/gulp.png",revision:"7fcf4066d2907dcba9ba4da6228423dd"},{url:"/img/javierPonferradaLopez.png",revision:"3621553a43d8093ca04d2549662c25e3"},{url:"/img/juanRuedaMorales.png",revision:"6d23d7e9aae40964b40f3e8185d13533"},{url:"/img/logo-portfolio.png",revision:"cb3e731a670188fdcd5728dff44eb309"},{url:"/img/logoapp.png",revision:"ce59055ff4731f058c7e345214813ed5"},{url:"/img/marioNavarroMadrid.png",revision:"58d6ae08b6ec546410c9a23ba4459477"},{url:"/img/miguelGavilanMerino.png",revision:"3ee866bc638826c197a6cac31e72c735"},{url:"/img/pisysmana.png",revision:"3dee4245ef5171d9384132a1c1704078"},{url:"/img/pluginValidacionFormulariojQuery.png",revision:"3c7c6178feba8de65aa7aa21cf261aa2"},{url:"/img/portfolio-logo.png",revision:"335cea231d8a52f86da6d0c7cb9b5cb2"},{url:"/img/portfolio-logo.svg",revision:"4948269e2da26517aed5405ebbf6bdfc"},{url:"/img/promises.png",revision:"b3982dd7bcca96ea3ea43c3e0bded3eb"},{url:"/img/python.png",revision:"8c50ca84c6a4c58f191698951192f39f"},{url:"/img/raspberry.png",revision:"37d1c9b8e537df35bd910d32d6855777"},{url:"/img/sumitools.png",revision:"a9578ad26959cb1b8fd5c798b256245b"},{url:"/img/susomejias-io.png",revision:"a393e725082ff35a099b7a4615a5d42c"},{url:"/img/symfony.png",revision:"51cb1444aec41292a8c028b6f0214369"},{url:"/img/sysmana2020.png",revision:"17bc122bfb4cf7a58223d203a2e33f1b"},{url:"/img/vuejs.png",revision:"1fa5dbc42b9ea29e6c591009a4a8da3d"},{url:"/manifest.json",revision:"634056b6672ce6944dbdf4b5016e48f0"},{url:"/ms-icon-144x144.png",revision:"5ec125577e15eaa33702c2fb35efb616"},{url:"/ms-icon-150x150.png",revision:"79a2e278ca3c6d59e676e561cdb2e062"},{url:"/ms-icon-310x310.png",revision:"197464f1c1d656a15991ed2bea941df2"},{url:"/ms-icon-70x70.png",revision:"a46627efe0bc5a2a70404f77744842f5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
