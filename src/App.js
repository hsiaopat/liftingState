import React, { useState } from 'react';
import { EnterPayment } from './EnterPayment';
import { DisplayPayment } from './DisplayPayment';

import './style.css';

export default function App() {
  const [amount, setAmount] = useState(0);

  const inputChanged = (amount) => {
    setAmount(amount);
  };
  return (
    <div>
      <EnterPayment inputChanged={inputChanged} />
      <DisplayPayment amount={amount} />
    </div>
  );
}
