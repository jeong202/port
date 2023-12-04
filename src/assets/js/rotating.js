export function rotating() {
  // 이미지 요소들을 가져옵니다.
  const rotatingImgs = document.querySelectorAll(".rotating-img");

  // 스크롤 이벤트를 감지하는 함수
  function handleScroll() {
    // 현재 스크롤 위치를 가져옵니다.
    const scrollPosition = window.scrollY;

    // 각 이미지에 대해 반복하여 회전 각도를 계산하고 적용합니다. 스크롤 내릴때 마다 회전각도
    rotatingImgs.forEach((img, index) => {
      //순회에서 현재 처리 중인 배열 요소,배열 요소의 인덱스
      const rotationAngle = scrollPosition * (0.195 + index * 0.01); //index를 활용하여 이미지 간에 회전 속도 차이를 주고 있음
      img.style.transform = `rotate(${rotationAngle}deg)`;
    });
  }

  // 스크롤 이벤트를 등록합니다.
  window.addEventListener("scroll", handleScroll);
}
