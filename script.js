window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-K7DQ2NRJ'); // Reemplaza con tu ID de Google Analytics

//Test if gtag is working
document.getElementById('ga-evento-local').addEventListener('click', function() {
    console.log('Evento local');
    window.gtag('event', 'interaccion_boton_accesibilidad', {
        'event_category': 'Accesibilidad',
        'event_label': 'Botón 1 presionado',
        'value': 1
    });
});

window.onerror = (errorMsg, url, lineNumber) => {
    window?.gtag?.("event", "exeception", {
        errorMsg: lineNumber + ":" + errorMsg,
    });
    console.error(errorMsg, url, lineNumber);
};