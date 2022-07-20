import logotd1 from "../image/tokodistributor.png";
import googleplay from "../image/googleplay.png";

import instagram from "../image/instagram.png";
import linkedin from "../image/linkedin.png";
import facebook from "../image/facebook.png";
import youtube from "../image/youtube.png";

const Footer = () => {
  return (
    <div className="h-[314px] bg-gradient-to-r from-linerGradient1 to-linerGradient2 flex items-center justify-center ">
      <div>
        <img src={logotd1} alt="logo tokodistributor" className="cursor-pointer w-[332px] h-[32px]" />
        <p className="py-[18.5px] leading-[27.94px] font-normal text-lg font-inter text-white flex justify-center items-center">Unduh Aplikasi Tokodistributor</p>
        <a href="https://play.google.com/store/apps/details?id=com.tokodistributor" className="mb-4 flex justify-center items-center cursor-pointer">
          <img src={googleplay} alt="google play" />
        </a>
        <div className="gap-[10px] flex justify-center ">
          <a href="https://www.instagram.com/tokodistributor/" target="_blank" rel="noreferrer noopener">
            <img src={instagram} alt="logo-instagram" />
          </a>
          <a href="https://www.youtube.com/c/Tokodistributor" target="_blank" rel="noreferrer noopener">
            <img src={youtube} alt="logo-youtube" />
          </a>
          <a href="https://www.linkedin.com/in/tokodistributor/" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} alt="logo-linkedin" />
          </a>
          <a href="https://www.facebook.com/tokodistributorofficial/" target="_blank" rel="noreferrer noopener">
            <img src={facebook} alt="logo-facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
