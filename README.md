
### Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Ans: 
Difference between getElementById, getElementByClassName and querySelector / querySelectorAll is given below:

`getElementById:` Selects one element bu it's id. Return a single element object or null if not found.
Id must be unique in the DOM.
Example: 
```js
const element = document.getElementById('id');
```
`getElementByClassName:` selects all elements with specified class name. Return an HTML collection.

Example:
```js
const elements = document.getElementByClassName('classname');
```


`querySelector:` Selects the first element that matches a selector. Return a single element object or null if not found.
Example:
```js
const element = document.querySelector('.classname / #id /other selector');
```

`querySelectorAll:` Selects all elements that match a selector. Return a static nodelist.

Example:
```js
    const elements = document.querySelectorAll('.classname / #id / other');
```



## Q2. How do you create and insert a new element into the DOM?
Creating an element.
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.className = 'abcd';
```
Adding to the DOM
```js
const parent = document.getElementById('parent');
parent.appendChild(newDiv);
```


## Q3. What is Event Bubbling and how does it work?
Event Bubbling is when an event triggered on a child element "bubbles up" through its parent elements in the DOM tree.
```javascript
// If you click the button, events fire in this order:
// 1. button (target)
// 2. div (parent) 
// 3. body (grandparent)
// 4. html (root)

<div onclick="alert('div clicked')">
  <button onclick="alert('button clicked')">Click me</button>
</div>
```
## Q4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is attaching a single event listener to a parent element to handle events from its children, using event bubbling.
```javascript
// Instead of adding listeners to each button
document.getElementById('container').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});
```


## Q5. What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault():`

- Stops the browser's default behavior
- Event still bubbles up
Example: Prevent form submission, link navigation

`stopPropagation():`

- Stops event from bubbling up to parent elements
- Default behavior still occurs
Example: Prevent parent click handlers from firing
A