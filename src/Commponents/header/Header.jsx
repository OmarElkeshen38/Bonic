import React from 'react';
import "./Header.css";
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const header = ({ cartItem }) => {
  return (
    <div>
        <Head/>
        <Search cartItem={cartItem}/>
        <Navbar/>
    </div>
  )
}

export default header