import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TokenId = () => {
  // Generate a unique token ID
  //npm install uuid
  const tokenId = uuidv4();

  return (
    <div>
      <p>Generated Token ID: {tokenId}</p>
    </div>
  );
};

export default TokenId;
