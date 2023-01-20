from dotenv import load_dotenv
import os

load_dotenv()  # take environment variables from .env.

print(os.getenv('SECRET'))