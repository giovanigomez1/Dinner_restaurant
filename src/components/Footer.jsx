import logo from '../images/logo.svg'

function Footer () {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer__inf">
        <div className="footer__inf--address">
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="footer__inf--schedule">
          <p>Open times</p>
          <p>Mon - Fri: 09:00AM - 10:00PM</p>
          <p>Sat - Sun: 09:00AM - 11:30PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;