import React from "react";
import BronxMasjids from '../utils/MasjidsInBronx'

const Bronx=()=>{

const masjidList=BronxMasjids.map((masjid)=>{
    return <li key={masjid.id}>{masjid.name}</li>
})

return(
    <>
    <h1>Masjids in The Bronx</h1>
    <ul>{masjidList}</ul>
    </>
)
}

export default Bronx