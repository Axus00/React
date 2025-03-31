import React, { useState } from 'react'

export default function AddCategory({ onNewValue }) {

    const [ inputValue, setInputValue ] = useState();

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
        console.log(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const clearValue = inputValue.trim();
        if(clearValue.length <= 1) return;
        //onAddCategories( categories => [ inputValue, ...categories ]);
        onNewValue(clearValue);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder='Agrega una nueva categoría'
            value={ inputValue }
            onChange={ onInputChange }
            />
    </form>
  )
}
