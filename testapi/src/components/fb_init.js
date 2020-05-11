/* global FB*/

export default function Init(){
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '2872491892819866',
          cookie     : true,
          xfbml      : true,
          version    : 'v6.0'
        });
       
      };
    
      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
}

