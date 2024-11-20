 # โมลด์ (mold) คือ รูปทรงหรือช่องที่ใช้ในการหล่อหรือเทคอนกรีตเพื่อให้ได้ผลลัพธ์ที่มีรูปทรงและขนาดตามที่ต้องการ ในกรณีนี้ โมลด์ถูกใช้ในการผลิตคอนกรีตโดยการเทคอนกรีตลงในโมลด์ และหลังจากนั้นจะถูกปล่อยให้คอนกรีตแข็งตัวก่อนที่จะถอดออกจากโมลด์
from PIL import Image
from pytesseract import pytesseract, Output
from pdf2image import convert_from_path
import fitz
import os
import json
import cv2

class documentPrepare:
    def __init__(self, pdf_path,y1,y2,x1,x2):
        self.pytesseractpath = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
        self.pdf_path = pdf_path
        self.y1 = y1
        self.y2 = y2    
        self.x1 = x1
        self.x2 = x2
        self.page = []
        self.name = pdf_path.split(f'\\')[-1][:len(pdf_path.split(f'\\')[-1])-4]
        self.custom_config = f'--oem 3 --psm 6 -c tessedit_char_blacklist=@#$%&*.¥๑๒๓๔๕๖๗๘๙๐'
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
        try:
            os.mkdir(f'.\\Fibo_Project\\{self.name}')
        except:
            pass
        for i, image in enumerate(images):
            if i > 1:
                image.save(f'.\\Fibo_Project\\{self.name}\\page_{i + 1}.png', 'PNG')
                images = cv2.imread(f'.\\Fibo_Project\\{self.name}\\page_{i + 1}.png')
                thresh = images[y1:y2,x1:x2]
                # #images = cv2.resize(images, (800, 800))
                # # Convert to grayscale
                # gray = cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)

                # # Apply adaptive thresholding
                # # This helps to binarize the image while retaining details of the characters
                # thresh = cv2.adaptiveThreshold(
                #     gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 2
                # )

                # # Remove small noise using morphological operations
                # # This helps in making the text more prominent
                # kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1, 1))
                # cleaned = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

                # # Optional: Increase contrast
                # alpha = 1.5  # Contrast control
                # beta = 0     # Brightness control
                # thresh = cv2.convertScaleAbs(cleaned, alpha=alpha, beta=beta)
                self.page.append(i+1)
                cv2.imwrite(f'.\\Fibo_Project\\{self.name}\\page_{i+1}.png', thresh)
            else:
                pass
        print('Save image success')

    def get_string(self):
        pytesseract.tesseract_cmd = self.pytesseractpath
        data = {}
        dict = {}
        pic_name = sorted(os.listdir(f'.\\Fibo_Project\\{self.name}'))
        for i in self.page:
            image_path = f'.\\Fibo_Project\\{self.name}\\page_{i}.png'
            image = Image.open(image_path)

            text = pytesseract.image_to_string(image, lang='tha+eng', config=self.custom_config)
            ocr_data = pytesseract.image_to_data(image, output_type=Output.DICT, lang='tha+eng', config=self.custom_config)

            data[f'page_{i}'] = text
            dict[f'page_{i}'] = ocr_data

        with open(f'.\\Fibo_Project\\{self.name}.json', 'w', encoding='utf-8') as f:
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
                texts += t
            data[f'{key}'] = texts
            ch = 0
            line_confidence.append(line_conf)
            lines.append(lines_list)

        with open(f'.\\Fibo_Project\\{self.name}v3.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string v3 success')
        lines = lines[::-1]
        line_confidence = line_confidence[::-1]
        return line_confidence[::-1], lines[::-1]
    
    def get_json(self, conf):
        pytesseract.tesseract_cmd = self.pytesseractpath
        data = {}
        pic_name = os.listdir(f'.\\Fibo_Project\\{self.name}')
        for i in range(len(pic_name)):
            image_path = f'.\\Fibo_Project\\{self.name}\\{pic_name[i]}'
            image = Image.open(image_path)

            ocr_data = pytesseract.image_to_data(image, output_type=Output.DICT, lang='tha+eng', config=self.custom_config)
            words = ocr_data['text']
            text = ''
            for a,j in  enumerate(words):
                if ocr_data['conf'][a] > 80:
                    text += j
            data[f'{pic_name[i]}'.replace('.png', '')] = text

        with open(f'.\\Fibo_Project\\{self.name}v2.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print('Get string v2 success')

    def save_bboxIMG(self, dict, line_confidence, lines):
        print(f'dict keys : {dict.keys()}')
        try:
            os.mkdir(f'.\\Fibo_Project\\{self.name}_bbox')
        except:
            pass
        for k,key in enumerate(dict.keys()):
            image_path = f'.\\Fibo_Project\\{self.name}\\{key}.png'
            image = cv2.imread(image_path)
            # for i in range(len(lines)):
            for num, line in enumerate(lines[k]):
                x, y, w, h = line["left"], line["top"], line["width"], line["height"]
                if line_confidence[k][num] > 75:
                    # write text on image
                    cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
                else:
                    cv2.putText(image, f'{line_confidence[k][num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
                    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
            cv2.imwrite(f'.\\Fibo_Project\\{self.name}_bbox\\{key}.png', image)
        print('save bbox images success')

    def preprocess_text(self, text):
        return 0

    def main(self):
        self.save_image()
        dict = self.get_string()
        line_conf, lines = self.get_conf(dict)
        # print(len(lines))
        self.save_bboxIMG(dict, line_conf, lines)
        self.get_json(line_conf)

if __name__ == '__main__':
    # pdf_path = 'C:\\Users\\User\\llama-recipes\\Fibo_Project\\Tunnel_Segment.pdf'
    # doc = documentPrepare(pdf_path)
    # doc.main()

    # hopepdf_path = 'C:\\Users\\User\\llama-recipes\\Fibo_Project\\segment_repairing.pdf'
    # hope_doc = documentPrepare(hopepdf_path,300,2100,130,1500)
    # hope_doc.main()

    hopepdf_path = 'C:\\Users\\User\\llama-recipes\\Fibo_Project\\wire_tiring.pdf'
    hope_doc = documentPrepare(hopepdf_path,300,2100,130,1500)
    hope_doc.main()

    
    # imshow
    image_path = f'C:\\Users\\User\\llama-recipes\\Fibo_Project\\wire_tiring\\page_3.png'
    image = cv2.imread(image_path)
    print(image.shape)

    pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
    custom_config = f'--oem 3 --psm 6 -c tessedit_char_blacklist=@#$%&*¥.๑๒๓๔๕๖๗๘๙๐'


    ocr_data = pytesseract.image_to_data(image, output_type=Output.DICT, lang='tha+eng', config=custom_config)
    words = ocr_data['text']
    # #draw word bounding boxes
    # bounding_boxes = [
    # [ocr_data['left'][i], ocr_data['top'][i], 
    #  ocr_data['left'][i] + ocr_data['width'][i], 
    #  ocr_data['top'][i] + ocr_data['height'][i]]
    # for i in range(len(ocr_data['text']))]

    # for box in bounding_boxes:
    #     cv2.rectangle(image, (box[0], box[1]), (box[2], box[3]), (0, 0, 0), 1)

    # dict_keys(['level', 'page_num', 'block_num', 'par_num', 'line_num', 'word_num', 'left', 'top', 'width', 'height', 'conf', 'text'])
    lines = []
    line_confidence = []
    ch = 0
    for i in range(len(ocr_data['level'])):
        if ocr_data['level'][::-1][i] == 4:  # 4 corresponds to line level in Tesseract's hierarchy
            line_text = ocr_data['text'][::-1][i]
            line_bbox = {
                "text": line_text,
                "left": ocr_data['left'][::-1][i],
                "top": ocr_data['top'][::-1][i],
                "width": ocr_data['width'][::-1][i],
                "height": ocr_data['height'][::-1][i]
            }
            #show = ocr_data['text'][::-1][ch:i][::-1]
            #print(f'line : {show}, conf : {sum(ocr_data["conf"][::-1][ch:i])/len(ocr_data["conf"][::-1][ch:i])}')
            lines.append(line_bbox)
            line_confidence.append(sum(ocr_data['conf'][::-1][ch:i])/len(ocr_data['conf'][::-1][ch:i]))
            ch = i+1
    
    lines = lines[::-1]
    line_confidence = line_confidence[::-1]
    # # find average confidence of each line
    # print(f'level : {ocr_data["level"]}\n----------------------')
    # # print(f'line_num : {ocr_data["line_num"]}\n----------------------')
    # print(f'text : {ocr_data["text"]}\n----------------------')
    # print(f'conf : {ocr_data["conf"]}\n----------------------')
    # # print(f'line confidence : {line_confidence}\n----------------------')
    # print(f'line confidence : {line_confidence}\n----------------------')
    
                
    #draw line bounding boxes
    for num, line in enumerate(lines):
        x, y, w, h = line["left"], line["top"], line["width"], line["height"]
        if line_confidence[num] > 75:
            # write text on image
            cv2.putText(image, f'{line_confidence[num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        else:
            cv2.putText(image, f'{line_confidence[num]}', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
        #cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 0), 1)

    s = ''
    for i,j in  enumerate(words):
        if ocr_data['conf'][i] > 80:
            s += j
    print(s)
    
    image = cv2.resize(image, (800, 800))
    #cv2.imshow('image', gray)
    cv2.imshow('image', image)
    cv2.waitKey(0)

