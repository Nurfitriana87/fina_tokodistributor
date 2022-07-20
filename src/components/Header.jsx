import lady from "../image/lady.png";
import Button from "./Button";
import Logo from "./Logo";
import Whatsapp from "./Whatsapp";

// import grid from "../image/grid.png";
// import ellipse1 from "../image/ellipse1.png";
// import ellipse4 from "../image/ellipse4.png";

function Header() {
  return (
    <>
      <div className="">
        <div className="py-4 px-[54px] border-b bg-gradient-to-r from-linerGradient2 to-linerGradient1 desktop:">
          <div className="flex justify-between items-center">
            <Logo />
            <Button />
          </div>

          {/* hero section */}
          <div className="pt-[33.72px] pb-[154.02px] flex justify-between items-center">
            <div className="pr-[80.48px]">
              <h1 className="font-bold text-4xl text-white leading-[50.4px]">Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan</h1>
              <p className="font-medium text-2xl text-white leading-[33.6px] py-6">Dapatkan harga khusus premium yang lebih murah hingga 60%+ dengan menjadi Reseller Premium</p>
              <button className="py-6 pl-6 pr-[50.36px] bg-white text-red font-semibold font-inter text-xl leading-6 rounded-md hover:text-redHover">Join Reseller Premium Sekarang</button>
            </div>
            <div>
              <img src={lady} alt="lady" className="pr-[54px]" />
            </div>
          </div>
          <Whatsapp />
        </div>
      </div>
    </>
  );
}

export default Header;
