import { GifItem } from "./GifItem";                            // Importa el componente GifItem para mostrar cada GIF
import { useFetchGifs } from '../hooks/useFetchGifs'            // Importa el custom hook para obtener los GIFs

export const GifGrid = ( { category  } ) => {                   // Componente funcional que recibe la categoría como prop

  const { images, isLoading  } = useFetchGifs ( category );     // Usa el hook para obtener imágenes y estado de carga

  return (
    <>
      <h3>{ category }</h3>                                     // Muestra el nombre de la categoría

      { isLoading && (<h2 >Cargando.......</h2>) }              // Si está cargando, muestra mensaje de carga

      <div className="card-grid">
        { 
          images.map ( (image) => (                             // Itera sobre las imágenes obtenidas
            <GifItem 
                key={ image.id }                                // Asigna una clave única a cada GifItem
                {...image}                                      // Pasa todas las propiedades de image como props al componente
              />
          )) 
        }
      </div>                                                    // Contenedor de los GIFs

    </>
  );
};