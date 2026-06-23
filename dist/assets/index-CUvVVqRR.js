(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const m={mojiko:{title:"門司港懷舊街區 (Mojiko Retro)",badge:"歷史懷舊 · 大正浪漫",content:`
      <h4>歷史背景</h4>
      <p>門司港開港於 1889 年（明治22年），曾是連結日本本州與九州的交通樞紐，並與神戶、橫濱並列為日本三大國際貿易港之一。在明治到大正時期（20世紀初），這裡聚集了無數的銀行、商社與海運公司，留下了大量融合日本與西方美學的「和洋折衷」建築。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>舊門司三井俱樂部</strong>：半木構造的歐洲風格建築，愛因斯坦夫婦在 1922 年訪問日本時曾在此下榻。</li>
        <li><strong>藍翼門司吊橋（Blue Wing Moji）</strong>：全日本唯一的行人專用活動跳橋。每逢整點，橋身會隨音樂像翅膀一樣向上打開，象徵著迎船入港。</li>
      </ul>
      
      <h4>🌟 趣味小知識：香蕉拍賣的起源地</h4>
      <p>日治時期，台灣（尤其是台中、旗山）生產的香蕉會大量運往門司港。因為有些香蕉在船運途中過熟，為了快速脫手，露天商販便想出了一種「一邊唱歌一邊降價拍賣」的有趣銷售法（バナナの叩き売り）。時至今日，門司港仍立有「香蕉人」雕像作為紀念，是拍照打卡的聖地。</p>
    `},kanmon:{title:"關門海底人行隧道 (Kanmon Tunnel)",badge:"世界罕見 · 海底漫步",content:`
      <h4>特色背景</h4>
      <p>這是世界上極為罕見的<strong>海底雙層隧道</strong>。上層行駛汽車，下層則是全長 780 公尺、深度約 60 公尺，專供行人和自行車通行的隧道。它橫跨了分隔本州（山口縣下關市）與九州（福岡縣北九州市）的<strong>關門海峽</strong>。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>縣境地標</strong>：最熱門的拍照點就在隧道正中央——地上畫著一條代表<strong>「福岡縣／山口縣」</strong>的境界線。您可以體驗「一步跨越日本兩大島」的奇妙瞬間。</li>
        <li><strong>四葉草環狀集章</strong>：隧道兩端出口處設有集章台，蓋滿兩個半圓形紀念章便能拼成一個完整的「四葉草」圖案，象徵幸運。</li>
      </ul>
    `},karato:{title:"唐戶市場與河豚名物",badge:"在地美食 · 鮮魚市集",content:`
      <h4>特色背景</h4>
      <p>下關是日本著名的「河豚之鄉」（當地人尊稱為 **"Fuku"**，與日文的「福」同音）。唐戶市場平日是專業的漁業批發市場，但到了週末與假日，會變身為大排檔市集「活きいき馬關街」，迎接八方遊客。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>街頭海鮮握壽司</strong>：幾十家魚販攤位會擺出令人垂涎欲滴的生魚片、爆滿海膽、肥美大蝦握壽司，價格便宜且新鮮度爆表。</li>
        <li><strong>河豚刺身初體驗</strong>：您可以挑戰切得薄如蟬翼、擺盤如牡丹花般精美的河豚生魚片（フグ刺し），口感無比Q彈有咬勁。</li>
      </ul>
    `},akama:{title:"赤間神宮 (Akama Shrine)",badge:"神話傳奇 · 歷史悲歌",content:`
      <h4>歷史背景</h4>
      <p>1185 年，日本爆發了著名的源平合戰終局之戰「壇之浦之戰」。戰敗的平氏家族為了不讓年僅 6 歲的**安德天皇**被俘，外祖母抱著幼小天皇投海自盡，平氏也隨之滅亡。為了祭祀這位悲劇的幼帝，後人在此建立了赤間神宮。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>水天門</strong>：神宮最具標誌性的紅白大門，是模仿神話中「海底龍宮」的樣貌建造的。這源於安德天皇投海前，外祖母安慰他：「波濤之下也有皇都（龍宮）喔。」</li>
        <li><strong>無耳芳一堂</strong>：這裡也是日本著名怪談故事《無耳芳一》的舞台，堂內祭祀著這位為平家怨靈彈奏琵琶的盲眼琵琶法師。</li>
      </ul>
    `},shimonoseki:{title:"日清講和紀念館 (春帆樓)",badge:"課本場景 · 歷史見證",content:`
      <h4>歷史背景</h4>
      <p>1895 年，清廷在甲午戰爭中戰敗，李鴻章奉命來到下關的著名割烹旅館「春帆樓」，與日本首相伊藤博文進行談判。最終在此簽署了《馬關條約》（日本稱為《下關條約》），將台灣及澎湖群島割讓給日本，深刻改變了台灣的命運。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>歷史談判會場重現</strong>：紀念館就位於春帆樓旁，館內完整復原了當年談判會場的陳設。包括李鴻章與伊藤博文坐過的椅子、取暖的火盆、以及李鴻章遇刺後使用的文書用具，是歷史課本場景的真實再現。</li>
      </ul>
    `},kokura:{title:"小倉城天守閣 (Kokura Castle)",badge:"戰國名城 · 歷史重鎮",content:`
      <h4>歷史背景</h4>
      <p>由戰國名將**細川忠興**於 1602 年建造，是九州的戰略交通樞紐。細川忠興的妻子是日本歷史上著名的基督教名媛「細川伽羅奢」。小倉城在 1866 年的「幕末長州戰爭」中被小倉藩自行燒毀，現存的天守閣是在 1959 年重建的。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>唐造（唐づくり）天守</strong>：小倉城最特殊之處在於它的頂層（第五層）比第四層還要大，且中間沒有突出的屋簷，這種建築結構在日本城堡中非常罕見。</li>
        <li><strong>迎客虎與送客虎</strong>：城內展示著兩幅巨大的老虎屏風壁畫（高達4.7公尺），一幅是「迎客虎」（雄），一幅是「送客虎」（雌），栩栩如生，象徵守護。</li>
      </ul>
    `},kumamoto:{title:"熊本城天守閣 (Kumamoto Castle)",badge:"三大名城 · 難攻不落",content:`
      <h4>歷史背景</h4>
      <p>日本三大名城之一，由築城大師**加藤清正**於 1607 年建成。在 1877 年的西南戰爭中，西鄉隆盛率領的薩摩軍圍困熊本城五十多天卻始終無法攻破，連西鄉隆盛都感嘆：「我不是輸給政府軍，而是輸給了清正公的城。」</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>武者返（武者返し）</strong>：熊本城的石牆（石垣）坡度特殊，底部平緩，越往上越陡峭，最後幾近垂直。這使得即便是身手僥健的忍者或武士，也無法攀爬，因而得名。</li>
        <li><strong>銀杏之城</strong>：加藤清正築城時考慮到若被圍城，士兵需要糧食，因此在城內廣植銀杏（銀杏果可食用），並在榻榻米中混入乾芋莖。</li>
      </ul>
      <h4>💡 現代啟示錄：震後重生的奇蹟</h4>
      <p>2016 年熊本大地震導致多處石垣倒塌、天守損毀。然而在全日本專家的努力下，天守閣僅用數年便修復完成。目前城內規劃了全新的參觀高架步道，能近距離觀察震災遺址與修復過程。</p>
    `},dazaifu:{title:"太宰府天滿宮 (Dazaifu Tenmangu)",badge:"學問之神 · 梅花芬芳",content:`
      <h4>歷史背景</h4>
      <p>這裡祭祀著平安時代的偉大文人**菅原道真**。他因才華橫溢深受天皇重用，卻遭政敵讒言陷害，被貶謫至荒涼的九州太宰府，兩年後抑鬱而終。道真死後，京都頻頻發生天災雷擊，人們認為是他的怨靈作祟，於是追贈他為「天滿大自在天神」，尊其為「學問、文化與避邪之神」。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>飛梅傳說（飛梅）</strong>：正殿前有一棵巨大的梅樹。傳說道真被貶離開京都時，寫詩向家中的梅樹告別。這棵梅樹因為太過思念主人，竟然一夜之間「拔地而起，飛越千里」來到了太宰府，這就是著名的「飛梅」。</li>
        <li><strong>表參道梅枝餅</strong>：參道兩旁販售的「梅枝餅」是紅豆沙餡的烤麻糬，源於當年道真窮困引退時，一位老婦人將餅包裹在梅枝上送給他果腹的溫暖故事。</li>
        <li><strong>御神牛</strong>：傳說載運道真遺體的牛隻走到此處便趴下不肯前進，大家認為這是道真選定的長眠之地，於是就地建墓。如今觸摸神牛的牛角與牛頭，據說能獲得智慧與學運。</li>
      </ul>
    `},yanagawa:{title:"柳川水鄉遊船 (Yanagawa)",badge:"水鄉威尼斯 · 江戶防禦",content:`
      <h4>歷史背景</h4>
      <p>柳川在江戶時代是柳川藩立花氏的城下町。為了防禦敵軍以及宣洩氾濫的筑後川河水，先人在城區周邊挖掘了總長達 930 公里的縱橫水路（掘割），使柳川成為名副其實的「水上威尼斯」。</p>
      
      <h4>特色與看點</h4>
      <ul>
        <li><strong>搖船（どんこ船）體驗</strong>：由身穿傳統法被、戴著草帽的船夫手持單槳，一邊吟唱當地的北原白秋童謠，一邊巧妙地操控木船穿過極為低矮的古老橋墩。</li>
        <li><strong>蒸籠鰻魚飯（せいろ蒸し）</strong>：柳川是蒸籠鰻魚飯的發源地。做法是將拌好醬汁的白飯鋪在蒸籠上，放上烤得酥香的鰻魚與蛋絲，整籠一起蒸透。這使得米飯吸飽了鰻魚油脂與醬汁香氣，是不可錯過的極致美味。</li>
      </ul>
    `}};document.addEventListener("DOMContentLoaded",()=>{f(),h(),p(),y()});function f(){const n=document.getElementById("navbar"),o=document.querySelectorAll(".nav-link"),l=document.querySelectorAll("section, header");window.addEventListener("scroll",()=>{window.scrollY>50?n.classList.add("scrolled"):n.classList.remove("scrolled");let s="";l.forEach(t=>{const e=t.offsetTop-150,i=t.clientHeight;window.scrollY>=e&&window.scrollY<e+i&&(s=t.getAttribute("id"))}),o.forEach(t=>{t.classList.remove("active"),t.getAttribute("href").slice(1)===s&&t.classList.add("active")})})}function h(){const n=document.querySelectorAll(".day-btn"),o=document.querySelectorAll(".day-panel");n.forEach(l=>{l.addEventListener("click",()=>{const s=l.getAttribute("data-day");n.forEach(e=>e.classList.remove("active")),o.forEach(e=>e.classList.remove("active")),l.classList.add("active");const t=document.getElementById(`day-panel-${s}`);t&&t.classList.add("active"),window.innerWidth<=1024&&l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}function p(){const n=document.querySelectorAll(".filter-btn"),o=document.querySelectorAll(".gallery-card");n.forEach(l=>{l.addEventListener("click",()=>{const s=l.getAttribute("data-filter");n.forEach(t=>t.classList.remove("active")),l.classList.add("active"),o.forEach(t=>{const e=t.getAttribute("data-category");s==="all"||e===s?(t.style.display="flex",t.style.animation="fadeIn 0.5s ease forwards"):t.style.display="none"})})})}function y(){const n=document.getElementById("details-modal"),o=document.getElementById("modal-overlay"),l=document.getElementById("modal-close-btn"),s=document.getElementById("modal-badge"),t=document.getElementById("modal-title"),e=document.getElementById("modal-body-content"),i=document.querySelectorAll(".gallery-card");function g(r){const a=m[r];a&&(s.textContent=a.badge,t.textContent=a.title,e.innerHTML=a.content,n.classList.add("open"),document.body.style.overflow="hidden")}function u(){n.classList.remove("open"),document.body.style.overflow=""}i.forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-spot");g(a)})}),l.addEventListener("click",u),o.addEventListener("click",u),document.addEventListener("keydown",r=>{r.key==="Escape"&&n.classList.contains("open")&&u()})}const c=document.getElementById("mobile-menu-btn"),d=document.querySelector(".nav-menu");c&&d&&(c.addEventListener("click",()=>{d.classList.toggle("mobile-open");const o=d.classList.contains("mobile-open");c.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'}),document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{d.classList.remove("mobile-open"),c.innerHTML='<i class="fa-solid fa-bars"></i>'})}));
