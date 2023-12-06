# Portfolio

## Stack

- [Vite](https://ko.vitejs.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- [GSAP](https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- [Lenis](https://lenis.studiofreight.com/) 를 이용하여 부드러운 스크롤 효과를 구현합니다.
- [Netlify](https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- [Git](https://git-scm.com/)[GitHub](https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성([ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles))을 준수하여 작업합니다.

### 기본 준비

1. vite 설치  
   `npm create vite@latest`  
   √ Select a framework: » Vanilla  
   √ Select a variant: » JavaScript

---

2. 패키지 설치 및 환경 설정  
   `npm install`  
   npm은 Node.js 패키지 관리자(Node Package Manager)의 약어로, JavaScript 환경에서 프로젝트의 종속성을 관리하고 패키지를 설치하고 배포하는 데 사용되는 도구입니다. 주로 JavaScript 및 Node.js 프로젝트에서 외부 라이브러리 및 모듈을 쉽게 가져와 사용할 수 있게 해줍니다.  
   보통은 프로젝트의 루트 디렉토리에서 이 명령을 실행하여 package.json 파일에 명시된 종속성들을 설치합니다. 명령을 실행하면 프로젝트에 필요한 모든 패키지가 node_modules 폴더에 설치됩니다.  
   `npm install gsap`  
   GSAP(GreenSock Animation Platform)은 웹 애니메이션을 구축하기 위한 강력하고 널리 사용되는 JavaScript 라이브러리입니다. 웹 개발자들이 웹 사이트나 웹 애플리케이션에 동적인 애니메이션을 쉽게 구현할 수 있도록 도와줍니다.  
   `npm install @studio-freight/lenis`  
   Lenis는 부드러운 스크롤 효과를 제공하는 라이브러리입니다.  
   `npm run dev`  
   애플리케이션을 시작하거나 서버를 실행하는 데 사용됩니다.  
   `npm run build`  
   배포하기 전에 애플리케이션 또는 프로젝트를 최적화하고 빌드하는 데 사용됩니다

---

3. 기본 파일 정보  
   `vite.config.js`  
   웹 애플리케이션 빌드 도구인 Vite의 설정 파일입니다.  
   root: 이 속성은 프로젝트의 루트 디렉토리를 설정합니다. src로 설정되어 있으므로 프로젝트의 소스 코드는 src 디렉토리에서 찾을 수 있습니다.  
   build: 이 속성은 빌드 옵션을 설정합니다. 여기서 outDir은 빌드된 파일이 생성될 디렉토리를 설정합니다. ../public로 설정되어 있으므로 빌드된 파일은 public 디렉토리의 부모 디렉토리에 생성됩니다.  
   `.gitignore`  
   저장소에 추가하고 싶지 않은 파일이나 디렉토리를 명시적으로 나열합니다. Git이 이 파일을 읽고 무시할 파일을 식별합니다.  
   `.package-lock.json`  
   프로젝트에 설치된 패키지의 정확한 버전을 기록하는 파일입니다. 이는 여러 개발자나 환경에서 동일한 의존성 트리를 사용하여 일관된 환경을 유지하는 데 도움이 됩니다.

### 레이아웃(layout) 구조

- 웹 사이트에 대한 정보를 제공하기 위해 메타 정보를 설정하고 웹 접근성 표준을 준수하기 위해 스킵 메뉴를 추가했습니다. 스킵 메뉴는 화면에 표시되지 않지만 보조 기기를 통해 사용자가 즉시 주요 콘텐츠로 이동할 수 있도록 도와줍니다.

- role 속성은 HTML 요소의 역할을 지정하는 데 사용되며 웹 접근성을 향상시키기 위해 도입된 속성 중 하나입니다. 이 속성을 통해 각 요소가 수행하는 역할을 명시적으로 나타낼 수 있습니다.

- JavaScript 파일을 다루는 주요 방식으로는 "모듈 방식(ES6 Module)"과 "Script 태그를 이용한 방식"이 있습니다. 여기서 JavaScript 파일은 모듈 방식을 사용하였습니다. 모듈 방식은 코드를 모듈화하고 파일을 나누어 관리할 수 있습니다. 변수와 함수 등이 자동으로 지역 스코프를 가지기 때문에, 전역 네임스페이스 충돌을 방지할 수 있습니다. type="module" 속성을 사용하여 이 스크립트가 모듈 형식임을 선언합니다. 이렇게 함으로써 main.js에서 ES6 모듈 시스템을 사용하여 변수, 함수, 클래스 등을 정의하고 내보내고 가져올 수 있게 됩니다.

- 로컬 폰트 적용

##### 헤더(header) 영역

- 풀스크린 메뉴를 만들었습니다. https://tympanus.net/codrops/2014/02/06/fullscreen-overlay-effects/
- 메뉴 hover시 밑줄을 만들었습니다.

##### 인트로(intro) 영역
- Three.js를 사용하여 3D이미지를 구현하였습니다
- vh,vw,rem등 상대적인 단위들을 사용해 반응형 디자인을 구현하였습니다.
- 
<!-- - JavaScript를 사용하여 스크롤 이벤트를 감지하고, 스크롤에 따라 이미지를 회전시키는 동작 구현하였습니다. -->


##### 포트폴리오(port) 영역
- CSS의 @keyframes를 사용해 흐르는 텍스트를 구현하였습니다.
- 뤼튼의 AI 이미지 생성기능(StabilityAI)을 이용해 포트폴리오 부분 이미지를 생성했습니다.
- GSAP를 이용하여 그림 및 문자가 나타나는 효과를 구현하였습니다.

##### 기술스택(tech) 영역
- CSS의 @keyframes를 사용해 흐르는 텍스트를 구현하였습니다.
