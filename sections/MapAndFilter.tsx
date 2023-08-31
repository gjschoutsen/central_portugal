"use client"

import { MapFilter } from "@/components/MapFilter";
import Map from "../components/Map"
import {
  mokBusinessDirectory, 
  mokGovernmentLocations, 
  mokSightSeeingDirectory, 
  mokBusinessDirectoryTypes
  } from "../public/assets/mokAPI/mokApi"
import { useState } from "react";

export const MapAndFilter = () => {
  const [quaryFromFilter, setQuaryFromFilter] = useState({business:true, sights:true, government:true})
  const [geoData, setGeoData] = useState([])

  const getQuaryFromFilter = (quary:object)=>{
    createGeoData(quary)
  }

const createGeoData = (quary)=>{
    const result = {
      name:"",
      long:"",
      lat:""
    }
    mokBusinessDirectory.map((singleBusiness)=>{
      return(

        result.name = singleBusiness.nameOfBusiness,
        result.long = singleBusiness.coordinats.long,
        result.lat = singleBusiness.coordinats.lat        
      )
    })
    setGeoData()
  }

  console.log("geodata "+ geoData);


  return (
    <>
        <MapFilter 
          sendInfoToMap= {getQuaryFromFilter}
          />
        <Map geoData= {geoData}/>
    </>
  )
  }