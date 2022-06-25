const ProductMainCarousel = ({ headphoneId, imgPath, mainCarousel }) => {
  return (
    <div
      className="main_image_container"
      style={{ transform: `translateX :${mainCarousel}px` }}
    >
      <img src={imgPath} alt={headphoneId} />
    </div>
  );
};
export default ProductMainCarousel;
