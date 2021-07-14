import Image from "next/image";
import Mockup from "./../../../public/images/image-mockups.png";
import BgDesktop from "./../../../public/images/bg-intro-desktop.svg";
import homestyle from "./style.module.scss";
import Online from "./../../../public/images/icon-online.svg";
import Budgeting from "./../../../public/images/icon-budgeting.svg";
import Onboarding from "./../../../public/images/icon-onboarding.svg";
import Open from "./../../../public/images/icon-api.svg";

const home = () => {
  return (
    <section className={homestyle.home}>
      <section className={homestyle.hero}>
        <div className={homestyle.brand}>
          <h1>
            Next generation <br /> digital banking
          </h1>
          <p>
            Take your financial life online.Your Easybank account <br />
            will be a one-stop-shop for spending, saving, <br />
            budgeting,investing, and much more.
          </p>
          <button>
            <span>Request Invite</span>
          </button>
        </div>
        <div className={homestyle.caption_image}>
          <div className={homestyle.top}>
            <Image src={Mockup} alt="caption image" />
          </div>
          <div className={homestyle.down}>
            <Image src={BgDesktop} alt="caption image" />
          </div>
        </div>
      </section>
      <section className={homestyle.why_easy}>
        <div className={homestyle.choose}>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </p>
        </div>
        <div className={homestyle.products}>
          <div className={homestyle.banking}>
            <Image src={Online} alt="banking product" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile <br />
              applications allow you to keep <br />
              track of your finances wherever you <br />
              are in the world.
            </p>
          </div>
          <div className="budgeting">
            <Image src={Budgeting} alt="budgeting product" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money <br />
              goes each month. Receive <br />
              notifications when you're close to <br />
              hitting your limits
            </p>
          </div>
          <div className="onboarding">
            <Image src={Onboarding} alt="onboarding product" />
            <h3>Fast Onboarding</h3>
            <p>
              We don't do branches. Open your <br />
              account in minutes online and start <br />
              taking control of your finances <br />
              right away
            </p>
          </div>
          <div className="open_api">
            <Image src={Open} alt="open api product" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, <br />
              pension, and much more from one <br />
              account. Tracking your money has <br />
              never been easier
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default home;
