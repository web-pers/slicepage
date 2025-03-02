document.addEventListener("scroll", () => {
    const videoContainer = document.querySelector(".video-container");
    const scrollY = window.scrollY;
    const maxScale = 5; // 확대 비율
    const fadeStart = 200; // 투명도가 시작되는 위치
    const fadeEnd = 600; // 완전히 보이는 위치

    // 스크롤 범위에 따라 크기 확대
    let scale = 0.2 + (scrollY / window.innerHeight) * maxScale;
    if (scale > maxScale) scale = maxScale;

    // 투명도 조절
    let opacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    // 스타일 적용
    videoContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
    videoContainer.style.opacity = opacity;
    
    // 일정 크기 이상이면 원형 해제 (전체화면 효과)
    videoContainer.style.borderRadius = scale > 4 ? "0" : "50%";
});
