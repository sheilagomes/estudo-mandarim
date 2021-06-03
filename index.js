const listaDePalavras = [["GERAL","sol","rì","日","ri.mp3"],["GERAL","lua","yuè","月","yue.mp3"],["GERAL","pessoa","rén","人","ren.mp3"],["GERAL","cavalo","mǎ","马","ma3.mp3"],["GERAL","mulher","nǚ","女","nu.mp3"],["GERAL","filho","zǐ","子","zi.mp3"],["GERAL","em cima","shàng","上","shang.mp3"],["GERAL","bom","hǎo","好","hao.mp3"],["GERAL","mãe","mā","妈","ma.mp3"],["GERAL","código","mǎ","码","ma3.mp3"],["GERAL","xingar","mà","骂","ma4.mp3"],["GERAL","partícula interrogativa","ma","吗","ma.mp3"],["GERAL","pedra","shí","石","shi.mp3"],["GERAL","boca","kǒu","口","kou.mp3"],["GERAL","bola","qiú","球","qiu.mp3"],["GERAL","futebol","zúqiú","足球","zuqiu.mp3"],["GERAL","tênis","wǎngqiú","网球","wangqiu.mp3"],["GERAL","assistir à aula","shàngkè","上课","shangke.mp3"],["GERAL","face superior","shàngmiàn","上面","shangmian.mp3"],["GERAL","pé","zú","足","zu.mp3"],["GERAL","rede","wǎng","网","wang.mp3"],["GERAL","aula","kè","课","ke.mp3"],["GERAL","face","miàn","面","mian.mp3"],["GERAL","ser","shì","是","shi.mp3"],["GERAL","cidade","shì","市","shi.mp3"],["GERAL","assunto","shì","事","shi.mp3"],["GERAL","visão","shì","视","shi.mp3"],["VOGAL A","mãe","māmā","妈妈","mama.mp3"],["VOGAL A","ele","tā","他","ta.mp3"],["VOGAL A","ela","tā","他","ta.mp3"],["VOGAL O","abacaxi","bōluó","菠萝","boluo.mp3"],["VOGAL O","eu","wǒ","我","wo.mp3"],["VOGAL E","cantar","chànggē","唱歌","changge.mp3"],["VOGAL E","partícula possessiva","de","的","de.mp3"],["VOGAL YI -I","roupa","yīfu","衣服","yifu.mp3"],["VOGAL YI -I","você","nǐ","你","ni.mp3"],["VOGAL WU -U","livro","shū","书","shu.mp3"],["VOGAL WU -U","não","bú","不","bu2.mp3"],["VOGAL WU -U","não","bù","不","bu4.mp3"],["VOGAL YU -Ü","peixe","yú","鱼","yu.mp3"],["FAMÍLIA","filha","nǚér","女儿","nuer.mp3"],["FAMÍLIA","pai","bābā","爸爸","baba.mp3"],["CONSOANTE B","Brasil","bāxī","巴西","baxi.mp3"],["CONSOANTE P","maçã","píngguǒ","苹果","pingguo.mp3"],["CONSOANTE P","uva","pútáo","葡萄","putao.mp3"],["CONSOANTE M","pão","miànbāo","面包","mianbao.mp3"],["CONSOANTE M","comprar","mǎi","买","mai.mp3"],["CONSOANTE F","comer","chīfàn","吃饭","chifan.mp3"],["CONSOANTE F","França","fǎguó","法国","faguo.mp3"],["CONSOANTE D","ovo","jīdàn","鸡蛋","jidan.mp3"],["FAMÍLIA","irmão mais novo","dìdi","弟弟","didi.mp3"],["CONSOANTE T","dançar","tiàowǔ","跳舞","tiaowu.mp3"],["CONSOANTE T","amanhã","míngtiān","明天","mingtian.mp3"],["CONSOANTE N","leite de vaca","niúnǎi","牛奶","niunai.mp3"],["CONSOANTE N","vocês","nǐmen","你们","nimen.mp3"],["CONSOANTE L","tigre","lǎohǔ","老虎","laohu.mp3"],["CONSOANTE L","feliz","kuàilè","快乐","kuaile.mp3"],["GERAL","obrigado","xièxiè","谢谢","xiexie.mp3"],["GERAL","olá","nǐhǎo","你好","nihao.mp3"],["GERAL","três corpos","sāntǐ","三体","santi.mp3"],["CONSOANTE G","bolo","dàngāo","蛋糕","dangao.mp3"],["FAMÍLIA","irmão mais velho","gēgē","哥哥","gege.mp3"],["CONSOANTE K","calça","kùzi","裤子","kuzi.mp3"],["CONSOANTE K","dar/assistir à aula","shànkè","上课","shanke.mp3"],["CONSOANTE H","macaco","hóuzi","猴子","houzi.mp3"],["CONSOANTE H","tomar chá","hēchá","喝茶","hecha.mp3"],["VOGAL AI","comprar","mǎi","买","mai3.mp3"],["VOGAL AI","amar","ài","爱","ai.mp3"],["VOGAL EI","avião","fēijī","飞机","feiji.mp3"],["VOGAL EI","cansado","lèi","累","lei.mp3"],["VOGAL AO","professor","lǎoshī","老师","laoshi.mp3"],["VOGAL AO","prova","kǎoshì","考试","kaoshi.mp3"],["VOGAL OU","cachorrinho","xiǎogǒu","小狗","xiaogou.mp3"],["VOGAL OU","ter","yǒu","有","you.mp3"],["VOGAL AN","noite","wǎnshang","晚上","wanshang.mp3"],["VOGAL AN","muito difícil","hěnnán","很难","hennan.mp3"],["VOGAL EN","porta","mén","门","men.mp3"],["VOGAL EN","nós","wǒmen","我们","women.mp3"],["VOGAL ANG","casa","fángzi","房子","fangzi.mp3"],["VOGAL ANG","ajudar","bāngmáng","帮忙","bangmang.mp3"],["VOGAL ENG","estudante","xuéshēng","学生","xuesheng.mp3"],["VOGAL ENG","senhor","xiānshēng","先生","xiansheng.mp3"],["FAMÍLIA","filho","érzi","儿子","erzi.mp3"],["VOGAL ER","vinte","èrshí","二十","ershi.mp3"],["VOGAL -UI WEI","por que","wèishénme","为什么","weishenme.mp3"],["VOGAL -UI WEI","não saber","búhuì","不会","buhui.mp3"],["VOGAL -IU YOU","ter","yǒu","有","you.mp3"],["VOGAL -IU YOU","amigo","péngyǒu","朋友","pengyou.mp3"],["VOGAL -IN YIN","novo","xīnde","新的","xinde.mp3"],["VOGAL -IN YIN","música","yīnyuè","音乐","yinyue.mp3"],["VOGAL -ÜN YUN","nuvem","yún","云","yun.mp3"],["VOGAL -ÜN YUN","esporte","yùndòng","运动","yundong.mp3"],["VOGAL -ING YING","Reino Unido","yīngguó","英国","yingguo.mp3"],["VOGAL -ING YING","escutar","tīng","听","ting.mp3"],["VOGAL -ONG WENG","coisas","dōngxī","东西","dongxi.mp3"],["VOGAL -ONG WENG","trabalho","gōngzuò","工作","gongzuo.mp3"],["VOGAL -IAN YAN","agora","xiànzài","现在","xianzai.mp3"],["VOGAL -IAN YAN","este ano","jīnnián","今年","jinnian.mp3"],["VOGAL -IANG YANG","ovelha","yáng","羊","yang.mp3"],["VOGAL -IANG YANG","pensar","xiǎng","想","xiang.mp3"],["VOGAL -IONG YONG","nadar","yóuyǒng","游泳","youyong.mp3"],["VOGAL -IONG YONG","usar","yòng","用","yong.mp3"],["VOGAL -UAN WAN","boa noite","wǎnshanghǎo","晚上好","wanshanghao.mp3"],["VOGAL -UAN WAN","Taiwan","táiwān","台湾","taiwan.mp3"],["FAMÍLIA","neto","sūnzi","孙子","sunzi.mp3"],["VOGAL -UN WEN","chinês","zhōngwén","中文","zhongwen.mp3"],["VOGAL -UANG WANG","rei","guówáng","国王","guowang.mp3"],["VOGAL -UANG WANG","internet","wǎngluò","网络","wangluo.mp3"],["VOGAL -UAN YUAN","hospital","yīyuàn","医院","yiyuan.mp3"],["VOGAL -UAN YUAN","parque","gōngyuán","公园","gongyuan.mp3"],["CONSOANTE J","lar (casa)","jiā","家","jia.mp3"],["CONSOANTE J","até logo","zàijiàn","再见","zaijian.mp3"],["CONSOANTE Q","dinheiro","qián","钱","qian.mp3"],["CONSOANTE Q","ano passado","qùnián","去年","qunian.mp3"],["CONSOANTE X","sapato","xiézi","鞋子","xiezi.mp3"],["CONSOANTE X","senhorita","xiǎojiě","小姐","xiaojie.mp3"],["CONSOANTE Z","manhã","zǎoshang","早上","zaoshang.mp3"],["CONSOANTE Z","futebol","zúqiú","足球","zuqiu.mp3"],["CONSOANTE C","morango","cǎoméi","草莓","caomei.mp3"],["CONSOANTE C","restaurante","cāntīng","餐厅","canting.mp3"],["CONSOANTE S","guarda-chuva","yǔsǎn","雨伞","yusan.mp3"],["CONSOANTE S","trinta","sānshí","三十","sanshi.mp3"],["CONSOANTE ZH","porco","zhū","猪","zhu.mp3"],["CONSOANTE ZH","senhora Zhang","zhāngtàitài","张太太","zhangtaitai.mp3"],["CONSOANTE CH","carro","chēzi","车子","chezi.mp3"],["CONSOANTE CH","laranja","chéngzi","橙子","chengzi.mp3"],["CONSOANTE SH","fruta","shuǐguǒ","果水","shuiguo.mp3"],["CONSOANTE SH","ser","shì","是","shi.mp3"],["CONSOANTE R","pessoa","rén","人","ren.mp3"],["CONSOANTE R","carne","ròu","肉","rou.mp3"],["GERAL","pronome possessivo","de","的","de.mp3"],["GERAL","quem","shuí","谁","shui.mp3"],["GERAL","chamar-se","jiào","叫","jiao.mp3"],["GERAL","isto","zhè","这","zhe.mp3"],["GERAL","introdução","jiè shào","介绍","jieshao.mp3"],["GERAL","pronúncia","fā yīn","发音","fayin.mp3"],["GERAL","você formal","nín","您","nin.mp3"],["GERAL","eles","tāmen","他们","tamen.mp3"],["GERAL","elas","tāmen","他们","tamen.mp3"],["GERAL","forma plural p/pessoas","men","们","men.mp3"],["FAMÍLIA","avô","yéye","爷爷","yeye.mp3"],["FAMÍLIA","mãe","māma","妈妈","mama.mp3"],["FAMÍLIA","irmã mais velha","jiějie","姐姐","jiejie.mp3"],["FAMÍLIA","irmã mais nova","mèimei","妹妹","meimei.mp3"],["FAMÍLIA","avó","nǎinai","奶奶","nainai.mp3"],["FAMÍLIA","neta","sūnnǚ","孙女","sunnu.mp3"],["NÚMEROS","1","yī","一","yi.mp3"],["NÚMEROS","2","èr","二","er.mp3"],["NÚMEROS","3","sān","三","san.mp3"],["NÚMEROS","4","sì","四","si.mp3"],["NÚMEROS","5","wǔ","五","wu.mp3"],["NÚMEROS","6","liù","六","liu.mp3"],["NÚMEROS","7","qī","七","qi.mp3"],["NÚMEROS","8","bā","八","ba.mp3"],["NÚMEROS","9","jiǔ","九","jiu.mp3"],["NÚMEROS","10","shí","十","shi10.mp3"],["NÚMEROS","100","bǎi","百","bai.mp3"],["NÚMEROS","1000","qiān","千","qian.mp3"],["NÚMEROS","2000","liǎng","两","liang.mp3"],["NÚMEROS","0","líng","零","ling.mp3"],["CLASSIFICADOR","de pessoa e objetos","ge","个","ge.mp3"],["CLASSIFICADOR","de instrumento de escrita","zhī","支","zhi.mp3"],["CLASSIFICADOR","de livro","běn","本","ben.mp3"],["CLASSIFICADOR","de móvel e papel","zhāng","张","zhang.mp3"],["CLASSIFICADOR","de animais","zhī","只","zhi.mp3"],["GERAL","caneta","bǐ","笔","bi.mp3"],["GERAL","giz","fěnbǐ","粉笔","fenbi.mp3"],["GERAL","lápis","qiānbǐ","铅笔","qianbi.mp3"],["GERAL","régua","chǐ","尺","chi.mp3"],["GERAL","dicionário","zìdiǎn","字典","zidian.mp3"],["GERAL","caderno","bǐjìběn","笔记本","bijiben.mp3"],["GERAL","apostila","kèběn","课本","keben.mp3"],["GERAL","mesa","zhuōzi","桌子","zhuozi.mp3"],["GERAL","cadeira","yǐzi","椅子","yizi.mp3"],["GERAL","papel","zhǐ","纸","zhi.mp3"],["GERAL","quadro-negro","hēibǎn","黑板","heiban.mp3"],["GERAL","passarinho","niǎo","鸟","niao.mp3"],["GERAL","coelho","tùzi","兔子","tuzi.mp3"],["GERAL","leão","shīzi","狮子","shizi.mp3"],["PRON.INT.","quanto","jǐ","几","ji.mp3"],["GERAL","não (verbo ter)","méi","没","mei.mp3"],
]
const perguntas = [["Como você se chama?", "nǐ jiào shénme míngzì?", "你叫什么名字?", "我叫安娜", "wǒ jiào ānnà"],["Seu pai é professor?", "nǐ de bàba shì lǎoshī ma?", "你的爸爸是老师吗?", "我的爸爸不是老师", "wǒ de bàba bùshì lǎoshī"],["Quem é seu pai?", "nǐ de bàba shì shuí?", "你的爸爸是谁?", "我的爸爸是保罗", "wǒ de bàba shì bǎoluó"],["Ela é amiga de quem?", "tā shì shuí de péngyou?", "他是谁的朋友?", "他是保罗的朋友", "tā shì bǎoluó de péngyǒu"],["Você está bem?", "nǐ hǎo ma?", "你好吗?", "我很好", "wǒ hěn hǎo"],["Qual é o nome do seu professor?", "lǎoshī jiào shénme míngzì?", "老师叫什么名字？", "我的老师是安德森", "wǒ de lǎoshī shì āndésēn"],["O que é isto?", "zhè shì shénme?", "这是什么?", "这是石", "zhè shì shí"],["Eu estou bem, e vocês?", "wǒ hěn hǎo, nǐmen hǎo ma?", "我很好,你们好吗?", "我们很好", "wǒmen hěn hǎo"],["Quem é a sua professora?", "nǐ de lǎoshī shì shuí?", "你的老师是谁?", "我的老师是安娜", "wǒ de lǎoshī shì ānnà"],["Qual é o nome do seu pai?", "nǐ de bàba jiào shénme míngzì?", "你的爸爸叫什么名字?", "我的爸爸叫林先生", "wǒ de bàba jiào lín xiānshēng"],["O pai do seu colega de estudo é professor?", "nǐ de tóngxué de bàba shì lǎoshī ma?", "你的同学的爸爸是老师吗?", "他不是老师", "tā bùshì lǎoshī"],["Ele é seu amigo?", "tā shì nǐ de péngyǒu ma?", "他是你的朋友吗?", "他是我的弟弟", "tā shì wǒ de dìdì"],["Ela é sua amiga?", "tā shì nǐ de péngyǒu ma?", "他是你的朋友吗?", "她是我的朋友李美丽", "tā shì wǒ de péngyǒu lǐ měi lì"],["Seu nome é Paulo?", "nǐ de míngzì shì bǎoluó ma?", "你的名字是保罗吗?", "我叫安德森", "wǒ jiào āndésēn"],["Quantos estudantes?", "jǐ ge xuéshēng?", "几个学生？", "五个学生","wǔ ge xuéshēng"],["Quantas mesas?", "jǐ zhāng zhuōzi?", "几张桌子？", "两张桌子","liǎng zhāng zhuōzi"],["Aqui tem professor?", "zhèlǐ yǒu lǎoshī ma?", "这里有老师吗？", "这里没有老师。","zhèlǐ méi yǒu lǎoshī"]]
const frases  = [["Eu estou bem", "wǒ hěn hǎo", "我很好"],["Seu pai é professor", "nǐ de bàba shì lǎoshī", "你的爸爸是老师"],["Eu sou o professor de vocês", "wǒ shì nǐmen de lǎoshī", "我是你们的老师"],["Ele é meu irmão mais velho, não é meu colega de estudo", "tā shì wǒ de gēgē, búshì wǒ de tóngxué", "他是我的哥哥不是我的同学"],["Seu professor é amigo da minha mãe", "nǐ de lǎoshī shì wǒ de māmā de péngyǒu", "你的老师是我的妈妈的朋友"],["O senhor Lin é amigo do professor", "línxiānshēng shì lǎoshī de péngyǒu", "林先生是老师的朋友"],["Eu não me chamo anna", "wǒ bú jiào ānnà", "我不叫安娜"],["Eu sou professora", "wǒ shì lǎoshī", "我是老师"],["Ele é nosso amigo", "tā shì wǒmen de péngyǒu", "他是我们的朋友"],["Sua professora é amiga da minha mãe", "nǐ de lǎoshī shì wǒ de māmā de péngyǒu", "你的老师是我的妈妈的朋友"],["Ele é meu pai", "tā shì wǒ de bàba", "他是我的爸爸"],["Eu me chamo li mei li", "wǒ jiào lǐ měi lì", "我叫李美丽"],["Ela se chama anna, ela é minha colega de estudo", "tā jiào ānnà tā shì wǒ de tóngxué", "她叫安娜她是我的同学"],["Não é", "bú shì", "不是"],["quinze estudantes", "shí wǔ ge xuéshēng", "十五个学生"],["oito mesas", "bā zhāng zhuōzi", "八张桌子"]]
const proximaFicha = document.querySelector(".ficha")
const montagemFrase = document.getElementsByClassName("hanzi-frase")
const botaoSequencial = document.querySelector(".seq")
const botaoAleatorio = document.querySelector(".ale")
const botaoFrases = document.querySelector(".fra")
const botaoPerguntas = document.querySelector(".per")
const botaoProximo = document.querySelector(".botao-proximo")
const botaoInicio = document.querySelector(".botao-inicio")
const fraseTraduzida = document.querySelector(".frase-traduzida")
const menuSuspenso = document.querySelector(".botao-menu")
let novoIndice = 1
let indiceFrase = 0
let botaoSelecionado = ""
let mostraHanzi = []
let hanziSorteio = sorteio(0, 15)
let listaSorteio = listaDePalavras[sorteio(0, listaDePalavras.length-1)][3][0]
let numeroSorteio = []
let fraseInicial = 0
let fraseTraduzidaFinal = []
let quantidadeDeHanziCertos = 0

function sorteio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min
}

function novaFicha(lista, indice) {
	document.querySelector(".pinyin").innerHTML = `${lista[indice][2]}`
	document.querySelector(".hanzi").innerHTML = `${lista[indice][3]}` 
	document.querySelector(".portugues").innerHTML = `${lista[indice][1]}`
	document.querySelector(".categoria").innerHTML = `${lista[indice][0]}`
	document.getElementsByTagName("source")[0].src = `sounds/${lista[indice][4]}`
	document.getElementsByTagName("audio")[0].load()
	condicaoBotao()
}

function novaFrase() {
	document.querySelector(".frase-original").innerHTML = `${frases[indiceFrase][0]}`
	document.querySelector(".frase-pinyin").innerHTML = `${frases[indiceFrase][1]}`
	document.querySelector(".frase-hanzi").innerHTML = `${frases[indiceFrase][2]}`
	indiceFrase = sorteio(0, frases.length-1)
}

function novaPergunta() {
	document.querySelector(".pergunta").innerHTML = `${frases[novaFrase][0]}`
	document.querySelector(".pergunta-pinyin").innerHTML = `${frases[novaFrase][1]}`
	document.querySelector(".resposta").innerHTML = `${frases[novaFrase][2]}`
	document.querySelector(".resposta-pinyin").innerHTML = `${frases[novaFrase][1]}`
	novaFrase = sorteio(0, frases.length-1)
}

function viraFicha(cartao1, cartao2, cartao3) {
	document.querySelector(".flip-img .flip-img-inner").style.transform = `rotateY(180deg)`
	document.querySelector(".intro").style.display = `none`
	document.querySelector(`.${cartao1}`).style.display = `none`
	document.querySelector(`.${cartao2}`).style.display = `none`
	document.querySelector(`.${cartao3}`).style.display = `none`
}

function condicaoBotao() {
	if(botaoSelecionado == "ale") {
		novoIndice = sorteio(0, listaDePalavras.length-1)
	} else {
		novoIndice += 1
	}
}

function criaHanzi() {
	fraseInicial = sorteio(0, frases.length-1)
	document.querySelector(".frase-original").innerHTML = `${frases[fraseInicial][0]}`
	document.querySelector(".frase-pinyin").innerHTML = `${frases[fraseInicial][1]}`
    for(let i = 0; i < 16; i++) {
    	while (numeroSorteio.includes(hanziSorteio)) {
    		hanziSorteio = sorteio(0, 15)
    	}
    	numeroSorteio.push(hanziSorteio)
    }
    let k = 0
    let l = 0
    while (l < frases[fraseInicial][2].length) {
    	if (!(mostraHanzi.includes(frases[fraseInicial][2][l]))) {
    		mostraHanzi[numeroSorteio[k]] = frases[fraseInicial][2][l]
    		k++
    	}
    	l++
	}

    for(let m = k; m < 16; m++) {
	    while (mostraHanzi.includes(listaSorteio)) {
    		listaSorteio = listaDePalavras[sorteio(0, listaDePalavras.length-1)][3][0]
    	}
    	mostraHanzi[numeroSorteio[m]] = listaSorteio
	}

    for(let n = 0; n < 16; n++) {
    	document.querySelector(`.frase-hanzi-${n}`).innerHTML = `${mostraHanzi[n]}`
    }
}

menuSuspenso.addEventListener("click", function() {
	document.querySelector(".menu-suspenso .menu-paginas").style.backgroundColor = "#61363A"
	document.querySelector(".menu-suspenso .menu-paginas").style.display = "block"
	document.querySelector(".menu-suspenso .menu-paginas").style.bottom = "100%"
})

botaoSequencial.addEventListener("click", function() {
	viraFicha("frases", "perguntas", "numeros")
	botaoSelecionado = "seq"
})

botaoAleatorio.addEventListener("click", function() {
	viraFicha("frases", "perguntas", "numeros")
	botaoSelecionado = "ale"
})

botaoFrases.addEventListener("click", function() {
	viraFicha("ficha", "perguntas", "numeros")
	criaHanzi()
})

botaoProximo.addEventListener("click", function() {
	mostraHanzi = []
	numeroSorteio = []
	fraseTraduzidaFinal = []
	document.querySelector(".certo").style.opacity = `0`
	quantidadeDeHanziCertos = 0
	document.querySelector(".frase-traduzida").innerHTML = ""
	criaHanzi()
})

botaoInicio.addEventListener("click", function() {
	location.reload(true);
})

botaoPerguntas.addEventListener("click", function() {
	viraFicha("ficha", "frases", "numeros")
})

// botaoPerguntas.addEventListener("click", function() {
// 	viraFicha("ficha", "frases", "perguntas")
// })

proximaFicha.addEventListener("click", function() {
	novaFicha(listaDePalavras, novoIndice)
	document.addEventListener('keydown', (event) => {
		novaFicha(listaDePalavras, novoIndice)
	})
})

for (let i = 0; i < montagemFrase.length; i++) {
	montagemFrase[i].addEventListener("click", function() {
		if (montagemFrase[i].innerHTML == frases[fraseInicial][2][quantidadeDeHanziCertos]) {
			fraseTraduzidaFinal.push(`${montagemFrase[i].innerHTML}`)
			document.querySelector(".frase-traduzida").innerHTML = `${fraseTraduzidaFinal.toString().replaceAll(",","")}`
			quantidadeDeHanziCertos += 1
			if (frases[fraseInicial][2].length == quantidadeDeHanziCertos) {
				document.querySelector(".certo").style.opacity = `1`
			}
		}
	})
}