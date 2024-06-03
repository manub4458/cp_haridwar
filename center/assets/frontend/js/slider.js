$(document).ready(function() {
    $(".main-slider-carousel").owlCarousel({
        items: 1, // Display one item at a time
        loop: true, // Allow infinite loop
        autoplay: true, // Auto-play enabled
        autoplayTimeout: 5000, // Interval between slides
        smartSpeed: 1000, // Transition speed
        animateOut: 'fadeOut', // Animation effect when transitioning out
        responsive: {
            0: { items: 1 }, // 1 item on small screens
            600: { items: 1 }, // 1 item on tablets
            1000: { items: 1 } // 1 item on desktops
        }
    });
});