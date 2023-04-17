import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
      if( categories.includes(newCategory) ) return;
      setCategories([ newCategory, ...categories ]);
      //setCategories([...categories,input.value]);
    }


  return (
    <>

    {/* TITULO */}
      <h1>GIFEXPERTAPP</h1>


    <AddCategory onNewCategory = { onAddCategory }/>
    {/* Listado de Gif*/}
  
        {
         categories.map( (category) => (
          <GifGrid key={category} category = {category} />
          //return <li key={ category }> {category} </li>
         ))
        }

    {/*
    <input type="text"  id="cont"/>
    <div>------------</div>
    <button onClick={ addCategoria } >New Categoria</button>*/}

        {/* Gif Item*/}
    </>
  )
}

export default GifExpertApp
