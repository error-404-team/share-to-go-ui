import React from 'react';

// Get Apis Google Maps
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
type="text/javascript"></script> */}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default loadScript;


// วิธีใช้ 
// import loadScript from 'loadScript'
// loadScript('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')