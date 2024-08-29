in setIndex we have access to the current value of the state value.

## Install react icons

```sh
npm install react-icons --save
```

```js
const nextPerson = () => {
	setIndex((currentIndex) => {
		const newIndex = currentIndex + 1;
		return newIndex;
	});
};
```

By using a callback function inside `state function` and passing a value, we can have to previous values.
Always return the new index.
