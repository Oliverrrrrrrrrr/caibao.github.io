  
    function startgame(){
      var choose = document.getElementById('start').innerHTML
      document.getElementById('frame').innerHTML = choose
}

    function person(name,laodongtimes,shangyetimes){
        var name,laodongtimes,shangyetimes;
        this.name = name;
        this.laodongtimes = laodongtimes;
        this.shangyetimes = shangyetimes;
    }

    var xiaomin = new person("小明",1,1.5);
    var xiaomei = new person("小美",1.5,1);
    var p

    function checkedperson(n){
        
        if(n == 1){
            p = xiaomin
        }
        else p = xiaomei
        document.getElementById('frame').style['display'] = 'none';
        document.getElementById('renwu').style['display'] = 'block';
    }

    function renwu(){
        document.getElementById("renwu").style['display'] = 'none';
        document.getElementById("playgame").style['display'] = 'block';
    }

    var count=11;
    var originalArray=new Array;
    for (var i=0;i<count;i++){
    originalArray[i]=i+1;
    }
    originalArray.sort(function(){ return 0.5 - Math.random(); });

    var yuanbao = 0;
    var date = 0;
    var laodongzongfen = 0
    var shangyezongfen = 0
    

    function randomcard(){
        if(date == 8){
            document.getElementById('dailycard').src = "/images/翻盖面.jpg";
            document.getElementById("scores1").innerHTML = '劳动总积分 : <strong>'+ String(laodongzongfen) + '</strong> 商业总积分 : <strong>'+ String(shangyezongfen) + "</strong>";
            document.getElementById("scores2").innerText = ""
            document.getElementById("scores3").innerHTML = "元宝数 ： <strong>"+String(yuanbao) +"</strong>"; 
            
            document.getElementById("con").innerText = "恭喜你！完成了本次为期八周的财宝财商小游戏！本次游戏你所获得总积分为 "+String(shangyezongfen+laodongzongfen)+" ，其中商业总积分为 "+String(shangyezongfen)+" ，劳动总积分为 "+String(laodongzongfen)+" ,元宝总数为 "+String(yuanbao)+" 。突出的成绩体现了你过人的财商！希望你在此次游戏中能学习到相关经济学小知识，在快乐中学习和成长！";
            document.getElementById("introduce").innerText = ""
            document.getElementById("cardbutton").style["display"] = "none";
            return;
        }

        var cardid = originalArray[date];
        document.getElementById('dailycard').src = document.getElementById(String(cardid)).src

        var dailifen = 5
        var jiawufen = 5    
        var laodongdays = 3;
        var dailidays = 3;
        laodongtimes = p.laodongtimes
        shangyetimes = p.shangyetimes
        switch(cardid){
            case 1:
                laodongzongfen = laodongzongfen - 10;
                jiawufen = 0;
                document.getElementById("con").innerText = "晚上在被子里玩手机被父母抓到，扣除十点劳动积分，且本周不可获得积分。";
                document.getElementById("introduce").innerText = "黑天鹅事件：在发现澳大利亚的黑天鹅之前，17世纪之前的欧洲人认为天鹅都是白色的。但随着第一只黑天鹅的出现，这个不可动摇的观念崩溃了。黑天鹅的存在寓意着不可预测的重大稀有事件，它在意料之外，却又改变着一切。人类总是过度相信经验，而不知道一只黑天鹅的出现就足以颠覆一切。然而，无论是在对股市的预期，还是政府的决策，或是普通人日常简单的抉择中，黑天鹅都是无法预测的。9·11事件的发生、美国的次贷危机、我国的雪灾，都证实了这一点。"
                break;
            case 2:
                shangyezongfen = shangyezongfen - 10;
                dailifen = 0;
                document.getElementById("con").innerText = "在课堂上吃零食被老师发现，代理的XX零食均被收缴，一个月内不能再次代理，扣除十点商业积分";
                document.getElementById("introduce").innerText = "黑天鹅事件：在发现澳大利亚的黑天鹅之前，17世纪之前的欧洲人认为天鹅都是白色的。但随着第一只黑天鹅的出现，这个不可动摇的观念崩溃了。黑天鹅的存在寓意着不可预测的重大稀有事件，它在意料之外，却又改变着一切。人类总是过度相信经验，而不知道一只黑天鹅的出现就足以颠覆一切。然而，无论是在对股市的预期，还是政府的决策，或是普通人日常简单的抉择中，黑天鹅都是无法预测的。9·11事件的发生、美国的次贷危机、我国的雪灾，都证实了这一点。"
                
                break;
            case 3:
                jiawufen = 3
                document.getElementById("con").innerText = "每次家务劳动时你都会抱有侥幸心理偷一点懒，直到有一次被母亲发现扫地不干净，之后每次劳动积分减至三分";
                document.getElementById("introduce").innerText = "灰犀牛事件：灰犀牛体型笨重、反应迟缓，你能看见它在远处，却毫不在意，一旦它向你狂奔而来，定会让你猝不及防，直接被扑倒在地。它并不神秘，却更危险。可以说，“灰犀牛”是一种大概率危机，在社会各个领域不断上演。很多危机事件，与其说是“黑天鹅”，其实更像是“灰犀牛”，在爆发前已有迹象显现，但却被忽视。灰犀牛是与黑天鹅相互补足的概念，“黑天鹅事件”则是极其罕见的、出乎人们意料的风险。类似“黑天鹅”比喻小概率而影响巨大的事件，“灰犀牛”则比喻大概率且影响巨大的潜在危机。"
                
                break;
            case 4:
                laodongdays = 2
                dailidays = 2
                document.getElementById("con").innerText = "由于身体不适本周你只能：1.劳动两天；2.代理两天零食";
                document.getElementById("introduce").innerText = "供给：供给包括生产、向市场提供出售、售出三个环节。经济学的供给指的是在某一特定时期内，对应于一个给定的价格，生产者愿意且能够提供的商品数量被称为该价格下的供给量。是供给（生产）量与价格的关系或价格与供给（售出）量的对应关系。"
                
                break;
            case 5:
                laodongdays = 4
                dailidays = 3
                document.getElementById("con").innerText = "本周劳动与零食需求均增大：1.本周劳动四次；2.本周可以代理三天零食";
                document.getElementById("introduce").innerText = "需求：需求理论是指消费者（家庭）在某一特定时期内，在每一价格水平时愿意而且能够购买的某种商品量。需求是购买欲望与购买能力的统一。"
                
                break;
            case 6:
                shangyetimes = shangyetimes*3;
                document.getElementById("con").innerText = "你代理的XX零食在班级中很受欢迎，同学们争相抢购，价格一路上涨，该星期商业积分翻3倍";
                document.getElementById("introduce").innerText = "牛市：多头市场（bull market）又称牛市，指价格长期呈上涨趋势的证券市场。价格变化的总趋势是不断走高，特征是大涨小跌。“牛市”这个阶段的投资人们往往充满热情、乐观、对市场的发展信心十足。"
                
                break;
            case 7:
                shangyetimes = shangyetimes/5;
                document.getElementById("con").innerText = "由于老师严加管理，班级内零食风气减弱，来买零食的人越来越少，价格不断下跌，本周商业积分/5";
                document.getElementById("introduce").innerText = "熊市：空头市场（Bear Market）亦称熊市，指价格长期呈下跌趋势的证券市场。价格变化的总趋势是不断走低，特征是大跌小涨。"
                
                break;
            case 8:
                yuanbao += shangyezongfen*7 + 30;
                shangyezongfen = 0;
                document.getElementById("con").innerText = "由于代理销售成绩喜人，小卖部老板决定给你奖金，1*商业积分 = 7元，且额外获得30元奖励";
                document.getElementById("introduce").innerText = "奖金（bonus）：奖金是指对劳动者提供的超额劳动所支付的报酬，是实现按劳分配的一种补充形式。奖金大体上可分为两类：一类是由于劳动者提供超额劳动，直接增加了社会财富（例如增产、节约等）而给予的奖励；另一类是由于劳动者提供超额劳动，为增加社会财富创造了条件（例如技术革新等）而给予的奖励。"
                
                break;
            case 9:
                yuanbao += laodongzongfen*5;
                laodongzongfen = 0;
                jiawufen = 6;
                document.getElementById("con").innerText = "你的父母根据你累计的劳动积分进行奖励，1*劳动积分 = 5元，并且清空劳动积分，之后每次劳动可获得6点积分";
                document.getElementById("introduce").innerText = ""
                
                break;
            case 10:
                dailidays = 5;
                dailifen = 7;
                document.getElementById("con").innerText = "校门口的小卖部由于供货原因部分零食产品缺货，二家门口的超市货源充足（本周代理天数变为5天，每次商业积分变为7分）";
                document.getElementById("introduce").innerText = ""
                
                break;
            case 11:
                laodongdays = 4;
                jiawufen = 6
                document.getElementById("con").innerText = "一周之中的某一天家里要求你参加家务劳动，你会损失一天的事件而得到相应的更多劳动积分（本周劳动天数变为4天，每次商业积分变为6分）";
                document.getElementById("introduce").innerText = ""
                
                break;

        }

        var shangyebenzhoufen = shangyetimes*dailidays*dailifen;
        var laodngbenzhoufen = laodongdays*laodongtimes*jiawufen;
        shangyezongfen += shangyebenzhoufen;
        laodongzongfen += laodngbenzhoufen;

        document.getElementById("scores1").innerHTML = '劳动总积分 : <strong>'+ String(laodongzongfen) + '</strong> 商业总积分 : <strong>'+ String(shangyezongfen) + "</strong>";
        document.getElementById("scores2").innerHTML = '本周劳动积分 : <strong>'+ String(laodngbenzhoufen) + '</strong> 本周商业积分 : <strong>'+ String(shangyebenzhoufen) +"</strong>" ;
        document.getElementById("scores3").innerHTML = "元宝数 ： <strong>"+String(yuanbao) +"</strong>"; 
        date++;
    }