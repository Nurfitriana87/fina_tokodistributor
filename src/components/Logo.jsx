import logotd from "../image/tokodistributor.png";

function Logo() {
  return (
    <a href="https://www.tokodistributor.com/">
      <img src={logotd} alt="logo-tokodistributor" className="cursor-pointer w-1/3 " />
    </a>
  );
}

export default Logo;
