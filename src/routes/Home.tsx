import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const Home = () => {
  return (
  <>
    <Navbar/>
    <ItemCard/>
  </>
  )
}

export default Home