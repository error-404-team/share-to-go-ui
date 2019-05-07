import React from 'react'
import './styles/InputSearch.css'
import './styles/MuiToolbar.css'
import './styles/MuiPaper.css'
import './styles/MuiInputBase.css'
import './styles/MuiIconButton.css'
import './styles/MuiAppBar.css'
import './styles/MuiDivider.css'
import './styles/MuiTouchRipple.css'
import './styles/MuiSvgIcon.css'
import './styles/MuiButtonBase.css'

function searchMap(el, map, position) {
    this.element = el
    this.map = map
    this.position = position

    // create element div
    this.div = document.createElement('div');

    // add attribute class
    this.divClass = document.createAttribute('class')
    this.divClass.value = 'InputSearch-root-2'
    this.div.setAttributeNode(this.divClass)

    // all tag div
    this.element.appendChild(this.div)

    // ----------------------------

    // create element header
    this.header = document.createElement('header');

    // add attribute class
    this.headerClass = document.createAttribute('class');
    this.headerClass.value = 'MuiToolbar-root-43 MuiToolbar-regular-45 MuiToolbar-gutters-44'
    this.header.setAttributeNode(this.headerClass)

    // all tag header
    this.div.appendChild(this.header)

    // --------------------------------

    // create element div
    this.div_I = document.createElement('div');

    // add attribute class
    this.divClass_I = document.createAttribute('class')
    this.divClass_I.value = 'MuiToolbar-root-43 MuiToolbar-regular-45 MuiToolbar-gutters-44'
    this.div_I.setAttributeNode(this.divClass_I)

    // all tag div
    this.header.appendChild(this.div_I)

    // --------------------------------

    // create element div
    this.div_II = document.createElement('div');

    // add attribute class
    this.divClass_II = document.createAttribute('class')
    this.divClass_II.value = 'MuiPaper-root-47 MuiPaper-elevation1-50 MuiPaper-rounded-48 InputSearch-inputRoot-3'
    this.div_II.setAttributeNode(this.divClass_II)

    //set style
    this.div_II.style.borderRadius = '30px';
    this.div_II.style.height = '40px';

    // all tag div
    this.div_I.appendChild(this.div_II)

    // --------------------------------

    // create element button
    this.button = document.createElement('button');

    // add attribute class && tabindex && type && aria-label
    this.buttonClass = document.createAttribute('class')
    this.buttonClass.value = 'MuiButtonBase-root-80 MuiIconButton-root-74 InputSearch-iconButton-5'
    this.button.setAttributeNode(this.buttonClass)
    this.buttonTabindex = document.createAttribute('tabindex')
    this.buttonTabindex.value = 0
    this.button.setAttributeNode(this.buttonTabindex)
    this.buttonType = document.createAttribute('type')
    this.buttonType.value = 'button'
    this.button.setAttributeNode(this.buttonType)
    this.buttonAriaLabel = document.createAttribute('aria-label')
    this.buttonAriaLabel.value = 'Menu'
    this.button.setAttributeNode(this.buttonAriaLabel)

    //set style
    this.button.style.borderRadius = '30px';
    this.button.style.height = '40px';

    // all tag div
    this.div_II.appendChild(this.button)

    // --------------------------------

    // สร้าง Element i
    this.i = document.createElement('i')

    // add  Attribute class i
    this.iClass = document.createAttribute('class');
    this.iClass.value = 'material-icons'
    this.i.setAttributeNode(this.iClass)
    this.i.innerHTML = 'menu'

    // all tag i
    this.button.appendChild(this.i)

    //  --------------------------------

    // create element div
    this.div_III = document.createElement('div');

    // add attribute class
    this.divClass_III = document.createAttribute('class')
    this.divClass_III.value = 'MuiInputBase-root-92 InputSearch-input-4'
    this.div_III.setAttributeNode(this.divClass_III)

    // all tag div
    this.div_II.appendChild(this.div_III)

    // --------------------------------

    // create element input
    this.input = document.createElement('input');

    // add attribute class && placeholder && type && value
    this.inputID = document.createAttribute('id')
    this.inputID.value = 'pac-input'
    this.input.setAttributeNode(this.inputID)
    this.inputClass = document.createAttribute('class')
    this.inputClass.value = 'MuiInputBase-input-102'
    this.input.setAttributeNode(this.inputClass)
    this.placeholder = document.createAttribute('placeholder')
    this.placeholder.value = 'Search Google Maps'
    this.input.setAttributeNode(this.placeholder)
    this.inputType = document.createAttribute('type')
    this.inputType.value = 'text'
    this.input.setAttributeNode(this.inputType)
    // this.inputValue = document.createAttribute('value')
    // inputValue.value = null
    // input.setAttributeNode(inputValue)

    var autocomplete = new window.google.maps.places.Autocomplete(this.input);

    autocomplete.bindTo('bounds', map);

    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    // all tag div
    this.div_III.appendChild(this.input)

    // --------------------------------

    // create element button
    this.button_I = document.createElement('button');

    // add attribute class && tabindex && type && aria-label
    this.buttonID_I = document.createAttribute('id')
    this.buttonID_I.value = 'submit'
    this.button_I.setAttributeNode(this.buttonID_I)
    this.buttonClass_I = document.createAttribute('class')
    this.buttonClass_I.value = 'MuiButtonBase-root-80 MuiIconButton-root-74 InputSearch-iconButton-5'
    this.button_I.setAttributeNode(this.buttonClass_I)
    this.buttonTabindex_I = document.createAttribute('tabindex')
    this.buttonTabindex_I.value = 0
    this.button_I.setAttributeNode(this.buttonTabindex_I)
    this.buttonType_I = document.createAttribute('type')
    this.buttonType_I.value = 'button'
    this.button_I.setAttributeNode(this.buttonType_I)
    this.buttonAriaLabel_I = document.createAttribute('aria-label')
    this.buttonAriaLabel_I.value = 'Search'
    this.button_I.setAttributeNode(this.buttonAriaLabel_I)

    var marker = new window.google.maps.Marker({
        map: map,
        anchorPoint: new window.google.maps.Point(0, -29)
      });

    // all tag div
    this.div_II.appendChild(this.button_I)

    this.button_I.addEventListener('click', function() {

        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

      });

 

    // --------------------------------

    // สร้าง Element i
    this.i_I = document.createElement('i')

    // add  Attribute class i
    this.iClass_I = document.createAttribute('class');
    this.iClass_I.value = 'material-icons'
    this.i_I.setAttributeNode(this.iClass_I)
    this.i_I.innerHTML = 'search'

    // all tag i
    this.button_I.appendChild(this.i_I)

    //  --------------------------------

    // สร้าง Element hr
    this.hr = document.createElement('hr')

    // add  Attribute class hr
    this.hrClass = document.createAttribute('class');
    this.hrClass.value = 'MuiDivider-root-109 InputSearch-divider-6'
    this.hr.setAttributeNode(this.hrClass)

    // all tag hr
    this.div_II.appendChild(this.hr)

    //  --------------------------------

    // create element button
    this.button_II = document.createElement('button');

    // add attribute class && tabindex && type && aria-label
    this.buttonID_II = document.createAttribute('id')
    this.buttonID_II.value = 'directions'
    this.button_II.setAttributeNode(this.buttonID_II)
    this.buttonClass_II = document.createAttribute('class')
    this.buttonClass_II.value = 'MuiButtonBase-root-80 MuiIconButton-root-74 MuiIconButton-colorPrimary-76 InputSearch-iconButton-5'
    this.button_II.setAttributeNode(this.buttonClass_II)
    this.buttonTabindex_II = document.createAttribute('tabindex')
    this.buttonTabindex_II.value = 0
    this.button_II.setAttributeNode(this.buttonTabindex_II)
    this.buttonType_II = document.createAttribute('type')
    this.buttonType_II.value = 'button'
    this.button_II.setAttributeNode(this.buttonType_II)
    this.buttonAriaLabel_II = document.createAttribute('aria-label')
    this.buttonAriaLabel_II.value = 'Directions'
    this.button_II.setAttributeNode(this.buttonAriaLabel_II)

    var directionsService = new window.google.maps.DirectionsService;
    var directionsDisplay = new window.google.maps.DirectionsRenderer;

    directionsDisplay.setMap(map);
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
            origin: position,
            destination: document.getElementById('pac-input').value,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    // all tag div
    this.div_II.appendChild(this.button_II)

    this.button_II.addEventListener('click', function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });


    // --------------------------------

    // สร้าง Element i
    this.i_II = document.createElement('i')

    // add  Attribute class i
    this.iClass_II = document.createAttribute('class');
    this.iClass_II.value = 'material-icons'
    this.i_II.setAttributeNode(this.iClass_II)
    this.i_II.innerHTML = 'directions'

    // all tag i
    this.button_II.appendChild(this.i_II)

    //  --------------------------------
}

export default searchMap;