import { svgType } from "../../Interfaces";

const MenuBurger = ({ width, height, className }: svgType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H19M1 7H19M1 13H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuBurger;
