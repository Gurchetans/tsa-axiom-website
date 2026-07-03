// Minimal JS for mobile nav toggle and sticky header behavior
document.addEventListener('DOMContentLoaded',function(){
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if(navToggle){
    navToggle.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }

  // simple header shrinking on scroll
  var header = document.getElementById('siteHeader');
  var lastScroll = 0;
  window.addEventListener('scroll', function(){
    var s = window.scrollY || document.documentElement.scrollTop;
    if(s > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = s;
  });

  // simple client-side form handling hint (replace with real endpoint)
  var form = document.getElementById('inquiryForm');
  if(form){
    form.addEventListener('submit', function(e){
      // If you don't have a backend yet, uncomment to use mailto (not recommended for production)
      // e.preventDefault();
      // window.location = 'mailto:[EMAIL]?subject=Enquiry&body=Please%20call%20me';
      // Otherwise let the form post to /send-inquiry or a configured service.
    });
  }
});