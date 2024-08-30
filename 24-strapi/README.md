## Toggle Btn

To center the `react-icon` inside the button, add the `display:flex` property to the button and center it, because it the icon does sit exactly at the center.

```css
display: flex;
justify-content: center;
align-items: center;
```

```css
.toggle-btn {
	width: 2rem;
	height: 2rem;
	font-size: 1.6rem;
	background: var(--clr-white);
	border-color: transparent;
	border-radius: 3px;
	cursor: pointer;
	transition: var(--transition);
	display: flex;
	justify-content: center;
	align-items: center;
}
```

### To make the sublinks aligned vertically.

We add `display:flex`.

```css
.sidebar-sublinks a {
	display: block;
	color: var(--clr-grey-3);
	font-size: 1.061rem;
	text-transform: capitalize;
	display: flex;
	align-items: center;
	justify-items: center;
	gap: 1rem;
}
```

### Submenu

Add `align-self:stretch` to nav links and nav-center so that they take the whole height to avoid removing the submenu.

```css
.nav-links {
	display: flex;
	justify-content: center;
	align-self: stretch;
}
.nav-center {
	display: grid;
	grid-template-columns: auto 1fr;
	align-self: stretch;
}
```

### Bounding Client Rect

Only remove the submenu when we move to the left, right and bottom of our submenu.
