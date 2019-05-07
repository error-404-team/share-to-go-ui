function createPopupClass() {
    /**
     * A customized popup on the map.
     * @param {!google.maps.LatLng} position
     * @param {!Element} content The bubble div.
     * @constructor
     * @extends {google.maps.OverlayView}
     */
    function Popup(position, content, url) {
        this.position = position;
        this.url = url
        this.content = content


        this.popupImg = document.createElement('img');

        // set attribute 
        this.popupImgSrc = document.createAttribute('src')
        this.popupImgSrc.value = this.url
        this.popupImg.setAttributeNode(this.popupImgSrc)
        this.popupImgAlt = document.createAttribute('alt')
        this.popupImgAlt.value = "User Name"
        this.popupImg.setAttributeNode(this.popupImgAlt)

        // set style
        this.popupImg.style.width = '20px';
        this.popupImg.style.height = '20px';    
        this.popupImg.style.border = '2px solid #fff';
        this.popupImg.style.borderRadius = '50%';
        this.popupImg.style.boxShadow = '0 4px 6px rgba(0, 0, 0, .1)';
        this.popupImg.style.margin = '0';
        this.popupImg.style.position = 'absolute';


        this.content.appendChild(this.popupImg);


        window.google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.popupImg);
    }
    // ES5 magic to extend window.google.maps.OverlayView.
    Popup.prototype = Object.create(window.google.maps.OverlayView.prototype);

    /** Called when the popup is added to the map. */
    Popup.prototype.onAdd = function () {
        this.getPanes().floatPane.appendChild(this.popupImg);
    };

    /** Called when the popup is removed from the map. */
    Popup.prototype.onRemove = function () {
        if (this.popupImg.parentElement) {
            this.popupImg.parentElement.removeChild(this.popupImg);
        }
    };

    /** Called each frame when the popup needs to draw itself. */
    Popup.prototype.draw = function () {
        var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

        // Hide the popup when it is far out of view.
        var display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';

        if (display === 'block') {
            this.popupImg.style.left = divPosition.x + 'px';
            this.popupImg.style.top = divPosition.y + 'px';
        }
        if (this.popupImg.style.display !== display) {
            this.popupImg.style.display = display;
        }
    };

    return Popup;
}

export default createPopupClass;