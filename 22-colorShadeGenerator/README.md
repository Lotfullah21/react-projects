## Use <input type="color">

to have that cool color generator

## Install values.js library

```js
npm install values.js

```

```js
const [colors, setColors] = useState();
console.log(new Values("#fff").all(10));
```

It generates `10` shades of the above color.

## Install react-toastify

It allows us to have pop up windows when when something is getting submitted.

```js
npm install react-toastify
```

#### Import it in main.jsx

```js
import "react-toastify/dist/ReactToastify.css";
```

#### Import in App.jsx

```js
import { ToastContainer, toast } from "react-toastify";
```

### Navigator.clipboard API

```js
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
```
