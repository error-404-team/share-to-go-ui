import React from 'react'
import './styles/CenterMapBtn.css'
import './styles/MuiButtonBase.css'
import './styles/MuiFab.css'
import './styles/MuiSvgIcon.css'
import './styles/MuiTouchRipple.css'

function mapCenterBtn(el, map, position) {

    // สร้าง Element button
    let button = document.createElement('button');

    // กำหนด style button
    button.style.margin = '15px'

    // add  Attribute class button
    let buttonClass = document.createAttribute('class');
    buttonClass.value = 'MuiButtonBase-root-15 MuiFab-root-5 MuiFab-primary-7 MuiFab-sizeMedium-14 CenterMapBtn-fab-2'
    button.setAttributeNode(buttonClass)

    // รวม button
    el.appendChild(button)

     // สร้าง Element i
    let i =document.createElement('i')
    
     // add  Attribute class i
    let iClass = document.createAttribute('class');
    iClass.value = 'material-icons'
    i.setAttributeNode(iClass)
    i.innerHTML = 'my_location'
    button.appendChild(i)

     // Setup the click event listeners: simply set the map to Chicago.
     button.addEventListener('click', function () {
    map.setCenter(position);
    });

}

export default mapCenterBtn;

