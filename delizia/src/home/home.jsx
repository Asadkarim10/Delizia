import React from 'react';
import Header from '../components/header1/header';
import Items from '../components/Items/Items';
import Footer from '../components/footer1/footer'
import Sld from '../Sld'







export default function Home() {
    return <div>
        <div>   <Header/>  </div>
        <div> <Sld/></div>
        <div><Items/> </div>
        <div> <Footer /> </div>
    </div>;
  }