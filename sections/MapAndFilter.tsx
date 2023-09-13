"use client"

import { MapFilter } from "@/components/MapFilter";
import { IFilterState } from "@/types/filters.types";
import { IMapMarker } from "@/types/map.types";
import Map from "../components/Map"
import {
  mokBusinessDirectory, 
  mokGovernmentLocations, 
  mokSightSeeingDirectory, 
  mokBusinessDirectoryTypes
  } from "../public/assets/mokAPI/mokApi"
import { useEffect, useState } from "react";

export const MapAndFilter = () => {
  const [filterState, setFilterState] = useState<IFilterState>({
    business:true, 
    sights:true, 
    government:true,
  });
  
  const [mapMarkers, setMapMarkers] = useState<IMapMarker[]>([])

  useEffect(()=>{
    let result: IMapMarker[] = [];

    if (filterState.business) {
      result = [
        ...result, 
        ...mokBusinessDirectory.map((business) => {
          return {
            name: business.nameOfBusiness,
            coordinates:business.coordinats,
          }
        }),
      ];
    }

    if(filterState.sights) {
      result = [
        ...result,
        ...mokSightSeeingDirectory.map((sight) => {
          return {
            name: sight.name,
            coordinates: sight.coordinats,
          }
        })
      ]
    }

    if (filterState.government) {
      result = [
        ...result, 
        ...mokGovernmentLocations.map((location) => {
          return {
            name: location.name,
            coordinates: location.coordinats,
          }
        }),
      ];
    }
    
      console.log("inside use effect, result ", result );
      setMapMarkers(result)
  }, [filterState])

  return (
    <>
        <MapFilter 
          filterState={filterState} 
          onFiltersChanged={setFilterState}
        />
        <Map mapMarkers={mapMarkers}/>
    </>
  )
  }