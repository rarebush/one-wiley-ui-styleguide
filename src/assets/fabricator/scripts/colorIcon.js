/**
 * color icon with swatch
 */
window.colorIcon = function (icname) {
    document.getElementById("png-modal").setAttribute("style", "display: block;");
    document.getElementById("png-modal-overlay").setAttribute("style", "display: block;");
    document.getElementById(icname).setAttribute("style", "display:block");

    //close function executes on 'x' and clicking overlay
    window.closePngModal = function () {
        //hide overlay and window
        document.getElementById('png-modal').setAttribute('style', 'display: none;');
        document.getElementById('png-modal-overlay').setAttribute('style', 'display: none;');

        //make the icon in question invisible
        document.getElementById(icname).setAttribute("style", "display:none");

        //reset svg color to black
        //document.getElementById("diagram").setAttribute("fill", "#000000");
    };
};

/**
 * highlight current swatch
 */
window.makeSelected = function (e) {
    var swatches = document.getElementsByClassName("selected");
    for (var i = 0; i < swatches.length; i++) {
        swatches[i].classList.remove('selected');
    }
    e.target.parentNode.classList.add('selected');
}

/**
 * icon info panel
 */
window.iconInfo = function () {
    var iconLi = event.target.parentNode;
    var icInfoPane = iconLi.getElementsByClassName("icon-info");
    if (icInfoPane[0].style.display == "none") {
        icInfoPane[0].style.display = "block";
    } else {
        icInfoPane[0].style.display = "none";
    }
}
window.iconInfoClose = function () {
    var icInfoPane = event.target.parentNode;
    icInfoPane.style.display = "none";
}

/**
 * Icon search with tags
 */
window.tagSearch = function () {
    var tagText = event.target.innerText || event.target.textContent;
    document.getElementById("icon-search").value = tagText;
    for (var i = 0; i < document.getElementsByClassName("ic-search-string").length; i++) {
        if (document.getElementsByClassName("ic-search-string")[i].innerHTML.match(new RegExp(document.getElementById("icon-search").value, "gi"))) {
            document.getElementsByClassName("ic-search-string")[i].parentElement.style.display = "list-item";
        } else {
            document.getElementsByClassName("ic-search-string")[i].parentElement.style.display = "none";
        }
    }
}

/**
 * Icon search
 */
window.onload = function () {
    if (document.getElementById("icon-search")) {

        document.getElementById("icon-search").oninput = function () {
            
            for (var i = 0; i < document.getElementsByClassName("ic-search-string").length; i++) {
                
                if (document.getElementsByClassName("ic-search-string")[i].innerHTML.match(new RegExp(document.getElementById("icon-search").value, "gi"))) {
                    
                    document.getElementsByClassName("ic-search-string")[i].parentElement.style.display = "list-item";
                    
                } else {
                    
                    document.getElementsByClassName("ic-search-string")[i].parentElement.style.display = "none";
                    
                }
            }
        }
    }
}