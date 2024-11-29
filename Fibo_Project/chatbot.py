from llama_function import *
import json
import os
import json
import cv2
from matplotlib import pyplot as plt
import numpy as np
import time
import pandas as pd

class Chatbot:
    def __init__(self):
        self.path = 1
    

    def createContext(self, docs):
        context = ''
        context += f'Docs:{docs}\n============================start============================\n'
        print(context)
        data = {}
        #with open(f'.\\Fibo_Project\\Database\\{docs}\\json\\{docs}v3_easyocr.json', 'r', encoding='utf-8') as f:
        with open(f'.\\Fibo_Project\\Database\\{docs}\\json\\{docs}v2.json', 'r', encoding='utf-8') as f:
            datav2 = json.load(f)
        for key in datav2.keys():
            v2 = datav2[key].strip()
            #print(f"{key}")
            response = complete_and_print(f"บทบาทของคุณคือนักแก้คำผิด จงแก้คำผิดในข้อความนี้ : '{v2}' โดยแสดงเฉพาะคำตอบ ไม่ต้องบอกว่าแก้อะไรบ้าง")
            context += f'\n{key} :=============================\n'
            context += response.replace('ข้อความที่แก้ไขแล้ว: ', '').replace('ข้อความที่ถูกแก้ไข: ', '')
            #print(response, end='\n\n')
            data[f'{key}'] = response
        context += f'\n============================end============================\n'
        print(context)
        with open(f'.\\Fibo_Project\\Database\\{docs}\\json\\{docs}_context.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('finish creating context')
        return context
    
    def pullContext(self, docs):
        context = ''
        context += f'Docs:{docs}\n============================start============================\n'
        with open(f'.\\Fibo_Project\\Database\\{docs}\\json\\{docs}_context.json', 'r', encoding='utf-8') as f:
            jsan = json.load(f)
        for key in jsan.keys():
            context += f'\n{key} :=============================\n'
            context += jsan[key]
        context += f'\n============================end============================\n'
        return context
    

    


    def botTest(self, context, question):
        ans_list = []
        history = ''

        print(len(context))
        for q in question:
            #question = input("คุณ: ")
            print(f"คำถาม: {q}")
            conv = asking(q, context, history)
            ans_list.append(conv)
            #history += f'conversation{i}\n==============\n{q}\n==============n{conv}\n'
            #print(f"คำตอบ: {conv}")
        
        dataframe = {
            'question': question,
            'answer': ans_list,
        }
        #print(dataframe)
        df = pd.DataFrame(dataframe)
        df.to_csv(f'.\\Fibo_Project\\Database\\hope_{context[5:16]}.csv', index=False)
    

    def bot_api(self, question):
        context = ''
        history = ''
        i = 1
        with open(f'.\\Fibo_Project\\Database\\{self.path}\\json\\{self.path}_context.json', 'r', encoding='utf-8') as f:
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
        # question = ["ระยะหุ้มคอนกรีตด้านล่าง และด้านข้างเท่าเท่าไหร่ในงาน Precast อุโมงค์",
        #             "Tolerance ของระยะหุ้มคอนกรีต ในงาน Precast อุโมงค์ +- เท่าใด",
        #             "Concrete ใช้ Mix Code อะไร",
        #             "ค่าการยุบตัว Slump เท่าใด",
        #             "Defect Void มีขนาดเท่าไหร่ ถึงจะซ่อม",
        #             "วัสดุซ่อม ที่ใช้ซ่อม Defect แต่ละอย่าง ใช้อะไรบ้าง",
        #             "ปูนฉาบแต่งพิเศษ 124 Lใช้งานอย่างไร",
        #             "ปูน 124 L เก็บรักษาอย่างไร",
        #             "ปูนฉาบ 135 F คืออะไร",
        #             "เหล็กเส้นรูปพรรณที่ใช้ในโครงสร้าง ใช้ SD เท่าใด",
        #             "การพ่นเบอร์ชิ้นส่วนอุโมงพ่นอย่างไร",
        #             "วิธีการตรวจเหล็กเสริมคอนกรีต มีวิธีใดบ้าง",
        #             "เกณฑ์การยอมรับ Tolerance ของ Segment มีอะไรบ้าง",
        #             "กำลังอัดของคอนกรีตเท่าไหร่ จึงสามารถยกชิ้นงานออกจากแบบหล่อได้",
        #             "Type C6 มี มีความกว้างเท่าใด",
        #             "ค่าการยอมรับ Tolerance ตำแหน่งของอุปกรณ์ฝังมีค่าเท่าใด",
        #             "เหล็กที่อนุมัติจากโครงการมียี่ห้ออะไร",
        #             "Sikadur 32 TH ใช้งานอย่างไร",
        #             "การประกอบ Assembly งานอุโมงค์ มีข้อกำหนดทดสอบ หล่อกี่ Ring จึงทดสอบ",
        #             "Sikadur 32 TH คุณลักษณะอย่างไร"
        #             ]

        question = [
                    "วิธีการตรวจเหล็กเสริมคอนกรีต มีวิธีใดบ้าง",
                    ]
        
        context = ''
        data = os.listdir(f'.\\Fibo_Project\\Database\\')
        for i in range(len(data)):
            if data[i] != 'pdf' and data[i] != 'Tunnel_Segment':
                context += self.createContext(data[i])
        print(context)
        self.botTest(context, question)
        #self.bot(context)
        #self.bot_api('0')


if __name__ == "__main__":

    bot = Chatbot()
    # question = ["ระยะหุ้มคอนกรีตด้านล่าง และด้านข้างเท่าเท่าไหร่ในงาน Precast อุโมงค์",
    #                 "Tolerance ของระยะหุ้มคอนกรีต ในงาน Precast อุโมงค์ +- เท่าใด",
    #                 "Concrete ใช้ Mix Code อะไร",
    #                 "ค่าการยุบตัว Slump เท่าใด",
    #                 "Defect Void มีขนาดเท่าไหร่ ถึงจะซ่อม",
    #                 "วัสดุซ่อม ที่ใช้ซ่อม Defect แต่ละอย่าง ใช้อะไรบ้าง",
    #                 "ปูนฉาบแต่งพิเศษ 124 Lใช้งานอย่างไร",
    #                 "ปูน 124 L เก็บรักษาอย่างไร",
    #                 "ปูนฉาบ 135 F คืออะไร",
    #                 "เหล็กเส้นรูปพรรณที่ใช้ในโครงสร้าง ใช้ SD เท่าใด",
    #                 "การพ่นเบอร์ชิ้นส่วนอุโมงพ่นอย่างไร",
    #                 "วิธีการตรวจเหล็กเสริมคอนกรีต มีวิธีใดบ้าง",
    #                 "เกณฑ์การยอมรับ Tolerance ของ Segment มีอะไรบ้าง",
    #                 "กำลังอัดของคอนกรีตเท่าไหร่ จึงสามารถยกชิ้นงานออกจากแบบหล่อได้",
    #                 "Type C6 มี มีความกว้างเท่าใด",
    #                 "ค่าการยอมรับ Tolerance ตำแหน่งของอุปกรณ์ฝังมีค่าเท่าใด",
    #                 "เหล็กที่อนุมัติจากโครงการมียี่ห้ออะไร",
    #                 "Sikadur 32 TH ใช้งานอย่างไร",
    #                 "การประกอบ Assembly งานอุโมงค์ มีข้อกำหนดทดสอบ หล่อกี่ Ring จึงทดสอบ",
    #                 "Sikadur 32 TH คุณลักษณะอย่างไร"
    #                 ]

    # question1 = ["ระยะหุ้มคอนกรีตด้านล่าง และด้านข้างเท่าเท่าไหร่ในงาน Precast อุโมงค์",
    #              "Tolerance ของระยะหุ้มคอนกรีต ในงาน Precast อุโมงค์ +- เท่าใด",
    #              "Concrete ใช้ Mix Code อะไร",
    #              "เกณฑ์การยอมรับ Tolerance ของ Segment มีอะไรบ้าง",
    #              "การประกอบ Assembly งานอุโมงค์ มีข้อกำหนดทดสอบ หล่อกี่ Ring จึงทดสอบ"
    #              ]

    # question2 = [
    #             "วิธีการตรวจเหล็กเสริมคอนกรีต มีวิธีใดบ้าง",
    #                 ]

    # question3 = ["Defect Void มีขนาดเท่าไหร่ ถึงจะซ่อม",
    #              "วัสดุซ่อม ที่ใช้ซ่อม Defect แต่ละอย่าง ใช้อะไรบ้าง"]
    
    # question4 = ["วัสดุซ่อม ที่ใช้ซ่อม Defect แต่ละอย่าง ใช้อะไรบ้าง",
    #              "ปูนฉาบแต่งพิเศษ 124 Lใช้งานอย่างไร",
    #              "ปูน 124 L เก็บรักษาอย่างไร",
    #              "ปูนฉาบ 135 F คืออะไร",
    #              "Sikadur 32 TH คุณลักษณะอย่างไร"
    #              "Sikadur 32 TH ใช้งานอย่างไร"]
    
    # bot.createContext("mold_Preparing")
    # bot.createContext("Method_Precast")
    # bot.createContext("segment_repairing")
    # bot.createContext("Tunnel_Segment")
    
    context1 = bot.pullContext("Method_Precast")
    context2 = bot.pullContext("mold_Preparing")
    context3 = bot.pullContext("segment_repairing")
    context4 = bot.pullContext("Tunnel_Segment")

    print(len(context1))
    print(context2)
    print(len(context3))
    print(len(context4))    

    # bot.botTest(context1, question1)
    # bot.botTest(context2, question2)
    # bot.botTest(context3, question3)
    # bot.botTest(context4, question4)

    # bot.main()