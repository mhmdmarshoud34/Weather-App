# Weather Checker

A simple and user-friendly weather checking application built using HTML, CSS, and JavaScript. The app allows users to check the current weather conditions for any city by entering the city's name.

## Features

- Start and replay functionality
- Fetches real-time weather data
- Displays temperature, city name, humidity, and wind speed
- Engaging animations and a responsive design
- Visual feedback for different weather conditions

## Installation

1. Clone the repository or download the ZIP file.
2. Extract the files to your desired location.

## Usage

1. Open `index.html` in your web browser.
2. Enter the name of the city in the input field.
3. Click the search button.
4. The weather information for the entered city will be displayed on the screen.
5. If the city name is invalid, an error modal will appear.

## Files

- **index.html**: The main HTML file containing the structure of the application.
- **style.css**: The CSS file containing styles and animations for the application.
- **script.js**: The JavaScript file containing the application logic.

## Code Overview

### HTML (`index.html`)

The HTML file includes the structure of the web page. It has an input field for entering the city name, a search button, and a section to display the weather information. It also includes a modal for displaying error messages when the city is not found.

### CSS (`style.css`)

The CSS file styles the web page. It includes styling for the input field, button, weather information display, and error modal. It also contains media queries to ensure the application is responsive and looks good on different screen sizes.

### JavaScript (`script.js`)

The JavaScript file contains the logic for fetching and displaying weather data. It uses the OpenWeatherMap API to get weather data based on the city name entered by the user. It also handles displaying the error modal when the city is not found.

- **API Key**: The API key for OpenWeatherMap is stored in a variable.
- **API URL**: The base URL for the OpenWeatherMap API is stored in a variable.
- **Event Listeners**: The JavaScript file sets up event listeners for the search button and the error modal close button.
- **Weather Fetching**: The `checkWeather` function fetches weather data from the API and updates the DOM elements with the fetched data.
- **Error Handling**: The `showErrorModal` and `closeErrorModal` functions handle displaying and closing the error modal.

## How to Customize

- **API Key**: Replace the existing API key in `script.js` with your own OpenWeatherMap API key.
- **Weather Icons**: Update the image sources in the `script.js` file to use different icons for various weather conditions.
- **Styling**: Modify the `style.css` file to change the look and feel of the application.

## License

This project is open source and available under the MIT License.
