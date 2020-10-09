import React from 'react';

  
class Nama extends React.Component {
  render() {
    return <h1> {this.props.nama}</h1>;
  }
}

class Harga extends React.Component {
  render() {
    return <h1>{this.props.harga}</h1>;
  }
}

class Berat extends React.Component {
    render() {
      return <h1>{this.props.berat}</h1>;
  }
}
let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class Tabel extends React.Component {
  render() {
    return (
      <table className="tabel1">
                  <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat(KG)</th>
                    </tr>
                  </thead>
                  <tbody>
        
                  {dataHargaBuah.map(el=> {
                    return (
                        <tr>
                        <td><Nama nama={el.nama}/></td>
                        <td><Harga harga={el.harga}/></td>
                        <td><Berat berat={el.berat/1000}/></td>
                        </tr>
                        )
                      })}
                  </tbody>
      </table>      
    )
  }
}

export default Tabel