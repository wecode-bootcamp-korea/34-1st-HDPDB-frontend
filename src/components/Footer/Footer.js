import React from 'react';
import './Footer.scss';
import FooterBox from './FooterBox';
import FooterIcon from './FooterIcon';
import FooterData from './FooterData/footerData';
import IconData from './FooterData/IconData';

const Footer = () => {
  return (
    <footer className="foo">
      <div className="footer_container">
        <div class="footer_box">
          <img
            className="drop_logo"
            alt="Drop logo"
            src="../images/logo/dropCI-white.png"
          ></img>
        </div>
        {FooterData.map(value => (
          <FooterBox
            key={value.firstLine}
            firstLine={value.firstLine}
            secondeLine={value.secondeLine}
            thirdLine={value.thirdLine}
            fourthLine={value.fourthLine}
            fifthLine={value.fifthLine}
            sixthLine={value.sixthLine}
            seventhLine={value.seventhLine}
            eighthLine={value.eighthLine}
            ninthLine={value.ninthLine}
          />
        ))}
        <div className="footer_sns_logo">
          {IconData.map(value => (
            <FooterIcon
              key={value.icon_name}
              iconName={value.icon_name}
              iconPath={value.icon_path}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
