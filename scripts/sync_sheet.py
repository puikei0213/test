import os
import pandas as pd

sheet_url = os.environ.get('SHEET_CSV_URL')
if not sheet_url:
    print("🚨 錯誤：未設定 SHEET_CSV_URL")
    exit(1)

try:
    df = pd.read_csv(sheet_url)
    ready_articles = df[df['status'] == 'ready']
    
    index_path = 'index.html'
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    marker = ''
    updates_made = False

    for index, row in ready_articles.iterrows():
        filename = str(row['filename']).strip()
        html_code = str(row['html_code'])
        card_code = str(row.get('card_code', '')) if pd.notna(row.get('card_code')) else ''
        
        # 👑 終極防護：強制確保 articles 資料夾存在，無就自動開一個！
        os.makedirs('articles', exist_ok=True)
        filepath = f"articles/{filename}.html"
        
        if os.path.exists(filepath):
            print(f"⏩ [{filename}] 已存在，跳過處理。")
            continue
            
        # 寫入文章 HTML
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_code)
        print(f"✅ 成功生成新文章: {filepath}")
        
        # 注入首頁卡片
        if card_code and marker in index_content:
            injection_string = f"{marker}\n\n{card_code}"
            index_content = index_content.replace(marker, injection_string, 1)
            print(f"✅ 成功將 [{filename}] 的卡片注入首頁！")
            updates_made = True
        else:
            print(f"⚠️ [{filename}] 無卡片代碼或找不到首頁定位點。")

    if updates_made:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(index_content)
        print("💾 已儲存更新後的 index.html")
        
except Exception as e:
    print(f"🚨 處理失敗: {e}")
    exit(1)
