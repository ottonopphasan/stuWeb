# #อ่านภาพ
# import cv2
# img = cv2.imread("image/cat.jpg")
# print(type(img.ndim))
# print(img)

# #แสดงผลภาพ
# import cv2
# img = cv2.imread("E:\\FIBO\\Inno\WIN_20231125_22_16_27_Pro.jpg")

# #แสดงภาพ
# cv2.imshow("Output",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

#ปรับเปลี่ยนขนาดภาพ
#อ่านภาพ
# import cv2
# img = cv2.imread("C:/Users/User/Pictures/887321.jpg")
# imgresize = cv2.resize(img,(400,400))

# #แสดงภาพ
# cv2.imshow("Output",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #รูปแบบภาพ
# import cv2
# img = cv2.imread("image/20231010_161302.jpg",-1)
# imgresize = cv2.resize(img,(1000,800))

# #แสดงภาพ
# cv2.imshow("Output",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

#การอ่านภาพ
# import cv2 
# #"E:\\coding\\computervision\\line.png"
# img = cv2.imread("image/line.png")
# img = cv2.imread("E:\\coding\\computervision\\line.png")
# imgresize = cv2.resize(img,(400,400))
# cv2.imshow("My Cat",imgresize)

# # cv2.imwrite("output.jpg",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

#try to อ่านภาพ[o rasp] 
# import cv2 
# #"E:\\coding\\computervision\\line.png"
# img = cv2.imread("image/line.png")
# img = cv2.imread("E:\\coding\\computervision\\line.png")
# imgresize = cv2.resize(img,(400,400))
# cv2.imshow("My Cat",imgresize)

# # cv2.imwrite("output.jpg",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# ## เปิดกล้องด้วย OpenCV
# import cv2 

# cap = cv2.VideoCapture(1)
# while (True):
#     check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame
#     cv2.imshow("Output",frame)

#     if cv2.waitKey(1) & 0xFF == ord("e"):
#         break

# cap.release()
# cv2.destroyAllWindows()

#เปิดวิดีโอด้วย OpenCV
# import cv2 

# cap = cv2.VideoCapture("image/Walking.mp4")
# cap = cv2.VideoCapture("C:\\Users\\User\\Pictures\\Camera Roll\\WIN_20240315_17_52_40_Pro.mp4")
# cap = cv2.VideoCapture(1)
# while (cap.isOpened()):
#     check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame

#     if check == True :
#         cv2.imshow("Output",frame)
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# #Video GrayScale Mode
# import cv2 

# cap = cv2.VideoCapture("image/Video.mp4")

# while (cap.isOpened()):
#     check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame

#     if check == True :
#         gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
#         cv2.imshow("Output",gray)
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# #การบันทึกวิดีโอ
# import cv2 

# cap = cv2.VideoCapture(1)
# fourcc = cv2.VideoWriter_fourcc(*'XVID')
# result = cv2.VideoWriter("fixangle.mp4",fourcc,20.0,(640,480))

# while (cap.isOpened()):
#     check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame

#     if check == True :
#         cv2.imshow("Output",frame)
#         result.write(frame)
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break

# result.release()
# cap.release()
# cv2.destroyAllWindows()

# import cv2

# #อ่านภาพ
# img = cv2.imread("image/cat.jpg")

# #กำหนดขนาด
# imgresize = cv2.resize(img,(700,700))


# #วาดเส้นตรง
# # line (ภาพ , จุดเริ่มต้น (x,y) , จุดสุดท้าย (x,y), สี (BGR) ,ความหนา)
# cv2.arrowedLine(imgresize,(100,100),(500,200),(255,0,0),10)
# cv2.arrowedLine(imgresize,(20,0),(400,400),(0,255,0),10)
# cv2.arrowedLine(imgresize,(0,0),(600,400),(0,0,255),10)

# cv2.imshow("Output",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #อ่านภาพ
# img = cv2.imread("image/cat.jpg")

# #กำหนดขนาด
# imgresize = cv2.resize(img,(700,700))


# #วาดสี่เหลี่ยม
# # rectangle(ภาพ,มุมที่ 1 (บนซ้าย),มุมที่ 2 (ล่างขวา),สี,ความหนา)

# cv2.rectangle(imgresize,(100,100),(500,500),(0,0,255),-1)

# cv2.imshow("Output",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #อ่านภาพ
# img = cv2.imread("image/cat.jpg")

# #กำหนดขนาด
# imgresize = cv2.resize(img,(700,700))

# #วาดข้อความบนภาพ
# # putText(ภาพ,ข้อความ,พิกัดที่จะแสดงข้อความ (x,y),font,ขนาดข้อความ,สี,ความหนา)

# cv2.putText(imgresize,"KONGRUKSIAM",(100,600),cv2.FONT_HERSHEY_SIMPLEX,1.8,(0,0,255),cv2.LINE_4)

# cv2.imshow("Output",imgresize)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #แสดงวันเวลาในกล้อง/วิดีโอ
# import cv2 
# import datetime

# cap = cv2.VideoCapture(0)
# while (cap.isOpened()):
#     check , frame = cap.read() #รับภาพจากกล้อง frame ต่อ frame

#     if check == True :
#         currentDate = str(datetime.datetime.now())
#         cv2.putText(frame,currentDate,(10,30),cv2.FONT_HERSHEY_SIMPLEX,0.8,(0,255,0),cv2.LINE_4)
#         cv2.imshow("Output",frame)
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# #แสดงพิกัดด้วย Mouse Event
# import cv2
# img = cv2.imread("image/tree.jpg")

# def clickPosition(event,x,y,flags,param):
#     if event == cv2.EVENT_LBUTTONDOWN:
#         text = str(x)+","+str(y)
#         cv2.putText(img,text,(x,y),cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,255),cv2.LINE_4)
#         cv2.imshow("Output",img)

# #แสดงภาพ
# cv2.imshow("Output",img)
# #ทำงานกับ Mouse
# cv2.setMouseCallback("Output",clickPosition)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

'''# #ตรวจจับค่าสีด้วย Mouse'''
# import cv2
# img = cv2.imread("image/20231010_161302.jpg",0)
# img = cv2.resize(img,(1000,800))

# def clickPosition(event,x,y,flags,param):
#     if event == cv2.EVENT_LBUTTONDOWN:
#         # blue = img[y,x,0]
#         # green = img[y,x,1]
#         # red = img[y,x,2]
#         gray = img[y,x]

#         # text = str(blue)+","+str(green)+","+str(red)
#         text = str(gray)
#         cv2.putText(img,text,(x,y),cv2.FONT_HERSHEY_SIMPLEX,0.8,(0,0,0),cv2.LINE_4)
#         cv2.imshow("Output",img)

# #แสดงภาพ
# cv2.imshow("Output",img)
# #ทำงานกับ Mouse
# cv2.setMouseCallback("Output",clickPosition)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# # แสดงภาพสีจากจุด Pixel
# import cv2
# import numpy
# img = cv2.imread("image/cat.jpg")

# def clickPosition(event,x,y,flags,param):
#     if event == cv2.EVENT_LBUTTONDOWN:
#         blue = img[y,x,0]
#         green = img[y,x,1]
#         red = img[y,x,2]
#         imgcolor=numpy.zeros([300,300,3],numpy.uint8)
#         imgcolor[:] = [blue,green,red]
#         cv2.imshow("Result",imgcolor)

# #แสดงภาพ
# cv2.imshow("Output",img)
# #ทำงานกับ Mouse
# cv2.setMouseCallback("Output",clickPosition)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# # สร้างเส้นเชื่อมโยง
# import cv2
# import numpy
# img = cv2.imread("image/tree.jpg")

# points = []

# def clickPosition(event,x,y,flags,param):
#     if event == cv2.EVENT_LBUTTONDOWN:
#         cv2.circle(img,(x,y),10,(0,0,255),5)
#         points.append((x,y))
#         if len(points)>=2:
#             cv2.line(img,points[-2],points[-1],(0,255,0),5)
        
#         cv2.imshow("Output",img)

# #แสดงภาพ
# cv2.imshow("Output",img)
# #ทำงานกับ Mouse
# cv2.setMouseCallback("Output",clickPosition)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# import cv2 
# import numpy

# while True :
#     img = cv2.imread("E:\\coding\\computervision\\image\\Plain-MMs-Pile.jpg")
#     img=cv2.resize(img,(400,400))งกลม

#     #ช่วงของสี BGR
#     lower = numpy.array([5,111,10])
#     upper = numpy.array([124,255,133])

#     mask=cv2.inRange(img,lower,upper)
#     result = cv2.bitwise_and(img,img,mask=mask)
#     if cv2.waitKey(0) & 0xFF == ord("e"):
#         break

#     cv2.imshow("Original",img)
#     cv2.imshow("Mask",mask)
#     cv2.imshow("Result",result)

# cv2.destroyAllWindows()

# import cv2

# #อ่านภาพ
# img = cv2.imread("image/boy.jpg")

# #อ่านไฟล์สำหรับ classification
# face_cascade=cv2.CascadeClassifier("Detect/haarcascade_frontalface_default.xml")

# gray_img=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# #จำแนกใบหน้า
# scaleFactor = 1.1
# minNeighber = 3
# face_detect = face_cascade.detectMultiScale(gray_img,scaleFactor,minNeighber)

# #แสดงตำแหน่งที่เจอใบหน้า
# for (x,y,w,h) in face_detect:
#     cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),thickness=5)

# #แสดงภาพ
# cv2.imshow("Original",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #อ่านวิดีโอ
# cap = cv2.VideoCapture("image/Video.mp4")

# #อ่านไฟล์สำหรับ classification
# face_cascade=cv2.CascadeClassifier("Detect/haarcascade_frontalface_default.xml")

# #แสดงผลวิดีโอ
# while (cap.isOpened()):
#     check , frame = cap.read()
#     if check == True :
#         gray_img = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
#         #จำแนกใบหน้า
#         face_detect = face_cascade.detectMultiScale(gray_img,1.2,5)
#         #แสดงตำแหน่งที่เจอใบหน้า
#         for (x,y,w,h) in face_detect:
#             cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),thickness=5)
#             cv2.imshow("Output",frame)

#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# #อ่านภาพ
# img = cv2.imread("image/girl.jpg")

# #อ่านไฟล์สำหรับ classification
# eye_cascade=cv2.CascadeClassifier("Detect/haarcascade_eye_tree_eyeglasses.xml")

# gray_img=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# #จำแนกดวงตา
# scaleFactor = 1.1
# minNeighber = 3
# eye_detect = eye_cascade.detectMultiScale(gray_img,scaleFactor,minNeighber)

# #แสดงตำแหน่งที่เจอดวงตา
# for (x,y,w,h) in eye_detect:
#     cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),thickness=5)

# #แสดงภาพ
# cv2.imshow("Original",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #อ่านวิดีโอ
# cap = cv2.VideoCapture("image/Mark.mp4")

# #อ่านไฟล์สำหรับ classification
# eye_cascade=cv2.CascadeClassifier("Detect/haarcascade_eye_tree_eyeglasses.xml")

# #แสดงผลวิดีโอ
# while (cap.isOpened()):
#     check , frame = cap.read()
#     if check == True :
#         gray_img = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
#         #จำแนกดวงตา
#         eye_detect = eye_cascade.detectMultiScale(gray_img,1.2,5)
#         #แสดงตำแหน่งที่เจอดวงตา
#         for (x,y,w,h) in eye_detect:
#             cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),thickness=5)
#             cv2.imshow("Output",frame)

#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# import cv2

# #อ่านภาพ
# img = cv2.imread("image/girl.jpg")

# #อ่านไฟล์ xml
# face_cascade = cv2.CascadeClassifier("Detect/haarcascade_frontalface_default.xml")
# eye_cascade = cv2.CascadeClassifier("Detect/haarcascade_eye_tree_eyeglasses.xml")

# gray_img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# #ตรวจจับใบหน้า
# face_detect = face_cascade.detectMultiScale(gray_img,1.1,4)

# #ตรวจจับดวงตา
# eye_detect = eye_cascade.detectMultiScale(gray_img,1.1,4)

# for (x,y,w,h) in face_detect:
#     cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),thickness=5)
#     for (ex,ey,ew,eh) in eye_detect:
#         cv2.rectangle(img,(ex,ey),(ex+ew,ey+eh),(255,0,0),thickness=5)

# #แสดงภาพ
# cv2.imshow("Original",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #ตรวจจับดวงตาและใบหน้า
# import cv2 
# #อ่านวิดีโอ
# cap = cv2.VideoCapture("image/Mark.mp4")

# #อ่านไฟล์ xml
# face_cascade = cv2.CascadeClassifier("Detect/haarcascade_frontalface_default.xml")
# eye_cascade = cv2.CascadeClassifier("Detect/haarcascade_eye_tree_eyeglasses.xml")

# #แสดงผลวิดีโอ
# while (cap.isOpened()):
#     check , frame = cap.read()
#     if check == True :
#         gray_frame = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
#         #ตรวจจับใบหน้า
#         face_detect = face_cascade.detectMultiScale(gray_frame,1.3,4)
#         #ตรวจจับดวงตา
#         eye_detect = eye_cascade.detectMultiScale(gray_frame,1.3,4)
        
#         for (x,y,w,h) in face_detect:
#             cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),thickness=5)
#             for(ex,ey,ew,eh) in eye_detect:
#                 cv2.rectangle(frame,(ex,ey),(ex+ew,ey+eh),(255,0,0),thickness=5)

#         cv2.imshow("Output",frame)
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

#การสร้าง TrackBar เบื้องต้น
import cv2 
import numpy as np

# img = np.zeros((200,250,3),np.uint8)
# img = cv2.imread("E:\\coding\\computervision\\image\\heart_red.jpg")
img = cv2.imread("E:\\coding\\computervision\\image\\Plain-MMs-Pile.jpg")
cap = cv2.VideoCapture("D:\\download\highred.mov")  
cap = cv2.VideoCapture("D:\\download\highblue.mov")  
cap = cv2.VideoCapture(0)  
cap = cv2.VideoCapture("D:\\download\lowblue.mov")   
cap = cv2.VideoCapture("C:\\Users\\User\\Pictures\\Camera Roll\\WIN_20240509_22_46_14_Pro.mp4")
cap = cv2.VideoCapture("C:\\Users\\User\\Pictures\\Camera Roll\\WIN_20240509_20_31_54_Pro.mp4") 
# cap.set(cv2.CAP_PROP_EXPOSURE, 2) 
cv2.namedWindow("Trackbar")
# cv2.namedWindow("Blue Trackbar")

def display(value):
    pass


cv2.createTrackbar("LB","Trackbar",0,255,display)
cv2.createTrackbar("LG","Trackbar",0,255,display)
cv2.createTrackbar("LR","Trackbar",165,255,display)
# cv2.createTrackbar("LA","Trackbar",0,255,display)
cv2.createTrackbar("HB","Trackbar",255,255,display)
cv2.createTrackbar("HG","Trackbar",255,255,display)
cv2.createTrackbar("HR","Trackbar",255,255,display)
# cv2.createTrackbar("HA","Trackbar",255,255,display)

# cv2.createTrackbar("LR","Blue Trackbar",0,255,display)
# cv2.createTrackbar("LG","Blue Trackbar",0,255,display)
# cv2.createTrackbar("LB","Blue Trackbar",0,255,display)
# cv2.createTrackbar("HR","Blue Trackbar",255,255,display)
# cv2.createTrackbar("HG","Blue Trackbar",255,255,display)
# cv2.createTrackbar("HB","Blue Trackbar",255,255,display)

# img[:] = [blue,green,red]

while True:
    #ดึงค่าจาก Trackber
    imgs = cv2.imread("C:\\Users\\User\\Pictures\\Screenshots\\red.png")
    imgs = cv2.imread("C:\\Users\\User\\Pictures\\Screenshots\\Screenshot 2024-05-05 172655.png")
    ret, imgs = cap.read()
    imgs = cv2.imread("D:\\download\\073005a1-6ed6-45ca-af7c-569996a783b3.jpg")
    imgs = cv2.imread("D:\\download\\Screenshot 2024-05-11 090947.png")

    # img = cv2.cvtColor(imgs, cv2.COLOR_RGB2YCrCb)
    img = cv2.cvtColor(imgs, cv2.COLOR_BGR2YCrCb)
    img = cv2.resize(img,(400,400))
    
    original_img = imgs.copy() 
    original_img = cv2.resize(original_img,(400,400))
    # original_img = cv2.cvtColor(original_img, cv2.COLOR_BGR2GRAY)
    Lowblue  = cv2.getTrackbarPos("LB","Trackbar")
    Lowgreen = cv2.getTrackbarPos("LG","Trackbar")
    Lowred   = cv2.getTrackbarPos("LR","Trackbar")
    # La       = cv2.getTrackbarPos("LA","Trackbar") 
    Highblue  = cv2.getTrackbarPos("HB","Trackbar")
    Highgreen = cv2.getTrackbarPos("HG","Trackbar")
    Highred   = cv2.getTrackbarPos("HR","Trackbar")
    # Ha       = cv2.getTrackbarPos("HA","Trackbar") 

    # L = [Lowred, Lowgreen, Lowblue]9
    # H = [Highred, Highgreen, Highblue]

    L = [Lowblue, Lowgreen, Lowred]
    H = [Highblue, Highgreen, Highred]
    
    # print(L)
    lower = np.array(L, np.uint8)
    upper = np.array(H, np.uint8)
    
    mask = cv2.inRange(img, lower, upper)
    masked_img  = cv2.bitwise_and(img, img, mask=mask)
    YcrcbToRGB  = cv2.cvtColor(masked_img, cv2.COLOR_YCrCb2BGR)
    #thresh,YcrcbToRGB = cv2.threshold(YcrcbToRGB,120,255,cv2.THRESH_BINARY)
    
    # cv2.imshow("Color Trackbar",masked_img)
    # cv2.imshow("Original Image", original_img)
    cv2.imshow("Trackbar",masked_img)
    cv2.imshow("Original Image", original_img)
    cv2.imshow("YcrcbToRGB", YcrcbToRGB)
    
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break
    
cv2.destroyAllWindows()

# # แสดงผลภาพด้วย Matplotlib
# import cv2 
# import matplotlib.pyplot as plt

# img = cv2.imread("image/girl.jpg")
# cv2.imshow("Output",img)

# img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
# plt.imshow(img)
# plt.show()

# #ฟังก์ชั่น Threshold ใน OpenCV
# import cv2
# gray_img = cv2.imread("image/gradient.png")
# gray_img = cv2.imread("E:\coding\computervision\image\\20231010_161313.jpg",0)

# thresh,th1 = cv2.threshold(gray_img,128,255,cv2.THRESH_BINARY)
# thresh,th2 = cv2.threshold(gray_img,128,255,cv2.THRESH_BINARY_INV)
# thresh,th3 = cv2.threshold(gray_img,128,255,cv2.THRESH_TRUNC)
# thresh,th4 = cv2.threshold(gray_img,128,255,cv2.THRESH_TOZERO)
# thresh,th5 = cv2.threshold(gray_img,128,255,cv2.THRESH_TOZERO_INV)

# cv2.imshow("Orignal",gray_img)
# cv2.imshow("BINARY",th1)
# cv2.imshow("BINARY_INV",th2)
# cv2.imshow("TRUNC",th3)
# cv2.imshow("TOZERO",th4)
# cv2.imshow("TOZERO_INV",th5)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #แสดง Threshold ใน Matplotlib
# import cv2
# import matplotlib.pyplot as plt
# # gray_img = cv2.imread("image/gradient.png")
# img = cv2.imread("E:\coding\computervision\image\\20231010_161313.jpg")
# gray_img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# thresh,th1 = cv2.threshold(gray_img,128,255,cv2.THRESH_BINARY)
# thresh,th2 = cv2.threshold(gray_img,128,255,cv2.THRESH_BINARY_INV)
# thresh,th3 = cv2.threshold(gray_img,128,255,cv2.THRESH_TRUNC)
# thresh,th4 = cv2.threshold(gray_img,128,255,cv2.THRESH_TOZERO)
# thresh,th5 = cv2.threshold(gray_img,128,255,cv2.THRESH_TOZERO_INV)

# images = [gray_img,th1,th2,th3,th4,th5]
# titles = ["ORIGINAL","BINARY","BINARY_INV","TRUNC","TOZERO","TOZERO_INV"]

# for i in range(len(images)):
#     plt.subplot(2,3,i+1)
#     plt.imshow(images[i], cmap="gray")
#     plt.title(titles[i])
#     plt.xticks([]),plt.yticks([])

# plt.show()

# #เทียบค่า Threshold ด้วย Matplotlib
# import cv2
# import matplotlib.pyplot as plt

# img = cv2.imread("image/ant.jpg")
# gray_img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# thresh_value = [50,100,130,200,230]
# plt.subplot(231,xticks=[],yticks=[])
# plt.title("Original")
# plt.imshow(gray_img,cmap="gray")

# for i in range(len(thresh_value)):
#     thresh,result = cv2.threshold(gray_img,thresh_value[i],255,cv2.THRESH_BINARY)
#     plt.subplot(232+i)
#     plt.title("%d"%thresh_value[i])
#     plt.imshow(result,cmap="gray")
#     plt.xticks([]),plt.yticks([])

# plt.show()

# import cv2

# def display(value):
#     pass

# cv2.namedWindow("Output")
# cv2.createTrackbar("value","Output",128,255,display)

# while True :
#     gray_img = cv2.imread("image/ant.jpg",0)
#     thresh_value = cv2.getTrackbarPos("value","Output")
#     thresh, result = cv2.threshold(gray_img,thresh_value,255,cv2.THRESH_BINARY)
#     if cv2.waitKey(1) & 0xFF==ord("e"):
#         break
#     cv2.imshow("Output",result)

# cv2.destroyAllWindows()

# import cv2

# def display(value):
#     pass

# cv2.namedWindow("Output")
# cv2.createTrackbar("value","Output",128,255,display)

# while True :
#     gray_img = cv2.imread("image/ant.jpg",0)
#     thresh_value = cv2.getTrackbarPos("value","Output")
#     thresh, result = cv2.threshold(gray_img,thresh_value,255,cv2.THRESH_BINARY)
#     if cv2.waitKey(1) & 0xFF==ord("e"):
#         break
#     cv2.imshow("Output",result)

# cv2.destroyAllWindows()

# #การใช้งาน Adaptive Threshold
# import cv2 
# img = cv2.imread("E:\coding\computervision\image\\20231010_161313.jpg",0)
# img=cv2.resize(img,(640,480))
# thresh,th1 = cv2.threshold(img,128,255,cv2.THRESH_BINARY)
# th2 = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_MEAN_C,cv2.THRESH_BINARY,3,1)
# th3 = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,3,1)

# cv2.imshow("img",img)
# cv2.imshow("THRESH",th1)
# cv2.imshow("MEAN",th2)
# cv2.imshow("GAUSSIAN",th3)

# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #เปรียบเทียบค่า BlockSize
# import cv2 
# import matplotlib.pyplot as plt

# img = cv2.imread("image/map.jpg",0)

# #กำหนดขนาด Block
# size = [3,5,9,17,33]

# plt.subplot(321,xticks=[],yticks=[])
# plt.imshow(img,cmap="gray")

# for i in range(len(size)):
#     result = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,size[i],1)
#     plt.subplot(322+i)
#     plt.title("%d"%size[i])
#     plt.imshow(result,cmap="gray")
#     plt.xticks([]),plt.yticks([])

# plt.show()

# import cv2 
# import matplotlib.pyplot as plt
# import numpy as np
# #E:\coding\computervision\image\coin2.jpg
# # img = cv2.imread("image/CoinNoise.png",0)
# img = cv2.imread("E:\\coding\\computervision\\image\\coin2.jpg",0)
# thresh , result = cv2.threshold(img,170,255,cv2.THRESH_BINARY_INV)
# kernel = np.ones((2,2),np.uint8)

# #การขยายภาพ
# dilation = cv2.dilate(result,kernel,iterations=5)
# #การกร่อนภาพ
# erosion = cv2.erode(dilation,kernel,iterations=7)

# #opening
# opening = cv2.morphologyEx(dilation,cv2.MORPH_OPEN,kernel,iterations=7)

# #closing
# closing = cv2.morphologyEx(result,cv2.MORPH_CLOSE,kernel,iterations=5)

# titles = ["ORIGINAL","THRESH","DILATION","EROSION","OPENING","CLOSING"]
# images = [img,result,dilation,erosion,opening,closing]

# for i in range(len(images)):
#     plt.subplot(2,3,i+1)
#     plt.imshow(images[i],cmap="gray")
#     plt.title(titles[i])
#     plt.xticks([])
#     plt.yticks([])

# plt.show()

# #ตัวกรอง Convolution ด้วย Filter2D
# import cv2
# import numpy as np
# import matplotlib.pyplot as plt

# #original
# img = cv2.imread("image/noise.png")

# #filter
# filter2d = cv2.filter2D(img,-1,np.ones((5,5),np.float32)/25)

# #blur
# mean = cv2.blur(img,(5,5))

# #median
# mblur=cv2.medianBlur(img,5)


# gblur = cv2.GaussianBlur(img,(5,5),1)

# titles = ["ORIGINAL","FILTER2D","MEAN","MEDIAN BLUR","GAUSSIAN BLUR"]
# images = [img,filter2d,mean,mblur,gblur]

# for  i in range(len(images)):
#     plt.subplot(2,3,i+1)
#     plt.imshow(images[i])
#     plt.title(titles[i])
#     plt.xticks([]),plt.yticks([])

# plt.show()

# #Sobel Method
# import cv2 
# import matplotlib.pyplot as plt


# img = cv2.imread("image/currency.jpg",0)

# sobelX = cv2.Sobel(img,-1,1,0)
# sobelY = cv2.Sobel(img,-1,0,1)
# sobelXY = cv2.bitwise_or(sobelX,sobelY)

# images = [img,sobelX,sobelY,sobelXY]
# titles = ["Original","SobelX","SobelY","SobelXY"]

# for  i in range(len(images)):
#     plt.subplot(2,2,i+1)
#     plt.imshow(images[i],cmap="gray")
#     plt.title(titles[i])
#     plt.xticks([]),plt.yticks([])

# plt.show()

# #Laplacian Method
# import cv2 

# img = cv2.imread("image/currency.jpg",0)

# lap = cv2.Laplacian(img,-1)

# cv2.imshow("Original",img)
# cv2.imshow("Laplacian",lap)

# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #Canny Method
# import cv2 

# img = cv2.imread("image/currency.jpg",0)
# img = cv2.imread("E:\coding\computervision\image\\20231010_161313.jpg",0)
# canny = cv2.Canny(img,50,200)

# cv2.imshow("Original",cv2.resize(img, (400,400)))
# cv2.imshow("Canny",cv2.resize(canny, (400,400)))
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# #เส้นเค้าโครง (Contour)
# import cv2 

# img = cv2.imread("image/ant.jpg")
# gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
# thresh,result = cv2.threshold(gray,215,255,cv2.THRESH_BINARY)

# contours,hierarchy = cv2.findContours(result,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
# cv2.drawContours(img,contours,-1,(0,255,0),2)
# cv2.imshow("Output",img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

##Motion Detection
# import cv2 
# cap = cv2.VideoCapture("image/Walking.mp4")
# check , frame1 = cap.read()
# check , frame2 = cap.read()
# while (cap.isOpened()):
#     if check == True :
#         motiondiff= cv2.absdiff(frame1,frame2)
#         gray=cv2.cvtColor(motiondiff,cv2.COLOR_BGR2GRAY)
#         blur = cv2.GaussianBlur(gray,(5,5),0)
#         thresh,result = cv2.threshold(blur,15,255,cv2.THRESH_BINARY)
#         dilation = cv2.dilate(result,None,iterations=3)
#         contours,hierarchy = cv2.findContours(dilation,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
#         cv2.drawContours(frame1,contours,-1,(0,255,0),2)
#         cv2.imshow("Output",frame1)
#         frame1=frame2
#         check,frame2 = cap.read()
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()

# #Motion Tracker
# import cv2 
# cap = cv2.VideoCapture("image/Walking.mp4")
# check , frame1 = cap.read()
# check , frame2 = cap.read()
# while (cap.isOpened()):
#     if check == True :
#         motiondiff= cv2.absdiff(frame1,frame2)
#         gray=cv2.cvtColor(motiondiff,cv2.COLOR_BGR2GRAY)
#         blur = cv2.GaussianBlur(gray,(5,5),0)
#         thresh,result = cv2.threshold(blur,15,255,cv2.THRESH_BINARY)
#         dilation = cv2.dilate(result,None,iterations=3)
#         contours,hierarchy = cv2.findContours(dilation,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)

#         #วาดสี่เหลี่ยมในวัตถุที่กำลังเคลื่อนที่
#         for contour in contours:
#             (x,y,w,h) = cv2.boundingRect(contour)
#             if cv2.contourArea(contour)<2500:
#                 continue
#             cv2.rectangle(frame1,(x,y),(x+w,y+h),(0,255,0),2)

#         cv2.imshow("Output",frame1)
#         frame1=frame2
#         check,frame2 = cap.read()
#         if cv2.waitKey(1) & 0xFF == ord("e"):
#             break
#     else :
#         break

# cap.release()
# cv2.destroyAllWindows()