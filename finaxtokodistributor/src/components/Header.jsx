import logotd from "../image/tokodistributor.png";
import lady from "../image/lady.png";

function Header() {
  return (
    <>
      {/* header */}
      <div className="h-[698px] bg-gradient-to-r from-linerGradient2 to-linerGradient1">
        <header className="container max-w-3xl mx-auto flex flex-row py-4">
          <img src={logotd} alt="logo-tokodistributor" className="justify-start" />
          <button className=" bg-white py-3 px-5 rounded-md font-bold text-base text-red ">Join Premium</button>
        </header>
        {/* header */}

        {/* hero section */}

        <div className="container mx-auto max-w-4xl flex items-center justify-center">
          <div>
            <h1 className="font-bold text-4xl text-white leading-[50.4px]">Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan</h1>
            <p className="font-medium text-2xl text-white leading-[33.6px] py-6">Dapatkan harga khusus premium yang lebih murah hingga 60%+ dengan menjadi Reseller Premium</p>
            <button className="py-6 bg-white text-red font-semibold text-xl leading-6 rounded-md">Join Reseller Premium Sekarang </button>
          </div>

          <img src={lady} alt="lady" className="w-60" />
        </div>
      </div>
      {/* hero section */}
    </>
  );
}

export default Header;
