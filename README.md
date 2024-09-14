# Frontend Mentor - Article preview component solution

This is a solution to the
[Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections
you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- See the social media share links when they click the share icon

### Screenshot

[iphone](./screenshots/iPhone.png)
[iphone active](./screenshots/iPhone-active.png)
[macbook](./screenshots/macbook.png)
[macbook active](./screenshots/macbook-active.png)

### Links

- Solution URL:
  [Solution URL](https://github.com/Mubarak-Adeyemi/article-preview-component-master)
- Live Site URL:
  [Livie Site URL](https://mubarak-adeyemi.github.io/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- javascript

### What I learned

#### HTML Accessibility Features:

I learned how to use ARIA attributes to enhance the accessibility of interactive
elements like buttons and popups. This ensures that screen readers can interpret
the content correctly, especially for visually impaired users.

```html
<button
  id="share-btn"
  class="share-button"
  aria-label="Share this article"
  aria-haspopup="dialog"
>
  <!-- SVG code -->
</button>

<div
  id="popup-contain"
  class="popup-container"
  role="dialog"
  aria-labelledby="share-popup-heading"
  aria-hidden="true"
></div>
```

Using aria-label and aria-hidden attributes allows for better communication with
screen readers.

#### CSS Transitions and Hover Effects:

I explored how to implement smooth transitions and hover effects in CSS to make
the UI more interactive and visually appealing. This includes adding hover
states for buttons and using transitions to animate elements.

```css
.share-button {
  padding: 0.7rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: inset -0.1em 0 0.1em var(--Very-Dark-Grayish-Blue);
  transition: 0.4s;
}

.share-button:hover {
  box-shadow: inset 0.1em 0.1em 5px var(--Very-Dark-Grayish-Blue);
}
```

The hover effect changes the box-shadow smoothly, creating a skeuomorphic button
effect, which I learned from geeksforgeeks.org.

#### JavaScript Event Listeners and DOM Manipulation:

I deepened my understanding of how to handle button clicks and toggle classes to
show/hide a popup dynamically.

```js
const shareBtn = document.getElementById("share-btn");
const popupContainer = document.getElementById("popup-contain");

shareBtn.addEventListener("click", function () {
  const isHidden = popupContainer.getAttribute("aria-hidden") === "true";
  if (isHidden) {
    popupContainer.classList.add("active");
    this.classList.add("active");
    popupContainer.setAttribute("aria-hidden", "false");
  } else {
    popupContainer.classList.remove("active");
    this.classList.remove("active");
    popupContainer.setAttribute("aria-hidden", "true");
  }
});
```

Here, I learned how to toggle the popup's visibility using classList and
setAttribute() for dynamic accessibility management.

### Continued development

#### Advanced CSS Layouts:

I want to further improve my knowledge of modern CSS layouts like CSS Grid and
Flexbox, ensuring responsiveness across multiple screen sizes.

#### Accessibility Best Practices:

While I implemented basic ARIA attributes, I want to deepen my understanding of
accessibility in web development, particularly focusing on how to improve for
keyboard navigation and screen readers.

#### JavaScript Efficiency:

I aim to refactor and optimize my JavaScript code for better performance,
especially when dealing with more complex interactivity and large-scale
projects.

### Useful resources

- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-skeuomorphic-buttons/) -
  How to Create Skeuomorphic Buttons:

This article helped me understand how to use shadows and transitions to create a
3D-like skeuomorphic button effect.

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) -
  I referred to the MDN documentation for understanding ARIA attributes and how
  to make elements accessible. Link: MDN Web Docs

## Author

Frontend Mentor - (https://www.frontendmentor.io/profile/Mubarak-Adeyemi)
Twitter - (https://www.twitter.com/mubarakElarabiy)

## Acknowledgments

I would like to thank the GeeksforGeeks team for their article on skeuomorphic
buttons, which greatly enhanced my understanding of button styling. Special
thanks to Frontend Mentor for providing this challenging yet rewarding project
that helped me grow my skills in frontend development.
