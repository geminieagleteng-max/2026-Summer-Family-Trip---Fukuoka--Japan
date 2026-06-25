import React, { useState } from 'react';
import { Info, AlertTriangle, ExternalLink, Minimize2, Languages, Map as MapIcon, Train, ZoomIn } from 'lucide-react';

const TRANSLATIONS = [
  { jp: 'これ、免税になりますか？', ro: 'Kore, menzei ni narimasu ka?', tw: '這可以免稅嗎？' },
  { jp: 'お会計をお願いします。', ro: 'O-kaikei o onegai shimasu.', tw: '請幫我結帳。' },
  { jp: 'クレジットカードは使えますか？', ro: 'Kurejitto kādo wa tsukaemasu ka?', tw: '可以使用信用卡嗎？' },
  { jp: '英語のメニューはありますか？', ro: 'Eigo no menyū wa arimasu ka?', tw: '有英文或中文菜單嗎？' },
  { jp: 'ピーナッツアレルギーがあります。', ro: 'Pīnattsu arerugī ga arimasu.', tw: '我有花生過敏。' },
  { jp: 'すみません、写真を撮っていただけますか？', ro: 'Sumimasen, shashin o totte itadakemasu ka?', tw: '不好意思，可以幫我們拍張照嗎？' },
  { jp: 'ここはどこですか？', ro: 'Koko wa doko desu ka?', tw: '請問這裡是什麼地方？' }
];

export default function InfoTab() {
  const [activeJpCard, setActiveJpCard] = useState(null);
  const [activeMap, setActiveMap] = useState(null);

  return (
    <div className="fade-in" style={{ padding: '16px', position: 'relative' }}>
      
      {/* Active Translation Modal (Fullscreen overlay for showing to shopkeepers) */}
      {activeJpCard && (
        <div 
          onClick={() => setActiveJpCard(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#0b0f19',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            textAlign: 'center'
          }}
        >
          <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <Minimize2 size={32} />
          </div>
          <span style={{ fontSize: '18px', color: 'var(--primary-light)', marginBottom: '16px' }}>
            {activeJpCard.tw}
          </span>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: 'white', lineHeight: '1.4', marginBottom: '16px' }}>
            {activeJpCard.jp}
          </h1>
          <span style={{ fontSize: '18px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            "{activeJpCard.ro}"
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-dark)', marginTop: '40px' }}>
            （點擊螢幕任何地方即可關閉返回）
          </span>
        </div>
      )}

      {/* Active Map Modal (Fullscreen zoomable/scrollable modal) */}
      {activeMap && (
        <div 
          onClick={() => setActiveMap(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#0b0f19',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            textAlign: 'center'
          }}
        >
          <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <Minimize2 size={32} />
          </div>
          <span style={{ fontSize: '16px', color: 'var(--primary-light)', marginBottom: '16px', fontWeight: 'bold' }}>
            {activeMap.title}
          </span>
          <div 
            style={{ 
              width: '100%', 
              maxHeight: '70vh', 
              overflow: 'auto', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              background: '#101524',
              borderRadius: '12px',
              padding: '8px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeMap.src} 
              alt={activeMap.title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '65vh', 
                objectFit: 'contain',
                cursor: 'zoom-in',
                transition: 'transform 0.2s ease'
              }} 
              onClick={(e) => {
                const img = e.currentTarget;
                if (img.style.transform === 'scale(1.8)') {
                  img.style.transform = 'scale(1)';
                  img.style.maxHeight = '65vh';
                  img.style.maxWidth = '100%';
                } else {
                  img.style.transform = 'scale(1.8)';
                  img.style.maxHeight = 'none';
                  img.style.maxWidth = 'none';
                }
              }}
            />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-dark)', marginTop: '24px' }}>
            （點擊圖片可放大/縮小，點擊背景或右上角關閉）
          </span>
        </div>
      )}

      {/* Warnings & Notices */}
      <div className="glass-card" style={{ borderLeft: '4px solid var(--warning)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <AlertTriangle size={18} style={{ color: 'var(--warning)' }} />
          <h3 style={{ fontSize: '14px', color: 'white' }}>飯店入住營業時間警告</h3>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          <strong>montan HAKATA (D3-D5)</strong> 櫃檯營業時間為 <strong>07:00 - 24:00</strong>，最晚 Check-in 時間為 <strong>23:30</strong>。超過半夜 12 點大門鎖定且無人留守，將無法辦理入住！
        </p>
      </div>

      {/* Transit Maps Section */}
      <div className="glass-card">
        <h3 style={{ fontSize: '14px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapIcon size={16} style={{ color: 'var(--secondary)' }} />
          <span>實用交通地圖 & 路線指引</span>
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* JR Map Card */}
          <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', overflow: 'hidden' }}>
            <div 
              style={{ position: 'relative', height: '120px', background: '#0a0d16', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setActiveMap({ title: '北九州 JR 鐵路路線圖', src: '/images/jr_map.png' })}
            >
              <img src="/images/jr_map.png" alt="北九州 JR 鐵路路線圖" style={{ maxHeight: '95%', maxWidth: '95%', objectFit: 'contain' }} />
              <div style={{ position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.65)', padding: '3px 6px', borderRadius: '4px', fontSize: '9px', display: 'flex', alignItems: 'center', gap: '3px', color: 'white' }}>
                <ZoomIn size={10} /> 點擊放大
              </div>
            </div>
            <div style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '12.5px', color: 'white', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Train size={13} style={{ color: 'var(--secondary)' }} />
                <span>北九州 JR 鐵路路線圖</span>
              </h4>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '0 0 6px 0' }}>
                <strong>適用票券</strong>：北九州 JR Pass (3日/5日券)
              </p>
              <ul style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: '0 0 8px 0', paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '3px', lineHeight: '1.4' }}>
                <li><strong>博多 ↔ 小倉/門司港</strong>：Day 2 搭特急「音速號 (Sonic)」主要幹道。</li>
                <li><strong>博多 ↔ 熊本</strong>：Day 3 搭「九州新幹線（瑞穗號/櫻花號）」直達熊本（最快只需 32-38 分）。</li>
                <li><strong>香椎線</strong>：Day 4 往返海之中道海洋世界。</li>
              </ul>
              <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', padding: '8px 10px', fontSize: '10px', color: '#fbbf24', lineHeight: '1.4' }}>
                ⚠️ <strong>乘車提醒</strong>：北九州 JR Pass <strong>不包含</strong>「博多 ↔ 小倉」區間的<strong>山陽新幹線</strong>。往返小倉請務必搭乘 JR 九州的「特急音速號 (Sonic)」，約 40-50 分鐘即可抵達。
              </div>
            </div>
          </div>

          {/* Subway Map Card */}
          <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', overflow: 'hidden' }}>
            <div 
              style={{ position: 'relative', height: '120px', background: '#0a0d16', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setActiveMap({ title: '福岡市地下鐵路線圖', src: '/images/subway_map.jpg' })}
            >
              <img src="/images/subway_map.jpg" alt="福岡市地下鐵路線圖" style={{ maxHeight: '95%', maxWidth: '95%', objectFit: 'contain' }} />
              <div style={{ position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.65)', padding: '3px 6px', borderRadius: '4px', fontSize: '9px', display: 'flex', alignItems: 'center', gap: '3px', color: 'white' }}>
                <ZoomIn size={10} /> 點擊放大
              </div>
            </div>
            <div style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '12.5px', color: 'white', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Train size={13} style={{ color: 'var(--primary-light)' }} />
                <span>福岡市地下鐵路線圖</span>
              </h4>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '0 0 6px 0' }}>
                <strong>適用票券</strong>：福岡市地下鐵一日券 (640 日圓)
              </p>
              <ul style={{ fontSize: '10.5px', color: 'var(--text-muted)', margin: '0 0 8px 0', paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '3px', lineHeight: '1.4' }}>
                <li><strong>機場線 (橙色)</strong>：Day 1 機場直達博多/天神。也是 Day 5 往返博多與天神商圈、櫛田神社的主要路線。</li>
                <li><strong>七隈線 (綠色)</strong>：新延伸線開通，從天神南直達博多站極為快速。</li>
                <li><strong>箱崎線 (藍色)</strong>：可連接至貝塚站。</li>
              </ul>
              <div style={{ background: 'rgba(13, 148, 136, 0.08)', border: '1px solid rgba(13, 148, 136, 0.2)', borderRadius: '8px', padding: '8px 10px', fontSize: '10px', color: '#2dd4bf', lineHeight: '1.4' }}>
                💡 <strong>省錢妙招</strong>：Day 5 安排了市區行程，若預計搭乘地下鐵 3 次以上，強烈建議在售票機購買「地下鐵一日券」，非常超值！
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="glass-card">
        <h3 style={{ fontSize: '14px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={16} style={{ color: 'var(--secondary)' }} />
          <span>行前重要指南與連結</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href="https://www.vjw.digital.go.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              fontSize: '13px', 
              color: 'var(--text-main)',
              textDecoration: 'none',
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <span>🇯🇵 Visit Japan Web (入境登錄)</span>
            <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
          </a>

          <a 
            href="https://www.fubon.com/insurance/b2c/content/prod_travel/index.html" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              fontSize: '13px', 
              color: 'var(--text-main)',
              textDecoration: 'none',
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <span>✈️ 富邦旅遊平安險申辦</span>
            <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
          </a>
        </div>
      </div>

      {/* Survival Japanese Translator */}
      <div className="glass-card">
        <h3 style={{ fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Languages size={16} style={{ color: 'var(--primary-light)' }} />
          <span>日本求助急用字卡</span>
        </h3>
        <span style={{ fontSize: '11px', color: 'var(--text-dark)', display: 'block', marginBottom: '12px' }}>
          點擊下方字卡，即可展示「超大字體滿版畫面」方便給店員出示：
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {TRANSLATIONS.map((t, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveJpCard(t)}
              style={{
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{t.tw}</span>
                <span style={{ fontSize: '11px', color: 'var(--primary-light)' }}>點擊放大 🔍</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {t.jp}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
