"use client"

type geoDataTypes = {
  name:string
  coordinates:[number, number]
}[]

import React from 'react'
import mapboxgl from 'mapbox-gl'

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string
mapboxgl.accessToken = mapToken;

const locations = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Lincoln Park",
        "description": "A northside park that is home to the Lincoln Park Zoo"
      },
      "geometry": {
        "coordinates": [-87.637596, 41.940403],
        "type": "Point"
      }
    },
  ],
};

export default function Map(geoData:geoDataTypes) {
  const mapContainerRef = React.useRef(null);
  console.log("inside map.tsx, geodata = ", geoData);

  React.useEffect(() => {
    let map: mapboxgl.Map;
    if (mapContainerRef.current) {
      map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-8.135775, 40.061326],
        zoom: 7.5
      });

    // Create default markers
  //   geoData.map((feature) =>
  //   new mapboxgl.Marker().setLngLat(feature.coordinates).addTo(map)
  //   );
  }

    // Clean up on unmount
    return () => map && map.remove();
  }, [geoData]);

  return (
    <>
      <section className={"h-[600px]"}>
        <div className={"h-full"} ref={mapContainerRef}></div>
      </section>
    </>
  )
}
