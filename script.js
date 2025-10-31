// 현재 이 디자인에는 특별한 JavaScript 상호작용이 필요하지 않습니다.
// 추후 팝업, 애니메이션 등의 동적 기능을 추가할 때 여기에 코드를 작성합니다.

document.addEventListener('DOMContentLoaded', () => {
    console.log('김민수 이력서 페이지가 로드되었습니다.');
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('김민수 이력서 페이지가 로드되었습니다.');

    // ⬇️ 이 부분이 추가되었습니다 ⬇️

    // 1. 인쇄 버튼 요소를 찾습니다.
    const printButton = document.getElementById('print-btn');
    
    // 2. 버튼이 존재하는지 확인하고 클릭 이벤트를 추가합니다.
    if (printButton) {
        printButton.addEventListener('click', () => {
            // 3. 브라우저의 인쇄 대화상자를 엽니다.
            window.print();
        });
    }
    // ⬆️ 여기까지 추가 ⬆️
});
