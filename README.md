# 🇯🇵 후쿠오카 가족여행 완벽 가이드

**안종형 가족 맞춤 여행 가이드**  
2024년 12월 19일 ~ 21일 (2박3일)

---

## 📱 프로젝트 소개

이 웹사이트는 안종형 가족(5인)의 후쿠오카 여행을 위해 특별히 제작된 **모바일 우선 여행 가이드**입니다. 여행 중 필요한 모든 정보를 한 곳에서 확인할 수 있도록 설계되었습니다.

### ✨ 주요 특징

#### 🎯 **완벽한 모바일 최적화**
- **하단 탭 네비게이션**: 콘텐츠를 가리지 않는 깔끔한 UI
- **스와이프 제스처**: 좌우 스와이프로 섹션 전환
- **터치 친화적**: 44x44px 이상의 큰 버튼
- **반응형 디자인**: 모든 기기에서 완벽한 표시

#### 📅 **3일 일정 완벽 가이드**
- **Day 1**: 캐널시티 + 텐진 + 나카스 야타이
- **Day 2**: 마린월드 + 해변공원 (선택) + 모츠나베
- **Day 3**: 다자이후 텐만구 + 텐진 쇼핑 → 공항

#### 💰 **실시간 예산 추적**
- 모달 방식의 예산 트래커 (콘텐츠를 가리지 않음)
- 일별 예산 분석
- 5인 가족 기준 정확한 비용 계산

#### 🗣️ **필수 일본어 회화**
- 한글 발음 포함
- 상황별 실전 회화
- 긴급 상황 대응 문구

#### 📋 **스마트 체크리스트**
- localStorage 자동 저장
- 체크 시 취소선 표시
- 준비물 완벽 관리

#### 🎨 **사용자 친화 기능**
- 다크모드 지원
- 글자 크기 조절
- 오프라인 지원 (Service Worker)
- 인쇄 최적화

---

## 📂 프로젝트 구조

```
fukuoka-travel-guide/
├── index.html              # 메인 페이지
├── css/
│   └── style.css          # 모바일 우선 스타일
├── js/
│   └── script.js          # 인터랙티브 기능
└── README.md              # 프로젝트 문서
```

---

## 🚀 시작하기

### 온라인 배포 (GitHub Pages)

1. **GitHub 저장소 생성**
```bash
git init
git add .
git commit -m "Initial commit: 후쿠오카 여행 가이드"
git branch -M main
git remote add origin https://github.com/당신의아이디/fukuoka-travel-guide.git
git push -u origin main
```

2. **GitHub Pages 활성화**
- GitHub 저장소 → Settings → Pages
- Source: `main` branch, `/ (root)` folder
- Save

3. **배포 완료!**
- 주소: `https://당신의아이디.github.io/fukuoka-travel-guide/`

### 로컬 실행

1. **파일 다운로드**
```bash
git clone https://github.com/당신의아이디/fukuoka-travel-guide.git
cd fukuoka-travel-guide
```

2. **브라우저에서 열기**
- `index.html` 파일을 더블클릭
- 또는 Live Server 사용 (VS Code 확장)

---

## 💡 사용 방법

### 기본 네비게이션
- **하단 탭**: 개요, Day 1, Day 2, Day 3, 더보기
- **스와이프**: 좌우로 스와이프하여 섹션 전환
- **키보드**: 좌우 화살표 키로 이동

### 상세 정보 보기
- **상세보기 버튼**: 각 일정의 상세 정보 확장/축소
- **블로그 링크**: 실제 여행 블로그로 이동

### 예산 추적
- **💰 버튼**: 우측 하단 FAB 버튼 클릭
- **모달**: 하단에서 슬라이드 업 방식
- **일별 분석**: 프로그레스 바로 시각화

### 체크리스트
- **자동 저장**: 체크하면 자동으로 localStorage에 저장
- **취소선**: 완료된 항목은 취소선 표시

### 설정
- **🌙 버튼**: 다크모드 전환
- **🔤 버튼**: 글자 크기 조절 (일반/크게)

---

## 🎯 주요 기능 상세

### 1. 모바일 최적화
```css
/* 모바일 우선 설계 */
- Touch-friendly buttons (44x44px+)
- Swipe gestures
- Bottom sheet modal
- Responsive typography (16px base)
```

### 2. 성능 최적화
```javascript
// Lazy loading
- IntersectionObserver for images
- Service Worker for offline
- LocalStorage for preferences
```

### 3. 접근성
```html
<!-- WCAG AA 준수 -->
- High contrast colors
- Focus indicators
- Keyboard navigation
- Screen reader support
```

### 4. PWA 지원
- 오프라인 작동
- 홈 화면 추가 가능
- 빠른 로딩

---

## 📊 여행 예산 요약

| 날짜 | 주요 활동 | 예상 비용 |
|------|----------|----------|
| **DAY 1** | 캐널시티 + 야타이 | ¥33,140 (~₩431,000) |
| **DAY 2** | 마린월드 + 해변공원 | ¥22,070 (~₩287,000) |
| **DAY 3** | 다자이후 + 텐진 | ¥9,240 (~₩120,000) |
| **숙박** | Legatio HAKATA (2박) | ₩820,696 |
| **합계** | 전체 | **약 ₩1,658,000** |

---

## ✈️ 여행 정보

### 가족 구성
- 👨 종형 (42세)
- 👩 수명 (40세)
- 👧 효주 (12세, 딸)
- 👧 효재 (10세, 딸)
- 👦 효신 (5세, 아들) - **교통비 무료!**

### 항공편
- **가는편**: 12/19 (목) 08:10 ICN → 09:30 FUK (에어서울 RS723)
- **오는편**: 12/21 (토) 17:20 FUK → 18:50 ICN (티웨이항공 TW206)

### 숙소
- **Legatio HAKATA**
- 주소: Hakata-ku Sumiyoshi 2-21-14, Fukuoka
- 체크인: 12/19 15:00 / 체크아웃: 12/21 10:00

---

## 🔧 기술 스택

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern flexbox & grid
- **JavaScript (ES6+)**: Vanilla JS
- **PWA**: Service Worker, Manifest

### 라이브러리 & 도구
- **Google Fonts**: Noto Sans KR
- **LocalStorage API**: 데이터 저장
- **IntersectionObserver**: Lazy loading
- **Web Share API**: 공유 기능

---

## 🌟 핵심 하이라이트

### 👶 어린이 맞춤 설계
- **효신(5세) 중심 일정**: 돌고래쇼, 분수쇼, 소 동상
- **교통비 무료**: 5세는 모든 교통 수단 무료
- **휴식 시간**: 15:00-17:00 여유 확보

### 📸 인생샷 포토존
1. 캐널시티 분수쇼 (14:00/15:00)
2. 다자이후 스타벅스 (목조 건축)
3. 다자이후 텐만구 하트 연못
4. 마린월드 대수조

### 🍜 필수 먹거리
1. 라멘 스타디움 (캐널시티 5F)
2. 나카스 야타이 (오뎅, 야키토리)
3. 모츠나베 오야마 (규슈 명물)
4. 우메가에모찌 (다자이후 명물, ¥150)

---

## 📱 모바일 앱처럼 사용하기

### iOS (Safari)
1. Safari에서 웹사이트 열기
2. 하단 공유 버튼 (□↗) 탭
3. "홈 화면에 추가" 선택
4. 이름 확인 후 "추가"

### Android (Chrome)
1. Chrome에서 웹사이트 열기
2. 우측 상단 ⋮ 메뉴
3. "홈 화면에 추가" 선택
4. 이름 확인 후 "추가"

---

## 🆘 긴급 연락처

| 항목 | 번호 |
|------|------|
| **경찰** | 110 |
| **소방/구급** | 119 |
| **관광 안내** | 092-725-9100 |
| **한국 영사관** | 092-771-0461 |
| **숙소 (Legatio)** | +81 50 1807 3131 |

---

## 📝 체크리스트

### 출발 전 준비
- [ ] 여권 (5명)
- [ ] 항공권 출력
- [ ] 숙소 예약 확인
- [ ] 현금 약 ¥100,000
- [ ] 신용카드 2장
- [ ] 100엔 동전 20개
- [ ] 여행자 보험

### 효신(5세) 필수품
- [ ] 유모차 (선택)
- [ ] 간식 & 음료
- [ ] 여벌 옷 & 물티슈
- [ ] 비상약 (해열제, 밴드)
- [ ] 좋아하는 장난감

### 스마트폰 앱
- [ ] 파파고 (번역)
- [ ] 구글맵 (길찾기)
- [ ] Locker CONCIERGE (코인로커)

---

## 🔗 유용한 링크

### 공식 웹사이트
- [후쿠오카 공항](https://www.fukuoka-airport.jp/ko/)
- [캐널시티 하카타](https://canalcity.co.jp/korea/)

### 블로그 가이드
- [SUGOCA 구매 가이드](https://m.blog.naver.com/jjiya09/223284234954)
- [하카타역 코인로커](https://m.blog.naver.com/daisukitokyo/223290815952)
- [텐진→다자이후 전철](https://japantraveldiary.tistory.com/entry/)
- [다자이후 스타벅스](https://blog.naver.com/lampgenie-/223649858039)
- [우메가에모찌 비교](https://kayabrown.tistory.com/)

---

## 🛠️ 개발자 정보

### 버전
- **Version**: 1.0.0
- **Last Updated**: 2024-12-12
- **License**: MIT

### 기여
이 프로젝트는 개인 여행 가이드용으로 제작되었습니다.

### 피드백
문제점이나 개선 사항이 있다면 이슈를 등록해 주세요!

---

## 📄 라이센스

MIT License

Copyright (c) 2024 Fukuoka Travel Guide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🎊 마지막 메시지

**안종형 가족 여러분,**

이 가이드가 후쿠오카 여행에서 큰 도움이 되기를 바랍니다! 

특히 **효주, 효재, 효신이**와 함께 만드는 소중한 추억이 평생 기억에 남기를 기원합니다. 🙏

**즐거운 여행 되세요!** 🇯🇵✈️

---

**제작:** AI Assistant  
**버전:** 1.0.0  
**최종 업데이트:** 2024년 12월 12일

**⭐ 이 가이드가 도움이 되었다면 GitHub에 Star를 눌러주세요!**