const OptionButton = ({ productInfo, changeOption }) => {
  return Object.values(productInfo)[0].product_info.map(option => {
    return (
      <button
        onClick={changeOption}
        key={option.id}
        value={option.product_option[0].type}
      >
        {option.product_option[0].type}
      </button>
    );
  });
};

export default OptionButton;
