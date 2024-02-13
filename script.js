const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const city = document.querySelector('.search-box input');
const API_Key = '8c1d5802d34c8cd0f177ef09aca1fbe8';

search.addEventListener('click', () => {
    funcMain();
});

city.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        funcMain();
});

const funcMain = function () {
    if (city.value == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API_Key}`).then(response => response.json()).then(json => {
        if (json.cod == '404') {
            if (container.style.height == '550px') {
                container.classList.add('exitAll');
                setTimeout(() => {
                    container.classList.remove('exitAll');
                    func404();
                }, 1500);
            }
            else if (container.style.height == '400px') {
                container.classList.add('exit404');
                setTimeout(() => {
                    container.classList.remove('exit404');
                    func404();
                }, 1500);
            }
            else 
                func404();
            return;
        }

        if (container.style.height == '550px') {
            container.classList.add('exit');
            setTimeout(() => {
                container.classList.remove('exit');
                func(json);
            }, 1500);
        }
        else if (container.style.height == '400px') {
            container.classList.add('exit404');
            setTimeout(() => {
                container.classList.remove('exit404');
                func(json);
            }, 1500);
        }
        else
            func(json);
    });
}

const func = function (json) {
    const img = document.querySelector('.weather-box img');
    const temp = document.querySelector('.weather-box .temp');
    const desc = document.querySelector('.weather-box .desc');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    container.style.height = '550px';
    weatherBox.classList.add('active');
    weatherDetails.classList.add('active');
    error404.classList.remove('active');

    switch (json.weather[0].main) {
        case 'Clear':
            img.src = 'assets/clear.png';
            break;
        case 'Rain':
            img.src = 'assets/rain.png';
            break;
        case 'Clouds':
            img.src = 'assets/cloud.png';
            break;
        case 'Mist':
            img.src = 'assets/mist.png';
            break;
        case 'Snow':
            img.src = 'assets/snow.png';
            break;
        case 'Haze':
            img.src = 'assets/mist.png';
            break;
        case 'Smoke':
            img.src = 'assets/smoke.png';
            break;
        default:
            img.src = 'assets/cloud.png';
    }

    temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    desc.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
}

const func404 = function() {
    container.style.height = '400px';
    weatherBox.classList.remove('active');
    weatherDetails.classList.remove('active');
    error404.classList.add('active');
}