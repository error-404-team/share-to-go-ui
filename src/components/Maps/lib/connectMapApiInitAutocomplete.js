import React from 'react'
import loadScriptMaps from './loadScriptMaps'


// connect map api from YOUR_API_KEY
// and create maps by initMap

function connectMapApiInitAutocomplete(YOUR_API_KEY, initAutocomplete) {
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`)
    loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=geometry`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=drawing`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=initPano`)

    window.initAutocomplete = initAutocomplete;
}


export default connectMapApiInitAutocomplete;


// วิธีใช้ 
// improt connectMapApi from 'connectMapApi'
// var YOUR_API_KEY = 'dfg-fg-dfgl-dkl'
// function initMap () {....}
// connectMapApi(YOUR_API_KEY, initMap)