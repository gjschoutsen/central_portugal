import { Black_And_White_Picture } from 'next/font/google';
import { useState } from 'react'
import { Popup } from 'react-map-gl';

type MarkerPopupTypes = {
    long: number;
    lat: number;
    closePopup: (setToFalse: boolean)=>{}
  }

export const MarkerPopup = ({ long, lat, closePopup}: MarkerPopupTypes) => {

    return (
            <Popup 
                longitude= {long} 
                latitude= {lat}
                anchor= "bottom"
                onClose= {() => {closePopup(false)} }
                closeButton= {true}
                closeOnClick= {false}
                offset= {[0, -35]}
            >
                 You are here!
            </Popup>
    )
    
}