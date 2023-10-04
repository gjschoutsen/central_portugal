import { Offset } from 'mapbox-gl';
import { Popup } from 'react-map-gl';
import { CldImage } from 'next-cloudinary';

type MarkerPopupTypes = {
    long: number;
    lat: number;
    name: string | null;
    onClose: VoidFunction
  }

export const MarkerPopup = ({ long, lat, onClose, name, marker }: MarkerPopupTypes) => {

    return (
            <Popup 
                maxWidth="150px"
                longitude= {long} 
                latitude= {lat}
                anchor= "bottom"
                onClose= {onClose}
                closeButton= {true}
                closeOnClick= {false}
                offset= {[0, -35] as Offset}
            >        <CldImage 
            src={marker.img}
            width={80}
            height={90}
            sizes='100vw'
            alt={marker.name || ''}
            />
                 {name}
            </Popup>
    )
    
}