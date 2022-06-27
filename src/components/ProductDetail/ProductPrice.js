const ProductPrice = ({ price }) => {
  //if salePrice = false -> product_sale_price ->display : none
  return (
    <div className="product_price_box">
      <p>$50</p>
      <p className="product_sale_price">$1</p>
    </div>
  );
};
export default ProductPrice;
