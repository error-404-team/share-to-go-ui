import React from 'react';

// Get Apis Google Maps
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
type="text/javascript"></script> */}

function loadLinks(url,stylesheet,type,async,defer) {
    var index = window.document.getElementsByTagName("link")[0]
    var link = window.document.createElement("link")
    link.href = url
    link.rel = stylesheet
    link.type = type
    link.async = async
    link.defer = defer
    index.parentNode.insertBefore(link, index)
}

export default loadLinks;


// วิธีใช้ 
// import loadScript from 'loadScript'
// loadScript('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')