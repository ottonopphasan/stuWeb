import os
from typing import Dict, List
from groq import Groq


# os.environ["GROQ_API_KEY"] = "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"
# os.environ["GROQ_API_KEY"] = "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"

# athit.jake
#os.environ["GROQ_API_KEY"] = "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"
# kmutt 
# os.environ["GROQ_API_KEY"] = "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"
# mail kmutt
os.environ["GROQ_API_KEY"] = "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"

LLAMA3_405B_INSTRUCT = "llama-3.1-405b-reasoning" 
LLAMA3_70B_INSTRUCT = "llama-3.1-70b-versatile"
LLAMA3_8B_INSTRUCT = "llama3.1-8b-instant"
HOPE = "llama-3.1-8b-instant"
HOPE2 = "llama3-70b-8192"

DEFAULT_MODEL = LLAMA3_70B_INSTRUCT

client = Groq()

def assistant(content: str):
    return { "role": "assistant", "content": content }

def user(content: str):
    return { "role": "user", "content": content }

def chat_completion(
    messages: List[Dict],
    model = DEFAULT_MODEL,
    temperature: float = 0.6,
    top_p: float = 0.9,
) -> str:
    response = client.chat.completions.create(
        messages=messages,
        model=model,
        temperature=temperature,
        top_p=top_p,
    )
    return response.choices[0].message.content
        

def completion(
    prompt: str,
    model: str = DEFAULT_MODEL,
    temperature: float = 0.6,
    top_p: float = 0.9,
) -> str:
    return chat_completion(
        [user(prompt)],
        model=model,
        temperature=temperature,
        top_p=top_p,
    )

def complete_and_print(prompt: str, model: str = DEFAULT_MODEL):
    #print(f'==============\n{prompt}\n==============')
    response = completion(prompt, model)
    # print(response, end='\n\n')
    return response

def prompt_with_rag(retrived_info, question):
    reponse  =  complete_and_print(
                f"Given the following information: '{retrived_info}', respond to: '{question}'"
            )
    return reponse

def asking(question, context, history):
    #temp_on_day = MENLO_PARK_TEMPS.get(day) or "unknown temperature"
    response = prompt_with_rag(
        f"บทบาทของคุณคือผู้ช่วยวิศวกรก่อสร้าง\nโดยมีความรู้ด้านการก่อสร้างและข้อมูลต่อไปนี้ : '{context}'\n โดยคุณจะทราบประวัติการสนทนาจาก {history}\n",  # Retrieved fact
        f"ตอบคำถามค่อไปนี้ {question}?",  # User question
    )
    return response

def pagepopout(context, answer):
    response = prompt_with_rag(
        f"จากข้อมูลต่อไปนี้ : '{context}'\n ข้อความที่ต้องการให้ดู {answer}\n",  # Retrieved fact
        f"จงตอบว่าข้อความนี้มาจากหน้าไหนโดยอิงจากข้อมูลที่มี ถ้าสามารถหาคำตอบได้ จงตอบเฉพาะเลขหน้า",  # User question
    )
    return response