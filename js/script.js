document.addEventListener('DOMContentLoaded', function() {
    // 現在のページのURLを取得
    var currentPageUrl = window.location.href;
    
    // すべてのナビゲーションリンクを取得
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        // リンクが現在のページのURLに一致する場合、.activeクラスを追加
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });
    
    const images = document.querySelectorAll('.slide-image');
    let currentImageIndex = 0;

    function rotateImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    // 3秒ごとに画像を切り替える
    setInterval(rotateImage, 3000);
});
