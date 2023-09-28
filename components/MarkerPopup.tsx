import { Offset } from 'mapbox-gl';
import { Popup } from 'react-map-gl';

type MarkerPopupTypes = {
    long: number;
    lat: number;
    name: string;
    onClose: VoidFunction
  }

export const MarkerPopup = ({ long, lat, onClose, name, }: MarkerPopupTypes) => {

    return (
            <Popup 
                longitude= {long} 
                latitude= {lat}
                anchor= "bottom"
                onClose= {onClose}
                closeButton= {true}
                closeOnClick= {false}
                offset= {[0, -35] as Offset}
            >
                 {name}
            </Popup>
    )
    
}