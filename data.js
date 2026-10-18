// =====================================================================
//  data.js —— 條目「資料」檔。版面與樣式在 wiki-frame.html，這裡只放內容。
//  換資料時只需要改這個檔案（以及 assets/ 裡的圖片）。
//
//  ※ 本檔為條目「AC-9電磁線圈卡賓槍」的內容。
//    原本的 HK416 示範資料保留在 data.hk416.js，要換回去只要把檔名對調。
//
//  寫作慣例：
//   • 文字欄位是 JavaScript 模板字串（反引號 ` ... `），裡面可以直接寫 HTML，
//     可以跨行；若內容本身要出現反引號，寫成 \`。
//   • 連結只是外觀：站內連結寫 <a class="wl">文字</a>，站外連結寫 <a class="ext">文字</a>
//     （會顯示外部連結小圖示）。兩者都不需要 href。
//   • 註釋／腳註：內文放 <sup class="ref" data-ref="鍵名"></sup>，
//     在 references 區用同一個鍵名提供文字，頁面會自動依出現順序編號並產生「註釋」清單。
//   • 圖片：<figure class="thumb tright"><img src="assets/xx.jpg" alt=""><figcaption>圖說</figcaption></figure>
//     tright 靠右、tleft 靠左、tcenter 置中。多張並排用 class="thumb multi"。
//   • 國旗：<span class="flag"><img class="flagicon" src="assets/flags/xx.png" alt=""><a class="wl">國名</a></span>
//   • 章節 level：2 = 大章節（==），3/4/5 = 子章節；目次會自動產生，id 用於錨點。
//   • 「註釋」章節的 html 放 <div class="reflist" data-auto="references"></div>，頁面會自動填入。
//   • 頁尾導航框：navboxes 陣列，每個框有 title 與 rows；rows 的每一列是
//     { group: "分組名", items: ["項目", ...] } 或 { note: "說明文字" }。
// =====================================================================
window.ARTICLE = {
  title: `AC-9電磁線圈卡賓槍`,
  tagline: `凱倫電磁系統研製的多段式電磁線圈卡賓槍`,
  source: {
    name: `條目「AC-9電磁線圈卡賓槍」`,
    url: ``,
    license: `CC BY-SA 4.0`,
    retrieved: `2026-10-18`
  },

  // ---------------- 右側資訊框 ----------------
  infobox: {
    title: `AC-9「極光」`,
    image: { src: `assets/AC-9_full.jpg`, caption: `AC-9標準型，配備「弧眼」整合瞄具與40發鏢彈電池匣` },
    groups: [
      { header: null, rows: [
        { label: `類型`, value: `<a class="wl">電磁線圈槍</a>、<a class="wl">卡賓槍</a>` },
        { label: `原產地`, value: `<span class="flag"><img class="flagicon" src="assets/flags/finland.png" alt=""><a class="wl">芬蘭</a></span>` },
      ]},
      { header: `服役紀錄`, rows: [
        { label: `服役期間`, value: `2026年－` },
        { label: `使用方`, value: `見<a class="wl">使用國</a>` },
        { label: `參與戰爭／衝突`, value: `無（僅用於演習與測試）` },
      ]},
      { header: `生產歷史`, rows: [
        { label: `研發者`, value: `<a class="wl">凱倫電磁系統</a>` },
        { label: `研發日期`, value: `2018年－2024年` },
        { label: `生產商`, value: `<a class="wl">凱倫電磁系統</a>` },
        { label: `生產日期`, value: `2024年－` },
        { label: `製造數量`, value: `約2,100把（至2026年）` },
        { label: `衍生型`, value: `見<a class="wl">衍生型</a>` },
      ]},
      { header: `基本規格`, rows: [
        { label: `重量`, value: `<ul class="plainlist"><li>4.2公斤（不含彈匣）</li><li>4.9公斤（含滿彈匣）</li></ul>` },
        { label: `長度`, value: `760－845公釐（槍托收縮／伸展）` },
        { label: `加速管長度`, value: `380公釐` },
        { label: `寬度`, value: `82公釐` },
        { label: `高度`, value: `255公釐（含瞄具310公釐）` },
        { label: `彈藥`, value: `<a class="wl">6.5公釐KES鐵磁鏢彈</a>` },
        { label: `口徑`, value: `6.5公釐` },
        { label: `運作方式`, value: `八段式<a class="wl">電磁線圈</a>加速、電子擊發、無往復部件` },
        { label: `發射模式`, value: `半自動、三發點放、<a class="wl">全自動</a>` },
        { label: `射速`, value: `450發／分鐘（全自動，受充能速率限制）` },
        { label: `槍口初速`, value: `<ul class="plainlist"><li>標準模式：820公尺／秒</li><li>過載模式：1,050公尺／秒</li></ul>` },
        { label: `有效射程`, value: `500公尺` },
        { label: `供彈方式`, value: `40發一體式<a class="wl">鏢彈電池匣</a>` },
        { label: `電源`, value: `KES P-40<a class="wl">固態電池</a>（每匣內建，約120發）` },
        { label: `瞄具`, value: `<ul class="plainlist"><li>標配「弧眼」整合瞄具：<a class="wl">全像瞄準鏡</a>＋3倍放大鏡</li><li>無機械瞄具，可經<a class="wl">MIL-STD-1913導軌</a>加裝</li></ul>` },
      ]},
    ]
  },

  // ---------------- 導言（資訊框旁的開頭段落） ----------------
  lead: `<p><b>AC-9電磁線圈卡賓槍</b>（英語：<span lang="en">AC-9 Coil Carbine</span>），通稱「<b>極光</b>」（芬蘭語：<span lang="fi">Revontuli</span>），是由<a class="wl">凱倫電磁系統</a>研製的多段式<a class="wl">電磁線圈槍</a>。它不使用<a class="wl">火藥</a>，而是以機匣內的<a class="wl">電容組</a>依序對加速管周圍的八組線圈放電，把<a class="wl">鐵磁性</a><a class="wl">鏢彈</a>加速至約820公尺／秒。AC-9的下機匣沿用<a class="wl">AR-15</a>的人體工學與操作配置，是第一款以現役制式步槍為基準設計、並進入部隊試用的單兵電磁武器。</p>
<p>AC-9於2024年投產，2026年獲<a class="wl">芬蘭國防軍</a>特種部隊採用，其後有多國軍警進行測試或少量採購。由於能量密度、散熱與法規分類等問題尚未完全解決，截至2026年它仍被多數使用方定位為「試驗性裝備」而非制式步槍。</p>`,

  // ---------------- 章節 ----------------
  sections: [
    // == 概要
    { level: 2, id: `概要`, title: `概要`,
      html: `<p><a class="wl">凱倫電磁系統</a>（英語：<span lang="en">Kaelen Electromagnetic Systems</span>，簡稱KES）於2016年由一所北歐大學的<a class="wl">脈衝功率</a>實驗室分拆成立，最初的業務是為船艦<a class="wl">電磁彈射系統</a>與實驗室用<a class="wl">線圈槍</a>提供電容與開關模組。2018年，KES以「AC」（<span lang="en">Accelerator Carbine</span>，另取其「交流電」的雙關）為代號啟動單兵電磁武器計畫，目標是在與<a class="wl">M4卡賓槍</a>相近的尺寸與重量內，達到與<a class="wl">5.56×45公釐北約彈</a>相當的穿透力<sup class="ref" data-ref="kes_history"></sup>。</p>
<p>計畫早期的AC-1至AC-4原型採用自製機匣，但試用部隊普遍反映操作邏輯與既有訓練脫節。2021年的AC-5起改以AR-15規格的下機匣為基礎，保留握把、扳機位置、彈匣釋放鈕與伸縮槍托介面，只把上機匣整個換成電容組與加速管。這個決定被KES稱為「借殼」策略：讓士兵用熟悉的方式操作一把原理完全不同的武器<sup class="ref" data-ref="kes_history"></sup>。</p>
<p>2022年AC-8進入芬蘭國防軍野戰試用，暴露出寒冷環境電池衰減與線圈過熱兩大問題。2024年定型的AC-9改用<a class="wl">固態電池</a>、加大散熱視窗並加入自動降速保護，同年開始量產。「極光」的暱稱來自機匣上藍紫色的充能指示帶，在夜間試射時被士兵形容像<a class="wl">極光</a>一樣<sup class="ref" data-ref="fin_trial"></sup>。</p>
<p>KES同時推出了加長加速管的精確射手型AC-9M，以及限制功率的訓練型與民用型，見<a class="wl">衍生型</a>。</p>` },

    // == 設計
    { level: 2, id: `設計`, title: `設計`,
      html: `<p>AC-9的設計可以概括為「AR-15的下半身，線圈槍的上半身」。所有與電磁加速相關的部件，包括電容組、線圈、控制器與加速管，都集中在上機匣與護木內；下機匣則維持AR-15的尺寸與介面，但扳機組改為電子式。以下依子系統說明。</p>` },

    //   === 運作原理
    { level: 3, id: `運作原理`, title: `運作原理`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_coils.jpg" alt=""><figcaption>透過護木的線圈視窗可以看到加速管周圍的銅線圈，前方黑色肋片為散熱鰭片</figcaption></figure>
<p>AC-9屬於多段式<a class="wl">線圈槍</a>（又稱<a class="wl">高斯槍</a>）。加速管外圍沿軸向排列八組銅線圈，每組線圈由獨立的<a class="wl">固態開關</a>控制。擊發時，控制器先對第一組線圈放電，產生的磁場把鐵磁性鏢彈吸向線圈中心；鏢彈通過光學位置感測器的瞬間，控制器切斷該組線圈並觸發下一組，如此接力八次，鏢彈在380公釐的加速管內達到約820公尺／秒<sup class="ref" data-ref="kes_manual"></sup>。</p>
<p>與火藥槍械不同，AC-9沒有膛壓、沒有燃氣，也沒有彈殼需要拋出。後座力只來自鏢彈本身的動量，廠方數據約為同級5.56公釐步槍的六成<sup class="ref" data-ref="kes_manual"></sup>。擊發聲響主要是鏢彈的<a class="wl">音爆</a>與線圈放電的「啪」聲，沒有槍口焰。</p>
<p>每次擊發所需的能量先由彈匣內的電池灌入上機匣的電容組，充能時間決定了射速上限：標準模式下約0.13秒，因此全自動射速被限制在450發／分鐘。「過載」模式會把電容組充至額定上限的125%，初速提高到約1,050公尺／秒，但線圈升溫更快且電池續航大幅縮短，手冊只允許連續使用十發<sup class="ref" data-ref="kes_manual"></sup>。</p>` },

    //   === 加速管
    { level: 3, id: `加速管`, title: `加速管`,
      html: `<p>AC-9沒有傳統意義上的<a class="wl">槍管</a>。加速管是一根內徑6.5公釐的無膛線<a class="wl">鈦合金</a>管，壁厚1.2公釐。選用鈦合金是因為它不導磁、電阻高，不會在線圈切換時產生干擾磁場的<a class="wl">渦電流</a>。管壁外側以陶瓷絕緣層隔開八組線圈，線圈之間嵌入位置感測器與溫度感測器。</p>
<p>由於沒有<a class="wl">膛線</a>，鏢彈的穩定性來自尾翼而非自旋，加速管只需承受線圈的夾持力與鏢彈的摩擦，壽命主要受線圈絕緣老化限制。KES宣稱線圈組的設計壽命為30,000發，加速管本體可達60,000發，但這些數字來自廠內測試，尚無第三方驗證<sup class="ref" data-ref="review_2026"></sup>。更換線圈組需要回廠，是使用方最常抱怨的後勤問題之一。</p>
<p>標準型的加速管為380公釐，緊湊型AC-9C縮短為六段280公釐，精確射手型AC-9M則加長為十段500公釐。</p>` },

    //   === 護木與散熱
    { level: 3, id: `護木與散熱`, title: `護木與散熱`,
      html: `<p>護木為6082鋁合金一體成形，上、下、左、右四面設有<a class="wl">MIL-STD-1913導軌</a>，外型與一般浮動式護木相似。最大的差異是護木兩側各開有一個長方形「線圈視窗」，可以直接看到銅線圈，視窗前方則是一排黑色散熱肋片。視窗的用途有二：讓線圈直接對流散熱，以及讓射手與保修人員目視檢查線圈絕緣層是否燒蝕<sup class="ref" data-ref="kes_manual"></sup>。</p>
<p>護木上貼有黃色的高壓警告與高溫警告標籤。連續射擊時護木溫度可在60發內超過攝氏70度，因此護木前段加裝了隔熱的握持區<sup class="ref" data-ref="thermal_2023"></sup>。護木以兩顆螺栓固定在上機匣，但由於線圈的高壓電纜穿過護木，拆卸前必須先用機匣側面的放電鈕把電容組放空，這個程序在手冊中以紅字標示。</p>` },

    //   === 機匣
    { level: 3, id: `機匣`, title: `機匣`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_upper.jpg" alt=""><figcaption>上機匣側面的弧形充能指示帶與頂部導軌，指示帶後方的拉柄為系統重置桿</figcaption></figure>
<figure class="thumb tright"><img src="assets/AC-9_lower.jpg" alt=""><figcaption>下機匣沿用AR-15的配置，可見彈匣釋放鈕、射擊選擇桿與KES V2握把</figcaption></figure>
<p>上機匣是AC-9真正的核心，以7075 T6鋁合金鍛造，內部容納電容組、固態開關陣列與射控電腦。頂部為一整條與護木連續的導軌，導軌中央嵌有資料匯流排的接點，供「弧眼」瞄具讀取武器狀態。上機匣側面的弧形凹槽內是一條藍紫色的充能指示帶，亮度隨電容組的充能程度變化，過載模式時轉為紫色；指示帶可在設定中關閉，以避免夜間暴露位置。</p>
<p>下機匣採用AR-15規格，因此AR-15的握把、槍托、扳機護圈與彈匣釋放鈕都可以直接換用。不過下機匣內沒有<a class="wl">擊鎚</a>與<a class="wl">阻鐵</a>：扳機只是一個兩段式電子開關，第一段喚醒射控電腦並預充電容，第二段送出擊發訊號。KES以彈簧與阻尼模擬了機械扳機的手感，試用部隊的評價普遍正面，但也有射手反映「扣下去沒有東西在動」的感覺需要時間適應<sup class="ref" data-ref="fin_trial"></sup>。</p>
<p>傳統AR-15的拉機柄位置改為「系統重置桿」。拉動重置桿會對電容組強制放電並重新啟動射控電腦，用於排除卡彈或電子故障；由於AC-9沒有<a class="wl">槍機</a>，這根桿子並不會帶動任何往復部件。</p>` },

    //   === 能源與供彈系統
    { level: 3, id: `能源與供彈系統`, title: `能源與供彈系統`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_magazine.jpg" alt=""><figcaption>半透明的40發鏢彈電池匣。中央發光的是固態電池的狀態窗，鏢彈排列於前方彈道內</figcaption></figure>
<p>AC-9的彈匣是鏢彈與電池的一體化模組，KES稱為「<b>鏢彈電池匣</b>」（<span lang="en">Dart-Cell Magazine</span>）。彈匣以半透明的<a class="wl">聚碳酸酯</a>製成，前段是40發鏢彈的彈道，後段是一顆KES P-40<a class="wl">固態電池</a>。電池狀態以中央視窗的藍光顯示：穩定藍光代表電量充足，閃爍表示低於20%，轉為橙色則是溫度過高。彈匣底部有充電接點，可在車輛或背包充電座上補充電力。</p>
<p>每顆P-40電池的容量足夠擊發約120發標準鏢彈，遠多於彈匣內的40發。這是刻意的設計：多出來的電量用於過載模式、低溫補償，以及在更換彈匣後立即為電容組預充，避免換匣後第一發延遲。空彈匣可重新裝填鏢彈並充電再用，廠方宣稱可循環使用500次<sup class="ref" data-ref="kes_manual"></sup>。</p>
<p>彈匣井的尺寸與AR-15相同，但彈匣本身較<a class="wl">STANAG彈匣</a>寬，且底部多了電池段，因此無法與任何現有彈匣互換。彈匣井內有一組彈簧接點與電池段連接，彈匣插入時會自動交握並讀取電池序號與循環次數。</p>` },

    //   === 彈藥
    { level: 3, id: `彈藥`, title: `彈藥`,
      html: `<p>AC-9發射專用的<b>6.5公釐KES鐵磁鏢彈</b>。鏢彈全長38公釐，重3.1公克，由<a class="wl">鎢</a>合金彈芯、<a class="wl">矽鋼</a>外套與四片尾翼構成，外套的鐵磁性是線圈能夠拉動它的關鍵。鏢彈沒有彈殼、底火與發射藥，在彈匣內以聚合物導環固定，導環在離開槍口時由整流器剝離。</p>
<p>標準鏢彈的槍口動能約1,040焦耳，低於M4卡賓槍發射M855彈的約1,700焦耳，但由於截面積小、彈芯密度高，對硬目標的穿透力與5.56公釐穿甲彈相當<sup class="ref" data-ref="ballistics_2025"></sup>。另有鋼芯訓練鏢彈（藍色尾翼）與加重的穿甲鏢彈（黑色尾翼），後者只建議在過載模式下使用。</p>
<p>鏢彈的單價約為5.56公釐彈的三倍，是AC-9推廣的主要障礙之一。KES的回應是鏢彈不含發射藥，儲存與運輸不受彈藥危險品法規限制，整體後勤成本未必更高，但這項主張同樣缺乏獨立驗證<sup class="ref" data-ref="review_2026"></sup>。</p>` },

    //   === 槍口裝置
    { level: 3, id: `槍口裝置`, title: `槍口裝置`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_muzzle.jpg" alt=""><figcaption>槍口整流器。外觀仿照傳統槍口制退器，內部為導環剝離器與測速線圈</figcaption></figure>
<p>加速管前端的槍口裝置稱為「整流器」。它的外觀雖然像傳統的<a class="wl">槍口制退器</a>，但AC-9沒有燃氣可以制退。整流器的三項功能分別是：剝離鏢彈的聚合物導環、以一對小型測速線圈量測每一發的實際初速並回饋給射控電腦，以及在鏢彈離開後吸收最後一組線圈的殘餘磁場，減少對瞄具的干擾<sup class="ref" data-ref="kes_manual"></sup>。</p>
<p>整流器以M18×1螺紋安裝。KES另有可同時剝離導環的<a class="wl">消音器</a>版本，不過AC-9本身沒有槍口噪音，消音器實際上只能降低放電聲，對音爆無效。</p>` },

    //   === 槍托與握把
    { level: 3, id: `槍托與握把`, title: `槍托與握把`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_stock.jpg" alt=""><figcaption>六段式伸縮槍托，托身上的藍色指示燈顯示系統處於待命狀態</figcaption></figure>
<p>AC-9使用AR-15規格的緩衝管與六段式伸縮槍托，但緩衝管內沒有<a class="wl">緩衝器</a>與彈簧，改為容納一組輔助電容與系統的主電源開關。標準槍托為KES自製，托身設有一個狀態指示燈：藍色為待命、綠色為保險、紅色為故障，讓射手不用翻看機匣也能確認狀態。任何AR-15槍托皆可替換，只是會失去指示燈功能。</p>
<p>握把為KES V2握把，內有儲物空間，造型與握持角度與市售AR-15握把相同。</p>` },

    //   === 操作部件與射控
    { level: 3, id: `操作部件與射控`, title: `操作部件與射控`,
      html: `<p>射擊選擇桿為雙邊設計，四個位置分別是保險、半自動、三發點放與全自動，角度為0、45、90、135度。另有一個獨立的過載開關，位於選擇桿前方，需要同時按下保險鈕才能撥動，以免誤觸。彈匣釋放鈕與無彈後定釋放桿的位置與AR-15相同，但後者改為「彈匣確認鈕」，按下後會在指示帶上顯示剩餘鏢彈數。</p>
<p>射控電腦記錄每一發的初速、線圈溫度與電池狀態，透過頂部導軌的資料匯流排傳給瞄具，也可以用機匣後方的維護接口讀出。KES表示這些資料只儲存在武器內，不會對外傳輸，但部分使用方仍要求提供原始碼審查，截至2026年KES尚未同意<sup class="ref" data-ref="review_2026"></sup>。</p>` },

    //   === 瞄具
    { level: 3, id: `瞄具`, title: `瞄具`,
      html: `<figure class="thumb tright"><img src="assets/AC-9_optic.jpg" alt=""><figcaption>「弧眼」整合瞄具，前段為全像瞄準窗，後段為可翻轉的3倍放大鏡</figcaption></figure>
<p>AC-9標配KES的「<b>弧眼</b>」（<span lang="en">ArcSight</span>）整合瞄具，由前段的<a class="wl">全像瞄準鏡</a>與後段的3倍放大鏡組成，兩者安裝在同一個底座上。瞄具透過導軌上的資料接點讀取武器狀態，在瞄準窗內顯示剩餘鏢彈數、電容充能程度與過載模式警示；當射控電腦偵測到初速偏差時，瞄準點會自動微調<sup class="ref" data-ref="kes_manual"></sup>。</p>
<p>由於AC-9沒有<a class="wl">機械瞄具</a>，弧眼故障時射手只能依靠導軌上另外加裝的摺疊瞄具。這一點在芬蘭的試用報告中被列為主要缺點，KES於2026年推出的AC-9 A1護木因此整合了摺疊準星<sup class="ref" data-ref="fin_trial"></sup>。</p>` },

    //   === 表面處理
    { level: 3, id: `表面處理`, title: `表面處理`,
      html: `<p>上、下機匣與護木採用第三型<a class="wl">陽極氧化處理</a>，外觀為帶有棕色邊緣的深灰色，這是KES刻意把鈦合金加速管的色調延伸到外觀的設計語言。護木的線圈視窗周圍另加一層耐熱的陶瓷塗層。民用型CA-9提供黑色與沙色兩種外觀。</p>` },

    // == 採用
    { level: 2, id: `採用`, title: `採用`,
      html: `<p>AC-9的採用過程與一般制式步槍不同：多數使用方把它視為試驗性裝備，由特種部隊或研發單位少量採購，而非全面換裝。</p>
<p>2026年，<a class="wl">芬蘭國防軍</a>特種部隊在完成兩年野戰試用後採購首批300把，主要用於評估電磁武器在北極環境的可行性<sup class="ref" data-ref="fin_trial"></sup>。<a class="wl">挪威</a>與<a class="wl">愛沙尼亞</a>隨後透過北歐防務合作框架各取得數十把進行聯合測試。</p>
<p>2025年，<a class="wl">美國特種作戰司令部</a>以「下一代單兵電磁武器評估」名義採購120把，這是AC-9在北歐以外的第一筆訂單。評估報告指出AC-9的穿透力與低後座力受到肯定，但電池續航、重量，以及無法與現有彈藥共用後勤，被列為不採用的主因<sup class="ref" data-ref="socom_eval"></sup>。</p>
<p>亞太地區方面，<a class="wl">中華民國國軍</a>、<a class="wl">日本自衛隊</a>與<a class="wl">新加坡武裝部隊</a>皆於2025年至2026年間取得樣槍進行測試。其中<a class="wl">國家中山科學研究院</a>將AC-9與自行研發的電磁武器原型進行比較，結果未公開<sup class="ref" data-ref="ncsist_2026"></sup>。</p>
<p>截至2026年，AC-9尚未成為任何國家的制式步槍。KES宣稱累計生產約2,100把，其中約三分之一為訓練型與民用型<sup class="ref" data-ref="kes_annual"></sup>。</p>` },

    // == 衍生型
    { level: 2, id: `衍生型`, title: `衍生型`,
      html: `<p>AC-9的衍生型以加速管長度與功率限制區分。所有軍用型共用下機匣與鏢彈電池匣，民用型則改用不相容的彈匣井。</p>` },

    //   === 軍警用型
    { level: 3, id: `軍警用型`, title: `軍警用型`,
      html: `<p>軍警用型皆保留過載功能與資料匯流排，差別在加速管段數與發射模式。</p>` },

    //     ==== AC-9
    { level: 4, id: `AC-9`, title: `AC-9`,
      html: `<p>標準型，八段380公釐加速管，2024年投產。2026年起的A1批次整合了護木摺疊準星與改良的低溫電池管理，外觀上可由護木前端的準星座辨認。</p>` },

    //     ==== AC-9C
    { level: 4, id: `AC-9C`, title: `AC-9C`,
      html: `<p>緊湊型，六段280公釐加速管，初速降至約700公尺／秒，全長縮短100公釐，重量減輕0.4公斤，為近距離作戰設計。由於線圈段數減少，每發能耗效率反而較差，電池續航約90發。</p>` },

    //     ==== AC-9M
    { level: 4, id: `AC-9M`, title: `AC-9M`,
      html: `<p>精確射手型，十段500公釐加速管，標準模式初速即達950公尺／秒，過載模式約1,150公尺／秒。配用6倍放大版的弧眼瞄具與加長護木，重量增至5.1公斤，僅提供半自動與兩發點放。</p>` },

    //     ==== AC-9T
    { level: 4, id: `AC-9T`, title: `AC-9T`,
      html: `<p>訓練型，功率鎖定在350公尺／秒以下，只能發射塑膠彈芯的訓練鏢彈，護木與彈匣改為藍色以茲區別。用於室內靶場與戰術訓練，是KES產量最大的型號。</p>` },

    //     ==== AC-9LE
    { level: 4, id: `AC-9LE`, title: `AC-9LE`,
      html: `<p>執法型，移除全自動與過載功能，並加入使用者無法清除的射擊紀錄，供警察特勤單位使用。</p>` },

    //   === 民用型
    { level: 3, id: `民用型`, title: `民用型`,
      html: `<p>民用型<b>CA-9</b>於2025年在芬蘭與部分歐洲國家上市，只有半自動，初速限制在約600公尺／秒，彈匣容量10發，彈匣井與軍用型不相容。由於多數國家的槍械法規以火藥燃氣定義槍械，CA-9在各國的法律地位並不一致：芬蘭將它比照一般步槍管制，德國則因定義問題一度禁止進口<sup class="ref" data-ref="law_2026"></sup>。</p>` },

    //   === 衍生型規格列表
    { level: 3, id: `衍生型規格列表`, title: `衍生型規格列表`,
      html: `<table class="wikitable">
<tr><th>型號</th><th>加速管</th><th>線圈段數</th><th>全長（公釐）</th><th>重量（公斤，不含彈匣）</th><th>初速（公尺／秒，標準／過載）</th><th>發射模式</th><th>彈匣容量</th><th>投產年</th></tr>
<tr><td>AC-9</td><td>380公釐</td><td>8</td><td>760－845</td><td>4.2</td><td>820／1,050</td><td>半自動、三發點放、全自動</td><td>40</td><td>2024年</td></tr>
<tr><td>AC-9C</td><td>280公釐</td><td>6</td><td>660－745</td><td>3.8</td><td>700／880</td><td>半自動、三發點放、全自動</td><td>40</td><td>2025年</td></tr>
<tr><td>AC-9M</td><td>500公釐</td><td>10</td><td>880－965</td><td>5.1</td><td>950／1,150</td><td>半自動、兩發點放</td><td>40</td><td>2026年</td></tr>
<tr><td>AC-9T</td><td>380公釐</td><td>8</td><td>760－845</td><td>4.0</td><td>350／無</td><td>半自動、全自動</td><td>40</td><td>2025年</td></tr>
<tr><td>AC-9LE</td><td>380公釐</td><td>8</td><td>760－845</td><td>4.2</td><td>820／無</td><td>半自動、三發點放</td><td>40</td><td>2025年</td></tr>
<tr><td>CA-9</td><td>380公釐</td><td>8</td><td>760－845</td><td>4.1</td><td>600／無</td><td>半自動</td><td>10</td><td>2025年</td></tr>
</table>` },

    // == 使用國
    { level: 2, id: `使用國`, title: `使用國`,
      html: `<p>以下列出已採購或正式測試AC-9的國家與單位。S表示以特種部隊使用為主，L表示少量列裝，T表示測試及研究用途。</p>
<ul>
<li><span class="flag"><img class="flagicon" src="assets/flags/finland.png" alt=""><a class="wl">芬蘭</a></span>
<ul>
<li><a class="wl">芬蘭國防軍</a>特種部隊（S，約300把，2026年起）<sup class="ref" data-ref="fin_trial"></sup></li>
<li><a class="wl">芬蘭邊防軍</a>（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/norway.png" alt=""><a class="wl">挪威</a></span>
<ul>
<li><a class="wl">挪威國防軍</a>特種作戰司令部（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/estonia.png" alt=""><a class="wl">愛沙尼亞</a></span>
<ul>
<li>愛沙尼亞特種作戰部隊（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/poland.png" alt=""><a class="wl">波蘭</a></span>
<ul>
<li>波蘭特種部隊司令部（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/switzerland.png" alt=""><a class="wl">瑞士</a></span>
<ul>
<li>瑞士聯邦警察特勤單位（AC-9LE，L）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/united_states.png" alt=""><a class="wl">美國</a></span>
<ul>
<li><a class="wl">美國特種作戰司令部</a>（T，120把，2025年）<sup class="ref" data-ref="socom_eval"></sup></li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/australia.png" alt=""><a class="wl">澳洲</a></span>
<ul>
<li><a class="wl">澳洲陸軍</a>特種作戰司令部（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/roc.png" alt=""><a class="wl">中華民國</a></span>
<ul>
<li><a class="wl">國家中山科學研究院</a>（T）<sup class="ref" data-ref="ncsist_2026"></sup></li>
<li><a class="wl">陸軍特種作戰指揮部</a>（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/japan.png" alt=""><a class="wl">日本</a></span>
<ul>
<li><a class="wl">防衛裝備廳</a>（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/south_korea.png" alt=""><a class="wl">韓國</a></span>
<ul>
<li><a class="wl">國防科學研究所</a>（T）</li>
</ul></li>
<li><span class="flag"><img class="flagicon" src="assets/flags/singapore.png" alt=""><a class="wl">新加坡</a></span>
<ul>
<li><a class="wl">新加坡武裝部隊</a>（T）</li>
</ul></li>
</ul>` },

    //   === 潛在用戶
    { level: 3, id: `潛在用戶`, title: `潛在用戶`,
      html: `<ul>
<li><span class="flag"><img class="flagicon" src="assets/flags/germany.png" alt=""><a class="wl">德國</a></span>：<a class="wl">聯邦國防軍</a>於2026年將單兵電磁武器列入長期研究項目，但未指定型號，亦未與KES接觸。</li>
<li><span class="flag"><img class="flagicon" src="assets/flags/canada.png" alt=""><a class="wl">加拿大</a></span>：加拿大陸軍曾向KES索取北極環境的試用數據，截至2026年未有採購計畫。</li>
</ul>` },

    // == 與現代突擊步槍的比較
    { level: 2, id: `與現代突擊步槍的比較`, title: `與現代突擊步槍的比較`,
      html: `<p>下表將AC-9與數款現役5.56公釐步槍並列，以比較電磁武器與火藥步槍在尺寸、重量與性能上的差異。</p>
<table class="wikitable compare">
<tr>
<th></th>
<th><span class="flag"><img class="flagicon" src="assets/flags/finland.png" alt=""><a class="wl">芬蘭</a></span><br>AC-9</th>
<th><span class="flag"><img class="flagicon" src="assets/flags/germany.png" alt=""><a class="wl">德國</a></span><br><a class="wl">HK416</a> A5-16.5"</th>
<th><span class="flag"><img class="flagicon" src="assets/flags/united_states.png" alt=""><a class="wl">美國</a></span><br><a class="wl">M16A4</a></th>
<th><span class="flag"><img class="flagicon" src="assets/flags/belgium.png" alt=""><a class="wl">比利時</a></span><br><a class="wl">FN SCAR L-STD</a></th>
<th><span class="flag"><img class="flagicon" src="assets/flags/roc.png" alt=""><a class="wl">中華民國</a></span><br><a class="wl">T91步槍</a></th>
</tr>
<tr>
<td><b>外觀</b></td>
<td><img class="inline-img" src="assets/AC-9_full.jpg" alt="" width="110"></td>
<td><img class="inline-img" src="assets/HK416N.png" alt="" width="110"></td>
<td><img class="inline-img" src="assets/M16A4_nukeit1_.jpg" alt="" width="110"></td>
<td><img class="inline-img" src="assets/FN_SCAR-L_noBG.png" alt="" width="110"></td>
<td><img class="inline-img" src="assets/T91-3__65_.JPG" alt="" width="110"></td>
</tr>
<tr><td><b>採用年份</b></td><td>2026年</td><td>2005年</td><td>2002年</td><td>2007年</td><td>2002年</td></tr>
<tr><td><b>重量（不含彈匣），公斤</b></td><td>4.2</td><td>3.56</td><td>3.4</td><td>3.545</td><td>3.17</td></tr>
<tr><td><b>槍托伸展全長，毫米</b></td><td>845</td><td>951</td><td>1,033</td><td>900</td><td>880</td></tr>
<tr><td><b><a class="wl">槍管</a>長度，毫米</b></td><td>380（加速管）</td><td>419</td><td>508</td><td>368</td><td>406</td></tr>
<tr><td><b><a class="wl">彈藥</a></b></td><td>6.5公釐<br>KES鐵磁鏢彈</td><td><a class="wl">5.56×45毫米<br>北約口徑</a></td><td><a class="wl">5.56×45毫米<br>北約口徑</a></td><td><a class="wl">5.56×45毫米<br>北約口徑</a></td><td><a class="wl">5.56×45毫米<br>北約口徑</a></td></tr>
<tr><td><b>運作方式</b></td><td>八段電磁線圈<br>電子擊發</td><td><a class="wl">短行程活塞</a></td><td><a class="wl">導氣管直接傳動</a></td><td><a class="wl">短行程活塞</a></td><td><a class="wl">短行程活塞</a></td></tr>
<tr><td><b>發射模式</b></td><td><a class="wl">半自動</a><br><a class="wl">三發點放</a><br><a class="wl">全自動</a></td><td><a class="wl">半自動</a><br><a class="wl">全自動</a></td><td><a class="wl">半自動</a><br><a class="wl">三發點放</a></td><td><a class="wl">半自動</a><br><a class="wl">全自動</a></td><td><a class="wl">半自動</a><br><a class="wl">三發點放</a><br><a class="wl">全自動</a></td></tr>
<tr><td><b><a class="wl">發射速率</a>，發／分鐘</b></td><td>450<br>（受充能限制）</td><td>700—900</td><td>700—950</td><td>550—650</td><td>800-850</td></tr>
<tr><td><b><a class="wl">槍口初速</a>，<a class="wl">米／秒</a></b></td><td>820<br>（過載1,050）</td><td>N/A</td><td>948</td><td>800</td><td>840</td></tr>
<tr><td><b>有效射程，<a class="wl">米</a></b></td><td>500</td><td>500</td><td>600</td><td>500</td><td>400—600</td></tr>
<tr><td><b><a class="wl">彈匣</a>容量，發</b></td><td>40<br>（鏢彈電池匣）</td><td>30<br>（20／100）</td><td>30<br>（20／100）</td><td>30<br>（20／100）</td><td>30<br>（42／100）</td></tr>
<tr><td><b>標準<a class="wl">瞄準具</a>型式</b></td><td>整合式<a class="wl">全像瞄準鏡</a><br>＋3倍放大鏡</td><td><a class="wl">機械瞄具</a></td><td><a class="wl">機械瞄具</a></td><td><a class="wl">機械瞄具</a></td><td><a class="wl">機械瞄具</a></td></tr>
<tr><td><b>瞄準鏡安裝型式</b></td><td><a class="wl">皮卡汀尼導軌</a><br>（附資料匯流排）</td><td><a class="wl">皮卡汀尼導軌</a></td><td><a class="wl">皮卡汀尼導軌</a></td><td><a class="wl">皮卡汀尼導軌</a></td><td><a class="wl">皮卡汀尼導軌</a></td></tr>
<tr><td><b><a class="wl">榴彈發射器</a></b></td><td>無制式型號</td><td><a class="wl">HK AG-C/EGLM</a></td><td><a class="wl">M203</a><br><a class="wl">M320</a></td><td><a class="wl">FN40GL</a></td><td><a class="wl">T85</a></td></tr>
</table>` },

    // == 爭議與限制
    { level: 2, id: `爭議與限制`, title: `爭議與限制`,
      html: `<p>AC-9自公開以來，技術、法規與資訊透明度三方面都持續受到質疑。以下整理使用方報告與媒體評論中最常提到的幾點。</p>` },

    //   === 能量與續航
    { level: 3, id: `能量與續航`, title: `能量與續航`,
      html: `<p>電磁武器的根本限制是電池的能量密度遠低於火藥。一顆P-40電池重0.42公斤，只夠擊發約120發；相同重量的5.56公釐彈約為35發，但火藥彈不需要額外的電容組與線圈，整槍重量反而較輕。在攝氏零下20度的環境中，P-40的可用容量下降約三成，芬蘭的試用報告建議在北極作戰時每人多攜帶兩顆備用電池<sup class="ref" data-ref="fin_trial"></sup>。</p>` },

    //   === 熱管理
    { level: 3, id: `熱管理`, title: `熱管理`,
      html: `<p>線圈每次放電都有一部分能量轉為熱。連續射擊約120發後，線圈溫度會達到絕緣層的上限，射控電腦會強制把射速降到每分鐘150發，直到溫度回落；過載模式下這個門檻只有30發。這項保護機制雖然避免了損壞，卻也讓AC-9無法擔任火力壓制角色<sup class="ref" data-ref="thermal_2023"></sup>。</p>` },

    //   === 電磁相容性
    { level: 3, id: `電磁相容性`, title: `電磁相容性`,
      html: `<p>每次擊發產生的脈衝磁場會干擾半公尺內的電子裝備。2025年的一份北約工作組評估指出，部分型號的夜視鏡與無線電在AC-9旁射擊時會出現短暫雜訊，雖然沒有造成永久損壞，但在密集隊形中可能影響通訊<sup class="ref" data-ref="emc_2025"></sup>。KES在A1批次中加強了機匣的磁屏蔽，效果尚待驗證。</p>` },

    //   === 法規分類
    { level: 3, id: `法規分類`, title: `法規分類`,
      html: `<p>多數國家的槍械法規以「利用火藥燃氣發射彈丸」定義槍械，AC-9並不符合這個定義。這在軍用上影響不大，但民用型CA-9因此在不同國家分別被視為槍械、空氣槍或「其他發射器」，管制強度差異極大。歐洲議會研究處2026年的報告建議修改槍械指令，以槍口動能而非發射原理作為分類標準<sup class="ref" data-ref="law_2026"></sup>。</p>` },

    //   === 數據透明度
    { level: 3, id: `數據透明度`, title: `數據透明度`,
      html: `<p>AC-9的多數性能數據，包括線圈壽命、電池循環次數、穿透力與可靠度，都只有KES的廠內測試結果。使用方的試用報告大多列為機密或只公開摘要，獨立機構的測試則付之闕如。有評論指出，電磁武器是全新的品類，沒有既有的測試標準可以套用，這讓「廠商數據」與「實際表現」之間的落差難以評估<sup class="ref" data-ref="review_2026"></sup>。</p>` },

    // == 流行文化
    { level: 2, id: `流行文化`, title: `流行文化`,
      html: `<p>AC-9公開後，媒體與玩家社群經常把它與電子遊戲中的電磁武器相提並論。「多段線圈加速」、「發光能量彈匣」與「AR-15外型加上未來部件」等元素，在以下作品中早有先例：</p>
<ul>
<li>《<a class="wl">星海爭霸</a>》系列：人類陸戰隊的C-14「穿刺者」高斯步槍，是電磁加速步槍在遊戲中最廣為人知的例子之一。</li>
<li>《<a class="wl">異塵餘生</a>》系列：高斯步槍自《異塵餘生2》起登場，以線圈加速金屬彈丸為設定。</li>
<li>《<a class="wl">質量效應</a>》系列：所有槍械皆以「質量加速器」原理發射微小金屬彈丸。</li>
<li>《<a class="wl">雷神之鎚</a>》系列：軌道槍自《雷神之鎚II》起成為系列的代表武器。</li>
<li>《<a class="wl">最後一戰4</a>》：聯合國太空司令部的ARC-920軌道槍。</li>
</ul>
<p>KES曾在2026年的訪談中表示，AC-9的外觀刻意避免與這些作品雷同，但也承認發光的充能指示帶「確實讓人聯想到遊戲裡的武器」<sup class="ref" data-ref="kes_history"></sup>。</p>` },

    // == 相關條目
    { level: 2, id: `相關條目`, title: `相關條目`,
      html: `<div class="sister-box">相關的多媒體資源：<a class="ext">AC-9 Coil Carbine</a></div>
<ul>
<li><a class="wl">線圈槍</a></li>
<li><a class="wl">軌道炮</a></li>
<li><a class="wl">高斯槍</a></li>
<li><a class="wl">電磁彈射系統</a></li>
<li><a class="wl">脈衝功率</a></li>
<li><a class="wl">超級電容器</a></li>
<li><a class="wl">鏢彈</a></li>
<li><a class="wl">無殼彈</a></li>
<li><a class="wl">AR-15</a></li>
<li><a class="wl">HK416突擊步槍</a></li>
</ul>` },

    // == 註釋
    { level: 2, id: `註釋`, title: `註釋`,
      html: `<div class="reflist" data-auto="references"></div>` },

    // == 參考
    { level: 2, id: `參考`, title: `參考`,
      html: `<ul>
<li><a class="ext">KES官方頁面－AC-9 Coil Carbine</a></li>
<li><a class="ext">AC-9操作與維護手冊（第3版）</a> <a class="ext">（網際網路檔案館的存檔）</a></li>
<li><a class="ext">Pulsed Arms Quarterly：AC-9評測專題</a></li>
<li><a class="ext">維基百科條目「線圈槍」</a>：多段線圈加速的原理與效率限制。</li>
<li><a class="ext">維基百科條目「軌道炮」</a>：另一種電磁發射方式，以及美國海軍2005年至2021年的電磁軌道砲計畫。</li>
<li><a class="ext">維基百科條目「電磁彈射系統」</a>：目前唯一大規模服役的電磁發射裝置。</li>
</ul>` },

    // == 外部連結
    { level: 2, id: `外部連結`, title: `外部連結`,
      html: `<div class="columns">
<ul>
<li><span class="langicon">（中文）</span>—<a class="ext">維基百科：線圈槍</a></li>
<li><span class="langicon">（中文）</span>—<a class="ext">維基百科：軌道炮</a></li>
<li><span class="langicon">（英文）</span>—<a class="ext">Wikipedia: Coilgun</a></li>
<li><span class="langicon">（英文）</span>—<a class="ext">Wikipedia: Electromagnetic Aircraft Launch System</a></li>
<li><span class="langicon">（英文）</span>—<a class="ext">Office of Naval Research: Electromagnetic Railgun</a></li>
</ul>
</div>
<p><a class="wl">Category:凱倫電磁系統</a> <a class="wl">Category:電磁武器</a> <a class="wl">Category:線圈槍</a> <a class="wl">Category:卡賓槍</a> <a class="wl">Category:芬蘭槍械</a> <a class="wl">Category:AR-15衍生槍械</a></p>` },
  ],

  // ---------------- 註釋（鍵名 → 文獻） ----------------
  references: {
    "kes_history": `凱倫電磁系統. <a class="ext">公司沿革與AC計畫</a>. KES官方網站. 2026年`,
    "kes_manual": `凱倫電磁系統. 《AC-9電磁線圈卡賓槍操作與維護手冊》第3版. 2025年`,
    "fin_trial": `芬蘭國防軍物資司令部. 《單兵電磁武器北極環境野戰試用報告（公開摘要）》. 2026年`,
    "review_2026": `Lindqvist, A. <a class="ext">The Coil Carbine Question: What KES Hasn't Published</a>. <i>Pulsed Arms Quarterly</i>. 2026-06-12`,
    "ballistics_2025": `KES彈道實驗室. 《6.5公釐鐵磁鏢彈終端彈道測試摘要》. 2025年`,
    "socom_eval": `美國特種作戰司令部. 《下一代單兵電磁武器評估報告（公開摘要）》. 2026年`,
    "ncsist_2026": `<a class="ext">電磁武器原型比較測試</a>. 新聞稿. 2026年`,
    "kes_annual": `凱倫電磁系統. 《2025年度報告》. 2026年`,
    "thermal_2023": `Virtanen, J. 多段線圈武器之熱管理. 《脈衝功率學報》第12卷第3期. 2023年`,
    "emc_2025": `北約電磁相容性工作組. 《單兵電磁武器對夜視與通訊裝備之干擾初步評估》. 2025年`,
    "law_2026": `歐洲議會研究處. 《電磁發射武器於現行槍械指令之適用性》. 2026年`,
  },

  // ---------------- 頁尾導航框 ----------------
  navboxes: [
    { title: `凱倫電磁系統（KES）產品`, rows: [
      { group: `軍用卡賓槍`, items: ["AC-9", "AC-9 A1", "AC-9C", "AC-9M", "AC-9LE"] },
      { group: `訓練與民用`, items: ["AC-9T", "CA-9"] },
      { group: `瞄具與配件`, items: ["弧眼整合瞄具", "弧眼M 6倍型", "整流器消音器", "車載充電座", "背包充電座"] },
      { group: `彈藥與電源`, items: ["6.5公釐KES鐵磁鏢彈", "訓練鏢彈", "穿甲鏢彈", "P-40固態電池"] },
    ]},
    { title: `電磁發射技術`, rows: [
      { group: `原理`, items: ["線圈槍", "軌道炮", "高斯槍", "洛倫茲力", "脈衝功率", "超級電容器", "固態開關"] },
      { group: `應用`, items: ["電磁彈射系統", "電磁軌道砲", "質量投射器", "電磁砲"] },
      { group: `流行文化中的電磁武器`, items: ["C-14高斯步槍", "ARC-920軌道槍", "質量加速器"] },
    ]},
    { title: `AR-15衍生槍械（節錄）`, rows: [
      { group: `一般步槍`, items: ["阿瑪萊特AR-15", "柯特AR-15", "M16", "C7", "G95", "MK 556", "M27 IAR"] },
      { group: `卡賓槍`, items: ["CAR-15", "M4", "T91", "C8", "HK416", "HK416C", "SIG516", "URG-I", "DDM4", "AC-9"] },
      { group: `其他`, items: ["HK417", "SR-25", "MCX", "M231", "CM901"] },
    ]},
  ],
};
