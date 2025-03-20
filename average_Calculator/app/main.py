from fastapi import FastAPI, HTTPException
from app.utils import fetch_numbers
from app.storage import storage

app = FastAPI()

@app.get("/numbers/{number_id}")
async def get_numbers(number_id: str):
    """Fetch numbers, update storage, and return response."""
    new_numbers = fetch_numbers(number_id)
    if new_numbers is None:
        raise HTTPException(status_code=400, detail="Invalid number ID")

    prev_state = storage.get_numbers()
    storage.add_numbers(new_numbers)
    curr_state = storage.get_numbers()
    
    return {
        "windowPrevState": prev_state,
        "windowCurrState": curr_state,
        "numbers": new_numbers,
        "avg": storage.get_average()
    }
