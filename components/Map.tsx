"use client"
import React, { useState } from 'react'
import MapGl, { Marker } from 'react-map-gl';
import { IMapMarker } from '@/types/map.types'
import 'mapbox-gl/dist/mapbox-gl.css';

import {MarkerPopup} from '@/components/MarkerPopup'
import { clearStorage } from 'mapbox-gl';
import { open } from 'fs';
import { data } from 'autoprefixer';

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string

interface MapProps {
  mapMarkers: IMapMarker[];
}

export default function Map({ mapMarkers }: MapProps) {
  const [showPopup, setShowPopup] = useState(0)

  console.log(showPopup)

 

  return (
    <>
      <section className={"h-[600px]"}>
        <MapGl
          mapboxAccessToken={mapToken}
          initialViewState={{
            longitude: -8.135775,
            latitude: 40.061326,
            zoom: 7.5
          }}
          style={{width: 600, height: 400}}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          { mapMarkers.map((marker) => {
              return (
                <>
                  <Marker 
                    key={marker.id}
                    longitude={marker.coordinates[0]}
                    latitude={marker.coordinates[1]}
                    onClick={ () => setShowPopup(marker.id) }  
                    />
                    {showPopup === marker.id && (
                      <MarkerPopup 
                        long= {marker.coordinates[0]}
                        lat= {marker.coordinates[1]}
                        closePopup= {setShowPopup}
                      />
                    )}
                </>
              )}
            )
          }
        </MapGl>
      
      </section>
    </>
  )
}
