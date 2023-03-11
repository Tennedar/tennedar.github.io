window.addEventListener('load', function () {
    let body = document.body;
    let content = ['☆Tennedar☆','☆R☆','☆Tennedar☆','☆R☆','☆感謝訪問☆' ,'☆tennedar的個人網站☆','☆Tennedar☆','☆R☆','☆感謝訪問☆'     ,'(๑•́ ₃ •̀๑)ｴｰ','(๑ơ ₃ ơ)♥','(◡‿◡✿)','( つ•̀ω•́)つ','( ó × ò)','꒰ ๑͒ ･౪･๑͒꒱','(* Ŏ∀Ŏ)'        ,'(✿╹◡╹)','(｡╹ω╹｡)','(●☌◡☌●)','(..＞◡＜..)', 'ヽ(＊>∇<)ﾉ','(´ω｀*)','(#ﾟﾛﾟ#)'       ,'(̷ ̷₌̷ ̷ㅇ̷ ̷ᆽ̷ ̷ㅇ̷ ̷₌̷ ̷)♡','(ﾐㅇ ༝ ㅇﾐ)','(=🝦 ༝ 🝦=)' ,'◟[˳_˳]ʌ˽ʌ','/ᐠ｡ꞈ｡ᐟ❁ \∫','/ᐠ. ᴗ.ᐟ\ ','/ᐠܻ ⑅ܻ᳙ ᐟ\ﾉ'        ,'⋆ටᆼට⋆','ि०॰͡०ी','=ටᆼට=','ฅ( ̳͒ᵕ ˑ̫ ᵕ ̳͒)ฅ','~(=^･･^)ﾍ >ﾟ)))彡','~(=^･ω･^)y＝ ‥… *→;ﾟoﾟ)'        ,'₍ᐢ ̥ ̞ ̥ᐢ₎ ♥','ʚ₍⑅ᐢ‸ ̫ ‸ᐢ₎ɞ' ,'₍⑅ᐢ ›̥̥̥ ‸ ‹̥̥̥ ᐢ₎','ᕱ⑅ᕱ','（ ÒㅅÓ)','￣(〃ﾟｏ ﾟ〃)￣','⌒(≧ x ≦)⌒'        ,'ミ◕ฺｖ◕ฺ彡','(ﾉ≧∀≦)ﾉ ‥…━━━★','(ﾉ>ω<)ﾉ :｡･::･ﾟ’★,｡･::･ﾟ’☆','(ノ°∀°)ノ⌒･:.｡. .｡.:･゜ﾟ･*☆'        ,'(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿','(/￣ー￣)/~~☆’.･.･:★’.･.･:☆' ] //自定义内容的数组
    
    body.addEventListener('click', function (e) {
        let x = e.pageX;
        let y = e.pageY; //当前坐标
        let randContent = Math.ceil(Math.random() * content.length);
        let text = new Text(x, y, randContent);
        let span = document.createElement('span')
        span.style.color = text.getRandom();
        text.create(span);
        setTimeout(function () {
            text.out(span)
        }, 1900)
    })

    function Text(x, y, rand) {
        this.x = x;
        this.y = y;
        this.rand = rand;
    }
    Text.prototype.create = function (_this) {
        let body = document.body;
        _this.innerHTML = content[this.rand - 1];
        _this.className = 'text'
        _this.style.top = this.y - 20 + 'px'
        _this.style.left = this.x - 50 + 'px'
        _this.style.animation = 'remove 2s'
        body.appendChild(_this);
        let i = 0
        setInterval(() => {
            _this.style.top = this.y - 20 - i + 'px'
            i++
        }, 10);
    }
    Text.prototype.out = function (_this) {
        _this.remove()
    }
    //设置随机颜色
    Text.prototype.getRandom = function () {
        let allType = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'; //16进制颜色
        let allTypeArr = allType.split(','); //通过','分割为数组
        let color = '#';
        for (var i = 0; i < 6; i++) {
            //随机生成一个0-16的数
            var random = parseInt(Math.random() * allTypeArr.length);
            color += allTypeArr[random];
        }
        return color; //返回随机生成的颜色
    }
})