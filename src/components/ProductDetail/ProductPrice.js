const ProductPrice = ({ productInfo }) => {
  //if salePrice = false -> product_sale_price ->display : none
  return (
    <div className="product_price_box">
      <p>${productInfo.message.product_info[0].price}</p>
      <p className="product_sale_price">$1</p>
      <p>★★★★★({productInfo.message.rate_count})</p>
    </div>
  );
};
export default ProductPrice;
