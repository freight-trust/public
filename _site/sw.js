importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/public-information/2020/07/18/Protocol.html','/public-information/2020/07/18/Roadmap.html','/public-information,/roadmap,/announcements/2020/08/10/August-2020.html','/public-information/2020/08/24/Roadmap.html','/2020-08-10/','/example_page/','/protocol/','','','','','','','','','','','',
  // posts
  '/public-information/2020/08/24/Roadmap.html','/public-information,/roadmap,/announcements/2020/08/10/August-2020.html','/public-information/2020/07/18/Roadmap.html','/public-information/2020/07/18/Protocol.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
