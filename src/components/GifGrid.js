import React from 'react'
import { GifGridItems } from './GifGridItems';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);
  
  return (

    <>
    
      <h3 className="animate__animated animate__flipInX">{category}</h3>

      { loading && <p className="animate__animated animate__flash">Loading</p> }

      <div className="card-grid">
        
          {
            data.map(img => (
              <GifGridItems 
                key={img.id}
                {...img }
              />
            ))
          }

        </div>

    </>
  )
}
