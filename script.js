

//
//  とりあえずAIに改装中ですを表示させるコードを書かせた
//

document.addEventListener('DOMContentLoaded', () => {
    // メンテナンスオーバーレイを作る関数
    const overlay = document.createElement('div');
    overlay.id = 'maintenanceOverlay';
    overlay.textContent = '現在改装中です';

    // CSSを直接JSで設定
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.85)',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        textAlign: 'center',
        zIndex: '9999',
        padding: '1rem',
        boxSizing: 'border-box'
    });

    // bodyに追加
    document.body.appendChild(overlay);

    // クリックで消す
    overlay.addEventListener('click', () => {
        overlay.remove();
    });
});
