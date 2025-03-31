import React, { useState } from 'react'
import AddCategory from './components/AddCategory.jsx';
import GiftGrid from './components/GiftGrid.jsx';


const GiftExpertApp = () => {

    const newArray = [
        'Naruto',
        'One Punch',
        'Dragon Ball'
    ];

    const [ categories, setCategories ] = useState(newArray);


    function onAddCategory(onNewValue){
        if(categories.includes(onNewValue)){
            alert('La categoría ya existe, agrega una nueva')
            return;
        }

        setCategories([...categories, onNewValue]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
        onNewValue={ (event) =>  onAddCategory(event)}
        />

        {categories.map( category => {
                return (
                    <GiftGrid 
                        key={category}
                        category={category}
                        />
                )
            })}

    </>
  )
}


export default GiftExpertApp
