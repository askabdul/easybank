import headerStyle from "./style.module.scss";
import Image from "next/image";
import Logo from "./../../../public/images/logo.svg";

const header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.logo}>
        <a href="#">
          <Image src={Logo} alt="website logo" />
        </a>
      </div>
      <nav className={headerStyle.navigation}>
        <ul className={headerStyle.nav_links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
      <button>
          <span>Request Invite</span>
      </button>
    </header>
  );
};

export default header;
