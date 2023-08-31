
"use client"

import { useEffect, useState } from "react";

export const MapFilter = ({sendInfoToMap}) => {
  const[checkedBusiness, setcheckedBusiness] = useState(true)
  const[checkedSights, setcheckedSights] = useState(true)
  const[checkedGovernment, setcheckedGovernment] = useState(true)

  const handleBusinessCheckbox= (e)=>{
    if(checkedBusiness){
    setcheckedBusiness(false)
    } else {
      setcheckedBusiness(true)
    }
  }

  const handleSightsCheckbox= (e)=>{
    if(checkedSights){
   setcheckedSights(false)
    } else {
      setcheckedSights(true)
    }
  }

  const handleGovernmentCheckbox= (e)=>{
    if(checkedGovernment){
   setcheckedGovernment(false)
    } else {
      setcheckedGovernment(true)
    }
  }
  
  useEffect(()=>{
  
    const quary = {
      business: checkedBusiness,
      sights: checkedSights,
      government: checkedGovernment,
    }

    sendInfoToMap(quary)
  })

  return (
    <form>
      <label>
      <input type="checkbox" value="business" checked={checkedBusiness} onChange={handleBusinessCheckbox}/>
        Business</label>
      <label>
      <input type="checkbox" value="sights" checked={checkedSights} onChange={handleSightsCheckbox}/>
        Sight Seeing</label>
      <label>
      <input type="checkbox" value="government" checked={checkedGovernment} onChange={handleGovernmentCheckbox}/>
        Government</label>
    </form>
  )
}
