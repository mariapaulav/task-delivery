import React from 'react';

const List = ({task, onClose}) => {

  return (
    <>
    {task.map((order) => {
        const { id, name, address, image, product} = order;
        return (
          <div key={id} className='order'>
            <img src={image} alt={name} />
            <div>
              <p>Name: <span>{name}</span> </p> 
              <p>Address: <span>{address}</span> </p>
              <p>Product: <span>{product}</span></p>
              <button className='okBtn' onClick = {()=> {onClose(id)} }>✓</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
