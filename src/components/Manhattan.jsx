import React from "react";
import ManhattanMasjids from "../utils/MasjidsInManhattan";

const Manhattan=()=>{

const masjidList=ManhattanMasjids.map((masjid)=>{
    return <li key={masjid.id}>{masjid.name} ({masjid.address})</li>
})

return(
    <>
    <h1>Masjids in Manhattan</h1>
    <ul>{masjidList}</ul>
    </>
)
}

export default Manhattan