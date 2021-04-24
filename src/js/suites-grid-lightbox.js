const suitesGridLightbox = (function () {

    var gridItems = document.querySelectorAll("#esg-grid-3-1 li");
    var lightboxActive = false;
    var allLightboxPosts = [];

    function configureClickEvent(item,index) {
        var postID = item.getAttribute("id").split('-');
        postID = postID[postID.length-1];
        var postContent = getPost(postID);        

        item.addEventListener("click", function(){
            createLightbox(allLightboxPosts[postID]);
        });
    };

    function getPost(id) {
        var post = new wp.api.models.Post( { id: id } );
        post.fetch().done(function(res) {
            allLightboxPosts[id] = res.content;
        });
    }

    function createLightbox(content) {
        if(content !== undefined && !lightboxActive) {
            
            var body = document.querySelector("body");
            var content = content;
            var markup = '<div id="essentialGridCustomLightbox" class="essential-grid-custom-modal"><div class="content-container"><div class="dismiss"><button><span></span><span></span></button></div>'+content.rendered+'</div></div>';
            body.insertAdjacentHTML('afterend', markup);
            body.classList.add('modal-open');
            document.querySelector(".dismiss button").addEventListener('click', dismissLightbox);
            document.querySelector(".essential-grid-custom-modal").addEventListener("click", dismissLightbox);
            window.addEventListener("keyup", keyboardDismissLightbox)
            return lightboxActive = true;
        }
    }

    function dismissLightbox() {
        if(lightboxActive) {
            document.querySelector(".dismiss button").removeEventListener('click', dismissLightbox);
            var body = document.querySelector("body");
            document.querySelector("#essentialGridCustomLightbox").remove();
            body.classList.remove('modal-open');
            window.removeEventListener("keyup", keyboardDismissLightbox);
        }
        return lightboxActive = false;
    }

    function keyboardDismissLightbox(e) {
        if(e.keyCode == 27) {
            dismissLightbox();
        }
    }

    function init() {
        wp.api.loadPromise.done( function(data) {
            gridItems.forEach(configureClickEvent);
    
        } );
    }

    return {
        init: init
    }
});

export default suitesGridLightbox;