import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

const [ inputValue, setInputValue ] = useState ('');    //definimos como string vacio para que no de error con el input vacio
                                                        //Se guarda el valor del input en el estado local.

    const onInputChange = ( {target} ) => {             //Actualiza el estado `inputValue` con el valor que se introduce en el input
        setInputValue ( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault ();                      //Previene el comportamiento por defecto del formulario (recarga de página)
        if ( inputValue.trim().length <= 1) return;   //evita que se realice la función si es menor de 1

        onNewCategory ( inputValue.trim() );          //Llama a `onNewCategory` pasando el valor del input (sin espacios al inicio ni al final) 
        setInputValue ( '' );                         //resetea el input a un string vacio cuando se envia un nuevo valor en el input
    };       
    

    return (
        <form onSubmit = { onSubmit }  >
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }     
            />
        </form>
    );
};
