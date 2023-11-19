
// import.js is used to create a HTML template of Header, Navigator, and Footer for different paths in the project


(function () {
    let className = {};
    let pathnameTruth =  new Array();
    let _header = document.querySelector('.header');
    let _navigator = document.querySelector('.nav-bar');
    let _footer = document.querySelector('.footer-container');
    let mainPathname = ['home','saliyat.html','zemzem.html','balenge.html','shemsiya.html','all-family.html',
                        
                        'denur.html','redi.html','sadiya.html','mekiya.html','juhar.html','muntaha.html','mussa.html',
                        'hussen.html','nasser.html','zeyne.html','shemsedin.html','seyd.html','siraj.html','munaja.html', 'aysha.html',
                        'sefiya.html','kedir.html','fatima.html','medina.html','adem.html','musema.html',
                        'ibrahim.html', 'foziya.html',

                        'shemsiya-s-denur.html','munaja-s-denur.html','mustefa-denur.html','aysha-s-mustefa.html',
                        'rahmet-mustefa.html','abdulkerim-denur.html','nefisa-s-abdulkerim.html','rukiya-abdulkerim.html',
                        'aysha-abdulkerim.html','usriya-abdulkerim.html','fedlu-denur.html','mudesir-denur.html',
                        'nebiyat-denur.html','hafiza-denur.html','remla-denur.html','suad-denur.html',

                        'amira-s-redi.html','jafer-redi.html','kalid-redi.html','ikram-redi.html','hayder-redi.html',
                        'hayat-redi.html','nejat-redi.html','haniya-redi.html',

                        'ibrahim-s-sadiya.html','betula-ibrahim.html','seman-s-betula.html','abubeker-seman.html',
                        'hanan-seman.html','muhammad-ibrahim.html','rihanna-s-muhammad.html','kalid-muhammad.html',
                        'ikram-muhammad.html','zulfa-ibrahim.html','redwan-s-zulfa.html','huzeyfa-redwan.html',
                        'rahmet-redwan.html','abdulsemed-ibrahim.html','jemal-ibrahim.html','hayat-s-jemal.html',
                        'suad-jemal.html', 'nuredin-ibrahim.html', 'nesriya-ibrahim.html','fayza-ibrahim.html',

                        'nassir-s-mekiya.html','siti-nassir.html','salman-s-siti.html','roman-salman.html',
                        'kewser-salman.html','nuredin-nassir.html','fetiya-nassir.html','muhammad-s-fetiya.html',
                        'abdulsemed-muhammad.html','ismael-muhammad.html','mubarek-nassir.html','ziyada-nassir.html',
                        'abdulneja-nassir.html','hayat-nassir.html','sebadin-nassir.html',

                        'sadiya-s-juhar.html','rukiya-juhar.html','nesriya-juhar.html','hussen-s-nesriya.html',
                        'abdulmalik-juhar.html',

                        'abdulfeta-muntaha.html',

                        'hayat-s-mussa.html','hala-mussa.html','reyan-mussa.html','muhammad-mussa.html',

                        'jemila-s-hussen.html','leyla-hussen.html','mudin-s-leyla.html','hussen-mudin.html',
                        'welid-mudin.html','abdela-hussen.html','drar-hussen.html','selehadin-hussen.html',
                        'ferehadin-hussen.html','muna-hussen.html','roza-hussen.html','sadam-hussen.html',

                        'nesriya-s-nasser.html','rihanna-nasser.html','reyan-nasser.html','remza-nasser.html',

                        'nefisa-s-zeyne.html','fuad-zeyne.html','mubarek-zeyne.html','semira-s-mubarak.html',
                        'muhammad-mubarak.html','nesredin-zeyne.html','amir-zeyne.html',

                        'selma-s-shemsedin.html','ametula-shemsedin.html','redwan-s-ametula.html','misbah-redwan.html',
                        'sereya-redwan.html','shuhayb-redwan.html','rina-redwan.html','zebiba-shemsedin.html',
                        'awel-s-zebiba.html','ayub-awel.html','sheyla-awel.html','alfiya-shemsedin.html',
                        'abdi-s-alfiya.html','muhammad-abdi.html','linda-abdi.html','fetiya-shemsedin.html',
                        'nejat-shemsedin.html','iman-shemsedin.html','muktar-s-iman.html',

                        'asiya-s-seyd.html','elham-seyd.html',

                        'zebiba-s-siraj.html','haba-siraj.html','awd-siraj.html','muhammad-siraj.html',
                        'hira-siraj.html',

                        'xxx-s-munaja.html','halima.html',

                        'redi-s-aysha.html',

                        'suleyman-s-sefiya.html','muhammad-suleyman.html','xxx-s-muhammad.html','fetiya-suleyman.html',
                        'shemse-s-fetiya.html','kalid-shemse.html','rem-shemse.html','abubakar-shemse.html',
                        'muhammad-shemse.html',

                        'nuriya-s-kedir.html','keyriya-s-kedir.html','zahara-kedir.html','kasim-s-zahara.html',
                        'ibrahim-kasim.html','muhammad-kasim.html','munaja-kedir.html','shemsu-s-munaja.html',
                        'siham-shemsu.html','rabiya-shemsu.html','mina-shemsu.html','aymen-shemsu.html','imran-shemsu.html',
                        'daniya-shemsu.html','suriya-kedir.html','dinsefa-kedir.html','leyla-kedir.html',

                        'jemal-s-fatima.html','hadiya-jemal.html','kedir-s-hadiya.html','fatim-kedir.html',
                        'shemsedin-kedir.html','redwan-kedir.html','abubakar-kedir.html','imran-kedir.html',
                        'mahir-kedir.html','foziya-kedir.html','meydiya-kedir.html','sultan-s-meydiya.html',
                        'huzeyfa-sultan.html','neja-jemal.html','temima-s-neja.html','nebil-neja.html','asna-neja.html',
                        'halwa-neja.html','sara-neja.html','leyla-jemal.html','suad-s-leyla.html','muhir-suad.html',
                        'abdulkerim-suad.html','sebadin-suad.html','amar-suad.html','sara-suad.html','lubaba-jemal.html',
                        'nur-s-lubaba.html','kedir-nur.html','mahir-nur.html','muhammad-jemal.html','sultan-jemal.html',
                        'semira-s-sultan.html','siham-sultan.html',

                        'sheycho-s-medina.html','keyriya-sheycho.html','sherefa-sheycho.html','zebiba-sheycho.html',
                        'umer-s-zebiba.html','fuad-umer.html','reyan-umer.html','toufik-umer.html','muzeyfa-umer.html',
                        'sadiya-sheycho.html','fetiya-sheycho.html','feysel-sheycho.html','seyfedin-sheycho.html',

                        'mekiya-s-adem.html','reaff-adem.html','hikma-adem.html','sumeya-adem.html',

                        'sofiya-s-musema.html','firdaws-musema.html','afiza-musema.html','nusra-musema.html',

                        'semeredin-s-foziya.html','sara-semeredin.html','abubeker-semeredin.html',
                        'sheza-semeredin.html','sharehad-semeredin.html',

                        'lalemda.html', 'gallery.html', 'about-us.html', 'contact-us.html', 'news-and-event.html',
                    ]   
    ;
    
    
    // SECTION: ==================== Header =======================
    _header.insertAdjacentHTML("afterbegin", mainHeaderFn());


    // SECTION: ==================== Navigator ====================

    let location = window.location.href;
    console.log('Window location is:-', location);
    let url = new URL(location);
    console.log('URL location is- ', url);
    let path_name = url.pathname;
    console.log('Pathname is:- ', path_name);

    function checkPathname() {
        mainPathname.forEach((pathname) => {
            pathnameTruth.push(checkPathnameTruth(pathname).toString()) ;
        })
    }
    checkPathname()

    function checkPathnameTruth(pathname) {
        let path = path_name.split('/');
        // console.log('split path is:- ', path);
        let cont = [];
        path.forEach((pn) => {
            if(pn.toLowerCase() === pathname.toLowerCase())
            cont.push('true');
        });
        return cont.includes('true');
    }
    console.log('pathnameTruth is', pathnameTruth);
    let setUrl = { 
        baseHome: '../../../',

        baseSa: '../',
        baseZe: '../',
        baseBa: '../',
        baseSh: '../',
        baseAf: '../',
        baseHo: '../',

        sa: '../sa/',
        ze: '../ze/',
        ba: '../ba/',
        sh: '../sh/',
        af: '../af/',
        ho: '../ho/',
        
        base1: '../',
        sa1: '../../sa/',
        ze1: '../../ze/',
        ba1: '../../ba/',
        sh1: '../../sh/',
        af1: '../../af/',
        ho1: '../../ho/',
    }

    function setClassName() {
        if(pathnameTruth.indexOf('true') === 0) { /** Home */
            className.ho = 'active';
        } else {
            className.ho = '';
        }
        if(pathnameTruth.indexOf('true') === 1) { /** Saliyat */
            className.sa = 'active';
            setUrl.baseHome = '../../';
            [setUrl.base1, setUrl.sa1, setUrl.sa, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
            setUrl.ze1 = '../ze/';
            setUrl.ba1 = '../ba/';
            setUrl.sh1 = '../sh/';
            setUrl.af1 = '../af/';
        } else {
            className.sa = '';
        }
        if(pathnameTruth.indexOf('true') === 2) { /** Zemzem */
            className.ze = 'active';
            setUrl.baseHome = '../../';
            [setUrl.base1, setUrl.ze1, setUrl.ze, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
            setUrl.sa1 = '../sa/';
            setUrl.ba1 = '../ba/';
            setUrl.sh1 = '../sh/';
            setUrl.af1 = '../af/';
        } else {
            className.ze = '';
        }
        if(pathnameTruth.indexOf('true') === 3) { /** Balenge */
            className.ba = 'active';
            setUrl.baseHome = '../../';
            [setUrl.base1, setUrl.ba1, setUrl.ba, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
            setUrl.sa1 = '../sa/';
            setUrl.ze1 = '../ze/';
            setUrl.sh1 = '../sh/';
            setUrl.af1 = '../af/';
        } else {
            className.ba = '';
        }
        if(pathnameTruth.indexOf('true') === 4) { /** Shemsiya */
            className.sh = 'active';
            setUrl.baseHome = '../../';
            [setUrl.base1, setUrl.sh1, setUrl.sh, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
            setUrl.sa1 = '../sa/';
            setUrl.ze1 = '../ze/';
            setUrl.ba1 = '../ba/';
            setUrl.af1 = '../af/';
        } else {
            className.sh = '';
        }
        if(pathnameTruth.indexOf('true') === 5) { /** All-Family */
            className.af = 'active';
            setUrl.baseHome = '../../';
            [setUrl.base1, setUrl.af1, setUrl.af, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
            setUrl.sa1 = '../sa/';
            setUrl.ze1 = '../ze/';
            setUrl.ba1 = '../ba/';
            setUrl.sh1 = '../sh/';
        } else {
            className.af = '';
        }

        [6,7,8,9,10,11,12].forEach(function(v, i, a) {              // Saliyat - Children
            if(pathnameTruth.indexOf('true') === v) {
                className.sa = 'active';
                [setUrl.base1, setUrl.baseSa] = Array(2).fill('');
                [setUrl.sa1, setUrl.sa] = Array(2).fill('../');
                if(a[i] == 6) {className.denur = 'active'}
                if(a[i] == 7) {className.redi = 'active'}
                if(a[i] == 8) {className.sadiya = 'active'}
                if(a[i] == 9) {className.mekiya = 'active'}
                if(a[i] == 10) {className.juhar = 'active'}
                if(a[i] == 11) {className.muntaha = 'active'}
                if(a[i] == 12) {className.mussa = 'active'}
            }
        });

        [13,14,15,16,17,18,19,20].forEach(function(v, i, a) {        // Zemzem - Children
            if(pathnameTruth.indexOf('true') === v) {
                className.ze = 'active';
                [setUrl.base1, setUrl.baseZe] = Array(2).fill('');
                [setUrl.ze1, setUrl.ze] = Array(2).fill('../');
                if(a[i] == 13) {className.hussen = 'active'}
                if(a[i] == 14) {className.nasser = 'active'}
                if(a[i] == 15) {className.zeyne = 'active'}
                if(a[i] == 16) {className.shemsedin = 'active'}
                if(a[i] == 17) {className.seyd = 'active'}
                if(a[i] == 18) {className.siraj = 'active'}
                if(a[i] == 19) {className.munaja = 'active'}
                if(a[i] == 20) {className.aysha = 'active'}
            }
        });

        [21,22,23,24,25,26].forEach(function(v, i, a) {                // Balenge - Children
            if(pathnameTruth.indexOf('true') === v) {
                className.ba = 'active';
                [setUrl.base1, setUrl.baseBa] = Array(2).fill('');
                [setUrl.ba1, setUrl.ba] = Array(2).fill('../');
                if(a[i] == 21) {className.sefiya = 'active'}
                if(a[i] == 22) {className.kedir = 'active'}
                if(a[i] == 23) {className.fatima = 'active'}
                if(a[i] == 24) {className.medina = 'active'}
                if(a[i] == 25) {className.adem = 'active'}
                if(a[i] == 26) {className.musema = 'active'}
            }
        });

        [27,28].forEach(function(v, i, a) {                         // Shemsiya - Children
            if(pathnameTruth.indexOf('true') === v) {
                className.sh = 'active';
                [setUrl.base1, setUrl.baseSh] = Array(2).fill('');
                [setUrl.sh1, setUrl.sh] = Array(2).fill('../');
                if(a[i] == 27) {className.ibrahim = 'active'}
                if(a[i] == 28) {className.foziya = 'active'}
            }
        });

        // Saliyat - All Familiy
        [29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,
            45,46,47,48,49,50,51,52,
            53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,
            73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,
            88,89,90,91,92,
            93,
            94,95,96,97
        ].forEach( v => {
            if(pathnameTruth.indexOf('true') === v) {
                className.sa = 'active';
                [setUrl.base1, setUrl.baseSa] = Array(2).fill('');
                [setUrl.sa1, setUrl.sa] = Array(2).fill('../');
            }
        });

        [29,30,31,32,33,34,35,36,37,38,39,40,41,42,43].forEach( v => {      // Saliyat - Denur
            if(pathnameTruth.indexOf('true') === v) { className.denur = 'active'; }
        });
        [45,46,47,48,49,50,51,52].forEach( v => {       // Saliyat - Redi
            if(pathnameTruth.indexOf('true') === v) { className.redi = 'active'; }
        });
        [53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72].forEach( v => {   // Saliyat - Sadiya
            if(pathnameTruth.indexOf('true') === v) { className.sadiya = 'active'; }
        });
        [73,74,75,76,77,78,79,80,81,82,83,84,85,86,87].forEach( v => {      // Saliyat - Mekiya
            if(pathnameTruth.indexOf('true') === v) { className.mekiya = 'active'; }
        });
        [88,89,90,91,92].forEach( v => {        // Saliyat - Juhar
            if(pathnameTruth.indexOf('true') === v) { className.juhar = 'active'; }
        });
        [93].forEach( v => {        // Saliyat - Muntaha
            if(pathnameTruth.indexOf('true') === v) { className.muntaha = 'active'; }
        });
        [94,95,96,97].forEach( v => {    // Saliyat - Mussa
            if(pathnameTruth.indexOf('true') === v) { className.mussa = 'active'; }
        });

        // Zemzem - All Familiy
        [98,99,100,101,102,103,104,105,106,107,108,109,
            110,111,112,113,
            114,115,116,117,118,119,120,
            121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,
            140,141,
            142,143,144,145,146,
            147,148,
            149
        ].forEach( v => {
            if(pathnameTruth.indexOf('true') === v) {
                className.ze = 'active';
                [setUrl.base1, setUrl.baseZe] = Array(2).fill('');
                [setUrl.ze1, setUrl.ze] = Array(2).fill('../');
            }
        });

        [98,99,100,101,102,103,104,105,106,107,108,109].forEach( v => {      // Zemzem - Hussen
            if(pathnameTruth.indexOf('true') === v) { className.hussen = 'active'; }
        });
        [110,111,112,113].forEach( v => {      // Zemzem - Nasser
            if(pathnameTruth.indexOf('true') === v) { className.nasser = 'active'; }
        });
        [114,115,116,117,118,119,120].forEach( v => {      // Zemzem - Zeyne
            if(pathnameTruth.indexOf('true') === v) { className.zeyne = 'active'; }
        });
        [121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139].forEach( v => { // Zemzem - Shemsedin
            if(pathnameTruth.indexOf('true') === v) { className.shemsedin = 'active'; }
        });
        [140,141].forEach( v => {      // Zemzem - Seyd
            if(pathnameTruth.indexOf('true') === v) { className.seyd = 'active'; }
        });
        [142,143,144,145,146].forEach( v => {      // Zemzem - Siraj
            if(pathnameTruth.indexOf('true') === v) { className.siraj = 'active'; }
        });
        [147,148].forEach( v => {      // Zemzem - Munaja
            if(pathnameTruth.indexOf('true') === v) { className.munaja = 'active'; }
        });
        [149].forEach( v => {      // Zemzem - Aysha
            if(pathnameTruth.indexOf('true') === v) { className.aysha = 'active'; }
        });

        // Balenge - All Familiy
        [150,151,152,153,154,155,156,157,158,
            159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,
            176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,
            210,211,212,213,214,215,216,217,218,219,220,221,222,
            223,224,225,226,
            227,228,229,230
        ].forEach( v => {
            if(pathnameTruth.indexOf('true') === v) {
                className.ba = 'active';
                [setUrl.base1, setUrl.baseBa] = Array(2).fill('');
                [setUrl.ba1, setUrl.ba] = Array(2).fill('../');
            }
        });

        [150,151,152,153,154,155,156,157,158].forEach( v => {      // Balenge - Sefiya
            if(pathnameTruth.indexOf('true') === v) { className.sefiya = 'active'; }
        });
        [159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175].forEach( v => {      // Balenge - Kedir
            if(pathnameTruth.indexOf('true') === v) { className.kedir = 'active'; }
        });
        [176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,
            196,197,198,199,200,201,202,203,204,205,206,207,208,209].forEach( v => {      // Balenge - Fatima
            if(pathnameTruth.indexOf('true') === v) { className.fatima = 'active'; }
        });
        [210,211,212,213,214,215,216,217,218,219,220,221,222].forEach( v => {      // Balenge - Medina
            if(pathnameTruth.indexOf('true') === v) { className.medina = 'active'; }
        });
        [223,224,225,226].forEach( v => {      // Balenge - Adem
            if(pathnameTruth.indexOf('true') === v) { className.adem = 'active'; }
        });
        [227,228,229,230].forEach( v => {      // Balenge - Musema
            if(pathnameTruth.indexOf('true') === v) { className.musema = 'active'; }
        });

        // Shemsiya - All Familiy
        [231,232,233,234,235].forEach( v => {
            if(pathnameTruth.indexOf('true') === v) {
                className.sh = 'active';
                [setUrl.base1, setUrl.baseSh] = Array(2).fill('');
                [setUrl.sh1, setUrl.sh] = Array(2).fill('../');
            }
        });

        [231,232,233,234,235].forEach( v => {      // Shemsiya - Foziya
            if(pathnameTruth.indexOf('true') === v) { className.foziya = 'active'; }
        });

        [236, 237, 238, 239, 240].forEach( v => {                  /** All Home - Lalemda, Gallery,  */
            if(pathnameTruth.indexOf('true') === v) { 
                className.ho = 'active';
                setUrl.baseHome = '../../';
                [setUrl.base1, setUrl.baseSa, setUrl.baseZe, setUrl.baseBa, setUrl.baseSh, setUrl.baseAf] = Array(8).fill('');
                setUrl.sa1 = '../sa/';
                setUrl.ze1 = '../ze/';
                setUrl.ba1 = '../ba/';
                setUrl.sh1 = '../sh/';
                setUrl.af1 = '../af/';
            }
        });
        

    }
    setClassName();

    _navigator.insertAdjacentHTML('afterbegin', mainNavigatorFn(className));


    // SECTION: ==================== Footer ====================

    _footer.insertAdjacentHTML("afterbegin", mainFooterFn());


    // =================== Functions ========================
    // =================== Function for Header ==============

    function mainHeaderFn () {
        return `
            <header>
                <div class="header-container">
                    <div class="header-container-one">
                        <a href="./">
                            <h1>
                                <span class="_en">Welcome to Lalemda Hamza's Family</span>
                                <span class="_st hide-lang">የላለምዳ ሃምዛ አቦት ወልደ ቤተሰብ ጋር አበይ በፈየ መጣሙ</span>
                            </h1>
                        </a>
                    </div>
                    <div class="header-container-two">
                        <div class="header-section">
                            <p>
                                <i class="bi bi-question-circle"></i>
                                <span class="_en">Have a question</span>
                                <span class="_st hide-lang">ትሳሎም ግዝ አላ</span>?
                            </p>
                        </div>
                        <div class="header-section">
                            <a href="tel:+251910076623"><i class="bi bi-telephone"></i>0910076623</a>
                            <p>or</p>
                            <a href="tel:+251929361908">0929361908</a>
                        </div>
                        <div class="header-section">
                            <a href="mailto:nurnas20@gmail.com">
                                <i class="bi bi-envelope-at"></i>nurnas20@gmail.com
                            </a>
                        </div>
                        <div class="header-section">
                            <p><i class="bi bi-envelope-paper"></i>2156</p>
                        </div>
                    </div>
                </div>
            </header>
        `
    }   


    // =================== Function for Navigator ==============

    function mainNavigatorFn(className) {
        return `
            <nav class ="nav-container">
                <div class="logo">
                    <a href="${setUrl.baseHome}"><img src="${setUrl.baseHome}assets/all/logo/logo2.png" alt="Lalemda Hamza logo"></a>
                </div>

                <div class="nav-list">
                    <ul id="MenuItems" class="menu-items">
                        <li class="nav-link-wrapper no-link-wrapper">
                            <a class="${className.ho} dropdown-no-link" href="${setUrl.baseHome}">
                                <i class="bi bi-houses"></i>
                                <span class="_en">Home</span><span class="_st hide-lang">ጋር</span>
                            </a>
                        </li>

                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.sa} dropdown-link" href="${setUrl.baseSa}${setUrl.sa}saliyat.html">
                                    <i class="bi bi-person-fill-dash"></i>
                                    <span class="_en">Saliyat</span><span class="_st hide-lang">ሳሊያት</span>
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a class=${className.denur} href="${setUrl.base1}${setUrl.sa1}denur/denur.html"><i class="bi bi-person-fill"></i><span class="_en">Denur Lalemda</span><span class="_st hide-lang">ደኑር ላለምዳ</span></a></li>
                                <li><a class=${className.redi} href="${setUrl.base1}${setUrl.sa1}redi/redi.html"><i class="bi bi-person-fill"></i><span class="_en">Redi Usman</span><span class="_st hide-lang">ረዲ ኡስማን</span></a></li>
                                <li><a class=${className.sadiya} href="${setUrl.base1}${setUrl.sa1}sadiya/sadiya.html"><i class="bi bi-person-fill"></i><span class="_en">Sadiya Lalemda</span><span class="_st hide-lang">ሳዲያ ላለምዳ</span></a></li>
                                <li><a class=${className.mekiya} href="${setUrl.base1}${setUrl.sa1}mekiya/mekiya.html"><i class="bi bi-person-fill"></i><span class="_en">Mekiya Lalemda</span><span class="_st hide-lang">መኪያ ላለምዳ</span></a></li>
                                <li><a class=${className.juhar} href="${setUrl.base1}${setUrl.sa1}juhar/juhar.html"><i class="bi bi-person-fill-dash"></i><span class="_en">Juhar Lalemda</span><span class="_st hide-lang">ጁሃር ላለምዳ</span></a></li>
                                <li><a class=${className.muntaha} href="${setUrl.base1}${setUrl.sa1}muntaha/muntaha.html"><i class="bi bi-person-fill"></i><span class="_en">Muntaha Lalemda</span><span class="_st hide-lang">ሙንታሃ ላለምዳ</span></a></li>
                                <li><a class=${className.mussa} href="${setUrl.base1}${setUrl.sa1}mussa/mussa.html"><i class="bi bi-person-fill"></i><span class="_en">Mussa Lalemda</span><span class="_st hide-lang">ሙሳ ላለምዳ</span></a></li>
                            </ul>
                        </li>

                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.ze} dropdown-link" href="${setUrl.baseZe}${setUrl.ze}zemzem.html">
                                    <i class="bi bi-person-fill-dash"></i>
                                    <span class="_en">Zemzem</span><span class="_st hide-lang">ዘምዘም</span> 
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a class=${className.hussen} href="${setUrl.base1}${setUrl.ze1}hussen/hussen.html"><i class="bi bi-person-fill"></i><span class="_en">Hussen Lalemda</span><span class="_st hide-lang">ሁሴን ላለምዳ</span></a></li>
                                <li><a class=${className.nasser} href="${setUrl.base1}${setUrl.ze1}nasser/nasser.html"><i class="bi bi-person-fill"></i><span class="_en">Nasser Lalemda</span><span class="_st hide-lang">ናስር ላለምዳ</span></a></li>
                                <li><a class=${className.zeyne} href="${setUrl.base1}${setUrl.ze1}zeyne/zeyne.html"><i class="bi bi-person-fill"></i><span class="_en">Zeyne Lalemda</span><span class="_st hide-lang">ዘይኔ ላለምዳ</span></a></li>
                                <li><a class=${className.shemsedin} href="${setUrl.base1}${setUrl.ze1}shemsedin/shemsedin.html"><i class="bi bi-person-fill-dash"></i><span class="_en">Shemsedin Lalemda</span><span class="_st hide-lang">ሸምሰዲን ላለምዳ</span></a></li>
                                <li><a class=${className.seyd} href="${setUrl.base1}${setUrl.ze1}seyd/seyd.html"><i class="bi bi-person-fill-dash"></i><span class="_en">Seyd Lalemda</span><span class="_st hide-lang">ሰይድ ላለምዳ</span></a></li>
                                <li><a class=${className.siraj} href="${setUrl.base1}${setUrl.ze1}siraj/siraj.html"><i class="bi bi-person-fill"></i><span class="_en">Siraj Lalemda</span><span class="_st hide-lang">ሲራጅ ላለምዳ</span></a></li>
                                <li><a class=${className.munaja} href="${setUrl.base1}${setUrl.ze1}munaja/munaja.html"><i class="bi bi-person-fill"></i><span class="_en">Munaja Lalemda</span><span class="_st hide-lang">ሙናጃ ላለምዳ</span></a></li>
                                <li><a class=${className.aysha} href="${setUrl.base1}${setUrl.ze1}aysha/aysha.html"><i class="bi bi-person-fill"></i><span class="_en">Aysha Lalemda</span><span class="_st hide-lang">አይሻ ላለምዳ</span></a></li>
                            </ul>  
                        </li>
                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.ba} dropdown-link" href="${setUrl.baseBa}${setUrl.ba}balenge.html">
                                    <i class="bi bi-person-fill-dash"></i>
                                    <span class="_en">Balenge</span><span class="_st hide-lang">ባለንጌ</span> 
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a class=${className.sefiya} href="${setUrl.base1}${setUrl.ba1}sefiya/sefiya.html"><i class="bi bi-person-fill"></i><span class="_en">Sefiya Lalemda</span><span class="_st hide-lang">ሰፊያ ላለምዳ</span></a></li>
                                <li><a class=${className.kedir} href="${setUrl.base1}${setUrl.ba1}kedir/kedir.html"><i class="bi bi-person-fill-dash"></i><span class="_en">Kedir Lalemda</span><span class="_st hide-lang">ከድር ላለምዳ</span></a></li>
                                <li><a class=${className.fatima} href="${setUrl.base1}${setUrl.ba1}fatima/fatima.html"><i class="bi bi-person-fill"></i><span class="_en">Fatima Lalemda</span><span class="_st hide-lang">ፋጢማ ላለምዳ</span></a></li>
                                <li><a class=${className.medina} href="${setUrl.base1}${setUrl.ba1}medina/medina.html"><i class="bi bi-person-fill"></i><span class="_en">Medina Lalemda</span><span class="_st hide-lang"> መዲና ላለምዳ</span></a></li>
                                <li><a class=${className.adem} href="${setUrl.base1}${setUrl.ba1}adem/adem.html"><i class="bi bi-person-fill"></i><span class="_en">Adem Lalemda</span><span class="_st hide-lang">አደም ላለምዳ</span></a></li>
                                <li><a class=${className.musema} href="${setUrl.base1}${setUrl.ba1}musema/musema.html"><i class="bi bi-person-fill"></i><span class="_en">Musema Lalemda</span><span class="_st hide-lang">ሙሰማ ላለምዳ</span></a></li>
                            </ul>  
                        </li>
                        <li class="nav-link-wrapper dropdown">
                            <div class="inner-wrapper">
                                <a class="${className.sh} dropdown-link" href="${setUrl.baseSh}${setUrl.sh}shemsiya.html">
                                    <i class="bi bi-person-fill"></i>
                                    <span class="_en">Shemsiya</span><span class="_st hide-lang">ሸምሲያ</span>  
                                </a>
                                <span class="dropdown-closed nav-span-two"></span>
                            </div>
                            <ul class="dropdown-list">
                                <li><a class=${className.ibrahim} href="${setUrl.base1}${setUrl.sh1}ibrahim/ibrahim.html"><i class="bi bi-person-fill"></i><span class="_en">Ibrahim Lalemda</span><span class="_st hide-lang">ኢብራሂም ላለምዳ</span></a></li>
                                <li><a class=${className.foziya} href="${setUrl.base1}${setUrl.sh1}foziya/foziya.html"><i class="bi bi-person-fill"></i><span class="_en">Foziya Lalemda</span><span class="_st hide-lang">ፎዚያ ላለምዳ</span></a></li>
                            </ul>  
                        </li>
                        <li class="nav-link-wrapper no-link-wrapper">
                            <a class="${className.af} dropdown-no-link" href="${setUrl.baseAf}${setUrl.af}all-family.html">
                                <i class="bi bi-people-fill"></i>
                                <span class="_en">All Family</span><span class="_st hide-lang">ኡለምካ ቤተሰብ</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="lang-menu">
                    <div class="switch">
                        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox">
                        <label for="language-toggle"></label>
                        <span class="on">EN</span><span class="off">ስል</span>
                    </div>
                    
                    <div class="menu-container">
                        <button id="menu-small-size" class="menu-icon">
                            <span class="menu-span"></span>
                            <span class="menu-span"></span>
                        </button>
                    </div>
                </div>
            </nav>
        `
    }


    // =================== Function for Footer ==============

    function mainFooterFn() {
        return `
            <footer>
                <div class="inner-footer-container-1 _grid-column-3">
                    <div class="col">
                        <h2><span class="_en">Quick Links</span><span class="_st hide-lang">ኮሞ ላትራክቦት</span></h2>
                        <ul>
                            <li><a href="../../../lalemda/ho/lalemda.html"><span class="_en">Lalemda-Family</span><span class="_st hide-lang">ላሌምዳ-ቤተሰብ</span></a></li>
                            <li><a href="../../../lalemda/ho/contact-us.html"><span class="_en">Any questions? Contact Us</span><span class="_st hide-lang">ትሳሎም ግዝ አላ? ተሳሉን</span></a></li>
                            <li><a href="../../../lalemda/ho/gallery.html"><span class="_en">All Gallery</span><span class="_st hide-lang">ፎቶ ማዕከል</span></a></li>
                            <li><a href="#"><span class="_en">News and Events</span><span class="_st hide-lang">ዜናዋ የትረሼ ግዝ</span></a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2><span class="_en">Information About</span><span class="_st hide-lang">ስለ መረጃ</span></h2>
                        <ul>
                            <li><a href="../../../lalemda/ho/about-us.html"><span class="_en">About Us</span><span class="_st hide-lang">ስለ ኢኛ</span></a></li>
                            <li><a href="#"><span class="_en">About Lalemda Association</span><span class="_st hide-lang">ስለ ላለምዳ ማህበር</span></a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2><span class="_en">Information For</span><span class="_st hide-lang">መረጃ ላቦት</span></h2>
                        <ul>
                            <li><a href="#"><span class="_en">All Family</span><span class="_st hide-lang">ለሁላምካ ቤተሰብ</span></a></li>
                            <li><a href="#"><span class="_en">Second Generation and Below It</span><span class="_st hide-lang">ለሆሽተኛ ትውልድዋ ቱወ ኮሎ</span></a></li>
                        </ul>
                    </div>
                </div>

                <div class="inner-footer-container-2">
                    <span id="footerDate"></span>
                    <p id="myElement" class="nuna">Powerd by <a href="#">NuNa WebTech</a></p>
                </div>

                <div id="scrollToTop" class="scroll-up">
                    <div class="scrollToTop">
                        <i class="bi bi-chevron-up"></i>
                    </div>
                </div>
            </footer>
        `
    }

}());
