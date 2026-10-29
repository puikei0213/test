/* =========================================
   配記 Pui-Kei - 全站防護與通用腳本
   ========================================= */

// 1. 禁用滑鼠右鍵
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. 禁用常見的開發者工具與原始碼快捷鍵
document.onkeydown = function(e) {
    // 阻擋 F12
    if(e.keyCode == 123) return false;
    // 阻擋 Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    // 阻擋 Ctrl+Shift+C
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    // 阻擋 Ctrl+Shift+J
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    // 阻擋 Ctrl+U (檢視網頁原始碼)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

// 你日後有任何想全站套用的功能，都可以寫在這裡！
console.log("🛡️ Pui-Kei Guard Activated.");
