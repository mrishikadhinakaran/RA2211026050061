import requests
from app.config import API_ENDPOINTS

def fetch_numbers(number_id):
    if number_id not in API_ENDPOINTS:
        return None
    try:
        response = requests.get(API_ENDPOINTS[number_id], timeout=0.5)
        if response.status_code == 200:
            return response.json().get("numbers", [])
    except requests.exceptions.RequestException:
        return []
    return []

def fetch_numbers(number_id: str):
    if number_id == "prime":
        return [2, 3, 5, 7, 11]
    elif number_id == "fibonacci":
        return [0, 1, 1, 2, 3, 5]
    else:
        return None  

