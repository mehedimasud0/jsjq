$(document).ready(function(){

   
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );


 //Second

  $( function() {
    $( "#datepicker" ).datepicker();
  } );



  //Third
  $( function() {
    $.widget( "ui.timespinner", $.ui.spinner, {
      options: {
        // seconds
        step: 60 * 1000,
        // hours
        page: 60
      },
      _parse: function( value ) {
        if ( typeof value === "string" ) {
          // already a timestamp
          if ( Number( value ) == value ) {
            return Number( value );
          }
          return +Globalize.parseDate( value );
        }
        return value;
      },
 
      _format: function( value ) {
        return Globalize.format( new Date(value), "t" );
      }
    });
 
    $( "#spinner" ).timespinner();
 
    $( "#culture" ).on( "change", function() {
      var current = $( "#spinner" ).timespinner( "value" );
      Globalize.culture( $(this).val() );
      $( "#spinner" ).timespinner( "value", current );
    });
  } );

  //Fourth
  $( function() {
    $( "#tabs" ).tabs();
  } );


  //Fifth

  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

  //Counter
 window.onload = ()=>{
    $("#num1").countMe(1, 5);
    $("#num2").countMe(1, 5);
    $("#num3").countMe(1, 5);
 }

 
 wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();



 

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }




































  
});



