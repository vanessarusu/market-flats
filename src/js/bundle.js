import splashPage from './splash-page';
import formStyling from './form-styling';
import suitesGridLightbox from './suites-grid-lightbox';

(function() {

    var pageIds = {
        suites: "342",
    }

    if(document.querySelector(`body.page-id-${pageIds.suites}`)) {
        const sgl = suitesGridLightbox();
        sgl.init();
    }

    const sp = splashPage(); 
    const fs = formStyling();

    sp.init();    
    fs.init();

    document.querySelectorAll('.register-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            launchLightbox();
        });
    });

    document.querySelectorAll('.lightbox-dismiss').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            dismissLightbox();
        });
    });

    function launchLightbox() {
        var lightboxForm = document.querySelector('#lightboxForm');
        document.querySelector('body').classList.add('modal-open');
        lightboxForm.classList.add('lightbox-open');
        
        document.addEventListener("keyup", function(e) {
            if(e.key == 'Escape') {
                dismissLightbox();
            }
        });

        gsap.fromTo(lightboxForm, {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.15
        });
    }

    function dismissLightbox() {
        fs.closeDropdown();
        document.querySelector('body').classList.remove('modal-open');
        document.querySelector('#lightboxForm').classList.remove('lightbox-open');
    }
}

());
