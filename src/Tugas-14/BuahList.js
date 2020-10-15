import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import axios from 'axios';

const BuahList = ()=>{
  const [daftarBuah,setDaftarBuah] = useContext(BuahContext)
  const [input, setInput]  =  useContext(BuahContext); 
  
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
    </>
  )
}

export default BuahList
