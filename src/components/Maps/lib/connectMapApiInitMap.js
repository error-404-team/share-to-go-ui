import React from 'react'
import loadScriptMaps from './loadScriptMaps'


// connect map api from YOUR_API_KEY
// and create maps by initMap

function connectMapApiInitMap(YOUR_API_KEY, initMap) {
    
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`)
    loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places&callback=initMap`)
        // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=geometry&callback=initMap`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=drawing&callback=initMap`)
    // loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=initPano&callback=initMap`)

    window.initMap = initMap;
}


export default connectMapApiInitMap;


// วิธีใช้ 
// improt connectMapApi from 'connectMapApi'
// var YOUR_API_KEY = 'dfg-fg-dfgl-dkl'
// function initMap () {....}
// connectMapApi(YOUR_API_KEY, initMap)