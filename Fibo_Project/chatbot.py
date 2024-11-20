from llama_function import *
import json
import os
import json
import cv2
from matplotlib import pyplot as plt
import numpy as np
import time

class Chatbot:
    def __init__(self, json_path):
        self.path = json_path
    

    def createContext(self):
        data = {}
        with open('.\\Fibo_Project\\Database\\mold_Preparing\\json\\mold_Preparingv2.json', 'r', encoding='utf-8') as f:
            datav2 = json.load(f)
        for key in datav2.keys():
            v2 = datav2[key].strip()
            print(f"{key}")
            response = complete_and_print(f"บทบาทของคุณคือนักแก้คำผิด จงแก้คำผิดของ : '{v2}' โดยแสดงเฉพาะคำตอบ")
            print(response, end='\n\n')
            data[f'{key}'] = response
        with open('.\\Fibo_Project\\Database\\mold_Preparing\\json\\mold_Preparing_context.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)


    def bot(self):
        context = ''
        history = ''
        i = 1
        with open('.\\Fibo_Project\\Database\\mold_Preparing\\json\\mold_Preparing_context.json', 'r', encoding='utf-8') as f:
            jsan = json.load(f)
        for key in jsan.keys():
            context += jsan[key]
        while True:
            question = input("คุณ: ")
            conv = asking(question, context, history)
            history += f'conversation{i}\n==============\n{question}\n==============n{conv}\n'
            i += 1
            print(f"คำตอบ: {conv}")
    
    def bot_api(self, question):
        context = ''
        history = ''
        i = 1
        with open('.\\Fibo_Project\\Database\\mold_Preparing\\json\\mold_Preparing_context.json', 'r', encoding='utf-8') as f:
            jsan = json.load(f)
        for key in jsan.keys():
            context += jsan[key]
        
        #question = input("คุณ: ")
        conv = asking(question, context, history)
        history += f'conversation_{i}\n==============\n{question}\n==============n{conv}\n'
        i += 1
        print(f"คำตอบ: {conv}")
        return conv
        
    
    def main(self):
        self.createContext()
        #self.bot()
        #self.bot_api('0')

if __name__ == "__main__":
    a = 0
    bot = Chatbot(0)
    bot.main()