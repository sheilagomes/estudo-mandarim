const listaDePalavras = [["GERAL","sol","rì","日","ri.mp3"],["GERAL","lua","yuè","月","yue.mp3"],["GERAL","pessoa","rén","人","ren.mp3"],["GERAL","cavalo","mǎ","马","ma3.mp3"],["GERAL","mulher","nǚ","女","nu.mp3"],["GERAL","filho","zǐ","子","zi.mp3"],["GERAL","em cima","shàng","上","shang.mp3"],["GERAL","bom","hǎo","好","hao.mp3"],["GERAL","mãe","mā","妈","ma.mp3"],["GERAL","código","mǎ","码","ma3.mp3"],["GERAL","xingar","mà","骂","ma4.mp3"],["GERAL","partícula interrogativa","ma","吗","ma.mp3"],["GERAL","pedra","shí","石","shi.mp3"],["GERAL","boca","kǒu","口","kou.mp3"],["GERAL","bola","qiú","球","qiu.mp3"],["GERAL","futebol","zúqiú","足球","zuqiu.mp3"],["GERAL","tênis","wǎngqiú","网球","wangqiu.mp3"],["GERAL","assistir à aula","shàngkè","上课","shangke.mp3"],["GERAL","face superior","shàngmiàn","上面","shangmian.mp3"],["GERAL","pé","zú","足","zu.mp3"],["GERAL","rede","wǎng","网","wang.mp3"],["GERAL","aula","kè","课","ke.mp3"],["GERAL","face","miàn","面","mian.mp3"],["GERAL","ser","shì","是","shi.mp3"],["GERAL","cidade","shì","市","shi.mp3"],["GERAL","assunto","shì","事","shi.mp3"],["GERAL","visão","shì","视","shi.mp3"],["VOGAL A","mãe","māmā","妈妈","mama.mp3"],["VOGAL A","ele","tā","他","ta.mp3"],["VOGAL O","abacaxi","bōluó","菠萝","boluo.mp3"],["VOGAL O","eu","wǒ","我","wo.mp3"],["VOGAL E","cantar","chànggē","唱歌","changge.mp3"],["VOGAL E","partícula possessiva","de","的","de.mp3"],["VOGAL YI -I","roupa","yīfu","衣服","yifu.mp3"],["VOGAL YI -I","você","nǐ","你","ni.mp3"],["VOGAL WU -U","livro","shū","书","shu.mp3"],["VOGAL WU -U","não","bú","不","bu2.mp3"],["VOGAL WU -U","não","bù","不","bu4.mp3"],["VOGAL YU -Ü","peixe","yú","鱼","yu.mp3"],["VOGAL YU -Ü","filha","nǚér","女儿","nuer.mp3"],["CONSOANTE B","pai","bābā","爸爸","baba.mp3"],["CONSOANTE B","Brasil","bāxī","巴西","baxi.mp3"],["CONSOANTE P","maçã","píngguǒ","苹果","pingguo.mp3"],["CONSOANTE P","uva","pútáo","葡萄","putao.mp3"],["CONSOANTE M","pão","miànbāo","面包","mianbao.mp3"],["CONSOANTE M","comprar","mǎi","买","mai.mp3"],["CONSOANTE F","comer","chīfàn","吃饭","chifan.mp3"],["CONSOANTE F","França","fǎguó","法国","faguo.mp3"],["CONSOANTE D","ovo","jīdàn","鸡蛋","jidan.mp3"],["CONSOANTE D","irmão mais novo","dìdi","弟弟","didi.mp3"],["CONSOANTE T","dançar","tiàowǔ","跳舞","tiaowu.mp3"],["CONSOANTE T","amanhã","míngtiān","明天","mingtian.mp3"],["CONSOANTE N","leite de vaca","niúnǎi","牛奶","niunai.mp3"],["CONSOANTE N","vocês","nǐmen","你们","nimen.mp3"],["CONSOANTE L","tigre","lǎohǔ","老虎","laohu.mp3"],["CONSOANTE L","feliz","kuàilè","快乐","kuaile.mp3"],["GERAL","obrigado","xièxiè","谢谢","xiexie.mp3"],["GERAL","olá","nǐhǎo","你好","nihao.mp3"],["GERAL","três corpos","sāntǐ","三体","santi.mp3"],["CONSOANTE G","bolo","dàngāo","蛋糕","dangao.mp3"],["CONSOANTE G","irmão mais velho","gēgē","哥哥","gege.mp3"],["CONSOANTE K","calça","kùzi","裤子","kuzi.mp3"],["CONSOANTE K","dar/assistir à aula","shànkè","上课","shanke.mp3"],["CONSOANTE H","macaco","hóuzi","猴子","houzi.mp3"],["CONSOANTE H","tomar chá","hēchá","喝茶","hecha.mp3"],["VOGAL AI","comprar","mǎi","买","mai3.mp3"],["VOGAL AI","amar","ài","爱","ai.mp3"],["VOGAL EI","avião","fēijī","飞机","feiji.mp3"],["VOGAL EI","cansado","lèi","累","lei.mp3"],["VOGAL AO","professor","lǎoshī","老师","laoshi.mp3"],["VOGAL AO","prova","kǎoshì","考试","kaoshi.mp3"],["VOGAL OU","cachorrinho","xiǎogǒu","小狗","xiaogou.mp3"],["VOGAL OU","ter","yǒu","有","you.mp3"],["VOGAL AN","noite","wǎnshang","晚上","wanshang.mp3"],["VOGAL AN","muito difícil","hěnnán","很难","hennan.mp3"],["VOGAL EN","porta","mén","门","men.mp3"],["VOGAL EN","nós","wǒmen","我们","women.mp3"],["VOGAL ANG","casa","fángzi","房子","fangzi.mp3"],["VOGAL ANG","ajudar","bāngmáng","帮忙","bangmang.mp3"],["VOGAL ENG","estudante","xuéshēng","学生","xuesheng.mp3"],["VOGAL ENG","senhor","xiānshēng","先生","xiansheng.mp3"],["VOGAL ER","filho","érzi","儿子","erzi.mp3"],["VOGAL ER","vinte","èrshí","二十","ershi.mp3"],["VOGAL -UI WEI","por que","wèishénme","为什么","weishenme.mp3"],["VOGAL -UI WEI","não saber","búhuì","不会","buhui.mp3"],["VOGAL -IU YOU","ter","yǒu","有","you.mp3"],["VOGAL -IU YOU","amigo","péngyǒu","朋友","pengyou.mp3"],["VOGAL -IN YIN","novo","xīnde","新的","xinde.mp3"],["VOGAL -IN YIN","música","yīnyuè","音乐","yinyue.mp3"],["VOGAL -ÜN YUN","nuvem","yún","云","yun.mp3"],["VOGAL -ÜN YUN","esporte","yùndòng","运动","yundong.mp3"],["VOGAL -ING YING","Reino Unido","yīngguó","英国","yingguo.mp3"],["VOGAL -ING YING","escutar","tīng","听","ting.mp3"],["VOGAL -ONG WENG","coisas","dōngxī","东西","dongxi.mp3"],["VOGAL -ONG WENG","trabalho","gōngzuò","工作","gongzuo.mp3"],["VOGAL -IAN YAN","agora","xiànzài","现在","xianzai.mp3"],["VOGAL -IAN YAN","este ano","jīnnián","今年","jinnian.mp3"],["VOGAL -IANG YANG","ovelha","yáng","羊","yang.mp3"],["VOGAL -IANG YANG","pensar","xiǎng","想","xiang.mp3"],["VOGAL -IONG YONG","nadar","yóuyǒng","游泳","youyong.mp3"],["VOGAL -IONG YONG","usar","yòng","用","yong.mp3"],["VOGAL -UAN WAN","boa noite","wǎnshanghǎo","晚上好","wanshanghao.mp3"],["VOGAL -UAN WAN","Taiwan","táiwān","台湾","taiwan.mp3"],["VOGAL -UN WEN","neto","sūnzi","孙子","sunzi.mp3"],["VOGAL -UN WEN","chinês","zhōngwén","中文","zhongwen.mp3"],["VOGAL -UANG WANG","rei","guówáng","国王","guowang.mp3"],["VOGAL -UANG WANG","internet","wǎngluò","网络","wangluo.mp3"],["VOGAL -UAN YUAN","hospital","yīyuàn","医院","yiyuan.mp3"],["VOGAL -UAN YUAN","parque","gōngyuán","公园","gongyuan.mp3"],["CONSOANTE J","lar (casa)","jiā","家","jia.mp3"],["CONSOANTE J","até logo","zàijiàn","再见","zaijian.mp3"],["CONSOANTE Q","dinheiro","qián","钱","qian.mp3"],["CONSOANTE Q","ano passado","qùnián","去年","qunian.mp3"],["CONSOANTE X","sapato","xiézi","鞋子","xiezi.mp3"],["CONSOANTE X","senhorita","xiǎojiě","小姐","xiaojie.mp3"],["CONSOANTE Z","manhã","zǎoshang","早上","zaoshang.mp3"],["CONSOANTE Z","futebol","zúqiú","足球","zuqiu.mp3"],["CONSOANTE C","morango","cǎoméi","草莓","caomei.mp3"],["CONSOANTE C","restaurante","cāntīng","餐厅","canting.mp3"],["CONSOANTE S","guarda-chuva","yǔsǎn","雨伞","yusan.mp3"],["CONSOANTE S","trinta","sānshí","三十","sanshi.mp3"],["CONSOANTE ZH","porco","zhū","猪","zhu.mp3"],["CONSOANTE ZH","senhora Zhang","zhāngtàitài","张太太","zhangtaitai.mp3"],["CONSOANTE CH","carro","chēzi","车子","chezi.mp3"],["CONSOANTE CH","laranja","chéngzi","橙子","chengzi.mp3"],["CONSOANTE SH","fruta","shuǐguǒ","果水","shuiguo.mp3"],["CONSOANTE SH","ser","shì","是","shi.mp3"],["CONSOANTE R","pessoa","rén","人","ren.mp3"],["CONSOANTE R","carne","ròu","肉","rou.mp3"],["GERAL","pronome possessivo","de","的","de.mp3"],["GERAL","quem","shuí","谁","shui.mp3"],["GERAL","chamar-se","jiào","叫","jiao.mp3"],["GERAL","isto","zhè","这","zhe.mp3"]]
const perguntas = [["Como você se chama", "nǐ jiào shénme míngzì", "你叫什么名字"], ["Seu pai é professor", "nǐ de bàba shì lǎoshī ma", "你的爸爸是老师吗"], ["Quem é seu pai", "nǐ de bàba shì shuí", "你的爸爸是谁"], ["Ela é amiga de quem", "tā shì shuí de péngyou", "他是谁的朋友"], ["Você está bem", "nǐ hǎo ma", "你好吗"], ["Seu professor se chama Paulo", "nǐ de lǎoshī jiào bǎoluó ma", "你的老师叫什么吗"], ["O que é isto", "zhè shì shénme", "这是什么"], ["Eu estou bem, e vocês", "wǒ hěn hǎo nǐmen hǎo ma", "我很好,你们好吗"], ["Quem é o seu professor", "nǐ de lǎoshī shì shuí", "你的老师是谁"], ["Como é o nome do seu pai", "nǐ de bàba jiào shénme míngzì", "你的爸爸叫什么名字"], ["O pai do seu colega de estudo é professor", "nǐ de tóngxué de bàba shì lǎoshī ma", "你的同学的爸爸是老师吗"], ["Ele é seu amigo", "tā shì nǐ de péngyǒu ma", "他是你的朋友吗"], ["Ela é sua amiga", "tā shì nǐ de péngyǒu ma", "他是你的朋友吗"],  ["Seu nome é Paulo", "nǐ de míngzì shì bǎoluó ma", "你的名字是保罗吗"]]
const frases  = [["Eu estou bem", "wǒ hěn hǎo", "我很好"], ["Seu pai é professor", "nǐ de bàba shì lǎoshī", "你的爸爸是老师"], ["Eu sou o professor de vocês", "wǒ shì nǐmen de lǎoshī", "我是你们的老师"], ["Ele é meu irmão mais velho, não é meu colega de estudo", "tā shì wǒ de gēgē, búshì wǒ de tóngxué", "他是我的哥哥不是我的同学"], ["O seu professor é amigo da minha mãe", "nǐ de lǎoshī shì wǒ de māmā de péngyǒu", "你的老师是我的妈妈的朋友"], ["O senhor Lin é amigo do professor", "línxiānshēng shì lǎoshī de péngyǒu", "林先生是老师的朋友"], ["Eu não me chamo anna", "wǒ bú jiào ānnà", "我不叫安娜"]]
const proximaFicha = document.querySelector(".ficha")
const montagemFrase = document.getElementsByClassName("hanzi-frase")
const botaoSequencial = document.querySelector(".seq")
const botaoAleatorio = document.querySelector(".ale")
const botaoFrases = document.querySelector(".fra")
const botaoPerguntas = document.querySelector(".per")
const botaoProximo = document.querySelector(".botao-proximo")
const botaoInicio = document.querySelector(".botao-inicio")
const fraseTraduzida= document.querySelector(".frase-traduzida")
let novoIndice = 1
let indiceFrase = 0
let botaoSelecionado = ""
let mostraHanzi = []
let hanziSorteio = listaDePalavras[sorteio(0, listaDePalavras.length-1)][3][0]
let listaSorteio = 0
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

function viraFicha(cartao1, cartao2) {
	document.querySelector(".flip-img .flip-img-inner").style.transform = `rotateY(180deg)`
	document.querySelector(".intro").style.display = `none`
	document.querySelector(`.${cartao1}`).style.display = `none`
	document.querySelector(`.${cartao2}`).style.display = `none`
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
    for(let j = 0; j < 16; j++) {
    	while (mostraHanzi.includes(hanziSorteio)) {
    		hanziSorteio = listaDePalavras[sorteio(0, listaDePalavras.length-1)][3][0]
    	}
    	mostraHanzi.push(hanziSorteio)
    }
    listaSorteio = sorteio(0, 15)
    for(let k = 0; k < frases[fraseInicial][2].length; k++) {
	    while (numeroSorteio.includes(listaSorteio)) {
    		listaSorteio = sorteio(0, 15)
    	}
    	numeroSorteio[k] = listaSorteio
	}
    for(let l = 0; l < numeroSorteio.length; l++) {
    	mostraHanzi[numeroSorteio[l]] =(frases[fraseInicial][2][l])
    }
    for(let m = 0; m < 16; m++) {
    	document.querySelector(`.frase-hanzi-${m}`).innerHTML = `${mostraHanzi[m]}`
    }
}


botaoSequencial.addEventListener("click", function() {
	viraFicha("frases", "perguntas")
	botaoSelecionado = "seq"
})

botaoAleatorio.addEventListener("click", function() {
	viraFicha("frases", "perguntas")
	botaoSelecionado = "ale"
})

botaoFrases.addEventListener("click", function() {
	viraFicha("ficha", "perguntas")
	criaHanzi()
})

botaoProximo.addEventListener("click", function() {
	mostraHanzi = []
	numeroSorteio = []
	fraseTraduzidaFinal = 
	criaHanzi()
})

botaoInicio.addEventListener("click", function() {
	location.reload(true);
})

// botaoPerguntas.addEventListener("click", function() {
// 	viraFicha("ficha", "frases")
// })

proximaFicha.addEventListener("click", function() {
	novaFicha(listaDePalavras, novoIndice)
	document.addEventListener('keydown', (event) => {
		novaFicha(listaDePalavras, novoIndice)
	})
})

for (let i = 0; i < montagemFrase.length - 1; i++) {
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