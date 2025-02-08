# from django.urls import path
# from .views import predict

# urlpatterns = [
#     path('predict/', predict, name='predict'),
# ]

#mod-1
from django.urls import path
from .views import predict, register_user, ProtectedView , login_user

urlpatterns = [
    path('predict/', predict, name='predict'),
    path('register/', register_user, name='register'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('login/', login_user, name='login'),
]
