type ButtonProps = {
  type: "button";
  title: string;
   onClick?: () => void;
};

const Button = ({ type, title, onClick }: ButtonProps) => {
  return (
    <button
      className={`w-48 h-12 text-black rounded-lg bg-white inline-flex justify-center items-center px-5 py-2.5 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300`}
      type={type}
      onClick={onClick}
    >
      <label className=" font-nm-medium font-medium text-base cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;