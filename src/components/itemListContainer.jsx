import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="body-inicio">
      <hr />
      <h2>{greeting}</h2>
      {}

      <p>Aqui encontraras los mejores productos de la tienda</p>
    </div>
  );
};

export default ItemListContainer;
