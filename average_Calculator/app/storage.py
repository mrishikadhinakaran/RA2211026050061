from collections import deque
from app.config import WINDOW_SIZE  # ✅ Import the missing variable

class NumberStorage:
    def __init__(self, window_size):
        self.window_size = window_size
        self.numbers = deque(maxlen=window_size)

    def add_numbers(self, new_numbers):
        for num in new_numbers:
            if num not in self.numbers:
                self.numbers.append(num)

    def get_numbers(self):
        return list(self.numbers)

    def get_average(self):
        return round(sum(self.numbers) / len(self.numbers), 2) if self.numbers else 0

storage = NumberStorage(WINDOW_SIZE)  # ✅ Now this will work
