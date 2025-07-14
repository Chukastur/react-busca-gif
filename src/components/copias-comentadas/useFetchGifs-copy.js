import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {                 // creamos un customHook 'useFetchGifs' que recibe el valor de 'category'
    
    
    const [ images, setImages ] = useState ([]);            // Inicializa 'images' como array vecio  
    const [ isLoading, setIsLoading ] = useState (true);    //'isLoading' inicia en true para mostrar loading
         


    const getImages = async () => {                         // Funcion asyncrona que espera a que`getGifs` devuelva los datos
        const newImages = await getGifs ( category );       
            setImages ( newImages );                        // Actualiza el estado con los GIFs obtenidos.
            setIsLoading ( false );                         // Cambia el valor a true al terminar
        };   
                               
    useEffect ( () => {                                     // Ejecuta `getImages` cuando cambia `category`
    getImages ()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ category ] );                                  
    

    return {                                                //Devuelve un objeto con los datos y el estado de carga
        images,
        isLoading
    };

};
  