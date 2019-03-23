import React from 'react';


const List = ({ continents }) => {
  return (
    <>
      <h3>All the continents</h3>
      {continents.map(continent => (
        <div key={continent.code}>
          {continent.name}
        </div>
      ))}
    </>
  );
}

export default List;
