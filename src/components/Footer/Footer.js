import React from 'react';
import './Footer.scss';
import FooterBox from './FooterBox';
import FooterIcon from './FooterIcon';
import FooterData from './FooterData/footerData';
import IconData from './FooterData/IconData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div class="footer_box_logo">
          <img
            className="drop_logo"
            alt="Drop logo"
            src="../images/logo/dropCI-white.png"
          ></img>
        </div>
        <div className="footer_box">
          {FooterData.map(value => (
            <FooterBox
              key={value.id}
              aboutTitle={value.aboutTitle}
              aboutStudio={value.aboutStudio}
              aboutContact={value.aboutContact}
              aboutContent={value.aboutContent}
              aboutDescription={value.aboutDescription}
            />
          ))}
        </div>

        <div className="footer_sns_logo">
          <h1 style={{ fontSize: '20px', fontWeight: '700' }}>FOLLOW DROP</h1>
          <ul style={{ display: 'flex' }}>
            {IconData.map(value => (
              <FooterIcon
                key={value.icon_name}
                iconName={value.icon_name}
                iconPath={value.icon_path}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
