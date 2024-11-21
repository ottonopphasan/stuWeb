from PIL import Image
from pytesseract import pytesseract, Output
from pdf2image import convert_from_path
import fitz
import os
import json
import cv2
from matplotlib import pyplot as plt
import numpy as np
import time
import easyocr
#trOCR easyocr

class documentPrepare:
    def __init__(self, pdf_path,y1,y2,x1,x2,start_page=0):
        self.pytesseractpath = ".\\Fibo_Project\\Tesseract-OCR\\tesseract.exe"
        self.pdf_path = pdf_path
        self.start_page = start_page
        self.y1 = y1
        self.y2 = y2    
        self.x1 = x1
        self.x2 = x2
        self.page = []
        self.name = pdf_path.split(f'\\')[-1][:len(pdf_path.split(f'\\')[-1])-4]


    def save_image(self):
        images = convert_from_path(self.pdf_path)
        x1 = self.x1
        x2 = self.x2
        y1 = self.y1
        y2 = self.y2
        start_page = self.start_page
        try:
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}')
        except:
            pass
        try:
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image')
        except:
            pass
        try:
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw')
        except:
            pass
        for i, image in enumerate(images):
            if i > start_page - 2:
                #C:\Users\User\stuWeb\Fibo_Project\Database_easyocr\mold_Preparing\image\raw\page_3.png
                image.save(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw\\page_{i + 1}.png', 'PNG')
                images = cv2.imread(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw\\page_{i + 1}.png')
                thresh = images[y1:y2,x1:x2]
                self.page.append(i+1)
                cv2.imwrite(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw\\page_{i+1}.png', thresh)
            else:
                pass
        print('Save image success')


    def get_string(self, reader):
        data = {}
        results = []
        try:
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\json\\')
        except:
            pass
        #pic_name = sorted(os.listdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\'))
        for i in self.page:
            image_path = f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw\\page_{i}.png'
            result = reader.readtext(image_path)
            text = ''
            for (bbox, txt, prob) in result:
                print(f'txt : {txt}| prob : {prob}| bbox : {bbox}')
                if prob > 0.1:
                    text += txt + '\n'
                    results.append(bbox)
            data[f'page_{i}'] = text
            results.append(result)
        with open(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\json\\{self.name}.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string success')
        return results
    

    def save_bboxIMG(self, reader, results, dict):
        data = {}
        try:
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\bbox')
            os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\subPIC')
        except:
            pass
        for k,key in enumerate(dict.keys()):
            #texts = []
            image_path = f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\raw\\{key}.png'
            image = cv2.imread(image_path)
            clean_img = image.copy()
            try:
                os.mkdir(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\subPIC\\{key}')
            except:
                pass

            texts = ''
            print(f'results : {results[k]}')
            for num, bbox in enumerate(results[k]):
                # print(f'bbox : {bbox}')
                (top_left, top_right, bottom_right, bottom_left) = bbox
                x, y, w, h = top_left, top_right, bottom_right, bottom_left
                # if line_confidence[k][num] > 75:
                # write text on image
                #cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
                sub_img = clean_img[y-(int(0)):y+h+(int(0)),x-(int(0)):x+w+(int(0))] 
                result = reader.readtext(image_path)
                for (bbox, txt, prob) in result:
                    print(f'txt : {txt} prob : {prob}, bbox : {bbox}')
                    if prob > 0.1:
                        texts += txt + '\n'
                # print(f'text : {text}')
                # cv2.imshow('sub',sub_img)
                # cv2.waitKey(0)
                cv2.destroyAllWindows()
                cv2.imwrite(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\subPIC\\{key}\\{y}.png', sub_img)
                # else:
                #     cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
                #     cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)

            #data[f'{key}'] = ''.join(texts[::-1])
            data[f'{key}'] = texts
            with open(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\json\\{self.name}v3.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            cv2.imwrite(f'.\\Fibo_Project\\Database_easyocr\\{self.name}\\image\\bbox\\{key}.png', image)
        print('Get string v3 success')
        print('save bbox images success')


    def preprocess_text(self, text):
        #open json file
        return 0


    def main(self):
        reader = easyocr.Reader(['en', 'th']) 
        self.save_image()
        result = self.get_string(reader)
        # line_conf, lines = self.get_conf(dict)

        with open('.\\Fibo_Project\\Database_easyocr\\mold_Preparing\\json\\mold_Preparing.json', 'r', encoding='utf-8') as f:
            datav2 = json.load(f)

        self.save_bboxIMG(reader, result, datav2)


if __name__ == '__main__':
    
    #hopepdf_path = '.\\Fibo_Project\\Database_easyocr\\pdf\\mold_Preparing.pdf'
    hopepdf_path = '.\\Fibo_Project\\Database_easyocr\\pdf\\mold_Preparing.pdf'
    hope_doc = documentPrepare(hopepdf_path,250,2100,130,1500, start_page=3)
    hope_doc.main()

    # hopepdf_path = 'C:\\Users\\User\\llama-recipes\\Database_easyocr\\pdf\\segment_repairing.pdf'
    # hope_doc = documentPrepare(hopepdf_path,250,2100,130,1500, start_page=2)
    # hope_doc.main()