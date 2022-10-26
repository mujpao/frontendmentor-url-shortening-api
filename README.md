# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This project gave me an opportunity to practice React, which I have been learning recently. One of the first steps was to divide the app into components and figure out whether to use class or functional components. I have mostly been using class components if there is state and functional components if there is no state. However, for this project, I experimented with using hooks in the `Navigation` and `ShortenedLink` components. This seemed to result in cleaner-looking code than if I had used a class component.

Here is an example of using the `useState()` hook to add a variable that stores whether or not a link has just been copied:

```js
function ShortenedLink(props) {
  const { originalLink, shortenedLink } = props;

  const [showCopied, setShowCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(shortenedLink).then(() => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    });
  }

  return (
    <div className="shortened-link">
      <p className="original">{originalLink}</p>
      <hr />
      <a href={shortenedLink} className="shortened">
        {shortenedLink}
      </a>
      <button
        type="button"
        className={`btn copy-btn ${showCopied ? "copied" : ""}`}
        onClick={copyLink}
      >
        {showCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
```

In the `ShortenerForm` component, I used a `ref` to keep track of the input DOM element so that I could use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) to check the validity of the input whenever it is changed.

I used [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist the shortened links after the browser is refreshed.

### Continued development

I want to continue using React and keep learning how and when to use hooks. I will consider using [classnames](https://www.npmjs.com/package/classnames) in the future to make it easier to work with classes.

### Useful resources

- [Stack Overflow question about changing the color of an SVG](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element) - This helped me figure out how to change the color of the icons on hover.

## Author

- Website - [mujpao](https://github.com/mujpao)
- Frontend Mentor - [@mujpao](https://www.frontendmentor.io/profile/mujpao)
