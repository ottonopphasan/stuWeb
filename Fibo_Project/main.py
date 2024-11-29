from chatbot import Chatbot
from pdfparser import documentPrepare
import os
from fastapi import FastAPI, File, UploadFile
from fastapi import HTTPException
from pydantic import BaseModel
#uvicorn main:app --reload

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    in_stock: bool
    #tags: list[str] = []

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI!"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id > 1000:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item_id": item_id*5}

@app.get("/chatbot/{question}")
def read_item(question: str):
    if type(question) != str:
        raise HTTPException(status_code=404, detail="Invalid input")
    hope = Chatbot()
    return {"answer": hope.bot_api(question)}

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}