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



(function () {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybS1zdHlsaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zcGxhc2gtcGFnZS5qcyJdLCJuYW1lcyI6WyJzcCIsInNwbGFzaFBhZ2UiLCJmcyIsImZvcm1TdHlsaW5nIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsYXVuY2hMaWdodGJveCIsImRpc21pc3NMaWdodGJveCIsImxpZ2h0Ym94Rm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImRyb3Bkb3duIiwic2VsZWN0Tm9kZXMiLCJpIiwibGVuZ3RoIiwiY3VycmVudFNlbGVjdCIsImxpTWFya3VwIiwib3B0aW9ucyIsImN1cnJlbnRTZWxlY3Rpb25UZXh0Iiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJqIiwiaXRlbSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImh0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJvcGVuRHJvcGRvd24iLCJmaW5kU2VsZWN0Iiwib3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVPcmlnaW5hbFNlbGVjdCIsInVwZGF0ZUxhYmVsIiwiY2xpY2tlZEVsIiwibGFiZWxUZXh0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNob3VsZFBsYXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJoYXNCZWVuRGlzbWlzc2VkIiwiYm9keSIsImxpbmVEcmF3aW5nQ2xhc3MiLCJkaXNtaXNzU3BsYXNoTGluayIsInBhZ2VDb250ZW50IiwibXlBbmltYXRpb25TVkciLCJhZGRMaXN0ZW5lcnMiLCJkaXNtaXNzU3BsYXNoUGFnZSIsIndpbmRvdyIsInNjcm9sbExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJhbmltYXRpb25Db25maWciLCJWaXZ1cyIsInR5cGUiLCJzdGFydCIsImFuaW1UaW1pbmdGdW5jdGlvbiIsIkVBU0VfT1VUIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInRvIiwieSIsIm9uQ29tcGxldGUiLCJpbml0UGFnZSIsInBsYXlTcGxhc2hQYWdlIiwic2V0VGltZW91dCIsInBsYXkiLCJzZXRJdGVtIiwiaW5uZXJXaWR0aCIsImV2ZW50Iiwic2Nyb2xsVG8iLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztB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LFdBQXhCLEtBQXdDakMsSUFBSSxDQUFDdkMsU0FBTCxDQUFld0UsUUFBZixDQUF3QixpQkFBeEIsQ0FBMUMsQ0FBSCxFQUEwRjtBQUN0Rk4sb0JBQVUsQ0FBQyxZQUFVO0FBQ2pCckIsNkJBQWlCO0FBQ3BCLFdBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKO0FBQ0osS0F4QkQsTUF5Qks7QUFDRG1CLGNBQVE7QUFDWDtBQUNKOztBQUVELFNBQU87QUFDSDVFLFFBQUksRUFBRUE7QUFESCxHQUFQO0FBR0gsQ0E3SEQ7O0FBK0hlSCx5RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBzcGxhc2hQYWdlIGZyb20gJy4vc3BsYXNoLXBhZ2UnO1xuaW1wb3J0IGZvcm1TdHlsaW5nIGZyb20gJy4vZm9ybS1zdHlsaW5nJztcblxuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpOyBcbiAgICBjb25zdCBmcyA9IGZvcm1TdHlsaW5nKCk7XG5cbiAgICBzcC5pbml0KCk7ICAgIFxuICAgIGZzLmluaXQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdpc3Rlci1saW5rJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxhdW5jaExpZ2h0Ym94KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94LWRpc21pc3MnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3goKSB7XG4gICAgICAgIHZhciBsaWdodGJveEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8obGlnaHRib3hGb3JtLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMTVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBmcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodGJveC1vcGVuJyk7XG4gICAgfVxufVxuICAgIFxuKCkpOyIsImNvbnN0IGZvcm1TdHlsaW5nID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuICAgICAgICB2YXIgc2VsZWN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3Bmb3Jtcy1maWVsZC1zZWxlY3Qgc2VsZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxhIGhyZWY9XCIjXCJkYXRhLWRkPVwiJytjdXJyZW50U2VsZWN0LmdldEF0dHJpYnV0ZShcImlkXCIpKydcIiBkYXRhLXZhbHVlPVwiJytvcHRpb25zW2pdLmdldEF0dHJpYnV0ZSgndmFsdWUnKSsnXCI+JytvcHRpb25zW2pdLmlubmVySFRNTCsnPC9hPjwvbGk+JztcbiAgICAgICAgICAgICAgICBsaU1hcmt1cCArPSBpdGVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCI+PHAgY2xhc3M9XCJzZWxlY3RlZC1vcHRpb25cIj48c3BhbiBjbGFzcz1cInRleHRcIj4nK2N1cnJlbnRTZWxlY3Rpb25UZXh0Kyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj48L3A+PHVsIGNsYXNzPVwiZGQtY29udGFpbmVyXCI+JytsaU1hcmt1cCsnPC91bD48L2Rpdj4nO1xuICAgICAgICAgICAgc2VsZWN0Tm9kZXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRyb3Bkb3duKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjbGljayBvbiBkcm9wZG93biBlbGVtZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZmluZFNlbGVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3JpZ2luYWxTZWxlY3QodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbiAgICAgICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuICAgICAgICBsYWJlbFRleHROb2RlLmlubmVySFRNTCA9IGNsaWNrZWRFbC5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYob3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IGNsaWNrZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RkLW9wZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2RkLW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBkcm9wZG93bigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXQsXG4gICAgICAgIGNsb3NlRHJvcGRvd246IGNsb3NlRHJvcGRvd25cbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybVN0eWxpbmc7IiwiY29uc3Qgc3BsYXNoUGFnZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBsb2dpY1xuICAgIHZhciBzaG91bGRQbGF5ID0gIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2hhc1ZpZXdlZFNwbGFzaFBhZ2UnKTsgLy8gc2V0IHRvIGNvb2tpZXNcbiAgICB2YXIgaGFzQmVlbkRpc21pc3NlZCA9IGZhbHNlO1xuXG4gICAgLy8gcXVlcmllc1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBsaW5lRHJhd2luZ0NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmVEcmF3aW5nJyk7XG4gICAgdmFyIGRpc21pc3NTcGxhc2hMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc21pc3NTcGxhc2ggaW1nJyk7XG4gICAgdmFyIHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmbC1tYWluLWNvbnRlbnQsIGhlYWRlclwiKTtcblxuICAgIC8vIHBsYWNlaG9sZGVyc1xuICAgIHZhciBteUFuaW1hdGlvblNWRztcblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgZGlzbWlzc1NwbGFzaExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzU3BsYXNoUGFnZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSAxNTApIHtcbiAgICAgICAgICAgIGRpc21pc3NTcGxhc2hQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25Db25maWcoKSB7XG4gICAgICAgIGlmKGxpbmVEcmF3aW5nQ2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBteUFuaW1hdGlvblNWRyA9IG5ldyBWaXZ1cygnbGluZURyYXdpbmcnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NjZW5hcmlvJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnbWFudWFsJyxcbiAgICAgICAgICAgICAgICBhbmltVGltaW5nRnVuY3Rpb246IFZpdnVzLkVBU0VfT1VUXG4gICAgICAgICAgICB9LCBkaXNtaXNzU3BsYXNoUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc1NwbGFzaFBhZ2UoKSB7XG4gICAgICAgIGlmKCFoYXNCZWVuRGlzbWlzc2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0tYmxhY2spJztcbiAgICAgICAgICAgIGJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBnc2FwLnRvKHNwbGFzaFBhZ2UsIHtcbiAgICAgICAgICAgICAgICB5Oi0odmlld3BvcnRIZWlnaHQgKyAxNTApLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogaW5pdFBhZ2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnc2FwLmZyb21UbyhwYWdlQ29udGVudCwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS4yLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhhc0JlZW5EaXNtaXNzZWQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2UoKSB7XG4gICAgICAgIC8vIHBsYXkgYW5pbWF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihsaW5lRHJhd2luZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgbXlBbmltYXRpb25TVkcucGxheSgpO1xuICAgICAgICAgICAgICAgIC8vb3BhY2l0eSBvbiB0b3Agb2YgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgZ3NhcC50byhsaW5lRHJhd2luZ0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0sIDQwMCk7XG5cbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaGFzVmlld2VkU3BsYXNoUGFnZScsIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2luaXRpYWwnO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNwbGFzaFBhZ2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIC8vIGZvcmNlIHNjcm9sbCB0byB0b3AsIHRoZW4gbG9hZCBzcGxhc2ggcGFnZVxuICAgICAgICBpZihzaG91bGRQbGF5ICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgICBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWRlIGluIGJvZHlcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBsb2dnZWQgaW4gYW5kL29yICBlZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmKCEoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpIHx8IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbC1idWlsZGVyLWVkaXQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5U3BsYXNoUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1kaXNtaXNzJykpIHtcbiAgICAgICAgICAgICAgICBpZighKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSB8fCBib2R5LmNsYXNzTGlzdC5jb250YWlucygnZmwtYnVpbGRlci1lZGl0JykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NTcGxhc2hQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluaXRQYWdlKCk7XG4gICAgICAgIH0gICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9