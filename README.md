# Hoverboard
HTML | CSS | JavaScript 

This app allows users to mouseover or touch the boxes to let them light up with a random color highlighting effect following. 

JavaScript is used to create the divs for the squares established in CSS.  The SQUARES const is set to the limit of 500, this ensures that when the For Loop is running that the number does stop incrementing at the number 500 . 

The For Loop is also used to create Event Listeners for the SQUARES by executing functions when the cursor goes over a square and comes off. The CSS for the class of square and square:hover is used to indicate the length in which the square transitions to a color and returns to its original color. Lastly, the container.appendChild(square); was added to allow the class of square to be passed into the DOM.

To create a random color, we use a [Math.floor(Math.random()] return function with an established array of colors to be selected from. 

Functions that were necessary to make the color changes possible were setColor and removeColor. These functions ensured that the style.elements were able to be applied to the square classes as they were being hovered over and removed when the pointer was no longer on them.
