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
import pandas as pd
#trOCR easyocr

class documentPrepare:
    def __init__(self, pdf_path,y1,y2,x1,x2,start_page=0):
        self.pytesseractpath = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
        self.pdf_path = pdf_path
        self.start_page = start_page
        self.y1 = y1
        self.y2 = y2    
        self.x1 = x1
        self.x2 = x2
        self.page = []
        self.name = pdf_path.split(f'\\')[-1][:len(pdf_path.split(f'\\')[-1])-4]
        self.custom_config = f'--oem 3 --psm 6 -c tessedit_char_blacklist=@#$%&*®.¥๑๒๓๔๕๖๗๘๙๐'
        #self.images = convert_from_path(pdf_path)
        # self.save_image()
        # self.get_string()
        self.similar = []
        self.not_similar = []
        self.error = []


    def save_image(self):
        images = convert_from_path(self.pdf_path)
        x1 = self.x1
        x2 = self.x2
        y1 = self.y1
        y2 = self.y2
        start_page = self.start_page
        try:
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}')
        except:
            pass
        try:
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\image')
        except:
            pass
        try:
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw')
        except:
            pass
        for i, image in enumerate(images):
            if i > start_page - 2:
                image.save(f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\page_{i + 1}.png', 'PNG')
                images = cv2.imread(f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\page_{i + 1}.png')
                thresh = images[y1:y2,x1:x2]
                self.page.append(i+1)
                cv2.imwrite(f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\page_{i+1}.png', thresh)
            else:
                pass
        print('Save image success')


    def get_string(self):
        pytesseract.tesseract_cmd = self.pytesseractpath
        data = {}
        dict = {}
        try:
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\json\\')
        except:
            pass
        #pic_name = sorted(os.listdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\'))
        for i in self.page:
            image_path = f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\page_{i}.png'
            image = Image.open(image_path)

            text = pytesseract.image_to_string(image, lang='tha+eng', config=self.custom_config)
            ocr_data = pytesseract.image_to_data(image, output_type=Output.DICT, lang='tha+eng', config=self.custom_config)

            data[f'page_{i}'] = text
            dict[f'page_{i}'] = ocr_data

        with open(f'.\\Fibo_Project\\Database\\{self.name}\\json\\{self.name}.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string success')
        return dict


    def get_conf(self, dict):
        lines = []
        line_confidence = []
        ch = 0
        data = {}
        for key in dict.keys():
            text_list = []
            text = ''
            line_conf = []
            lines_list = []
            #print(f'{len(dict[key]["level"])} conf : {dict[key]["conf"]}')
            for i in range(len(dict[key]['level'])):
                #print(i)
                if dict[key]['level'][::-1][i] == 4:  # 4 corresponds to line level in Tesseract's hierarchy
                    line_text = dict[key]['text'][::-1][i]
                    line_bbox = {
                        "text": line_text,
                        "left": dict[key]['left'][::-1][i],
                        "top": dict[key]['top'][::-1][i],
                        "width": dict[key]['width'][::-1][i],
                        "height": dict[key]['height'][::-1][i]
                    }
                    #print(f'range ({ch} : {i}) from max = ({len(dict[key]["level"])}) : {dict[key]["conf"][::-1][ch:i]}')
                    conf = sum(dict[key]['conf'][::-1][ch:i])/len(dict[key]['conf'][::-1][ch:i])
                    lines_list.append(line_bbox)
                    line_conf.append(conf)
                    if conf > 75:
                        show = dict[key]['text'][::-1][ch:i][::-1]
                        for t in show:
                            text += t
                        text_list.append(text)
                    else:
                        text += ''
                    ch = i
                    text = ''
            texts = ''
            #print(f'text_list : {text_list}')
            for t in text_list[::-1]:
                texts += t + '\n'
            data[f'{key}'] = texts
            ch = 0
            line_confidence.append(line_conf)
            lines.append(lines_list)

        with open(f'.\\Fibo_Project\\Database\\{self.name}\\json\\{self.name}v2.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string v2 success')
        # lines = lines[::-1]
        # line_confidence = line_confidence[::-1]
        return line_confidence, lines
    

    def save_bboxIMG(self, dict, line_confidence, lines):
        pytesseract.tesseract_cmd = self.pytesseractpath
        data = {}
        print(f'dict keys : {dict.keys()}')
        try:
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\bbox')
            os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\subPIC')
        except:
            pass
        for k,key in enumerate(dict.keys()):
            texts = []
            image_path = f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\{key}.png'
            image = cv2.imread(image_path)
            clean_img = image.copy()
            try:
                os.mkdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\subPIC\\{key}')
            except:
                pass

            for num, line in enumerate(lines[k]):
                x, y, w, h = line["left"], line["top"], line["width"], line["height"]
                if line_confidence[k][num] > 75:
                    # write text on image
                    cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
                    sub_img = clean_img[y-(int(0)):y+h+(int(0)),x-(int(0)):x+w+(int(0))] 
                    text = pytesseract.image_to_string(sub_img, lang='tha+eng', config=self.custom_config)
                    texts += [text]
                    # print(f'text : {text}')
                    # cv2.imshow('sub',sub_img)
                    # cv2.waitKey(0)
                    #cv2.destroyAllWindows()
                    cv2.imwrite(f'.\\Fibo_Project\\Database\\{self.name}\\image\\subPIC\\{key}\\{y}.png', sub_img)
                else:
                    cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
                    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)

            data[f'{key}'] = ''.join(texts[::-1])
            with open(f'.\\Fibo_Project\\Database\\{self.name}\\json\\{self.name}v3.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            cv2.imwrite(f'.\\Fibo_Project\\Database\\{self.name}\\image\\bbox\\{key}.png', image)
        print('Get string v3 success')
        print('save bbox images success')


    def get_json(self):
        pytesseract.tesseract_cmd = self.pytesseractpath
        data = {}
        #pages = os.listdir(f'.\\Fibo_Project\\{self.name}_subPIC')
        for p in self.page:
            texts = ''
            sub_pic = os.listdir(f'.\\Fibo_Project\\{self.name}_subPIC\\page_{p}')
            page_sort = sorted(sub_pic, key=lambda x: int(x.split(f'.png')[0]))
            for sub in page_sort:
                image_path = f'.\\Fibo_Project\\{self.name}_subPIC\\page_{p}\\{sub}'
                # images = cv2.imread(image_path)
                # # Convert to grayscale
                # gray = cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)
                # # Apply dilation and erosion to remove some noise
                # kernel = np.ones((2, 2), np.uint8)
                # gray = cv2.dilate(gray, kernel, iterations=1)
                # gray = cv2.erode(gray, kernel, iterations=2)

                # gray = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
                
                # cv2.imwrite(image_path, gray)
                image = Image.open(image_path)
                text = pytesseract.image_to_string(image, lang='tha+eng', config=self.custom_config)
                texts += text
            data[f'page_{p}'] = texts
        with open(f'.\\Fibo_Project\\{self.name}v3.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string v3 success')


    def preprocess_text(self, text):
        #open json file
        return 0

    def create_csv(self):
        #open json file
        #raw = os.listdir(f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw')
        img_paths = []
        pages = []
        texts = []
        print(f'page : {self.page}')
        with open('.\\Fibo_Project\\Database\\mold_Preparing\\json\\mold_Preparing_context.json', 'r', encoding='utf-8') as f:
            jsn = json.load(f)
        for i in range(3,13):
            image_path = f'.\\Fibo_Project\\Database\\{self.name}\\image\\raw\\page_{i}.png'
            text = jsn[f'page_{i}']

            img_paths.append(image_path)
            pages.append(i)
            texts.append(text)

        print(f'img_path : {img_paths}')
        print(f'page : {pages}')
        print(f'text : {texts}')
        dataframe = {
            'image': img_paths,
            'page': pages,
            'text': texts
        }
        print(dataframe)
        df = pd.DataFrame(dataframe)
        df.to_csv(f'.\\Fibo_Project\\Database\\{self.name}\\{self.name}.csv', index=False)

    def main(self):
        # self.save_image()
        # dict = self.get_string()
        # line_conf, lines = self.get_conf(dict)
        # self.save_bboxIMG(dict, line_conf, lines)
        self.create_csv()


if __name__ == '__main__':

    hopepdf_path = '.\\Fibo_Project\\Database\\pdf\\mold_Preparing.pdf'
    hope_doc = documentPrepare(hopepdf_path,250,2100,130,1500, start_page=3)
    hope_doc.main()

    # hopepdf_path = '.\\Fibo_Project\\Database\\pdf\\segment_repairing.pdf'
    # hope_doc = documentPrepare(hopepdf_path,250,2100,130,1500, start_page=2)
    # hope_doc.main()