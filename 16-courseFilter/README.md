## <Course {...course}></Course>

When destructuring, we cannot assign and send the whole data as props, for instance bellow snippet will give us error.

```js
<Course data={...course}></Course>
```

## startDate: new Date(2024, 7, 8),

React cannot directly render a JavaScript Date object as a child of an element, we need to format to a string.

### CSS

```CSS

.course {
	max-width: 30rem;
	min-width: 18rem;
	box-shadow: var(--shadow-md);
	transition: var(--transition);
	display: grid;
	margin: 0 auto;
	margin-top: 1rem;
	border-radius: var(--border-radius);
	cursor: pointer;
	max-width: 520px;
	min-width: 24rem;
}
```

```css
max-width: 440px;
min-width: 22rem;
```

some of the cards images are big and some are small, to make them all have same height and width, we add this property.

One other tips would be to add the same content to all, like same length description.

## Footer and icons

for course footers and icons, we can place them inside buttons and also use flex to take their own space.

Prefer flex container in one column layout.
