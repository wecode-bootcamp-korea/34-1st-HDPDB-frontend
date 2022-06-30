import { useState } from 'react';
const OptionButton = ({ caseColor, color }) => {
  const [value, setValue] = useState('');
  const [borderi, setBorderi] = useState(false);
  const onClick = () => {
    setValue(caseColor);
    setBorderi(!borderi);
  };
  return (
    <button
      onClick={onClick}
      value={color}
      name={value}
      style={{ border: borderi ? '1px solid black' : 'none' }}
    >
      {caseColor}
    </button>
  );
};

export default OptionButton;
