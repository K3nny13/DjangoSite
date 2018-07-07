from django.shortcuts import render, HttpResponse
from . models import Article

# Create your views here.
def article_list(request):
    articles = Article.objects.all().order_by('-date')
    return render(request, 'articles/article_list.html', context = {'articles': articles})

def article_detail(request, slug):
    article = Article.objects.get(slug=slug)
    return render(request, 'articles/article_detail.html', context = {'article': article})