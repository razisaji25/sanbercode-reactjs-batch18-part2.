import React, {useContext, useState} from "react"
import {BuahContext} from './BuahContext'
import axios from 'axios';

const BuahForm = ()=>{
  const [daftarBuah , setDaftarBuah] = useContext(BuahContext)
  const [input, setInput] = useState({name: "", price: "", weight: ""})


  const handleSubmit=(event)=>{
    // menahan submit
    event.preventDefault()

    let name  = input.name
    let price = input.price.toString()
          
    if (input.id === null){
      axios.post(`https://backendexample.sanbercloud.com/api/fruits`,{name,price,weight:input.weight})
      .then(res => {
        setDaftarBuah([
          ...daftarBuah,
          {id: res.data.id,
            name,
            price,
            weight:input.weight
          }
        ])
      })
    }else{
      axios.put(`https://backendexample.sanbercloud.com/api/fruits${input.id}`,{name,price,weight:input.weight})
      .then(()=>{
        let dataBuah = daftarBuah.find(el=>el.id===input.id)
        dataBuah.name = name
        dataBuah.price= price
        dataBuah.weight= input.weight
        setDaftarBuah([...daftarBuah])
      })
    }
    setInput({name:"",price:"",weight:0,id:null})
  }

  const handleChange = (event)=>{
    let typeOfInput = event.target.all
    switch (typeOfInput){
      case "name":
      {
        setInput({...input, name: event.target.value});
        break
      }
      case "price":
      {
        setInput({...input, price: event.target.value});
        break
      }
      case "weight":
      {
        setInput({...input, weight: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  return(
    <>
      <center><h2>Form Harga Buah</h2></center>
          <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
              <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                  Nama:
                </label>
                <input style={{float: "right"}} type="text" required name="name" value={input.name} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Harga:
                </label>
                <input style={{float: "right"}} type="text" required name="harga" value={input.price} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Berat (dalam gram):
                </label>
                <input style={{float: "right"}} type="number" required name="berat" value={input.weight} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                  <button style={{ float: "right"}}>submit</button>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default BuahForm
