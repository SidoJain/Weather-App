# Weather App

**Weather App** is a sleek, responsive, and interactive web application that displays real-time weather information using the [OpenWeatherMap API](https://openweathermap.org/api). Users can search for any city and receive current temperature, weather conditions, humidity, and wind speed—all with animated transitions and condition-based icons.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [API Key Setup](#api-key-setup)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

---

## Features

- Live weather data using OpenWeatherMap API
- Search by city name
- Weather-specific icons (sunny, cloudy, misty, etc.)
- Responsive and animated UI
- Error screen for invalid locations
- Keyboard and button input support

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **API:** OpenWeatherMap

---

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/SidoJain/Weather-App.git
cd Weather-App
```

Open `index.html` directly in your browser or serve locally (for cross-origin support with modules):

```bash
npx serve .
```

### API Key Setup

Replace the placeholder API key in `script.js` with your own from [OpenWeatherMap](https://openweathermap.org/api):

```javascript
const API_Key = 'YOUR_API_KEY';
```

---

## Usage

1. Enter a city name in the input field.
2. Press Enter or click the search button.
3. View current temperature, weather condition, humidity, and wind speed.
4. If the city is not found, a friendly error message appears.

---

## Customization

- **Icons:** Modify or extend images in the `/assets` folder (`clear.png`, `rain.png`, `404.png`, etc.)
- **Units:** Currently in Celsius (`units=metric`), can be changed to `imperial` for Fahrenheit.
- **Transitions:** All UI transitions are controlled via CSS classes like `.exit`, `.active`, and `.not-found`.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).