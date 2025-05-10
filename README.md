# Weather App

This is a simple React-based Weather App that allows users to search for weather information of any city. It fetches real-time weather data using the OpenWeatherMap API and displays it in an interactive and visually appealing interface.

## Features

- Search for weather information by city name.
- Displays temperature, humidity, weather description, and more.
- Dynamic background and animations for a better user experience.
- Responsive design for mobile and desktop devices.

## Technologies Used

- **React**: Frontend framework.
- **Material-UI**: For UI components and styling.
- **OpenWeatherMap API**: For fetching real-time weather data.
- **CSS Animations**: For smooth transitions and effects.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mini-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Environment Variables

To use the OpenWeatherMap API, you need an API key. Replace the `API_KEY` in `SearchBox.jsx` with your own API key:
```javascript
const API_KEY = "your_api_key_here";
```

## Project Structure

```
mini-project/
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── WeatherApp.css
│   ├── SearchBox.css
│   ├── InfoBox.css
│   ├── index.css
├── package.json
├── README.md
```

## Screenshots

![Weather App Screenshot](https://via.placeholder.com/800x400?text=Weather+App+Screenshot)

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Material-UI](https://mui.com/)
- [Unsplash](https://unsplash.com/) for background images.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for any bugs or feature requests.

---
Happy Coding! 😊
