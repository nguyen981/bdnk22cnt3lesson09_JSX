import React, { Component, useState, useEffect } from 'react'
import BDNProductList from './components/BDNProductList';
import axios from "axios";
export default function App() {
  const [BDNProductList, setBDNProductList] = useState([]);
  const BDNGetstudent = async () => {
    try {
      const response = await axios.get("https://666a53817013419182cee002.mockapi.io/api/BDN1/BDNStudent");
      setBDNProductList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    BDNGetstudent();
  }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>xu ly chuc nang crud -hook -api</h1>
      <hr />
      <BDNProductList renderBDNProductList={BDNProductList} />
    </div>
  )
}