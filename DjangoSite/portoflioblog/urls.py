from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
	path('about/', views.about, name='about'),
	path('', views.homepage, name = 'index'),
	path('articles/', include('articles.urls')),
	path('accounts/', include('accounts.urls')),
	path('weather-vuejs/', views.weather_vuejs, name='weather-vuejs'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
