// 문서의 모든 내용이 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {

    // 1. '간편 연락 버튼' 기능
    const contactButton = document.getElementById('contact-btn');

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            // alert('my-email@example.com 으로 메일을 보내주세요.');
            // 사용자 편의를 위해 이메일 주소를 클립보드에 복사하는 기능 (더 좋음)
            const email = 'my-email@example.com';
            
            // navigator.clipboard.writeText는 HTTPS 환경에서만 작동합니다.
            // (GitHub Pages는 HTTPS이므로 문제없이 작동합니다.)
            navigator.clipboard.writeText(email).then(() => {
                alert(email + ' 주소가 클립보드에 복사되었습니다.');
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                alert('이메일: ' + email); // 복사 실패 시 단순 알림
            });
        });
    }

    // 2. 푸터의 연도를 자동으로 현재 연도로 설정
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        // HTML에 있는 '홍길동' 이름은 유지하면서 연도만 변경
        copyrightElement.textContent = `© ${currentYear} 홍길동. All rights reserved.`;
    }

    // 스크립트가 잘 로드되었는지 확인 (개발자 도구 콘솔에서 볼 수 있음)
    console.log('이력서 페이지 스크립트가 성공적으로 로드되었습니다.');

});
