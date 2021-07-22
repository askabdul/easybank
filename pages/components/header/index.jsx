import { useEffect } from "react";
import headerStyle from "./style.module.scss";
import Image from "next/image";
import Logo from "./../../../public/images/logo.svg";
import HamClose from "./../../../public/images/icon-close.svg";
import Ham from "./../../../public/images/icon-hamburger.svg";

const header = () => {
  useEffect(() => {
    const hamburgerBtn = document.querySelector("#hamburger");
    const navigations = document.querySelector("#nav-ul");
    const hamOpen = document.querySelector("#ham_open");
    const hamClose = document.querySelector("#ham_close");
    hamburgerBtn.addEventListener("click", () => {
      // navigations.style.display = "none";
      if(navigations.style.display === "none") {
        navigations.style.display = "block";
        hamOpen.style.display = "none";
        hamClose.style.display = "block";
      } else {
        navigations.style.display = "none";
        hamOpen.style.display = "block";
        hamClose.style.display = "none";
      }
    });
  });

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.logo}>
        <a href="#">
          <Image src={Logo} alt="website logo" />
        </a>
      </div>
      <nav className={headerStyle.navigation} id="nav-ul">
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
      <button className={headerStyle.request}>
        <span>Request Invite</span>
      </button>
      <button className={headerStyle.ham} id="hamburger">
        <div id="ham_open" >
          <Image src={Ham} alt="hamburger open" />
        </div>
        <div id="ham_close" className={headerStyle.hide}>
          <Image src={HamClose} alt="hamburger close" height='20px' width='20px'/>
        </div>
      </button>
    </header>
  );
};

export default header;
