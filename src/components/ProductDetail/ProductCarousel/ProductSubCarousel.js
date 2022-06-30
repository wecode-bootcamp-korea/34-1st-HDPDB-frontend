const ProductSubCarousel = ({ headphoneId, imgPath, subCarousel }) => {
  return (
    <li
      className="sub_image_container"
      style={{ transform: `translateX(${subCarousel}px)` }}
    >
      <img src={imgPath} alt={headphoneId} subcarousel={subCarousel} />
    </li>
  );
};
export default ProductSubCarousel;
