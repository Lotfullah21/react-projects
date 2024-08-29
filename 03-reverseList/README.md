## DOM

- a tree like structure that represents HTML documents, it uses nodes to describe each part of the document

## Map

- we can manipulate list objects using map method, it will take an array as input and will apply some transformation on each element.
- the return list will be the same length as original array.

## Component

- it is a function that returns JSX, JSX is a syntax extension of JavaScript

## Key

- keys are identifiers that help React determine which elements have added,removed or changed.
- we use keys to identify and distinguish between elements
- Keys instruct React about whether a specific element’s internal state should be preserved or not.
- Keys instruct React how to treat a specific element when an update occurs.
- at last,it is all about dom manipulation, if we do not use keys, our app will be confused and does extra work to manipulate the dom.
- keys should be unique.
- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.
  https://react.dev/learn/rendering-lists#where-to-get-your-key

## Map

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

## Controlled Components

# Form

### Controlled Components

it offers a declarative application programming interface (API) which gives the full access to control the component.
we use controlled components in React in order to have more control over the forms in an application you are creating.
A combination of local state and the value prop is needed to create a controlled component.
form data is handled by component's state.

#### value

- a special property that determines the content of the element
- to use a controlled component, we use the combination of local state and value prop.
- ### onChange callback
  - to get the value using event object which represents the action that just toke place.
  - (event.target.value) to get access to the value.
- ### onSubmit
  - use this property inside form element to do something while submitting the form
