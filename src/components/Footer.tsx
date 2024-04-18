import LogoImage from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row gap-5 justify-between items-center ">
        <img src={LogoImage} alt="Logo" />
        <div className="w-full md:w-2/3 mt-10 md:mt-0 flex flex-col sm:flex-row gap-10 justify-center sm:justify-between text-center sm:text-start">
          <div className="flex flex-col justify-center gap-2">
            <span className="mb-1 font-medium text-xl uppercase">HELP</span>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Support
            </a>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Help Center
            </a>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <span className="mb-1 font-medium text-xl uppercase">CONTACT</span>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Terms & Condition
            </a>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Return & Exchange Policy
            </a>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <span className="mb-1 font-medium text-xl uppercase">
              FOLLOW US
            </span>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Facebook
            </a>
            <a
              className="text-lg transition-colors hover:text-[#0B6434]"
              href="#"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
