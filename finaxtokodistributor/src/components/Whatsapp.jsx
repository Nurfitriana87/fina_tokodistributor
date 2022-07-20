import whatsapp from "../image/whatsapp.svg";

function Whatsapp() {
  return (
    <div className="fixed bottom-5 right-5 gap-3 font-inter bg-white px-3 py-6 mt-6 my-3 rounded-[82px] cursor-pointer">
      <button className="flex">
        <div className="pr-[12.74px] pl-6">
          <p className="font-semibold text-lg leading-6">Chat kami</p>
          <p className="font-medium text-[10px] leading-4 pr-6 text-lightgrey">di WhatsApp</p>
        </div>
        <img src={whatsapp} alt="whatsapp-logo" className=" pr-[24.76px]" />
      </button>
    </div>
  );
}

export default Whatsapp;
