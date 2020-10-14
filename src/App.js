import React from 'react';
import './App.css';
import Tabel from './Tugas-10/Tabel';
import Timer from './Tugas-11/Time';
import UserInfo from './Tugas-9/UserInfo';
import Form from './Tugas-12/form';
import Axio from './Tugas-13/axio';

function App() {
  return (
   <div> 
      <div className="App-header">
        <center><h1><strong>Form Pembelian Buah</strong></h1></center>
        <p>Nama Pelanggan: <input type='text' name='nama'/></p>
        <p><strong>Daftar item</strong></p> 
        <div className="item">
          <p><input type='radio' name='Semangka'/>Semangka</p>
          <p><input type='radio' name='Jeruk'/>Jeruk</p>
          <p><input type='radio' name='Nanas'/>Nanas</p>
          <p><input type='radio' name='Salak'/>Salak</p>
          <p><input type='radio' name='Anggur'/>Anggur</p>
        </div>
        <center><p><input type='submit' name='Anggur' value='kirim'/></p></center>
      </div>

      <center><h1><strong>TUGAS-9</strong></h1></center>
      <div className="Coba1">
          <UserInfo />
      </div>

      <center><h1><strong>TUGAS-10</strong></h1></center>
      <center><h2><strong>TABEL HARGA BUAH</strong></h2></center>
      <div className="Coba2">
          <Tabel />
      </div>

      <center><h1><strong>TUGAS-11</strong></h1></center>
      <center><h2><strong>Timer</strong></h2></center>
      <div>
          <Timer />
      </div>

      <center><h1><strong>TUGAS-12</strong></h1></center>
      <center><h2><strong>List dan Form</strong></h2></center>
      <div>
          <Form />
      </div>

      <center><h1><strong>TUGAS-13</strong></h1></center>
      <div>
          <Axio />
      </div>      
      
      <div>
        Sekian
      </div>
    </div>
  );
}

export default App;
