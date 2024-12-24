import React from 'react';
import  CardSubdomains  from './subdomains';

type Variant = 'default' | 'subdomains';

interface cardprops {
  variant?: Variant;
}

const dropCards: React.FC<cardprops> = ({ variant = 'default' }) => {
let selectedCard;

  switch (variant) {
    case 'subdomains':
    selectedCard = <CardSubdomains />
    break;
    default:
      selectedCard = '';
  }
  return (
    selectedCard
  );
};

export default dropCards;