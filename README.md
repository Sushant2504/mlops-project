Farm Assistant Chatbot
This project is a conversational AI-based chatbot designed to assist farmers in making informed decisions about crop selection and fertilizer recommendations based on soil and environmental data. Users can interact with the chatbot to receive tailored recommendations, enhancing agricultural productivity and sustainability.

Features
Crop Recommendation: Suggests the most suitable crop to grow based on:
Nitrogen percentage in soil
Potassium percentage in soil
pH level of the soil
Rainfall in the user's area
State and city
Fertilizer Recommendation: Recommends appropriate fertilizers based on:
Nitrogen, Phosphorus, and Potassium levels in the soil
The crop the user wants to grow
Conversational Interface: Provides an intuitive user experience with a chatbot interface, allowing step-by-step data input.
Tech Stack
Frontend
Streamlit or Gradio: Provides a chatbot-like user interface.
Optional custom UI with HTML/CSS/JavaScript.
Backend
Flask or FastAPI: Handles API endpoints for recommendations.
Scikit-learn: Machine learning models for crop and fertilizer predictions.
Pandas: Data processing and analysis.
Python: Core programming language.
Data
Crop Recommendation Dataset: Contains information on soil and environmental conditions for various crops.
Fertilizer Dataset: Includes soil nutrient requirements for different crops.
File Structure
plaintext
Copy code
chatbot-project/
├── backend/
│ ├── app.py # Backend entry point
│ ├── models/
│ │ ├── crop_model.pkl # Trained model for crop recommendation
│ │ ├── fertilizer_model.pkl # Trained model for fertilizer recommendation
│ ├── requirements.txt # Python dependencies
│ ├── utils/
│ │ ├── data_preprocessing.py # Data preprocessing helpers
│ └── tests/
│ ├── test_api.py # Unit tests for backend
├── frontend/
│ ├── chatbot_ui.py # Streamlit/Gradio chatbot interface
│ ├── static/
│ │ ├── styles.css # Optional CSS for custom UI
│ │ └── scripts.js # Optional JS for custom UI
├── datasets/
│ ├── crop_recommendation.csv # Crop recommendation dataset
│ ├── fertilizer_recommendation.csv # Fertilizer dataset
├── docs/
│ ├── architecture.png # System architecture diagram
│ └── api_documentation.md # Backend API documentation
├── logs/
│ ├── backend.log # Backend logs
│ ├── frontend.log # Frontend logs
├── .env # Environment variables (e.g., API keys)
├── .gitignore # Git ignore file
└── README.md # Project documentation
