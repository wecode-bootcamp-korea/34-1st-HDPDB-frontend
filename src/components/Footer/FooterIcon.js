const FooterIcon = ({ iconName, iconPath }) => {
  return (
    <div>
      <img className="footer_icon" alt={iconName} src={iconPath} />
    </div>
  );
};
export default FooterIcon;
