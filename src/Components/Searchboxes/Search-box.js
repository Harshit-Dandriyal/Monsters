import React from 'react';
import Searchboxstyles from './Searchboxstyles.css'

export const SearchBox =({placeholder, handlechange  })=>(
    <input
    className='search'
      type='search'
      placeholder={ placeholder }
      onChange={ handlechange }
      
      
      
      
      />
)