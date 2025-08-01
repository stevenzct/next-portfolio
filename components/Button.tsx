type ButtonProps = {
  type: "button";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className={`w-48 h-12 rounded-lg bg-white inline-flex justify-center items-center px-5 py-2.5`}
      type={type}
    >
      <label className="text-black font-nm-medium font-medium text-base">
        {title}
      </label>
    </button>
  );
};

export default Button;