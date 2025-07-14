import { useState } from "react";                                           // Importa el hook useState de React
import { AddCategory } from './components/AddCategory';                     // Importa el componente para añadir categorías
import { GifGrid } from './components/GifGrid';                             // Importa el componente que muestra los GIFs

export const GifExpertApp = () => {                                         // Componente principal de la app

  const [categories, setCategories] = useState ([ 'Boston Celtics' ]);      // Estado inicial con dos categorías

  const onAddCategory = ( newCategory ) => {                                // Función para añadir una nueva categoría
    
    if ( categories.includes (newCategory) ) return;                        // Evita duplicados

    setCategories ([ newCategory, ...categories ]);                         // Añade la nueva categoría al inicio del array
  };

  return (
    <>
      <h1>GifExpertApp</h1>                                                 // Título principal

      <AddCategory
        onNewCategory = { onAddCategory }                                   // Pasa la función para añadir categorías como prop
      />
       
      { 
        categories.map ( (category) => (                                    // Itera sobre las categorías
          <GifGrid 
            key = { category }                                              // Asigna una clave única a cada grid
            category = { category }/>                                       // Pasa la categoría como prop
        ))
      }         

    </>
  
  );
};
