import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Logo from "../images/logo.png";
import Person from "../images/icons/Person";
import Cart from "../images/icons/Cart";
import MenuBurger from "../images/icons/MenuBurger";
import CloseMenu from "../images/icons/CloseMenu";

const NavBar = () => {
  const { pathname } = useLocation();
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={
        openNav
          ? "absolute top-0 left-0 w-full h-full bg-[#0B6434] z-30 flex flex-col items-center justify-center"
          : "md:container mx-5 md:mx-auto py-5 flex justify-between items-center"
      }
    >
      {/* LOGO */}
      <div className={openNav ? "hidden" : "max-w-[50px] max-h-[50px]"}>
        <Link to={"/"} className="">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* NAVLINKS */}
      <nav
        className={
          openNav
            ? "flex flex-col justify-center items-center gap-10 text-3xl text-white"
            : "hidden md:flex md:items-center text-lg md:justify-center md:gap-10 "
        }
      >
        <Link
          to={"/"}
          onClick={() => setOpenNav(false)}
          className={`font-medium transition-colors hover:text-[#0B6434] ${
            pathname === "/" ? "text-[#0B6434]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/"}
          onClick={() => setOpenNav(false)}
          className="font-medium transition-colors hover:text-[#0B6434]"
        >
          About
        </Link>
        <Link
          to={"/"}
          onClick={() => setOpenNav(false)}
          className="font-medium transition-colors hover:text-[#0B6434]"
        >
          Service
        </Link>
        <Link
          to={"/"}
          onClick={() => setOpenNav(false)}
          className="font-medium transition-colors hover:text-[#0B6434]"
        >
          Product
        </Link>
        <Link
          to={"/"}
          onClick={() => setOpenNav(false)}
          className="font-medium transition-colors hover:text-[#0B6434]"
        >
          Contact
        </Link>
      </nav>

      {/* Socials */}
      <div
        className={
          openNav
            ? "absolute top-8 right-5 flex justify-between left-5"
            : "flex items-center gap-6"
        }
      >
        <Link to={"/shopping-cart"} onClick={() => setOpenNav(false)}>
          <Cart
            width={26}
            height={26}
            className={
              openNav
                ? "fill-none *:hover:fill-white *:stroke-white *:stroke-[1.5px]"
                : "fill-none *:hover:fill-black *:stroke-black *:stroke-[1.5px]"
            }
          />
        </Link>
        <Person
          width={26}
          height={26}
          className={
            openNav
              ? "fill-none *:hover:fill-white *:stroke-white *:stroke-[1.5px]"
              : "fill-none *:hover:fill-black *:stroke-black *:stroke-[1.5px]"
          }
        />
        {openNav ? (
          <button onClick={() => setOpenNav((prev) => !prev)}>
            <CloseMenu
              width={26}
              height={26}
              className="md:hidden z-40 *:fill-white"
            />
          </button>
        ) : (
          <button onClick={() => setOpenNav((prev) => !prev)}>
            <MenuBurger width={26} height={26} className="md:hidden" />
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
