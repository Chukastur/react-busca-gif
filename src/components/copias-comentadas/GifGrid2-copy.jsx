import { useState, useEffect } from "react";
import { GifItem } from "./GifItem"; 
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category  } ) => {

  const [ images, setImages ] = useState ([]);        //Guarda la lista de imágenes en un array vacio

  const getImages = async () => {                     //Función Asíncrona: Espera a que `getGifs` devuelva los GIFs.
    const newImages = await getGifs ( category );     //
      const name = newImages.map(img => ({            //crea el array 'name', una copia de 'newImages', solo las voleres indicados
      key: img.id,
      id: img.id,
      title: img.title,
      url: img.url
    }));
    
    setImages (name);                                 //Actualiza 'images' con los resultados  
  };
    
  useEffect ( () => { 
    getImages ()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ category ] );                                  
   
  return (
    <>
      <h3>{ category }</h3>
      
      <div className ="card-grid">                    //Aplica estilo css
        { 
          images.map ( (image) => (                   //mapea el array `images` para renderizar `GifItem.jsx` por cada imagen.
            <GifItem                                  //`key`: React prop para identificar cada elemento de la lista de forma única.
                key={ image.id }
                id={ image.id }
                title={ image.title }  
                url={ image.url }
              />
          )) 
        }
      </div>                           

    </>
  );
};
     