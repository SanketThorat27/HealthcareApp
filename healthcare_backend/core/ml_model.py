# core/ml_model.py

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

# Load the dataset
def load_data():
    url = 'https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv'
    columns = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome']
    data = pd.read_csv(url, header=None, names=columns)
    return data

# Preprocess the data
def preprocess_data(data):
    X = data.iloc[:, :-1].values  # Features
    y = data.iloc[:, -1].values  # Labels (Outcome)
    
    # Standardize the features
    scaler = StandardScaler()
    X = scaler.fit_transform(X)
    
    return X, y

# Build and train the model
def train_model(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = LogisticRegression()
    model.fit(X_train, y_train)
    
    # Evaluate the model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    return model, accuracy

# Run everything
def build_and_train_model():
    data = load_data()
    X, y = preprocess_data(data)
    model, accuracy = train_model(X, y)
    print(f'Model Accuracy: {accuracy * 100:.2f}%')
    return model
