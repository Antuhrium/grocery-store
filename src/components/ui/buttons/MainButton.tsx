const MainButton = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={`md:w-fit px-10 py-4 rounded-xl font-medium text-sm uppercase ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MainButton;
