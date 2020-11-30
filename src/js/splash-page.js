const splashPage = (function () {

    // logic
    var shouldPlay = !sessionStorage.getItem('hasViewedSplashPage'); // set to cookies
    var hasBeenDismissed = false;

    // queries
    var body = document.querySelector('body');
    var splashPage = document.querySelector("#splashPage");
    var lineDrawingClass = document.querySelector('#lineDrawing');
    var dismissSplashLink = document.querySelector('#dismissSplash img');
    var pageContent = document.querySelectorAll("#fl-main-content, header");

    // placeholders
    var myAnimationSVG;

    function addListeners() {
        dismissSplashLink.addEventListener('click', dismissSplashPage);
        window.addEventListener("scroll", scrollListener);
    }

    function scrollListener() {
        if (window.pageYOffset >= 150) {
            dismissSplashPage();
        }
    }

    function animationConfig() {
        if(lineDrawingClass) {
            return myAnimationSVG = new Vivus('lineDrawing', {
                type: 'scenario',
                duration: 800,
                start: 'manual',
                animTimingFunction: Vivus.EASE_OUT
            }, dismissSplashPage);
        }
        
    }

    function dismissSplashPage() {
        if(!hasBeenDismissed) {
            window.removeEventListener("scroll", scrollListener);
            body.style.background = 'var(--black)';
            body.style.position = 'fixed';
            var viewportHeight = window.innerHeight;

            gsap.to(splashPage, {
                y:-(viewportHeight + 150),
                duration: 1.2,
                onComplete: initPage
            });

            gsap.fromTo(pageContent, {
                opacity: 0
            }, {
                duration: 1.2,
                opacity: 1,
            });
        }
        
        return hasBeenDismissed = true;
    }


    function playSplashPage() {
        // play animation
        setTimeout(function() {
            if(lineDrawingClass) {
                myAnimationSVG.play();
                //opacity on top of animation
                gsap.to(lineDrawingClass, {
                    opacity: 1,
                    duration: 2,
                })
            }            
        }, 400);

        sessionStorage.setItem('hasViewedSplashPage', true);
    }

    function initPage() {
        body.style.opacity = 1;
        body.style.position = 'initial';
        
        setTimeout(function() {
            splashPage.remove();
            body.style.background = '#fff';
        }, 100);
    } 

    function init() {
        // force scroll to top, then load splash page
        if(shouldPlay && window.innerWidth >= 768) {
            window.addEventListener('load', (event) => {
                window.scrollTo(0,0);
    
                setTimeout(function() {
                    // fade in body
                    body.style.opacity = 1;
        
                    // if not logged in and/or  editing
                    if(!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
                        addListeners();
                        animationConfig();
                        playSplashPage();
                    }
                }, 200);
            });
            if(document.querySelector('.manual-dismiss')) {
                if(!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
                    setTimeout(function(){
                        dismissSplashPage();
                    }, 2000);
                }
                
            }
        }
        else {
            initPage();
        }     
    }

    return {
        init: init
    }
});

export default splashPage;