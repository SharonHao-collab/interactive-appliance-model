
# Tsururun! — Light Beauty Device Simulator

## Project Overview

**Tsururun! (つるるん！)** is an interactive webpage that simulates a Japanese light beauty device through a playful, winter-themed magazine design.

The project combines HTML, CSS, and JavaScript to create a digital beauty magazine where users can interact with a device, switch between different modes, and see how the page responds through changes in color, lighting, and text.

Rather than presenting a traditional product instruction manual, I wanted to make the experience feel like browsing a Japanese lifestyle magazine.

## Features

The simulator includes three interactive modes:

- **OFF Mode:** The page uses soft blue and cream colors to represent the device being turned off.
- **LOW Mode:** The page changes to light pink, representing a gentle setting.
- **HIGH Mode:** The page changes to deeper pink and plum tones, representing a stronger setting.

Users can interact with the device using the power button:

- **Single press:** Turn the device on in LOW mode.
- **Quick double press:** Switch from LOW to HIGH mode.
- **Long press (0.65 seconds):** Turn the device off.

There is also a secondary button in the editor's note section that allows users to cycle through all three modes.

The page includes responsive layouts for desktop and mobile screens, as well as keyboard interaction.

## Design Concept

My main design inspiration came from Japanese beauty and lifestyle magazines.

I wanted the website to feel soft, playful, and visually engaging rather than technical.

Some design choices include:

- A magazine-style layout with page numbers and a visible facing page.
- Japanese typography and editorial-style headlines.
- A line-art portrait and small decorative illustrations.
- A beauty device created entirely with CSS.
- Soft winter color palettes that change with the selected mode.
- Visual feedback through the device's indicator lights, background colors, and text.

One important design decision was connecting the device's functional state with the overall appearance of the webpage. Instead of only changing a small indicator on the device, the entire page changes colors when users switch modes.

## Technologies Used

### HTML5
- Organizes the page content and interactive elements.
- Includes semantic sections, buttons, and accessibility labels.
- Uses inline SVG illustrations for decorative visuals.

### CSS3
- Creates the magazine layout, typography, and beauty device.
- Uses gradients, shadows, and custom properties to build the visual design.
- Controls the color themes for different device modes.
- Supports responsive layouts for different screen sizes.

### JavaScript
- Manages the OFF, LOW, and HIGH states.
- Detects short presses, quick double presses, and long presses.
- Updates the displayed instructions and mode information.
- Changes the page's visual state through HTML data attributes.

## Project Structure

```text
tsururun/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — Page structure and content
- `style.css` — Layout, illustrations, styling, and responsive design
- `script.js` — Interactive behavior and state management
- `README.md` — Project documentation

## How to Run

1. Download or clone this repository.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in a web browser.
4. Click or press the device's power button to explore the different modes.

No installation, external libraries, or additional software is required.

## Interaction Instructions

| Action | Result |
|---|---|
| Single press while OFF | Turn on LOW mode |
| Two quick presses while LOW | Switch to HIGH mode |
| Long press (650 ms) | Turn OFF |
| Click the editor's note button | Cycle through OFF, LOW, and HIGH |

The simulator is a visual interaction prototype, not a real beauty treatment device.

## Reflection

Through this project, I explored how visual design and interactive behavior can work together to create a more engaging user experience.

One thing I found interesting was how a simple interaction, such as pressing a power button, could influence the appearance of an entire webpage. By connecting device states with different color palettes, I could make the interface communicate information without relying only on written instructions.

I also learned more about the different roles of HTML, CSS, and JavaScript. HTML provides the structure, CSS creates the visual experience, and JavaScript controls how the page responds to user actions.

If I continue developing this project, I would like to improve the transition animations between modes, make the device interaction more intuitive for first-time users, and test the experience on different screen sizes.

## Credits

Created as a creative web design and interactive media project.

All illustrations and device visuals are implemented using HTML, CSS, and SVG, without external image assets.
