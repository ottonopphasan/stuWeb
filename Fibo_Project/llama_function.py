import os
from typing import Dict, List
from groq import Groq


os.environ["GROQ_API_KEY"] = "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"

LLAMA3_405B_INSTRUCT = "llama-3.1-405b-reasoning" 
LLAMA3_70B_INSTRUCT = "llama-3.1-70b-versatile"
LLAMA3_8B_INSTRUCT = "llama3.1-8b-instant"

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