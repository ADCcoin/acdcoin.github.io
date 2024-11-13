let translations = {
    tr: {
        en: {
            //main elements
            "Ana sayfa" : "Home",
            "Madencilik" : "Mining",
            "Hakkımızda" : "About Us",
            "İletişim" : "Contact",
            "Ekip" : "team",
            "İşlemler" : "Transactions",
            "İndir" : "Download",
            //index page elements
            "Geleceği Şekillendiren ACDcoin Ethereum ile Hayallerini Gerçekleştir!" : "Shape the Future with ACDcoin on Ethereum and Make Your Dreams Come True!",
            "İndirmek İçin Tıklayınız" : "Click to Download",
            "ACDcoin Nedir?" : "What is ACDcoin?",
            "Merkezi olmayan bir dijital para birimidir ve blockchain teknolojisi üzerine inşa edilmiştir." : "It is a decentralized digital currency built on blockchain technology.",
            "Daha Fazla Bilgi için Tıklayınız" : "Click for More Info",
            // contact page elements
            "Bize Ulaşın" : "Contact Us",
            "Herhangi bir sorunuz varsa, bize ulaşmaktan çekinmeyin!" : "If you have any questions, feel free to reach out to us!",
            "YÖNETİM KURULU BAŞKANI:" : "CEO:",
            "GENEL MÜDÜR:" : "General Manager:",
            "E-posta:" : "Email:",
            "Telefon numarası:" : "Phone Number:",
            "Adres:" : "Address:",
            // team page elements
            "Baş Yönetici" : "CEO",
            "Genel müdür" : "General Manager",
            "Yazılım geliştirme" : "Software Developer",
            "Araştırma ve Geliştirme Yöneticisi" : "Research and Development Manager",
            "Sosyal Medya Yöneticisi" : "Social Media Manager",
            // mining page elements
            "ACDcoin Madenciliğine Bugün Başla" : "Start ACDcoin Mining Today!",
            "Devrime katıl ve son teknoloji madencilik platformumuz ile ACDcoin madenciliğine başla." : "Join the revolution and start ACDcoin mining with our state-of-the-art mining platform.",
            "Neden ACDcoin Madenciliği Yapmalısın?" : "Why Should You Mine ACDcoin?",
            "ACDcoin, hızlı işlemler, düşük ücretler ve güvenli bir ağ sunan devrim niteliğinde bir kripto paradır. ACDcoin madenciliği yaparak, ağın güvenliğine ve merkeziyetsizliğine katkıda bulunurken ödüller kazanırsın." :
            "ACDcoin is a revolutionary cryptocurrency that offers fast transactions, low fees, and a secure network. By mining ACDcoin, you contribute to the security and decentralization of the network while earning rewards.",
            "Madenciliğe Nasıl Başlanır?" : "How to Start Mining?",
            "ACDcoin madencilik yazılımını indir ve yükle." : "Download and install the ACDcoin mining software.",
            "Bir madencilik havuzuna katıl veya solo madencilik yapmaya başla." : "Join a mining pool or start solo mining.",
            "Cüzdan adresin ile madencilik yazılımını yapılandır." : "Configure the mining software with your wallet address.",
            "Madenciliğe başla ve ACDcoin ödülleri kazan." : "Start mining and earn ACDcoin rewards.",
            // transactions page elements
            " ← Geri" : " ← Back",
            "ACDcoin İşlem" : "ACDcoin Transaction",
            "Gönderen Adresi" : "Sender Address",
            "Alıcı Adresi" : "Recipient Address",
            "Miktar" : "Amount",
            "ACDcoin Gönder" : "Send ACDcoin",
            // download page elements
            "ACDcoin İndir" : "Download ACDcoin",
            "ACDcoin, kullanıcılara güvenli ve yenilikçi bir dijital varlık deneyimi sunan bir kripto para birimidir." : "ACDcoin is a cryptocurrency that offers users a secure and innovative digital asset experience."
            //



        },
        jp: {
            "Ana Sayfa" : "ホーム",
            "Madencilik" : "マイニング",
            "Hakkımızda" : "私たちについて",
            "İletişim" : "接触",
            "Ekip" : "チーム",
            "İşlemler" : "取引",
            "İndir" : "ダウンロード",
            //index page elements jp
            "Geleceği Şekillendiren ACDcoin Ethereum ile Hayallerini Gerçekleştir!" : "ACDcoinを使用して未来を形作り、夢を実現します！",
            "İndirmek İçin Tıklayınız" : "クリックしてダウンロード",
            "ACDcoin Nedir?" : "ACDcoinとは？",
            "Merkezi olmayan bir dijital para birimidir ve blockchain teknolojisi üzerine inşa edilmiştir." : "ブロックチェーン技術を使用して構築された分散型デジタル通貨です。",
            "Daha Fazla Bilgi için Tıklayınız" : "詳細はこちらをクリック",
            // contact page elements jp
            "Bize Ulaşın" : "お問い合わせ",
            "Herhangi bir sorunuz varsa, bize ulaşmaktan çekinmeyin!" : "ご質問がある場合は、お気軽にお問い合わせください！",
            "YÖNETİM KURULU BAŞKANI:" : "CEO:",
            "GENEL MÜDÜR:" : "ゼネラルマネージャー:",
            "E-posta:" : "Email:",
            "Telefon numarası:" : "電話番号:",
            "Adres:" : "住所:",
            // team page elements jp
            "Baş Yönetici" : "CEO",
            "Genel müdür" : "研究開発マネージャー",
            "Yazılım geliştirme" : "ソフトウェア開発",
            "Araştırma ve Geliştirme Yöneticisi" : "研究開発マネージャー",
            "Sosyal Medya Yöneticisi" : "ソーシャルメディアマネージャー",
            // mining page elements jp
            "ACDcoin Madenciliğine Bugün Başlayın!" : "今日からACDcoinマイニングを始めましょう！",
            "Devrime katılın ve son teknoloji madencilik platformumuzla ACDcoin madenciliğine başlayın." : "革命に参加し、最新のマイニングプラットフォームでACDcoinマイニングを開始します。",
            "Neden ACDcoin Madenciliği Yapmalısınız？" : "なぜACDcoinをマイニングする必要がありますか？",
        },
        
    },
};

function translate(text, from, to) {
    if (to != "tr") {
        return translations[from][to][text] ?? text;
    }
    return getKeyByValue(translations[to][from], text) ?? text;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// translate("ana sayfa", "tr", "en");


// translate("ana sayfa", "tr", "en");

// translateElement(element, "en")

function translateElement(element, to) {
    element.innerHTML = translate(element.textContent.trim(), document.documentElement.lang, to);
}

// translateElements([el, el, el], "en")

function translateElements(elements, to) {
    elements.forEach(element => {
        translateElement(element, to);
    });
}

// document.querySelectorAll(".translate")

function autoTranslateElements(to) {
    document.querySelectorAll(".translate").forEach(element => {
        translateElement(element, to);
    });
}
