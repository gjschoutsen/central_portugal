"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import MapGl, { Marker } from 'react-map-gl';
import { IMapMarker } from '@/types/map.types'
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image'

import {MarkerPopup} from '@/components/MarkerPopup'
import img from "@/public/assets/img/mountain.jpg"

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string

interface MapProps {
  mapMarkers: IMapMarker[];
  activePopupId: number;
  setActivePopupId: Dispatch<SetStateAction<number>>;
}

export default function Map({ mapMarkers, activePopupId, setActivePopupId }: MapProps) {
  

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
                <div key={marker.id}>

                  <Marker 
                    longitude={marker.coordinates[0]}
                    latitude={marker.coordinates[1]}
                    onClick={ () => setActivePopupId(marker.id) }  
                    >
                      <Image 
                        src={img}
                        width={30}
                        height={30}
                        alt="clothing store"
                        />
                        <p>
                          Mountain
                        </p>
                    </Marker>
                    {activePopupId === marker.id && (
                      <MarkerPopup 
                      long= {marker.coordinates[0]}
                      lat= {marker.coordinates[1]}
                      name= {marker.name}
                      onClose= {()=>setActivePopupId(0)}
                      />
                      )}
                      </div>
              )}
            )
          }
        </MapGl>
      
      </section>
    </>
  )
}
