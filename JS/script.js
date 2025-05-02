document.addEventListener('DOMContentLoaded', () => {
    const submitCreateAccountButton = document.getElementById('submit-create-account');
    const submitLoginButton = document.getElementById('submit-login');
    const submitProfileButton = document.getElementById('submit-profile');
    const asistenteConvocatorias = document.getElementById('asistenteConvocatorias'); // Seleccionar el recuadro
    const asistenteBiomo = document.getElementById('asistenteBiomo'); // Seleccionar el botón de Mi Biomo
    const contactSupport = document.getElementById('contactSupport');
    const nextButton = document.getElementById('Nextbutton'); // Selección del botón "Siguiente"

    if (submitCreateAccountButton) {
        submitCreateAccountButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar la recarga de la página
            console.log('Cuenta creada (simulación)');
            window.location.href = 'complete-profile.html';
        });
    }

    if (submitLoginButton) {
        submitLoginButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Inicio de sesión (simulación)');
            alert('¡Has iniciado sesión! (Simulación)');
            window.location.href = 'Opcion.html';
        });
    }

    if (submitProfileButton) {
        submitProfileButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Perfil guardado (simulación)');
            alert('¡Perfil completado! (Simulación)');
            window.location.href = 'Opcion.html';
        });
    }

    if (asistenteConvocatorias) {
        asistenteConvocatorias.addEventListener('click', () => {
            window.location.href = 'convocatoria1.html';
        });
    }

    if (asistenteBiomo) {
        asistenteBiomo.addEventListener('click', () => {
            window.location.href = 'Mi_biomo.html'; // Redirigir a Mi_biomo.html
        });

        document.addEventListener('DOMContentLoaded', () => {
            const asistenteBiomo = document.getElementById('asistenteBiomo');
            if (asistenteBiomo) {
                asistenteBiomo.addEventListener('click', () => {
                    window.location.href = 'Mi_biomo.html';
                });
            }
        });
        
    }

    if (contactSupport) {
        contactSupport.addEventListener('click', function () {
            const supportModal = new bootstrap.Modal(document.getElementById('supportModal'));
            supportModal.show();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
            window.location.href = 'convocatoria2.html'; // Redirigir a convocatoria2.html
        });
    }
});


