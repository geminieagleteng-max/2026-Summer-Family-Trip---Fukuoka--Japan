# ✈️ 2026 暑假日本福岡家庭旅遊 - 導覽網站

本專案是一個專為 2026 年日本福岡家庭旅遊設計的極致導覽網站。專為旅遊公司或家庭成員檢視設計，具備現代化高質感設計（包含玻璃貼水質感、漸層文字與流暢動畫），並配置了 **GitHub Actions** 自動化部署工作流，讓您每次推播（push）到 GitHub 時自動部署至 **GitHub Pages**。

## 🌟 網頁功能特色
1. **每日行程時間軸 (Itinerary Timeline)**：互動式 Day 1 至 Day 7 行程切換，時間點清晰明瞭。
2. **景點特色與歷史故事庫 (Sightseeing Modal)**：以卡片形式展示門司港、小倉、熊本、太宰府、柳川等景點，點擊可開啟**精美彈出視窗（Modal）**閱讀景點歷史典故與趣味小知識。
3. **飯店與行李中轉對策 (Hotels & Luggage)**：針對三間飯店的入住/退房時間、特別規定（例如 montan HAKATA 的門禁時間）進行比較，並提供最省力的行李中轉策略。
4. **交通票券與行前清單 (Passes & Tips)**：彙整 JR Pass、四葉草車票與西鐵套票，並提供 Visit Japan Web 與公休日提醒。
5. **主題切換與自適應 (Responsive)**：完美支援手機、平板與電腦版檢視。

---

## 🛠️ 本地開發與預覽

專案已配置 Vite 開發工具，您可以在本地輕鬆運行：

### 1. 安裝依賴
請確保本機已安裝 [Node.js](https://nodejs.org/)，在專案根目錄下執行：
```bash
npm install
```

### 2. 啟動本地開發伺服器
執行以下指令，並在瀏覽器中打開 `http://localhost:5173`：
```bash
npm run dev
```

### 3. 編譯生產版本
如果需要編譯壓縮後的靜態資源，可以執行：
```bash
npm run build
```
編譯後的靜態檔案將會輸出至 `dist/` 資料夾中。

---

## 🚀 使用 GitHub Actions 自動部署至 GitHub Pages

我們已經為您配置好了自動化部署流程，當您將專案推送到 GitHub 時，系統會自動使用 Vite 編譯並部署網頁：

### 步驟 1：建立並推送至 GitHub
1. 在 GitHub 上建立一個新的儲存庫（Repository，例如 `fukuoka-trip-2026`）。
2. 初始化本地 Git 儲存庫並推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "feat: init fukuoka guide web with github actions"
   git branch -M main
   git remote add origin https://github.com/<您的帳號>/fukuoka-trip-2026.git
   git push -u origin main
   ```

### 步驟 2：開啟 GitHub Pages 的 Actions 權限
1. 進入您的 GitHub 儲存庫頁面，點擊 **Settings（設定）**。
2. 在左側選單中找到並點選 **Pages**。
3. 在 **Build and deployment** 下方的 **Source**，將其下拉選單從 `Deploy from a branch` 改為 **`GitHub Actions`**。
4. 之後，每當您執行 `git push` 把新程式碼推送到 `main` 分支時，GitHub Actions 都會自動啟動建置，並將 `dist/` 資料夾部署至 `https://<您的帳號>.github.io/fukuoka-trip-2026/`！
5. 您可以在儲存庫的 **Actions** 頁籤中查看部署進度與日誌。
