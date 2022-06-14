import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

interface QuantitySelectorProps {
  quantities: number[];
  onQuantityClick: (quantity: number) => void;
}

const QuantitySelector = (props: QuantitySelectorProps) => {
  const [activeQuantity, setActiveQuantity] = useState(props.quantities[0]);

  const handleQuantityClick = (quantity: number) => {
    setActiveQuantity(quantity);
    props.onQuantityClick(quantity);
  };

  return (
    <Styled.Container>
      <Styled.Title>Set quantities of pokemons to show:</Styled.Title>
      <div>
        {props.quantities.map((quantity, index) => (
          <Styled.QuantityBadge
            active={quantity === activeQuantity}
            onClick={() => handleQuantityClick(quantity)}
            key={index}
          >
            {quantity}
          </Styled.QuantityBadge>
        ))}
      </div>
    </Styled.Container>
  );
};

export default QuantitySelector;
