let weather = {
    apiKey: '13e786b2255800d48474a6fdbcd071dc', //properties
    fetchWeather: function (city) {
        //Method
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
            .then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' km/h';
        document.querySelector('.weather').classList.remove('loading');

        // 使用本地图片作为背景
        const cityImages = {
            Shanghai: 'shanghai.jpg',
            Wuhan: 'wuhan.jpg',
            Beijing: 'beijing.jpg',
            Changsha: 'changsha.jpg',
            Enshi: 'enshi.jpg',
            Hangzhou: 'hangzhou.jpg',
            Laifeng: 'laifeng.jpg',
            Qingdao: 'qingdao.jpg',
            Sichuan: 'sichuan.jpg',
        };

        const imageName = cityImages[name] || 'default.jpg';
        document.body.style.backgroundImage = `url('img/${imageName}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        weather.search();
    }
});

weather.fetchWeather('Tam Ky');
