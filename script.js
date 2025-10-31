document.addEventListener('DOMContentLoaded', () => {
    console.log('김민수 이력서 페이지가 로드되었습니다.');

    // 1. 인쇄 버튼 요소를 찾습니다.
    const printButton = document.getElementById('print-btn');
    
    // 2. 버튼이 존재하는지 확인하고 클릭 이벤트를 추가합니다.
    if (printButton) {
        printButton.addEventListener('click', () => {
            // 3. 브라우저의 인쇄 대화상자를 엽니다.
            window.print();
        });
    }
});
