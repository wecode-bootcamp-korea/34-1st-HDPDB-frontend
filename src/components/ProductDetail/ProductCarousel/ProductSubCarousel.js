const ProductSubCarousel = ({ headphoneId, imgPath }) => {
  return (
    <div className="product_images">
      <img src={imgPath} alt={headphoneId} />
    </div>
  );
};
export default ProductSubCarousel;
