from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout


def login(request):

	if request.method == "POST":
		form = AuthenticationForm(data=request.POST)
		if form.is_valid():
			
			# Log user in
			user = form.get_user()
			auth_login(request, user)
			return redirect('articles:article_list')
	
	else:	
		form = AuthenticationForm()
	return render(request, 'accounts/login.html', context = { 'form':form })
	
def logout(request):
	auth_logout(request)
	return redirect('accounts:login')	

def signup(request):

	if request.method == "POST":
		form = UserCreationForm(request.POST)
		if form.is_valid():
			user = form.save()
			# Log user in
			auth_login(request, user)
			return redirect('articles:article_list')
	
	else:	
		form = UserCreationForm()
	return render(request, 'accounts/signup.html', context = { 'form':form })