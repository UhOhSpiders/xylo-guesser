type ButtonProps = {
  text: string;
  onClick: Function;
};
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        outline: "1px solid",
        backgroundColor: "transparent",
        borderRadius: "2rem",
      }}
      onClick={()=>onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
