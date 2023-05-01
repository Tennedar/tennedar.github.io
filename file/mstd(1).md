<!DOCTYPE markdown>
<meta charset='utf-8'>
<link rel="stylesheet" href="https://cdn.staticfile.org/lxgw-wenkai-webfont/1.6.0/style.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.0.0/style.css" />
<link rel="stylesheet" href="https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/style.css" />
<font face='LXGW WenKai Mono'>

# Mastodon入門指南</font>

<a href='https://tennedar.github.io' target='_blank'>回到主站</a><br>
<a href='https://tennedar.github.io/html/article.html' target='_blank'>回到上一頁</a><br>

>作者：<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">Tennedar</span> | 長毛象使用時間：2022.2.27 至今<br>
發佈時間：2023.5.1<br>字數 ≈2k8 | 閱讀時間 ≈6min<br><br>
轉載請複製以下信息：<br>
**文章標題：Mastodon入門指南<br>**
**發佈網址：https://tennedar.github.io（主站）<br>**
**https://tennedar.github.io/article.html/mstd1.md （文章地址）<br>**
**遵循[CC BY-NC-SA 4.0](https://tennedar.github.io/file/CC-BY-SA%204.0.md)**

***
<font face='LXGW WenKai Mono'>
<span id='top'>

## 0.目錄
</span>

- <a href='#1'>1.什麼是Mastodon？</a>
- <a href='#2'>2.為什麼要使用Mastodon？</a>
- <a href='#3'>3.如何使用Mastodon ———— 一個示例</a>
  - <a href='#3-1'>尋找站點</a>
  - <a href='#3-2'>註冊</a>
  - <a href='#3-3'>完善個人信息</a>
  - <a href='#3-4'>發佈第一條嘟文</a>
  - <a href='#3-5'>查看其他用戶的嘟文</a>
  - <a href='#3-6'>對嘟文的操作</a>
- <a href='#4'>4.使用Mastodon時，你需要注意</a>
- <a href='#5'>5.拓展</a>

<span id='1'>

## 1.什麼是Mastodon？
<a href='#top'>回到目錄</a>
</span>

<big>

>長毛象是一款社交平臺。</big>

<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">**長毛象**（mastodon）</span>，顧名思義也就是**這種生物**

![](https://img1.imgtp.com/2023/04/30/NQJXaI3O.jpg)

當然這裡要介紹的並不是生物，而是***以長毛象作為吉祥物***的<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">社交軟件</span>，以下***均稱其為“長毛象”***。它的<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">官網</span>是[joinmastodon.org](joinmastodon.org)。

對於長毛象，<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">**維基百科**的介紹</span>是這樣的：

    Mastodon（又稱乳齒象、長毛象或萬象）是一個自由開源的去中心化的分散式微部落格社群網路。它的使用者介面和操作方式跟推特（Twitter）類似，但整個網路並非由單一機構運作，而是以多個由不同營運者獨立運作的伺服器以聯邦方式交換資料而組成的去中心化社群網路。每個Mastodon的營運站點被稱為「實例（Instance）」，使用者可到任何開放登記的實體登記，任何一個實體上的使用者可以與其他實體上的使用者溝通。使用者在Mastodon中釋出的內容稱為「嘟文（Toot）」，使用者可以調整隱私設定限制嘟文被其他人或實體讀取或檢視。Mastodon吉祥物是一個棕色或灰色的長鼻目，描繪成正在使用平板電腦或智慧型手機。

這段話可能比較難理解，用更簡單的語言來**解釋**的話：

- <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">自由開源</span>
  -  長毛象作為一個軟件，人人都可以<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">使用它的代碼搭建</span>自己的mastodon，那麼何為“自己的”？
     - <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">對於用戶來說</span>，長毛象的<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">組成</span>可以這樣理解：<br><br>
<font face='LXGW WenKai Mono'>
            最大一級範圍稱為<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">“聯邦宇宙”（fediverse）</span>，由長毛象（mastodon）和其他同類開源社交平臺（如Pleroma、misskey）構成；<br>
            在此之下是<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">長毛象（mastodon）</span>，也就是本文介紹的對象。長毛象在聯邦宇宙中<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">規模最大、用戶人數最多</span>；
            然後在此之下是“站點”，也就是上文所說的<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">“實例（Instance）”</span>，長毛象是實例的統稱，使用長毛象的代碼，搭建而成的就是一個個實例。<br>
            實例可以看作國家，長毛象可以看作星球。實例之間<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">互通</span>，長毛象和其他平臺之間<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">互通</span>。<br>
            搭建站點的是“站長”，這個很容易理解。<br>
            除了站長之外，在該實例內的就是“用戶”了。</font><br><br>
    這裡所說的“自己的”，就是人人都可以成為站長（只要你有服務器，會一點點代碼，就可以輕鬆上手）

- <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">分散式微部落格社群網路</span>
  - 部落格，就是<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">blog</span>。大家熟悉的微博，即微博客。</font>
<font face='LXGW WenKai Mono'>
        和微博、推特類似，在長毛象內可以進行<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">發佈內容、關注用戶、點讚、轉發、收藏等操作</span>。<br><br>
        在長毛象，發出的內容叫<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">“嘟文”（toot）</span>，發嘟文（動詞）叫“嘟嘟”，轉發叫“轉嘟”（boost）</font>

***
<font face='LXGW WenKai Mono'>
<span id='2'>

## 2.為什麼要使用Mastodon？
<a href='#top'>回到目錄</a>

</span>

<big>

>眾所周知，社交軟件多少有些缺點。當然長毛象也有它的缺點，但相比之下，長毛象的用戶非常舒適。</big>

以下<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">比較</span>均從***用戶***角度出發

| 比較 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">長毛象</span>      | 其他社交軟件 |
| --- | --- | --- |
| 費用 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">所有操作均免費</span> | 付費，比如微博的編輯、定時、置頂功能 |
| 註冊 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">方便，郵箱註冊即可</span> | 手機號驗證登錄、異地登錄等不方便，有註冊帳號個數限制等等 |
| 使用 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">有網頁版和眾多APP，想用哪個用哪個，直接開瀏覽器即可，非常方便</span> | 強制登錄查看、下載APP等，不方便 |
| 內容 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">什麼都能發</span> | 有非常多的敏感詞 |
| 其他用戶 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">友好</span> | 大概率吵架情況嚴重 |
| 屏蔽、拉黑 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">方便、徹底，有關鍵詞過濾功能</span> | 拉黑不徹底 |
| 內容 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">信息密度高，有各種資源分享、互助帖、高質量生活分享</span> | 信息密度低，浪費時間 |
| 隱私 | <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">安全（前提是有一個負責、安全的站長）</span> | 隱私容易暴露 |

***
<span id='3'>

## 3.如何使用Mastodon ———— 一個示例
<a href='#top'>回到目錄</a>

</span>

<big>

>使用長毛象真的很簡單。</big>

- <a href='#3-1'>尋找站點</a>
- <a href='#3-2'>註冊</a>
- <a href='#3-3'>完善個人信息</a>
- <a href='#3-4'>發佈第一條嘟文</a>
- <a href='#3-5'>查看其他用戶的嘟文</a>
- <a href='#3-6'>對嘟文的操作</a>
<big>
<span id='3-1'>

### 尋找站點

</span>
</big>
<a href='#3'>回到本章開頭</a>

- 首先，找一個***適合你***的站點：
[joinmastodon.org](joinmastodon.org)給出了相當多的站點，這些站點是能被所有人看見，因此不免存在用戶質量參差不齊、隱私不一定特別安全的問題，不同站點也有不同的限制，例如有些站點不能發表違反US法律的言論，但有的可以。需要<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">有主見地判斷適合你的站點</span>。

- 也有站點不在[joinmastodon.org](joinmastodon.org)上列出，它們<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">更加隱蔽安全</span>，但也需要注意，有些站點是私人使用的，請不要隨意打擾它們。

![](https://img1.imgtp.com/2023/04/30/wvMrnK7M.png)

下面以Tennedar推薦的實例**飛麵站**為例，<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">所有站點的操作***都相同***</span>，唯一不同的可能是它們的主題顏色樣式不太一樣。

![Snipaste_2023-04-30_18-39-28.png](https://img1.imgtp.com/2023/04/30/15dwZEZM.png)
![Snipaste_2023-04-30_18-39-34.png](https://img1.imgtp.com/2023/04/30/AYQbX45Y.png)
<big>
<span id='3-2'>

### 註冊
</span>
</big>
<a href='#3'>回到本章開頭</a>

- 註冊按鈕在上方圖一的**右上角**
- 點擊註冊之後會出現這樣的頁面
![Snipaste_2023-04-30_18-40-47.png](https://img1.imgtp.com/2023/04/30/gSEZIIZ2.png)
- <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">輸入ID、郵箱地址、密碼、加入的原因即可註冊</span>
  - 有些站點不需要加入原因，但如果註冊有要求加入原因的站點，一定要認真填寫不然很難通過。有註冊原因的站點比沒有的更好，同樣是因為後者用戶良莠不齊。
  - <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">郵箱最好不要用qq郵箱，網絡安全知識相關文章之後推出</span>！請關注tennedar！
  - ID註冊完就沒法改了，ID和用戶名不是同一個東西。
<big>
<span id='3-3'>

### 完善個人信息
</span>
</big>
<a href='#3'>回到本章開頭</a>

- <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">註冊2天？左右之後，會收到通過的通知郵件</span>，然後就可以開始使用長毛象了。
- 首先完善一下個人信息
  - 完善個人信息<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">非常重要</span>，因為長毛象用戶大多非常注重隱私，一個沒有頭像、用戶名看著很隨便、沒有原創內容只有轉發轉發轉發的“<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">三無帳號</span>”會讓很多網友感到不安，如果希望通過關注請求，或者不希望被對方拉黑的話，一定要完善個人信息。

![Snipaste_2023-04-30_18-56-12.png](https://img1.imgtp.com/2023/04/30/Ojrp4EiH.png)
- 所有個人檔案的圖片，如果能代表你的個人喜好當然非常好，但如果不知道用什麼的話，<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">***貓貓圖片***是長毛象人人都喜愛的，不妨就找點可愛的貓圖</span>，長毛象也有貓圖bot會定時發圖片。
- 頭像用戶名等等設置都很簡單，接下來來講解下面的這些設定
  >將帳號轉為「私人」

  >你必須手動審核每個人對你的關注請求

   - “將帳號轉為「私人」”簡稱“上鎖”。簡中SNS不太有這種功能，類似比較像的是qq空間的訪問權限，但長毛象的權限沒有qq空間那麼細，qq空間有「所有人可見」「好友可見」「部分好友可見」「僅自己可見」「XXX時間之前不可見」等等，長毛象的上鎖功能相當於「（全部）好友可見」。
  
   - 上鎖之後，仍然可以發佈所有人可見的內容，但同時也可以發佈僅好友可見的內容。
   - 無論是否上鎖，都可以艾特若干人，發佈“僅艾特可見”的內容，但這和qq空間的「部分好友可見」不同，qq空間的可見是對方去看了能不能看見的區別，長毛象的艾特可見是發佈之後對方會收到提醒，更接近於私信而非博文。
   - 上鎖的帳號被關注之後，需要帳號主人通過申請才行。
   - <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">上鎖的帳號更加安全，非常推薦這麼做</span>。

  >這帳號是機械人

  >這個帳號是機械人，所做的事情可能沒有經人為監察 ⚠️ 如果你是普通用戶，切勿勾選此項，否則你將無法查看時間線，你發送的嘟文也將被從本地時間線上過濾

  - 這個設定本意是為了長毛象的眾多bot，bot及其建立者不會對bot發佈的內容負責。是一個免責聲明。
  - 但<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">同樣有大量的網友會把這個勾選上，用來表示</span>“如果我發了奇怪的內容，你不要覺得奇怪，因為我是機器人我就單純發瘋而已，別管”

  >隱藏你的社交網絡

  >你所關注的人，和關注你的人，將不會在你的個人資料頁上顯示

  - 剛註冊完長毛象之後可以看到，長毛象會列出一部分用戶供你關注，如果不勾選這個設置，你的帳號就有可能出現在那個列表上面。
  - 推薦勾選，因為這樣更加安全。
<big>
<span id='3-4'>

### 發佈第一條嘟文
</span>
</big>
<a href='#3'>回到本章開頭</a>

![Snipaste_2023-04-30_19-14-31.png](https://img1.imgtp.com/2023/04/30/l7E5Xq0D.png)
![Snipaste_2023-04-30_19-16-58.png](https://img1.imgtp.com/2023/04/30/k89ikKeE.png)
![Snipaste_2023-04-30_19-18-09.png](https://img1.imgtp.com/2023/04/30/1PosUl7H.png)
![Snipaste_2023-04-30_19-20-43.png](https://img1.imgtp.com/2023/04/30/lM4okyF7.png)
![Snipaste_2023-04-30_19-22-16.png](https://img1.imgtp.com/2023/04/30/UtCzd8Nu.png)
![Snipaste_2023-04-30_19-16-32.png](https://img1.imgtp.com/2023/04/30/EOIJ0O1g.png)
<big>
<span id='3-5'>

### 查看其他用戶的嘟文
</span>
</big>
<a href='#3'>回到本章開頭</a>

![Snipaste_2023-04-30_19-57-10.png](https://img1.imgtp.com/2023/04/30/wfRvy9Mb.png)
![Snipaste_2023-04-30_19-58-33.png](https://img1.imgtp.com/2023/04/30/7dxCpd5G.png)

其中<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">“誇站”</span>又稱“公共時間軸”，也就是Timeline，TL；

<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">不同語言的翻譯不太相同，如果感到困惑不妨去看英文原版。</span>

<big>
<span id='3-6'>

### 對嘟文的操作
</span>
</big>
<a href='#3'>回到本章開頭</a>

（建設中）<del>查看[《長毛象入門指南（2）》](https://tennedar.github.io/article.html/mstd1.md)</del>

***
<span id='4'>

## 4.使用Mastodon時，你需要注意
<a href='#top'>回到目錄</a>

</span>

>長毛象是一個溫馨的環境，請務必<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">遵守互聯網禮儀</span>。這會讓你的使用更加順利，也會讓其他用戶保持良好體驗。當然，在長毛象以外的地方也是一樣。

- 長毛象有<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">眾多</span>敏感話題，如果你不想看到，可以<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">加入嚴禁談論它們的站點，並且只看本地時間軸的內容。如果因為你隨便瀏覽而感到冒犯，這是活該。沒有人需要為此受到責備。</span>
- 關注用戶的簡介/置頂，有些用戶不允許轉載、有些用戶的嘟文則可以不署名轉載。
- <span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">拉黑>吵架</span>，如果無法接受對方的觀點可以直接將其拉黑而不是回覆並反駁，長毛象的自由度比慣用的社交平臺高***得多***，請不要把平時的吵架那一套帶入長毛象，因為沒有人會和你吵，只會把你拉黑。
- 發佈嘟文/註冊帳號請視實例情況而定，如果是規模較小、服務器容量不大的實例，<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">不要發佈過多圖片，不然服務器很容易佔滿</span>（這並不是強制規定，是出於道德）
- 遵守實例的規則，不發不能發的內容。通常情況下站長無法關注所有人，也無法及時，甚至永久都不會將發佈違規內容的帳號封禁，全靠自覺。
- 善用CW，對於不合適的內容進行摺疊，<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">**比如“我要殺了所有人”在朋友之間是普通的玩笑話，但在網上公開發佈很可能會傷害到網線另一端心情不好的無辜網友**</span>。
- （儘量）不要刷屏，本內容將在下期詳細說明。

***
<span id='5'>

## 5.拓展
<a href='#top'>回到目錄</a>

</span>

其他介紹長毛象的博客文章：

[欢迎加入长毛象！BY holger](https://holger.one/posts/welcome-to-mastodon/)

[Mastodon 长毛象入门指南 BY holger](https://holger.one/posts/a-beginners-guide-to-21st-century-sns/)

[我流长毛象中文使用指北：从调整设置开始逐步熟悉Mastodon](https://fediverse.eu.org/discussion/18/%E6%88%91%E6%B5%81%E9%95%BF%E6%AF%9B%E8%B1%A1%E4%B8%AD%E6%96%87%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8C%97-%E4%BB%8E%E8%B0%83%E6%95%B4%E8%AE%BE%E7%BD%AE%E5%BC%80%E5%A7%8B%E9%80%90%E6%AD%A5%E7%86%9F%E6%82%89mastodon)

[Mastodon（长毛象）中文使用讲解/教程-炸邦裂梦乐团信息站](https://home.bangdream.space/mastodon-use/)

長毛象的*同類*平臺（不完全列舉）：

- 它們的使用方法與長毛象基本相同，但有部分特色功能等等，長毛象的「公共」時間軸上可以看到所有這些平臺發佈的內容，也可以進行關注等操作。

[开始使用 Misskey](https://join.misskey.page/zh-CN/)

[Misskey：一个日产开源SNS系统-荒岛](https://lala.im/4291.html)

[Fediverse不止Mastodon——Misskey介绍-一片痴心俱成灰](https://akaito.xyz/post/misskey/)

[在Fediverse建立你的博客 写意 Writee](https://writee.org/about)

[Matrix](https://matrix.org/)

***
<big>

<span style="color:rgb(137, 23, 243);background-color: rgb(196, 255, 234);text-shadow:2px 2px 3px rgb(191, 157, 255)">感謝您的閱讀！</span></big>

（建設中）<del>查看[《長毛象入門指南（2）》](https://tennedar.github.io/article.html/mstd1.md)</del>

<a href='#top'>回到頂部</a>
<big>

>本站所有文章遵循[CC BY-NC-SA 4.0](https://tennedar.github.io/file/CC-BY-SA%204.0.md)&nbsp;&middot;&nbsp;[CC BY-NC-SA 4.0 中文版](https://tennedar.github.io/file/CC-BY-SA%204.0[ZH-CN].md)協議.</font></big>
