document.addEventListener("scroll", () => {
    const videoContainer = document.querySelector(".video-container");
    const scrollY = window.scrollY;
    const maxScale = 10; // 확대 비율

    // 스크롤 범위에 따라 비율 계산
    let scale = 1 + (scrollY / window.innerHeight) * maxScale;
    if (scale > maxScale) scale = maxScale;

    // 확대 적용
    videoContainer.style.width = `${100 * scale}px`;
    videoContainer.style.height = `${100 * scale}px`;
    videoContainer.style.borderRadius = scale > 8 ? "0" : "50%"; // 일정 크기 이상이면 원형 해제
});
