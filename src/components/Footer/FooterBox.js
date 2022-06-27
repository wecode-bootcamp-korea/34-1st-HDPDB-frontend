const FooterBox = ({
  // data에 id값 넣기
  //data 이름 범용성 있는 걸로 바꾸기
  //nesting하기
  //ul하나 지우고 scss 구조 바꾸기
  aboutTitle,
  aboutStudio,
  aboutContact,
  aboutContent,
  aboutDescription,
}) => {
  return (
    <div className="footer_box_content">
      <ul className="footer_detail">
        <li>{aboutTitle}</li>
        <li>{aboutStudio}</li>
        <li>{aboutContact}</li>
        <li>{aboutContent}</li>
        <li>{aboutDescription}</li>
      </ul>
    </div>
  );
};

export default FooterBox;
