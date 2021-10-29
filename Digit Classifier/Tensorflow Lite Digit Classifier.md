Tensorflow Lite Digit Classifier
===

텐서플로우 설치(코랩에는 이미 설치돼있음)
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcj57HJ%2FbtriHDVrwTV%2F3ui6hWW6RyGkKuhTntC5ik%2Fimg.png" alt="" width="300"></p>  
<br>
<br>
수학 계산 위한 라이브러리들
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFpxlu%2FbtriJoRjfvI%2FefF4kSIrDwNG1O79yUotbK%2Fimg.png" alt="" width="300"></p>  
<br>
<br>
텐서플로우 버전 확인 가능
show_sample() : 이미지, 레이블값 보내주면 샘플 25개를 matplotlib 이용해서 표현해라
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFigFj%2FbtriMJ8pZLb%2FL9tfRnFoCHJwOUvBptOHC0%2Fimg.png" alt="" width="550"></p>  
<br>
<br>
케라스 데이터셋의 mnist에서 가져와서 
훈련 이미지와 훈련 레이블(결과값), 텍스트 로드
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrpaKE%2FbtriKy0suDW%2FLkrsJU7FGggfZzSxfS59Y0%2Fimg.png" alt="" width="900"></p>  
<br>
<br>
다운로드 하면 데이터들은 0부터 255까지의 채도값으로 표현되어 있음<br>
이것을 0과 1사이로 만들어 주기 위해 Normalize 수행 -> 255.0으로 나눠줌<br>
각 셀의 색 나타내는 값으로 변환됨
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdQcBdV%2FbtriTwNhIqN%2FolHv23kvo7JNDe2gioGppK%2Fimg.png" alt="" width="650"></p>  
<br>
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FycZGU%2FbtriJuwMR2D%2FsGZINwKfVsGa5akGYKByzk%2Fimg.png" alt="" width="650"></p>  
<br>
<br>
옵션 더하면 더할수록 속도는 느려짐<br>
3개의 레이어들 이용<br>
Flatten 레이어 28X28 만들고<br>
relu activation 이용해 Dense 레이어 만들고<br>
Dense 레이어 만들어서 10개 -> 0부터 10까지 classify 하는 것이기 때문
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc1jWNf%2FbtriLP1L2Nn%2FzTdHmkKwN6P2yMY23kkkKk%2Fimg.png" alt="" width="900"></p>  
정확도 좀 더 높이고 싶으면 주석 처리된 부분 풀어서 진행하면 됨
<br>
<br>
SparseCategoricalCrossentropy 사용<br>
metrics 값은 정확도 넣어 측정
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXjc1S%2FbtriGUJf7Wt%2F1LWhMCqrXXKEH1ZWABSIr0%2Fimg.png" alt="" width="750"></p>  
<br>
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyIzh1%2FbtriFs7jwqd%2Fzv7HdJq3D7Z2zZel7akcWk%2Fimg.png" alt="" width="350"></p>
<br>
<br>
모델 학습<br>
훈련 이미지, 레이블 값, epochs 5
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu2rJz%2FbtriRZoT1gj%2FKGXJ796lVWWmDS8bLqQpj1%2Fimg.png" alt="" width="400"></p>
<br>
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw60uf%2FbtriRYKjT22%2F6kVbj7X9vj6BdMBkxJR3z0%2Fimg.png" alt="" width="650"></p>
<br>
epoch은 간단히 말하면 훑는 횟수?<br>
이 프젝에서는 단순하게 5번 학습해 모델 완성
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZWK12%2FbtriMJHorBY%2FS6b80873ZoIy9ae6vorNA0%2Fimg.png" alt="" width="850"></p>
<br>
<br>
모델의 정확도 측정<br>
학습은 위에서 훈련값으로 수행했고<br>
그것과 전혀 다른 테스트 이미지와 레이블로 정확도 측정 수행<br>
(313건의 테스트 값)
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblNr45%2FbtriO2fDJHp%2FAAhSCZ933YhyoEHtOrUOtk%2Fimg.png" alt="" width="750"></p>
<br>
<br>
테스트 이미지 넣어서 제대로 결과가 출력되는지 확인
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbevF0z%2FbtriTiBycqt%2FG5stvqxGUkemL6SKMm8Mg0%2Fimg.png" alt="" width="650"></p>
<br>
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdRS3Tu%2FbtriMI9BguO%2FYF7bCNLQXTPWLOxTTBtHb1%2Fimg.png" alt="" width="650"></p>
제대로 출력됨
<br>
<br>
모델 직접 convert<br>
메모리상에 있는 케라스 모델을 TFLiteConverter 이용해서 convert한 모델로 만들어줌
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft4uOQ%2FbtriO0WpT1k%2F8r8pSIgaqlo5kyHlBxlRZK%2Fimg.png" alt="" width="500"></p>
<br>
<br>
파일 이름 지정해서 save
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBnniI%2FbtriQ69U08C%2FlPS65FSn2NwWKkVrNraMqk%2Fimg.png" alt="" width="300"></p>
<br>
<br>
예외처리
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgJ2R5%2FbtriMI2OJRE%2Fe2W4NHvW3xMkolesukNXYk%2Fimg.png" alt="" width="500"></p>
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZCpeW%2FbtriFs7kVbx%2FFqLdaSog5ej1kfCL4ROVm1%2Fimg.png" alt="" width="650"></p>
이상없이 작동됨
<br>
<br>
storage에 저장되어있는 zero.png 가져와서<br>
grayscale한 후 size도 28X28로 해주고(기존 데이터들과 동일한 크기 형태 가져야하기 때문)<br>
Nomalize 해줌
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnRfu0%2FbtriKxtLw4M%2F9WqKgQWazEB8zqc9NOJGx0%2Fimg.png" alt="" width="800"></p>
<br>
<br>
텐서플로우 라이트에서 실행<br>
텐서플로우에서 모델 예측한 값이 output에 담김<br>
output 값은 배열 형태로 출력<br>
0부터 9까지의 값 나온 것들을 numpy의 argmax 이용해서 가장 두드러진 값 출력
<p align="left"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsaoSS%2FbtriUEj2VCi%2FFAKXoAK8BkONmPKnY1L1jk%2Fimg.png" alt="" width="650"></p>
confidence가 4.몇이면 사십 몇 퍼센트니까 그렇게 높은 것 같진 않은데..?<br>
아무튼 완료!
<br>
<br>
