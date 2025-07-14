import { useState, useEffect } from "react";
import { GifItem } from "./GifItem"; 
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category  } ) => {

  const [ images, setImages ] = useState ([]);        //Guarda la lista de imágenes en un array vacio

  const getImages = async () => {                     //Función Asíncrona: Espera a que `getGifs` devuelva los GIFs.
    const newImages = await getGifs ( category );     //
      const name = newImages.map(img => ({            //crea el array 'name', una copia de 'newImages', pero solo  el `id` y el `title` de cada GIF
      id: img.id,
      title: img.title
    }));
    
    setImages (name);                                 //Actualiza 'images' con los resultados  
  };
  
  const addName = () =>                               //Recorre `images` y devuelve un `<li>` por cada título, usando `id` como key única
    images.map (img => (
      <li key={img.id}>{img.title}</li>
    ));
  
  useEffect ( () => { 
    getImages ()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ category ] );                                  //Efecto que hace que solo se vuelve a ejecutar si 'category' cambia de valor
   
  return (
    <>
      <h3>{ category }</h3>
      
      <ol>{ addName () }</ol>                           //LLama a la función addName desde aqui (Zona tml limpia y facil de leer)

    </>
  );
};
    