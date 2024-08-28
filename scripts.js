document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-btn');
    
    // Inicialización de SweetAlert2
    function showPasswordAlert() {
        Swal.fire({
            title: 'Ingresa la contraseña',
            input: 'password',
            inputAttributes: {
                maxlength: 8,
                autocapitalize: 'off',
                autocorrect: 'off'
            },
            confirmButtonText: 'Ingresar',
            showLoaderOnConfirm: true,
            preConfirm: (password) => {
                if (password === '8-8-24') {
                    return Swal.fire({
                        title: 'Espero que con esto, pueda explicarte mejor todavía, lo importante que sos para mi ❤',
                        confirmButtonText: 'Comenzar'
                    }).then(result => {
                        if (result.isConfirmed) {
                            return Swal.fire({
                                title: 'Antes de empezar quería recordarte lo hermosa que sos y lo mucho que te amo ❤',
                                confirmButtonText: 'Ahora sí 😅'
                            }).then(result => {
                                if (result.isConfirmed) {
                                    mainContent.classList.remove('hidden');
                                    startButton.classList.add('hidden');
                                }
                            });
                        }
                    });
                } else {
                    Swal.showValidationMessage('Contraseña incorrecta');
                }
            }
        });
    }
    
    startButton.addEventListener('click', showPasswordAlert);

    // Mostrar u ocultar contenido al presionar botones
    const buttons = {
        'loque-me-gusta': 'loque-me-gusta-content',
        'loque-no-me-gusta': 'loque-no-me-gusta-content',
        'quiero-agradecerte': 'quiero-agradecerte-content',
        'lo-que-quiero': 'lo-que-quiero-content'
    };

    for (const [buttonId, contentId] of Object.entries(buttons)) {
        document.getElementById(buttonId).addEventListener('click', () => {
            const content = document.getElementById(contentId);
            content.classList.toggle('hidden');
        });
    }
    
    // Configuración del carrusel
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    function showNextImage() {
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
    }
    
    setInterval(showNextImage, 3000);
});