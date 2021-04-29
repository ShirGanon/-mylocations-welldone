import React, {useContext} from 'react'
import Context from '../Context';

export default function ItemList() {
  const { selected, items } = useContext(Context)
  
    const currentItems = items
    .filter(i => i.category.id === selected)
    .map(i => (
      <div key={i.name}>
        { `${i.name} | ${i.address} | ${i.coordinates}` }
      </div>
    ));
    return (
        <div>
            {currentItems}
        </div>
    )
}
