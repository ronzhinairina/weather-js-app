export class WeatherApi {
    static apiKey = '0b34dea43c97053790b116a5a22120e9';
    static getWeatherByCoordinates(lat, lon) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
            .then(res => res.json())
            .then(res => {
                return {
                    temperature: res.main.temp,
                    place: res.name,
                    country: res.sys.country,
                    feels_like: res.main.feels_like,
                    pressure: res.main.pressure,
                    humidity: res.main.humidity,
                    description: res.weather[0].main
                }
            })
    }
}