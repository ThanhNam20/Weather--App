class Forecast {
    constructor() {
        this.key = "	TyqnPE16HoOq7pcrwqOhQyDzapCMvuym";
    }
    async getCity(city) {
        const query = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.key}&q=${city}`;
        var response = await fetch(query);
        var data = await response.json();
        return data[0];
    }
    async getWeather(cityKey) {
        const query = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${this.key}`;
        var response = await fetch(query);
        var data = await response.json();
        return data[0];
    }

    async updateCity(city) {
        const cityDet = await this.getCity(city);
        const weather = await this.getWeather(cityDet.Key);
        return {
            cityDet,
            weather
        };
    }
}