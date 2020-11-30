const formStyling = (function () {

    function dropdown() {
        var selectNodes = document.querySelectorAll('.wpforms-field-select select');
        
        for(var i = 0; i < selectNodes.length; i++) {
            // run for each select node
            var currentSelect = selectNodes[i];
            var liMarkup = '';
            var options = selectNodes[i].options;
            var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

            for(var j = 0; j < options.length; j++) {
                var item = '<li class="dropdown-item"><a href="#"data-dd="'+currentSelect.getAttribute("id")+'" data-value="'+options[j].getAttribute('value')+'">'+options[j].innerHTML+'</a></li>';
                liMarkup += item;
            }

            var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">'+currentSelectionText+'</span><span class="arrow"></span></p><ul class="dd-container">'+liMarkup+'</ul></div>';
            selectNodes[i].insertAdjacentHTML('afterend', html); 
        }

        document.querySelectorAll('.custom-dropdown .selected-option').forEach(function(el) {
            el.addEventListener('click', openDropdown);
        })

        // click on dropdown element
        document.querySelectorAll('.dropdown-item a').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                var findSelect = this.getAttribute('data-dd');
                var originalSelect = document.querySelector("#"+findSelect);
                updateOriginalSelect(this, originalSelect);
                updateLabel(this, originalSelect);
                closeDropdown();
            })
        });        
    }

    function updateLabel(clickedEl, originalSelect) {
        var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
        labelTextNode.innerHTML = clickedEl.innerHTML;
    }

    function updateOriginalSelect(clickedEl, originalSelect) {
        for(var i = 0; i < originalSelect.options.length; i++) {
            if(originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
                originalSelect.options[i].setAttribute('selected', true);
            }
            else {
                originalSelect.options[i].removeAttribute('selected');
            }
        }
    }

    function closeDropdown() {
        document.querySelectorAll('ul.dd-container').forEach(function(el) {
            el.classList.add('dd-closed');
            el.classList.remove('dd-open');
        })
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
    }
});

export default formStyling;