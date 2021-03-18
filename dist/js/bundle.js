/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-page */ "./src/js/splash-page.js");
/* harmony import */ var _form_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-styling */ "./src/js/form-styling.js");
/* harmony import */ var _suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suites-grid-lightbox */ "./src/js/suites-grid-lightbox.js");




(function () {
  var pageIds = {
    suites: "342"
  };

  if (document.querySelector("body.page-id-".concat(pageIds.suites))) {
    var sgl = Object(_suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"])();
    sgl.init();
  }

  var sp = Object(_splash_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var fs = Object(_form_styling__WEBPACK_IMPORTED_MODULE_1__["default"])();
  sp.init();
  fs.init();
  document.querySelectorAll('.register-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox();
    });
  });
  document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      dismissLightbox();
    });
  });

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');
    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    fs.closeDropdown();
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }
})();

/***/ }),

/***/ "./src/js/form-styling.js":
/*!********************************!*\
  !*** ./src/js/form-styling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formStyling = function formStyling() {
  function dropdown() {
    var selectNodes = document.querySelectorAll('.wpforms-field-select select');

    for (var i = 0; i < selectNodes.length; i++) {
      // run for each select node
      var currentSelect = selectNodes[i];
      var liMarkup = '';
      var options = selectNodes[i].options;
      var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

      for (var j = 0; j < options.length; j++) {
        var item = '<li class="dropdown-item"><a href="#"data-dd="' + currentSelect.getAttribute("id") + '" data-value="' + options[j].getAttribute('value') + '">' + options[j].innerHTML + '</a></li>';
        liMarkup += item;
      }

      var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">' + currentSelectionText + '</span><span class="arrow"></span></p><ul class="dd-container">' + liMarkup + '</ul></div>';
      selectNodes[i].insertAdjacentHTML('afterend', html);
    }

    document.querySelectorAll('.custom-dropdown .selected-option').forEach(function (el) {
      el.addEventListener('click', openDropdown);
    }); // click on dropdown element

    document.querySelectorAll('.dropdown-item a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var findSelect = this.getAttribute('data-dd');
        var originalSelect = document.querySelector("#" + findSelect);
        updateOriginalSelect(this, originalSelect);
        updateLabel(this, originalSelect);
        closeDropdown();
      });
    });
  }

  function updateLabel(clickedEl, originalSelect) {
    var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
    labelTextNode.innerHTML = clickedEl.innerHTML;
  }

  function updateOriginalSelect(clickedEl, originalSelect) {
    for (var i = 0; i < originalSelect.options.length; i++) {
      if (originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
        originalSelect.options[i].setAttribute('selected', true);
      } else {
        originalSelect.options[i].removeAttribute('selected');
      }
    }
  }

  function closeDropdown() {
    document.querySelectorAll('ul.dd-container').forEach(function (el) {
      el.classList.add('dd-closed');
      el.classList.remove('dd-open');
    });
  }

  function openDropdown() {
    this.nextElementSibling.classList.add('dd-open');
  }

  function init() {
    dropdown();
  }

  return {
    init: init,
    closeDropdown: closeDropdown
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formStyling);

/***/ }),

/***/ "./src/js/splash-page.js":
/*!*******************************!*\
  !*** ./src/js/splash-page.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var splashPage = function splashPage() {
  // logic
  var shouldPlay = !sessionStorage.getItem('hasViewedSplashPage'); // set to cookies

  var hasBeenDismissed = false; // queries

  var body = document.querySelector('body');
  var splashPage = document.querySelector("#splashPage");
  var lineDrawingClass = document.querySelector('#lineDrawing');
  var dismissSplashLink = document.querySelector('#dismissSplash img');
  var pageContent = document.querySelectorAll("#fl-main-content, header"); // placeholders

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
    if (lineDrawingClass) {
      return myAnimationSVG = new Vivus('lineDrawing', {
        type: 'scenario',
        duration: 800,
        start: 'manual',
        animTimingFunction: Vivus.EASE_OUT
      }, dismissSplashPage);
    }
  }

  function dismissSplashPage() {
    if (!hasBeenDismissed) {
      window.removeEventListener("scroll", scrollListener);
      body.style.background = 'var(--black)';
      body.style.position = 'fixed';
      var viewportHeight = window.innerHeight;
      gsap.to(splashPage, {
        y: -(viewportHeight + 150),
        duration: 1.2,
        onComplete: initPage
      });
      gsap.fromTo(pageContent, {
        opacity: 0
      }, {
        duration: 1.2,
        opacity: 1
      });
    }

    return hasBeenDismissed = true;
  }

  function playSplashPage() {
    // play animation
    setTimeout(function () {
      if (lineDrawingClass) {
        myAnimationSVG.play(); //opacity on top of animation

        gsap.to(lineDrawingClass, {
          opacity: 1,
          duration: 2
        });
      }
    }, 400);
    sessionStorage.setItem('hasViewedSplashPage', true);
  }

  function initPage() {
    body.style.opacity = 1;
    body.style.position = 'initial';
    setTimeout(function () {
      splashPage.remove();
      body.style.background = '#fff';
    }, 100);
  }

  function init() {
    // force scroll to top, then load splash page
    if (shouldPlay && window.innerWidth >= 768) {
      window.addEventListener('load', function (event) {
        window.scrollTo(0, 0);
        setTimeout(function () {
          // fade in body
          body.style.opacity = 1; // if not logged in and/or  editing

          if (!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
            addListeners();
            animationConfig();
            playSplashPage();
          }
        }, 200);
      });

      if (document.querySelector('.manual-dismiss')) {
        if (!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
          setTimeout(function () {
            dismissSplashPage();
          }, 2000);
        }
      }
    } else {
      initPage();
    }
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (splashPage);

/***/ }),

/***/ "./src/js/suites-grid-lightbox.js":
/*!****************************************!*\
  !*** ./src/js/suites-grid-lightbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var suitesGridLightbox = function suitesGridLightbox() {
  var gridItems = document.querySelectorAll("#esg-grid-3-1 li");
  var lightboxActive = false;
  var allLightboxPosts = [];

  function configureClickEvent(item, index) {
    var postID = item.getAttribute("id").split('-');
    postID = postID[postID.length - 1];
    var postContent = getPost(postID);
    item.addEventListener("click", function () {
      createLightbox(allLightboxPosts[postID]);
    });
  }

  ;

  function getPost(id) {
    var post = new wp.api.models.Post({
      id: id
    });
    post.fetch().done(function (res) {
      allLightboxPosts[id] = res.content;
    });
  }

  function createLightbox(content) {
    if (content !== undefined && !lightboxActive) {
      var body = document.querySelector("body");
      var content = content;
      var markup = '<div id="essentialGridCustomLightbox" class="essential-grid-custom-modal"><div class="content-container"><div class="dismiss"><button><span></span><span></span></button></div>' + content.rendered + '</div></div>';
      body.insertAdjacentHTML('afterend', markup);
      body.classList.add('modal-open');
      document.querySelector(".dismiss button").addEventListener('click', dismissLightbox);
      document.querySelector(".essential-grid-custom-modal").addEventListener("click", dismissLightbox);
      window.addEventListener("keyup", keyboardDismissLightbox);
      return lightboxActive = true;
    }
  }

  function dismissLightbox() {
    if (lightboxActive) {
      document.querySelector(".dismiss button").removeEventListener('click', dismissLightbox);
      var body = document.querySelector("body");
      document.querySelector("#essentialGridCustomLightbox").remove();
      body.classList.remove('modal-open');
      window.removeEventListener("keyup", keyboardDismissLightbox);
    }

    return lightboxActive = false;
  }

  function keyboardDismissLightbox(e) {
    if (e.keyCode == 27) {
      dismissLightbox();
    }
  }

  function init() {
    gridItems.forEach(configureClickEvent);
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (suitesGridLightbox);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybS1zdHlsaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zcGxhc2gtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3VpdGVzLWdyaWQtbGlnaHRib3guanMiXSwibmFtZXMiOlsicGFnZUlkcyIsInN1aXRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNnbCIsInN1aXRlc0dyaWRMaWdodGJveCIsImluaXQiLCJzcCIsInNwbGFzaFBhZ2UiLCJmcyIsImZvcm1TdHlsaW5nIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsYXVuY2hMaWdodGJveCIsImRpc21pc3NMaWdodGJveCIsImxpZ2h0Ym94Rm9ybSIsImNsYXNzTGlzdCIsImFkZCIsImtleSIsImdzYXAiLCJmcm9tVG8iLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJjbG9zZURyb3Bkb3duIiwicmVtb3ZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJsZW5ndGgiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImoiLCJpdGVtIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsIm9wZW5Ecm9wZG93biIsImZpbmRTZWxlY3QiLCJvcmlnaW5hbFNlbGVjdCIsInVwZGF0ZU9yaWdpbmFsU2VsZWN0IiwidXBkYXRlTGFiZWwiLCJjbGlja2VkRWwiLCJsYWJlbFRleHROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic2hvdWxkUGxheSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImhhc0JlZW5EaXNtaXNzZWQiLCJib2R5IiwibGluZURyYXdpbmdDbGFzcyIsImRpc21pc3NTcGxhc2hMaW5rIiwicGFnZUNvbnRlbnQiLCJteUFuaW1hdGlvblNWRyIsImFkZExpc3RlbmVycyIsImRpc21pc3NTcGxhc2hQYWdlIiwid2luZG93Iiwic2Nyb2xsTGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImFuaW1hdGlvbkNvbmZpZyIsIlZpdnVzIiwidHlwZSIsInN0YXJ0IiwiYW5pbVRpbWluZ0Z1bmN0aW9uIiwiRUFTRV9PVVQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwidG8iLCJ5Iiwib25Db21wbGV0ZSIsImluaXRQYWdlIiwicGxheVNwbGFzaFBhZ2UiLCJzZXRUaW1lb3V0IiwicGxheSIsInNldEl0ZW0iLCJpbm5lcldpZHRoIiwiZXZlbnQiLCJzY3JvbGxUbyIsImNvbnRhaW5zIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsImluZGV4IiwicG9zdElEIiwic3BsaXQiLCJwb3N0Q29udGVudCIsImdldFBvc3QiLCJjcmVhdGVMaWdodGJveCIsImlkIiwicG9zdCIsIndwIiwiYXBpIiwibW9kZWxzIiwiUG9zdCIsImZldGNoIiwiZG9uZSIsInJlcyIsImNvbnRlbnQiLCJ1bmRlZmluZWQiLCJtYXJrdXAiLCJyZW5kZXJlZCIsImtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztR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RixPQUFWLENBQWtCb0YsbUJBQWxCO0FBQ0g7O0FBRUQsU0FBTztBQUNIMUYsUUFBSSxFQUFFQTtBQURILEdBQVA7QUFHSCxDQTlERDs7QUFnRWVELGlGQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IHNwbGFzaFBhZ2UgZnJvbSAnLi9zcGxhc2gtcGFnZSc7XG5pbXBvcnQgZm9ybVN0eWxpbmcgZnJvbSAnLi9mb3JtLXN0eWxpbmcnO1xuaW1wb3J0IHN1aXRlc0dyaWRMaWdodGJveCBmcm9tICcuL3N1aXRlcy1ncmlkLWxpZ2h0Ym94JztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBhZ2VJZHMgPSB7XG4gICAgICAgIHN1aXRlczogXCIzNDJcIixcbiAgICB9XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5LnBhZ2UtaWQtJHtwYWdlSWRzLnN1aXRlc31gKSkge1xuICAgICAgICBjb25zdCBzZ2wgPSBzdWl0ZXNHcmlkTGlnaHRib3goKTtcbiAgICAgICAgc2dsLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzcCA9IHNwbGFzaFBhZ2UoKTsgXG4gICAgY29uc3QgZnMgPSBmb3JtU3R5bGluZygpO1xuXG4gICAgc3AuaW5pdCgpOyAgICBcbiAgICBmcy5pbml0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveC1kaXNtaXNzJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaExpZ2h0Ym94KCkge1xuICAgICAgICB2YXIgbGlnaHRib3hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZnMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cbn1cblxuKCkpO1xuIiwiY29uc3QgZm9ybVN0eWxpbmcgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4gICAgICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGZvcm1zLWZpZWxkLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+PGEgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuICAgICAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4gICAgICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuICAgICAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4gICAgICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGRyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdCxcbiAgICAgICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtU3R5bGluZzsiLCJjb25zdCBzcGxhc2hQYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaGFzVmlld2VkU3BsYXNoUGFnZScpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBoYXNCZWVuRGlzbWlzc2VkID0gZmFsc2U7XG5cbiAgICAvLyBxdWVyaWVzXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdmFyIHNwbGFzaFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaFBhZ2VcIik7XG4gICAgdmFyIGxpbmVEcmF3aW5nQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZURyYXdpbmcnKTtcbiAgICB2YXIgZGlzbWlzc1NwbGFzaExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzbWlzc1NwbGFzaCBpbWcnKTtcbiAgICB2YXIgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2ZsLW1haW4tY29udGVudCwgaGVhZGVyXCIpO1xuXG4gICAgLy8gcGxhY2Vob2xkZXJzXG4gICAgdmFyIG15QW5pbWF0aW9uU1ZHO1xuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICBkaXNtaXNzU3BsYXNoTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc21pc3NTcGxhc2hQYWdlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IDE1MCkge1xuICAgICAgICAgICAgZGlzbWlzc1NwbGFzaFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGlvbkNvbmZpZygpIHtcbiAgICAgICAgaWYobGluZURyYXdpbmdDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIG15QW5pbWF0aW9uU1ZHID0gbmV3IFZpdnVzKCdsaW5lRHJhd2luZycsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2NlbmFyaW8nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICdtYW51YWwnLFxuICAgICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRV9PVVRcbiAgICAgICAgICAgIH0sIGRpc21pc3NTcGxhc2hQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzU3BsYXNoUGFnZSgpIHtcbiAgICAgICAgaWYoIWhhc0JlZW5EaXNtaXNzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1ibGFjayknO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGdzYXAudG8oc3BsYXNoUGFnZSwge1xuICAgICAgICAgICAgICAgIHk6LSh2aWV3cG9ydEhlaWdodCArIDE1MCksXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBpbml0UGFnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdzYXAuZnJvbVRvKHBhZ2VDb250ZW50LCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGFzQmVlbkRpc21pc3NlZCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBwbGF5U3BsYXNoUGFnZSgpIHtcbiAgICAgICAgLy8gcGxheSBhbmltYXRpb25cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGxpbmVEcmF3aW5nQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBteUFuaW1hdGlvblNWRy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgLy9vcGFjaXR5IG9uIHRvcCBvZiBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBnc2FwLnRvKGxpbmVEcmF3aW5nQ2xhc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSwgNDAwKTtcblxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdoYXNWaWV3ZWRTcGxhc2hQYWdlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGJvZHkuc3R5bGUucG9zaXRpb24gPSAnaW5pdGlhbCc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3BsYXNoUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gZm9yY2Ugc2Nyb2xsIHRvIHRvcCwgdGhlbiBsb2FkIHNwbGFzaCBwYWdlXG4gICAgICAgIGlmKHNob3VsZFBsYXkgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhZGUgaW4gYm9keVxuICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IGxvZ2dlZCBpbiBhbmQvb3IgIGVkaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykgfHwgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsLWJ1aWxkZXItZWRpdCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Db25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlTcGxhc2hQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFudWFsLWRpc21pc3MnKSkge1xuICAgICAgICAgICAgICAgIGlmKCEoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpIHx8IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbC1idWlsZGVyLWVkaXQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc1NwbGFzaFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5pdFBhZ2UoKTtcbiAgICAgICAgfSAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcGxhc2hQYWdlOyIsImNvbnN0IHN1aXRlc0dyaWRMaWdodGJveCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlc2ctZ3JpZC0zLTEgbGlcIik7XG4gICAgdmFyIGxpZ2h0Ym94QWN0aXZlID0gZmFsc2U7XG4gICAgdmFyIGFsbExpZ2h0Ym94UG9zdHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZUNsaWNrRXZlbnQoaXRlbSxpbmRleCkge1xuICAgICAgICB2YXIgcG9zdElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zcGxpdCgnLScpO1xuICAgICAgICBwb3N0SUQgPSBwb3N0SURbcG9zdElELmxlbmd0aC0xXTtcbiAgICAgICAgdmFyIHBvc3RDb250ZW50ID0gZ2V0UG9zdChwb3N0SUQpOyAgICAgICAgXG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNyZWF0ZUxpZ2h0Ym94KGFsbExpZ2h0Ym94UG9zdHNbcG9zdElEXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRQb3N0KGlkKSB7XG4gICAgICAgIHZhciBwb3N0ID0gbmV3IHdwLmFwaS5tb2RlbHMuUG9zdCggeyBpZDogaWQgfSApO1xuICAgICAgICBwb3N0LmZldGNoKCkuZG9uZShmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGFsbExpZ2h0Ym94UG9zdHNbaWRdID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpZ2h0Ym94KGNvbnRlbnQpIHtcbiAgICAgICAgaWYoY29udGVudCAhPT0gdW5kZWZpbmVkICYmICFsaWdodGJveEFjdGl2ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgdmFyIG1hcmt1cCA9ICc8ZGl2IGlkPVwiZXNzZW50aWFsR3JpZEN1c3RvbUxpZ2h0Ym94XCIgY2xhc3M9XCJlc3NlbnRpYWwtZ3JpZC1jdXN0b20tbW9kYWxcIj48ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZGlzbWlzc1wiPjxidXR0b24+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2J1dHRvbj48L2Rpdj4nK2NvbnRlbnQucmVuZGVyZWQrJzwvZGl2PjwvZGl2Pic7XG4gICAgICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtYXJrdXApO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc21pc3MgYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXNzZW50aWFsLWdyaWQtY3VzdG9tLW1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveClcbiAgICAgICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGlmKGxpZ2h0Ym94QWN0aXZlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc21pc3MgYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vzc2VudGlhbEdyaWRDdXN0b21MaWdodGJveFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpZ2h0Ym94QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5Ym9hcmREaXNtaXNzTGlnaHRib3goZSkge1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgZ3JpZEl0ZW1zLmZvckVhY2goY29uZmlndXJlQ2xpY2tFdmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdWl0ZXNHcmlkTGlnaHRib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==