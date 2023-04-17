import React, { useState } from 'react'
import '../styles/AddCategory.css'

export default function AddCategory({ onNewCategory }) {

    const [categoria, setCategoria] = useState('One Puch');


    const onInputChange = ({target}) => {
        setCategoria(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newTrim = categoria.trim();
        if(newTrim.length <= 1) return;
        //((categories => [...categories,categoria]));
        onNewCategory( newTrim );
        setCategoria('');

    }

    return (
        <div>
            <h2>{categoria}</h2>
            <form onSubmit={ onSubmit }>
                <label>
                    Name:
                    <input 
                        type="text"
                        placeholder='Buscar Gifs'
                        value= {categoria}
                        onChange={ onInputChange }
                         />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
