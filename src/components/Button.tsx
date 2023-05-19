import { FC } from "react";

const Button: FC<{
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  children: any;
}> = ({ loading = false, disabled = false, type = "button", children }) => {
  return (
    <button
      type={type}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
export default Button;
