$(document).ready(function(){
    $('.third-section__slider').slick({
        autoplay: true,
        arrows: true,
        fade: true,
        autoplaySpeed: 900
    });
  });

  function initMap() {
    const location = {
        lat: 40.5527859,
        lng: -74.1027019,
    };
    const map = new google.maps.Map(document.querySelector('.map-section__map'), {
        center: location,
        zoom: 15
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}