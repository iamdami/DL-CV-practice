Firebase
===

[https://firebase.google.com](https://firebase.google.com/docs/database)<br>

<pre>The Firebase Realtime Database is a cloud-hosted database. 
Data is stored as JSON and synchronized in realtime to every connected client. 
When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, 
all of your clients share one Realtime Database instance and automatically receive updates with the newest data.</pre>
<br>

모바일 서버 개발 위해서는 인증, 데이터베이스, 푸시 알람, 스토리지, API 등 많은 것들을 개발해야 함  
-> 만드는 앱마다 비슷한 기능들을 복잡한 과정 거쳐 매번 개발하는 것은 시간낭비  
<br>
<br>
Firebase는 이 모든 플랫폼을 자동으로 만들어 줌  
프로토타입 만들어 사용자들이 미리 써보게 테스트 할 수 있음  
<br>

## 대표 기능
인증, 데이터베이스, 스토리지, 원격 구성, 푸시 알람  
<br>

## 장점
1. 인증(로그인) 시스템 지원  
2. NoSQL 기반
   RTSP(Real Time Stream Protocol) 방식의 DB 지원
   - RTSP는 실시간으로 데이터 전송해주는 방식
   - 소켓 기반 서버 만들어 통신하는 것보다 훨씬 간략한 코드로 개발 가능
3. 원격 구성 지원
   - 원격으로 앱 환경 상태 구성
4. 콘솔 제공
   - 서버 관리자 페이지 제공
5. Analytics 제공
   - 다수의 사용자의 앱 사용 통계 정보
<br>

## 단점
1. 서버가 해외에 있어 종종 서버 응답 속도 지연
2. Firebase의 DB(FireStore, RealTimeDatabase)의 쿼리 빈약
   - 데이터 검색의 어려움
   - 모든 데이터 받아와 안드로이드 디바이스에서 필터링 해주는 방법 권장
3. 원활한 백엔드 컨트롤 불가
   - 이를 위해서는 백엔드를 직접 개발해야 함
<br>
