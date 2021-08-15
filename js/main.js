/* Initialize and add the Map */
function initMap() {
    //Your Location
    const loc = { lat: 26.846251, lng: 80.949028 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: loc,
    });

    /* The marker, positioned at location */
    const marker = new google.maps.Marker({ position: loc, map: map });
}

/* Smooth Scrolling */
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            600
        );
    }
});
