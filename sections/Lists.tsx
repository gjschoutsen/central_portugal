"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/db/supabase-client";
import { Location } from "@/types/collection.types"


export default function Lists() {
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [locations, setLocations ] = useState<Location[] | null>()

  // Fetch locations from supabase
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

const handleOnClick = (e) => {
    console.log(e.target.innerText)
}
  

const renderList = () => {
 return(
    <>
   
    </>
   
 )
}

return(
    <>
        <header>
           <ul
           className="flex justify-center space-x-3 p-4"
           >
            <li className="hover:cursor-pointer" onClick={handleOnClick}> Shops and Services  </li>
            <li onClick={handleOnClick}>  Sights </li>
            <li onClick={handleOnClick}> Public Services  </li>
            <li onClick={handleOnClick}> Utilities  </li>
            <li onClick={handleOnClick}> Restaurants  </li>
           </ul>
        </header>
        <section>
            {renderList()}
        </section>
    </>
)
}