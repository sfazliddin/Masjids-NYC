import React from "react";
import QueensMasjids from '../utils/MasjidsInQueens'

const Queens=()=>{

const masjidList=QueensMasjids.map((masjid)=>{
    return <li key={masjid.id}>{masjid.name}</li>
})

return(
    <>
    <h1>Masjids in Queens</h1>
    <ul>{masjidList}</ul>
    </>
)
}

export default Queens