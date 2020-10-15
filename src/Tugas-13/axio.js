import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Axio = () => {  
    const [daftarBuah, setDaftarBuah] =  useState(null);
    const [input, setInput]  =  useState({name:"",price:"",weight:0,id:null});
    
      //untuk menjadikan saling terhubung

    useEffect(()=>{
      if (daftarBuah=== null){
        axios.get("http://backendexample.sanbercloud.com/api/fruits")
        .then(res => setDaftarBuah(res.data.map(el =>{ 
          return{
            id: el.id,
            name: el.name,
            price: el.price,  
            weight: el.weight
          }
        })))
      }
    },[daftarBuah])  
   
    const handleDelete=(event)=>{
      let idDataBuah = parseInt(event.target.value)
      axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then(()=>{
        setDaftarBuah(null)
      })
      
    }

    const handleEdit=(event)=>{
      let idDataBuah = parseInt(event.target.value)
      axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then(res=>{
        setInput({name:idDataBuah.name,price:idDataBuah.price,weight:idDataBuah.weight,id:idDataBuah})
      })
    }
  
    const handleSubmit=(event)=>{
      // menahan submit
      event.preventDefault()
  
      let name  = input.name
      let price= input.price.toString()
            
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
          <center><h2>Daftar Harga Buah</h2></center>
          <table className="tabel2">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {daftarBuah !== null && daftarBuah.map((item,index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight/1000} kg</td>
                        <td>
                          <button onClick={handleEdit} value={item.id}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                }
                  
                
            </tbody>
          </table>
          {/* Form */}
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
  




export default Axio