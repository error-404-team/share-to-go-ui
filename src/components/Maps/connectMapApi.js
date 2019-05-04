import React from 'react'
import loadScriptMaps from './loadScriptMaps'


// connect map api from YOUR_API_KEY
// and create maps by initMap

function connectMapApi(YOUR_API_KEY, initMap) {
    loadScriptMaps(`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`)

    window.initMap = initMap;
}


module.exports = connectMapApi;


// วิธีใช้ 
// improt connectMapApi from 'connectMapApi'
// var YOUR_API_KEY = 'dfg-fg-dfgl-dkl'
// function initMap () {....}
// connectMapApi(YOUR_API_KEY, initMap)