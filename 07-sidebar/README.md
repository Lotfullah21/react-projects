## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is especially useful for things like theming, user authentication, or any other data that many components in an application need access to.

#### 1. Creating Context

```js
const AppContext = createContext();
```

#### 2. AppProvider Component

The AppProvider is a component that wraps its children in a Context.Provider. It holds the state and functions you want to share with other components.

```js
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isModalOpen,
				openModal,
				openSidebar,
				closeModal,
				closeSidebar,
			}}>
			{children}
		</AppContext.Provider>
	);
};
```

The AppProvider component provides this state and functions to any of its child components.
{children} is used to render whatever JSX elements are placed between the <AppProvider> tags when the component is used

#### 4. useGlobalContext Hook

```js
<AppProvider>
	<SomeComponent />
	<AnotherComponent />
</AppProvider>
```

SomeComponent and AnotherComponent are the children of AppProvider.

The {children} prop inside AppProvider will render these components inside the AppProvider, meaning they have access to the context provided.

```js
export const useGlobalContext = () => {
	return useContext(AppContext);
};
```

The useGlobalContext is a custom hook that makes it easier to consume the context. Instead of importing useContext(AppContext) in every component, you can just call useGlobalContext() to get access to the context's value.

#### 5. Usage in the Application:

In this part of the code, the AppProvider wraps the entire App component. This means that any component inside App can now access the values provided by AppProvider (e.g., isSidebarOpen, isModalOpen, openModal, etc.) via the context.

```js
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
```

## Modal

We control the `modal-container` using `modal-overlay`.

## Sidebar

```css
.sidebar {
	grid-template-rows: auto 1fr auto;
}
```

`auto` means, the height should be same as contents height.
`1fr` takes the entire left over space.

## react icons

Most of the times, react icons does not align with the header or nav links, add the given css to align it.
Because we are adding the icons inside a button, so align it based on the button.

```css
.close-btn {
	font-size: 2rem;
	background: transparent;
	border: transparent;
	color: var(--clr-primary-5);
	border: 2px slateblue solid;
	display: flex;
}
```
