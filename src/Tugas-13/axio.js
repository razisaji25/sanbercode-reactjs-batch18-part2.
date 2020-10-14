import React,{useState} from 'react';

const Axio = () => {  
    const [daftarBuah, setDaftarBuah] =  useState([{nama: "Semangka", harga: 10000, berat: 1000},
                                                   {nama: "Anggur", harga: 40000, berat: 500},
                                                   {nama: "Strawberry", harga: 30000, berat: 400},
                                                   {nama: "Jeruk", harga: 30000, berat: 1000},
                                                   {nama: "Mangga", harga: 30000, berat: 500}
                                                  ]);
    const [inputName, setinputName]  =  useState("");
    const [inputHarga, setinputHarga]  =  useState("");
    const [inputBerat, setinputBerat]  =  useState(0);
    const [indexOfForm, setIndexOfForm] =  useState(-1);    

      //untuk menjadikan saling terhubung
   
    const handleDelete=(event)=>{
      let index = event.target.value
      let newDaftarBuah = daftarBuah
      let editedDataBuah = newDaftarBuah[indexOfForm]
      newDaftarBuah.splice(index, 1)
  
      if (editedDataBuah !== undefined){
        // array findIndex baru ada di ES6
        var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
        setDaftarBuah([...newDaftarBuah]) 
        setIndexOfForm([...newIndex])
      }else{
        setDaftarBuah([...newDaftarBuah])
      }
      
    }

    const handleEdit=(event)=>{
      let index = event.target.value
      let dataBuah = daftarBuah[index]
        setinputName(dataBuah.nama)
        setinputHarga(dataBuah.harga)
        setinputBerat(dataBuah.berat)
        setIndexOfForm(index)
    }
  
    const handleChange=(event)=>{
      let typeOfInput = event.target.all
      switch (typeOfInput){
        case "name":
        {
          setinputName(event.target.value);
          break
        }
        case "harga":
        {
          setinputHarga(event.target.value)
          break
        }
        case "berat":
        {
          setinputBerat(event.target.value)
            break
        }
      default:
        {break;}
      }
    }
  
    const handleSubmit=(event)=>{
      // menahan submit
      event.preventDefault()
  
      let nama  = inputName
      let harga = inputHarga.toString()
      let berat = inputBerat
  
  
      let newDaftarBuah = daftarBuah
      let index = indexOfForm
      
      if (index === -1){
        newDaftarBuah = [...newDaftarBuah, {nama, harga, berat}]
      }else{
        newDaftarBuah[index] = {nama, harga, berat}
      }
        setDaftarBuah(newDaftarBuah)
        setinputName("")
        setinputHarga("")
        setinputBerat(0)
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
                {
                  daftarBuah.map((item, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td>{item.berat/1000} kg</td>
                        <td>
                          <button onClick={handleEdit} value={index}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={index}>Delete</button>
                        </td>
                      </tr>
                    )
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
                <input style={{float: "right"}} type="text" required name="name" value={inputName} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Harga:
                </label>
                <input style={{float: "right"}} type="text" required name="harga" value={inputHarga} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Berat (dalam gram):
                </label>
                <input style={{float: "right"}} type="number" required name="berat" value={inputBerat} onChange={handleChange}/>
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