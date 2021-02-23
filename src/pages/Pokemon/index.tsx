import React from 'react';

export interface IPokemonProps {
  id: string | number;
}

export const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  console.log('123 :>> ', 123);
  return <div>Pokemon id - {id}</div>;
};
