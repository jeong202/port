# Portfolio
## Stack
- [Vite](https://ko.vitejs.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- [GSAP](https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- [Lenis](https://lenis.studiofreight.com/) 를 이용하여 부드러운 스크롤 효과를 구현합니다.
- [Netlify](https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- [GitHub](https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성([ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles))을 준수하여 작업합니다.
### 기본 준비
1. vite 설치   
`npm create vite@latest`   
√ Select a framework: » Vanilla   
√ Select a variant: » JavaScript   

2. 패키지 설치
`npm install`   
npm은 Node.js 패키지 관리자(Node Package Manager)의 약어로, JavaScript 환경에서 프로젝트의 종속성을 관리하고 패키지를 설치하고 배포하는 데 사용되는 도구입니다. 주로 JavaScript 및 Node.js 프로젝트에서 외부 라이브러리 및 모듈을 쉽게 가져와 사용할 수 있게 해줍니다.   
보통은 프로젝트의 루트 디렉토리에서 이 명령을 실행하여 package.json 파일에 명시된 종속성들을 설치합니다. 명령을 실행하면 프로젝트에 필요한 모든 패키지가 node_modules 폴더에 설치됩니다. 
`npm install gsap`   
GSAP(GreenSock Animation Platform)은 웹 애니메이션을 구축하기 위한 강력하고 널리 사용되는 JavaScript 라이브러리입니다. 웹 개발자들이 웹 사이트나 웹 애플리케이션에 동적인 애니메이션을 쉽게 구현할 수 있도록 도와줍니다.   
`npm install @studio-freight/lenis`   
Lenis는 부드러운 스크롤 효과를 제공하는 라이브러리입니다.   


4. 파일 정보   
[ vite.config.js ]   
웹 애플리케이션 빌드 도구인 Vite의 설정 파일입니다.   
root: 이 속성은 프로젝트의 루트 디렉토리를 설정합니다. src로 설정되어 있으므로 프로젝트의 소스 코드는 src 디렉토리에서 찾을 수 있습니다.   
build: 이 속성은 빌드 옵션을 설정합니다. 여기서 outDir은 빌드된 파일이 생성될 디렉토리를 설정합니다. ../public로 설정되어 있으므로 빌드된 파일은 public 디렉토리의 부모 디렉토리에 생성됩니다.   
[ .gitignore ]   
저장소에 추가하고 싶지 않은 파일이나 디렉토리를 명시적으로 나열합니다. Git이 이 파일을 읽고 무시할 파일을 식별합니다.   
[ .package-lock.json ]   
프로젝트에 설치된 패키지의 정확한 버전을 기록하는 파일입니다. 이는 여러 개발자나 환경에서 동일한 의존성 트리를 사용하여 일관된 환경을 유지하는 데 도움이 됩니다.   
