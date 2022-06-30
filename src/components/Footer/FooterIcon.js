const FooterIcon = ({ iconName, iconPath }) => {
  return (
    <li className="footer_icon">
      <img alt={iconName} src={iconPath} />
    </li>
  );
};
export default FooterIcon;
