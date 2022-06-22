const FooterBox = ({
  firstLine,
  secondeLine,
  thirdLine,
  fourthLine,
  fifthLine,
  sixthLine,
  seventhLine,
  eighthLine,
  ninthLine,
}) => {
  return (
    <div className="footer_box">
      <ul className="footer_detail">
        <li>{firstLine}</li>
        <li>{secondeLine}</li>
        <li>{thirdLine}</li>
        <li>{fourthLine}</li>
        <li>{fifthLine}</li>
      </ul>
      <ul className="footer_detail">
        <li>{sixthLine}</li>
        <li>{seventhLine}</li>
        <li>{eighthLine}</li>
        <li>{ninthLine}</li>
      </ul>
    </div>
  );
};

export default FooterBox;
