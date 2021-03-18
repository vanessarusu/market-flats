    // this has been moved to be the inline callback function within the plugin settings

// const customSlider = (function () {

//     function init(sliderID) {

//         jQuery( document ).ready(function() {
//             if(n2ss) {
//                 n2ss.ready(sliderID, function(slider, sliderElement) {  
//                     sliderElement.on('mainAnimationStart', 
//                     function(e, animation, currentSlideIndex, nextSlideIndex) {     
//                         setTimeout(function(){
//                             var index = slider.currentSlide.index+1;
//                             console.log(index);
//                             document.querySelector(".nextend-arrow-previous .slider-pagination .current-index").innerHTML = index;
//                         }, 500);
//                     });
//                 });
//             }
//         });
//     }

//     return {
//         init: init
//     }
// });

// export default customSlider;