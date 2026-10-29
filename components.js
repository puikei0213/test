/* =========================================
   配記 Pui-Kei - 全站共用組件庫 (Web Components)
   ========================================= */

// 1. 全站主導航列
class PuiKeiNav extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isAiHub = currentPath.includes('ai-hub.html') ? 'active' : '';
        const isArticles = currentPath.includes('/articles/') ? 'active' : '';
        const isAbout = currentPath.includes('about.html') ? 'active' : ''; // ✨ 新增：判斷關於我們

        this.innerHTML = `
            <nav class="top-navbar">
                <div class="nav-container">
                    <a href="/index.html" class="nav-logo">
                        <img src="/logo.png" alt="配記 Logo">
                    </a>
                    <div class="nav-links">
                        <a href="/index.html#tools" class="menu-item">小工具</a>
                        <a href="/ai-hub.html" class="menu-item ${isAiHub}">AI 雲端工具</a>
                        <a href="/index.html#articles" class="menu-item ${isArticles}">文章專欄</a>
                        <a href="/index.html#ai-prompts" class="menu-item">AI 筆記</a>
                        <a href="/about.html" class="menu-item ${isAbout}">關於我們</a>
                        <a href="https://forms.gle/JYqK8oKGhbNr4m3x5" target="_blank" rel="noopener noreferrer" class="menu-item">許願池</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

// 2. 全站頁尾
class PuiKeiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer" style="text-align:center; padding:40px; color:#94A3B8; font-size:0.9rem; border-top: 1px solid #E2E8F0;">
                <nav aria-label="頁尾導覽" style="display:flex; justify-content:center; flex-wrap:wrap; gap:18px; margin-bottom:16px;">
                    <a href="/about.html" style="color:#64748B;">關於配記</a>
                    <a href="/privacy.html" style="color:#64748B;">私隱政策</a>
                    <a href="https://forms.gle/JYqK8oKGhbNr4m3x5" target="_blank" rel="noopener noreferrer" style="color:#64748B;">聯絡／許願</a>
                </nav>
                <p>© 2026 Puikei. All rights reserved.</p>
            </footer>
        `;
    }
}

// 3. 小工具專用懸浮導航列
class WidgetNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="top-nav-layer" style="position: absolute; top: 20px; left: 20px; right: 20px; display: flex; justify-content: space-between; z-index: 100; pointer-events: none;">
                <a href="../index.html" class="nav-btn" style="pointer-events: auto; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); color: #1e293b; text-decoration: none; padding: 10px 20px; border-radius: 50px; font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: 0.2s;">← 首頁</a>
                <button class="nav-btn" onclick="document.getElementById('modal').classList.add('show')" style="pointer-events: auto; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); color: #1e293b; border: none; padding: 10px 20px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: 0.2s;">ℹ️ 說明書</button>
            </div>
        `;
    }
}

// 4. 小工具說明書彈窗外殼
class WidgetModal extends HTMLElement {
    connectedCallback() {
        const innerContent = this.innerHTML; 
        this.innerHTML = `
            <div class="modal-overlay" id="modal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); display: none; justify-content: center; align-items: center; z-index: 1000; padding: 20px;">
                <div class="modal-content" style="background: rgba(255, 255, 255, 0.95); color: #1e293b; padding: 30px; border-radius: 24px; max-width: 500px; width: 100%; box-shadow: 0 25px 50px rgba(0,0,0,0.2);">
                    <h2 style="color: #0066FF; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">ℹ️ 工具說明書</h2>
                    <div class="modal-custom-content" style="line-height: 1.6; margin-bottom: 20px;">
                        ${innerContent}
                    </div>
                    <button onclick="document.getElementById('modal').classList.remove('show')" style="background: #1e293b; color: white; border: none; padding: 12px; border-radius: 12px; width: 100%; font-size: 1.1rem; font-weight: bold; cursor: pointer;">明白，開始！</button>
                </div>
            </div>
        `;
    }
}

// 註冊所有自訂標籤
customElements.define('pui-kei-nav', PuiKeiNav);
customElements.define('pui-kei-footer', PuiKeiFooter);
customElements.define('widget-nav', WidgetNav);
customElements.define('widget-modal', WidgetModal);
