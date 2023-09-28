"use client"

import { MapFilter } from "@/components/MapFilter";
import { IFilterState } from "@/types/filters.types";
import { IMapMarker } from "@/types/map.types";
import { ShopAndServices, Utilities, PublicServices, Sights} from "@/types/collection.types"
import Map from "../components/Map"
import { useEffect, useState } from "react";
import { supabase } from "@/db/supabase-client";

export const MapAndFilter = () => {
  const [filterState, setFilterState] = useState<IFilterState>({
    shopsAndServices:true, 
    sights:true, 
    publicServices:true,
    utilities:true
  });
  const [mapMarkers, setMapMarkers] = useState<IMapMarker[]>([])
  const [popupId, setPopupId] = useState(0)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [shopsAndServices, setShopsAndServices ] = useState<ShopAndServices[] | null>(null)
  const [sights, setSights ] = useState<Sights[] | null>(null)
  const [utilities, setUtilities ] = useState<Utilities[] | null>(null)
  const [publicServices, setPublicServices ] = useState<PublicServices[] | null>(null)

  //Fetch data from supabase
  useEffect(()=>{
    const fetchShopsAndServices = async () => {
      const {data, error} = await supabase
        .from("shops_and_services")
        .select()

        if(error) {
          setFetchError("Could not fetch shops and services from database")
          setShopsAndServices(null)
          console.log(error)
        }
        if(data) {
          setFetchError(null)
          setShopsAndServices(data)
          console.log("shops and services ", data)
        }
      }
    const fetchSights = async () => {
      const {data, error} = await supabase
        .from("sights")
        .select()

        if(error) {
          setFetchError("Could not fetch sights from database")
          setSights(null)
          console.log(error)
        }
        if(data) {
          setFetchError(null)
          setSights(data)
          console.log("sights ", data)
        }
      }
    
    const fetchPublicServices = async () => {
      const {data, error} = await supabase
        .from("public_services")
        .select()

        if(error) {
          setFetchError("Could not fetch public services from database")
          setPublicServices(null)
          console.log(error)
        }
        if(data) {
          setFetchError(null)
          setPublicServices(data)
          console.log("public services ", data)
        }
      }

    const fetchUtilities = async () => {
      const {data, error} = await supabase
        .from("utilities")
        .select()

        if(error) {
          setFetchError("Could not fetch utilities from database")
          setUtilities(null)
          console.log(error)
        }
        if(data) {
          setFetchError(null)
          setUtilities(data)
          console.log("utilities ", data)
        }
      }
      
      fetchShopsAndServices()
      fetchSights()
      fetchPublicServices()
      fetchUtilities()
  },[])

  useEffect(()=>{
    let result: IMapMarker[] = [];

    if (filterState.shopsAndServices && shopsAndServices) {
      result = [
        ...result, 
        ...shopsAndServices.map((shopOrService) => {
          return {
            id: shopOrService.id,
            name: shopOrService.name,
            coordinates:shopOrService.coordinates,
          }
        }),
      ];
    }

    if(filterState.sights && sights) {
      result = [
        ...result,
        ...sights.map((sight) => {
          return {
            id: sight.id,
            name: sight.name,
            coordinates: sight.coordinates,
          }
        })
      ]
    }

    if (filterState.publicServices && publicServices) {
      result = [
        ...result, 
        ...publicServices.map((publicService) => {
          return {
            id: publicService.id,
            name: publicService.name,
            coordinates: publicService.coordinates,
          }
        }),
      ];
    }
    
    if (filterState.utilities && utilities) {
      result = [
        ...result, 
        ...utilities.map((utility) => {
          return {
            id: utility.id,
            name: utility.name,
            coordinates: utility.coordinates,
          }
        }),
      ];
    }
    
      setMapMarkers(result)
      setPopupId(0)
  }, [filterState])

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