import React from "react";
import BrooklynMasjids from '../utils/MasjidsInBrooklyn'

const Brooklyn=()=>{

const masjidList=BrooklynMasjids.map((masjid)=>{
    return <li key={masjid.id}>{masjid.name}</li>
})

return(
    <>
    <h1>Masjids in Brooklyn</h1>
    <ul>{masjidList}</ul>
    </>
)
}

export default Brooklyn