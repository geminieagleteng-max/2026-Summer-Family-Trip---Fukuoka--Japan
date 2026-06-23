# ✈️ 2026 暑假日本福岡家庭旅遊 - 導覽網站

本專案是一個專為 2026 年日本福岡家庭旅遊設計的極致導覽網站。專為旅遊公司或家庭成員檢視設計，具備現代化高質感設計（包含玻璃貼水質感、漸層文字與流暢動畫），且完全相容並可輕鬆架設於 **GitHub Pages** 上。

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

## 🚀 如何架設於 GitHub Pages？

這個網站是純靜態網頁（HTML/CSS/JS），您可以選擇以下兩種最簡單的方法來架設在 GitHub Pages 上：

### 方法 A：直接部署根目錄（最推薦，最簡單）
因為專案內部的檔案路徑皆採用**相對路徑**，您可以直接將根目錄的靜態檔案上傳至 GitHub，無需任何編譯：
1. 在 GitHub 上建立一個新的儲存庫（Repository，例如 `fukuoka-trip`）。
2. 將專案根目錄下的所有檔案（**排除 `node_modules/`**）推送到 GitHub 的 `main`（或 `master`）分支：
   - 包含 `index.html`、`style.css`、`app.js`、`images/`。
3. 進入 GitHub 儲存庫的 **Settings（設定）** $\rightarrow$ **Pages**。
4. 在 **Build and deployment** 下，將 Source 設定為 `Deploy from a branch`。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，點擊 **Save**。
6. 等待約 1-2 分鐘，即可透過 `https://<您的帳號>.github.io/fukuoka-trip/` 瀏覽網站！

### 方法 B：使用 GitHub Actions 自動編譯 Vite
如果您希望推播程式碼後，讓 GitHub 自動幫您執行 `npm run build` 並部署 `dist` 資料夾：
1. 可以參考 Vite 官方的 GitHub Pages 部署指南，或在專案中建立 `.github/workflows/deploy.yml` 檔案。
2. 配置完成後，每次 push 至 `main` 分支，GitHub 將會自動編譯並更新網頁。
