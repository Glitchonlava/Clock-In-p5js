# Clock-In-p5js

A lightweight digital clock built with p5.js. Displays the current time in 12-hour format (HH:MM:SS AM/PM) using p5.js drawing and text.

## Stack
- Languages: HTML, CSS, JavaScript
- Runtime / Library: p5.js (loaded from CDN)

## Demo / Preview
Open index.html in a modern browser (Chrome, Firefox, Edge) to see the clock.

## Files
- index.html — page that loads p5.js and the sketch
- sketch.js — main p5 sketch that reads the current time and renders the digital clock
- style.css — minimal styles to make the canvas fill the page
- LICENSE — MIT license

## How to run (quick)
1. Clone the repo:
   git clone https://github.com/Glitchonlava/Clock-In-p5js.git
2. Open the project folder and either:
   - Double-click index.html to open it in your browser, or
   - Serve it locally (recommended) and open http://localhost:8000:
     - Python: python -m http.server 8000
     - VS Code: use the Live Server extension

No build step or package install required — p5.js is loaded from the CDN in index.html.

## How to customize
- Canvas size: edit canvasWidth / canvasHeight in sketch.js.
- Font / colors: change textFont, textSize, fill() and background() in sketch.js.
- Add an analog clock: there is a placeholder function in sketch.js; move or implement analog drawing logic and ensure any referenced images/variables (like img) are defined or removed.

## Notes & TODO
- The code currently logs time to the console with console.log — remove for production.
- There is an inner function named analogClock defined inside digitalClock and a reference to an undefined img; consider moving analogClock to top-level and implementing or removing the image code.
- For robustness, avoid mutating the numeric hrs/mins/secs variables when creating the display string; compute display values from separate local variables to prevent type coercion bugs.

## Contributing
Contributions and improvements welcome. Open an issue or submit a pull request with changes or suggestions.

## License
This project is licensed under the MIT License. See LICENSE for details.
