import { useState } from 'react';

const PurchaseButton = ({ switchOption, caseType }) => {
  const [value, setValue] = useState('');
  const [borderi, setBorderi] = useState(false);

  const onClick = () => {
    setValue(switchOption);
    setBorderi(!borderi);
  };

  return (
    <button
      className="select_btn"
      onClick={onClick}
      value={caseType}
      style={{ border: borderi ? '1px solid black' : ' none' }}
      name={value}
    >
      {switchOption}
    </button>
  );
};

export default PurchaseButton;
