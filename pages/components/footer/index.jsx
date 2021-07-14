import Image from "next/image";
import footerStyle from "./style.module.scss";
import Logo from "./../../../public/images/logo-white.svg";
import Facebook from "./../../../public/images/icon-facebook.svg";
import Youtube from "./../../../public/images/icon-youtube.svg";
import Pinterest from "./../../../public/images/icon-pinterest.svg";
import Instagram from "./../../../public/images/icon-instagram.svg";
import Twitter from "./../../../public/images/icon-twitter.svg";

const footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.navigations}>
        <div className={footerStyle.logo}>
          <a href="#">
            <Image src={Logo} alt="website logo" />
          </a>
          <ul className="social_media_links">
            <li>
              <a href="#">
                <Image src={Facebook} alt="facebook logo"/>
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Youtube} alt="youtube logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Twitter} alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Pinterest} alt="pinterest logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Instagram} alt="instagram logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className={footerStyle.menu}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className={footerStyle.menu_cont}>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={footerStyle.btn_reserved}>
        <button className={footerStyle.btn}>
          <span>Request Invite</span>
        </button>
        <span className={footerStyle.rights}>&copy; Easybank. All Rights reserved</span>
      </div>
    </footer>
  );
};

export default footer;
