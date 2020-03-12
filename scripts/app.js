const form = document.querySelector('form');
const details = document.querySelector('.details');
const icon = document.querySelector(".icon img");
const time = document.querySelector(".time");
const img = document.querySelector(".img");


var forecast = new Forecast();

updateUI = (data) => {
    const {
        cityDet,
        weather
    } = data;
    const html = `
            <h5 class="my-3">${cityDet.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>`;
    details.innerHTML = html;

    const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime) {
      timeSrc = "../img/day.svg";
    } else {
      timeSrc = "../img/night.svg";
    }
    time.setAttribute("src", timeSrc);

}

form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.city.value.trim();
    form.reset();
    forecast.updateCity(input).then(data => updateUI(data)).catch(err => {
        console.log(err);
    });
})