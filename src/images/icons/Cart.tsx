import { svgType } from "../../Interfaces";

const Cart = ({ width, height, className }: svgType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.71 3.4H16.924C18.302 3.4 19.297 4.67 18.919 5.948L17.265 11.548C17.01 12.408 16.196 13 15.27 13H6.112C5.185 13 4.37 12.407 4.116 11.548L1.71 3.4ZM1.71 3.4L1 1M14.5 19C14.8978 19 15.2794 18.842 15.5607 18.5607C15.842 18.2794 16 17.8978 16 17.5C16 17.1022 15.842 16.7206 15.5607 16.4393C15.2794 16.158 14.8978 16 14.5 16C14.1022 16 13.7206 16.158 13.4393 16.4393C13.158 16.7206 13 17.1022 13 17.5C13 17.8978 13.158 18.2794 13.4393 18.5607C13.7206 18.842 14.1022 19 14.5 19ZM6.5 19C6.89782 19 7.27936 18.842 7.56066 18.5607C7.84196 18.2794 8 17.8978 8 17.5C8 17.1022 7.84196 16.7206 7.56066 16.4393C7.27936 16.158 6.89782 16 6.5 16C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19Z" />
    </svg>
  );
};

export default Cart;
