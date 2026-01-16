const weatherApp = {
    apiKey: 'YOUR_OPENWEATHER_API_KEY', // Get a free key at openweathermap.org
    
    init() {
        this.searchBtn = document.getElementById('searchBtn');
        this.cityInput = document.getElementById('cityInput');
        this.display = document.getElementById('weatherDisplay');

        // Event Listeners
        this.searchBtn.addEventListener('click', () => this.fetchWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.fetchWeather();
        });
    },

    async fetchWeather() {
        const city = this.cityInput.value.trim();
        if (!city) return;

        this.renderLoading();

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            );

            if (!response.ok) throw new Error('City not found');

            const data = await response.json();
            this.renderWeather(data);
        } catch (err) {
            this.renderError(err.message);
        }
    },

    renderWeather(data) {
        // Destructuring for clean code
        const { name, main, weather, wind } = data;
        const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

        this.display.innerHTML = `
            <div class="weather-card">
                <h2>${name}</h2>
                <img src="${iconUrl}" alt="${weather[0].description}">
                <p class="temp">${Math.round(main.temp)}°C</p>
                <p class="desc">${weather[0].description.toUpperCase()}</p>
                <div class="details">
                    <span>Humidity: ${main.humidity}%</span>
                    <span>Wind: ${wind.speed} m/s</span>
                </div>
            </div>
        `;
        
        // Dynamic background update based on temp
        this.updateTheme(main.temp);
    },

    renderLoading() {
        this.display.innerHTML = '<div class="loader">Loading...</div>';
    },

    renderError(msg) {
        this.display.innerHTML = `<p class="error">⚠️ ${msg}</p>`;
    },

    updateTheme(temp) {
        document.body.style.background = temp > 20 
            ? 'linear-gradient(to bottom, #ff7e5f, #feb47b)' // Warm
            : 'linear-gradient(to bottom, #00c6fb, #005bea)'; // Cold
    }
};

weatherApp.init();