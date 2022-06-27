const ProductMainCarousel = ({ headphoneId, imgPath, mainCarousel }) => {
  return (
    <li
      className="main_image_container"
      style={{ transform: `translateX(${mainCarousel}px)` }}
    >
      {/*     */}
      {console.log(mainCarousel)}
      <img src={imgPath} alt={headphoneId} />
    </li>
  );
};
export default ProductMainCarousel;
