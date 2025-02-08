# from django.shortcuts import render
# Create your views here.
# core/views.py
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# import numpy as np
# from .ml_model import build_and_train_model
# from django.contrib.auth.models import User

# # Load the trained model
# model = build_and_train_model()

# @api_view(['POST'])
# def predict(request):
#     # Get data from the request
#     data = request.data

#     # Extract features from the request data
#     try:
#         features = np.array([
#             data['Pregnancies'],
#             data['Glucose'],
#             data['BloodPressure'],
#             data['SkinThickness'],
#             data['Insulin'],
#             data['BMI'],
#             data['DiabetesPedigreeFunction'],
#             data['Age']
#         ]).reshape(1, -1)
#     except KeyError as e:
#         return Response({"error": f"Missing field: {str(e)}"}, status=400)

#     # Make the prediction
#     prediction = model.predict(features)
    
#     # Prepare the prediction result
#     outcome = "Diabetic" if prediction[0] == 1 else "Non-Diabetic"
#     confidence = 0.92  # This can be calculated based on model probabilities

#     return Response({"prediction": outcome, "confidence": confidence})

# def register_user(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     email = request.data.get('email')

#     if User.objects.filter(username=username).exists():
#         return Response({"error": "Username already exists"}, status=400)

#     user = User.objects.create_user(username=username, email=email, password=password)
#     return Response({"success": "User registered successfully"})

#mod-2
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# import numpy as np
# from .ml_model import build_and_train_model
# from django.contrib.auth.models import User

# # Load the trained model
# model = build_and_train_model()

# @api_view(['POST'])
# def predict(request):
#     # Get data from the request
#     data = request.data

#     # Extract features from the request data
#     try:
#         features = np.array([
#             data['Pregnancies'],
#             data['Glucose'],
#             data['BloodPressure'],
#             data['SkinThickness'],
#             data['Insulin'],
#             data['BMI'],
#             data['DiabetesPedigreeFunction'],
#             data['Age']
#         ]).reshape(1, -1)
#     except KeyError as e:
#         return Response({"error": f"Missing field: {str(e)}"}, status=400)

#     # Make the prediction
#     prediction = model.predict(features)
    
#     # Prepare the prediction result
#     outcome = "Diabetic" if prediction[0] == 1 else "Non-Diabetic"
#     confidence = 0.92  # This can be calculated based on model probabilities

#     return Response({"prediction": outcome, "confidence": confidence})

# @api_view(['POST'])
# def register_user(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     email = request.data.get('email')

#     if User.objects.filter(username=username).exists():
#         return Response({"error": "Username already exists"}, status=400)

#     user = User.objects.create_user(username=username, email=email, password=password)
#     return Response({"success": "User registered successfully"})

# # Protected route using class-based views
# class ProtectedView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         return Response({"message": "This is a protected route"})

#mod-3
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate  # Import this at the top
import numpy as np
from .ml_model import build_and_train_model

# Load the trained model
model = build_and_train_model()

@api_view(['POST'])
def predict(request):
    # Get data from the request
    data = request.data

    # Extract features from the request data
    try:
        features = np.array([
            data['Pregnancies'],
            data['Glucose'],
            data['BloodPressure'],
            data['SkinThickness'],
            data['Insulin'],
            data['BMI'],
            data['DiabetesPedigreeFunction'],
            data['Age']
        ]).reshape(1, -1)
    except KeyError as e:
        return Response({"error": f"Missing field: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)

    # Make the prediction
    prediction = model.predict(features)
    
    # Prepare the prediction result
    outcome = "Diabetic" if prediction[0] == 1 else "Non-Diabetic"
    confidence = 0.92  # This can be calculated based on model probabilities

    return Response({"prediction": outcome, "confidence": confidence}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny]) 
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password or not email:
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    # Create user and generate a token
    user = User.objects.create_user(username=username, email=email, password=password)
    token, _ = Token.objects.get_or_create(user=user)

    return Response({"success": "User registered successfully", "token": token.key}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Both username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=username, password=password)

    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


# Protected route using class-based views
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "This is a protected route"}, status=status.HTTP_200_OK)
