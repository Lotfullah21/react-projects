import { toast } from "react-toastify";

const Color = ({ color, index }) => {
	const { hex, weight } = color;
	const saveToClipboard = async () => {
		// Checks if API is available or not
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success("color copied to clipboard");
			} catch (e) {
				toast.error("Failed to copy to clip board");
			}
		} else {
			toast.error("color not available");
		}
	};
	return (
		<article
			className={index > 10 ? "color-light color-box" : "color-box"}
			style={{ background: `#${hex}` }}
			onClick={saveToClipboard}>
			<p>{weight}%</p>
			<p>{`#${hex}`}</p>
		</article>
	);
};
export default Color;
