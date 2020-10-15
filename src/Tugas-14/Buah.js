import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahForm from "./BuahForm"
import BuahList from "./BuahList"

const Buah = ()=>{
  return(
    <div style={{width: "50%", margin: "0 auto", marginTop: "20px"}}>
      <BuahProvider>
        <BuahList/>
        <BuahForm/>
      </BuahProvider>
    </div>
  )

}

export default Buah
