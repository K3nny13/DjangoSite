from django.shortcuts import render


def homepage(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')

def weather_vuejs(request):
    return render(request, 'weather-vuejs.html')