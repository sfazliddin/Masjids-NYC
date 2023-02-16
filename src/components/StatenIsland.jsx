import React from "react";
import StatenIslandMasjids from '../utils/MasjidsInStatenIsland'

const StatenIsland=()=>{

const masjidList=StatenIslandMasjids.map((masjid)=>{
    return <li key={masjid.id}>{masjid.name}</li>
})

return(
    <>
    <h1>Masjids in Staten Island</h1>
    <ul>{masjidList}</ul>
    </>
)
}

export default StatenIsland