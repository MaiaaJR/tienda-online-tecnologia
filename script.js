
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const contactParam = urlParams.get('contact');
    if (contactParam) {
        document.getElementById('contacto').scrollIntoView();
    }
});