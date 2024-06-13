import React, { Component, useState, useEffect } from 'react'
import BdnProductList from './components/BdnProductList';
import axios from "axios";
export default function App() {
  const [BdnProductList, setBdnProductList] = useState([]);
  const BdnGetstudent = async () => {
    try {
      const response = await axios.get("https://666a53817013419182cee002.mockapi.io/api/bdn1/bdnStudent");
      setBdnProductList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    BdnGetstudent();
  }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>xu ly chuc nang crud -hook -api</h1>
      <hr />
      <BdnProductList renderBdnProductList={BdnProductList} />
    </div>
  )
}