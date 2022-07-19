import phone1 from "../image/phone1.png";
import phone2 from "../image/phone2.png";

function Main() {
  return (
    <div className="container max-w-xl mx-auto py-12 font-inter">
      <h2 className="font-bold text-4xl text-black text-center py-12 leading-[50.4px]">Kenapa harus gabung jadi Reseller Premium?</h2>
      <div className="container grid grid-cols-2 py-9">
        <div className="py-4">
          <h3 className="text-darkgrey font-bold text-3xl pb-4 leading-[44px]">Harga lebih murah hingga 60%+ </h3>
          <p className="text-lightgrey font-normal leading-8">Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+ dari harga normal. Dengan harga lebih murah tentunya margin kamu bisa lebih besar, dong!</p>
        </div>
        <img src={phone1} alt="phone1" className="" />
      </div>
      <div className="grid grid-cols-2 pb-[100px]">
        <img src={phone2} alt="phone2" className="pr-8" />
        <div className="py-4">
          <h3 className="text-darkgrey font-bold text-3xl pb-4 leading-[44px]">Tentukan Sendiri Keuntunganmu dengan Dropship COD</h3>
          <p className="text-lightgrey font-normal leading-8">Kamu bisa tentukan sendiri keuntunganmu dengan fitur Dropship COD. Raih untung lebih besar tanpa modal dan resiko sama sekali.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
