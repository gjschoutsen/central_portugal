"use client"

import { useEffect, useState } from "react"
import {
    mokBusinessDirectory, 
    mokSightSeeingDirectory, 
    mokGovernmentLocations 
        }  from "@/public/assets/mokAPI/mokApi"

export default function Lists() {
    const [list, setList] = useState(mokBusinessDirectory)
    const [showList, setShowList] = useState(true)

const handleOnClick = (e) => {

    if (e.target.innerText === "Businesses") {
        setShowList(true)
        setList(mokBusinessDirectory)
        renderList(businesses)
    }
    
    if (e.target.innerText === "Sights" ) {
        setShowList(true)
        setList(mokSightSeeingDirectory)
        renderList(sights)
    } 
    
    if (e.target.innerText === "Government Offices" ) {
        setShowList(true)
        setList(mokGovernmentLocations)
        renderList(government)
    }
}


const renderList = (typeOfList) => {
 return(
    <>
        {showList && list && (
            <>
           {list.map((data) => {
                return (
                    <div key={data.id}>
                        <h1>{data.nameOfBusiness}</h1>
                        <p>Owner: {data.nameOfOwner}</p>
                        <p>Opening hours: {data.openingHours}</p>
                        <br></br>
                        <div>
                            <h1>Review</h1>
                            <p>Author: {data.review.author}</p>
                            <p>{data.review.description}</p>
                        </div>
                        <br></br>
                        <br></br>
                </div>
                
                )
            })}
        </>
        )}
        </>
   
 )
}

return(
    <>
        <header>
           <ul
           className="flex justify-center space-x-3 p-4"
           >
            <li onClick={handleOnClick}> Businesses  </li>
            <li onClick={handleOnClick}>  Sights </li>
            <li onClick={handleOnClick}> Government Offices  </li>
           </ul>
        </header>
        <section>
            {renderList()}
        </section>
    </>
)
}