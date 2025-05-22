from django.shortcuts import render
import requests

def index(request):
    weather_data = {}
    error = None

    if request.method == 'POST':
        city = request.POST.get('city')
        if city:
            api_key = 'd2639ad11099d5071b52d041148c583b'  # Replace with your OpenWeatherMap API key
            url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
            response = requests.get(url)
            
            if response.status_code == 200:
                data = response.json()
                weather_data = {
                    'city': city,
                    'temperature': data['main']['temp'],
                    'description': data['weather'][0]['description'],
                    'icon': data['weather'][0]['icon'],
                }
            else:
                error = 'City not found or API error.'
        else:
            error = 'Please enter a city name.'

    return render(request, 'weather_app/index.html', {'weather_data': weather_data, 'error': error})