import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1><strong>Form Pembelian Buah</strong></h1>
      <p>Nama Pelanggan: <input type='text' name='nama'/></p>
      <p><strong>Daftar item</strong></p> 
      <p><input type='radio' name='Semangka'/>Semangka</p>
      <p><input type='radio' name='Jeruk'/>Jeruk</p>
      <p><input type='radio' name='Nanas'/>Nanas</p>
      <p><input type='radio' name='Salak'/>Salak</p>
      <p><input type='radio' name='Anggur'/>Anggur</p>
      <p><input type='submit' name='Anggur' value='kirim'/></p>
      

    </div>
  );
}

export default App;
