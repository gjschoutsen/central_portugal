"use client"

import { MapFilter } from "@/components/MapFilter";
import { IFilterState } from "@/types/filters.types";
import { IMapMarker } from "@/types/map.types";
import {Location} from "@/types/collection.types"
import Map from "../components/Map"
import { useEffect, useState } from "react";
import { supabase } from "@/db/supabase-client";

export const MapAndFilter = () => {
  const [filterState, setFilterState] = useState<IFilterState>({
    shopsAndServices:true, 
    sights:true, 
    publicServices:true,
    utilities:true,
    restaurants: true
  });
  const [mapMarkers, setMapMarkers] = useState<IMapMarker[]>([])
  const [popupId, setPopupId] = useState(0)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [locations, setLocations ] = useState<Location[] | null>()
  
  //Fetch data from supabase
  useEffect(()=>{

    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from('locations')
        .select();

        if(error) {
                setFetchError("Could not fetch locations from database")
                setLocations(null)
                console.log(error)
              }

        if(data) {
          setFetchError(null)
          setLocations(data)
          console.log("locations: ", data)
        }
    }

    fetchLocations()
  },[])

  //Filter data by type
  useEffect(()=>{
    let result: Location[] = [];
    
    if (filterState.shopsAndServices && locations ) {
      result = [
        ...result,
        locations.filter((location) => location.type === "shopsAndServices")
      ];
    }

    if (filterState.sights && locations ) {
      result = [
        ...result,
        locations.filter((location) => location.type === "sights") 
      ];
    }

    if (filterState.publicServices && locations ) {
      result = [
        ...result,
        locations.filter((location) => location.type === "publicServices") 
      ];
    }

    if (filterState.utilities && locations ) {
      result = [
        ...result,
        locations.filter((location) => location.type === "utilities") 
      ];
    }

    if (filterState.restaurants && locations ) {
      result = [
        ...result,
        locations.filter((location) => location.type === "restaurants") 
      ];
    }
    
      setMapMarkers(result)
      setPopupId(0)

    }, [filterState, locations])
    
  return (
    <>
        {fetchError && (<p>{fetchError}</p>)}
        <MapFilter 
          filterState={filterState} 
          onFiltersChanged={setFilterState}
        />
        <Map mapMarkers={mapMarkers}
            activePopupId= {popupId}
            setActivePopupId= {setPopupId}
        />
    </>
  )
  }