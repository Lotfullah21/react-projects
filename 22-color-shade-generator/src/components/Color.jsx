import { toast } from "react-toastify";

const Color = ({ color, index }) => {
  const { hex, weight } = color;
  const savedToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("copied to clipboard");
      } catch (error) {
        toast.error("failed to copy to clipboard");
      }
    } else {
      toast.error("access denied");
    }
  };
  console.log(hex);
  return (
    <article
      className={index > 10 ? "color-container color-light" : "color-container"}
      style={{ background: `#${hex}` }}
      onClick={savedToClipboard}
    >
      <p className="color-percent">{weight}%</p>
      <p className="color-hex">#{hex}</p>
    </article>
  );
};
export default Color;
