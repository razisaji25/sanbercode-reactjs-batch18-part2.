import React, { useState,useEffect } from "react";
 
const Home=()=> {
    const [daftarBuah, setDaftarBuah] = useState(null);
    
  useEffect(()=>{
      fetch("http://backendexample.sanbercloud.com/api/fruits")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(data => (
        {
          id: `${data.id.name}`,
          nama: `${data.name}`,
          harga: `${data.price}`,
          berat: `${data.weight}`
        }
      )))
      .then(items => setDaftarBuah({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error))

  })  
  
 
      const {items} = setDaftarBuah;
        return (
          <div className="boxWhite">
            {
              items.length > 0 ? items.map(item => {
              const {id, Nama, Harga, Berat} = item;
               return (
 
               <div key={id} className="bgCircle">
               <div className="ctr">
                  {Nama} {Harga} {Berat}
                </div>
 
              </div>
              );
            }) : null
          }
          </div>
        );
    }
  
 
export default Home;