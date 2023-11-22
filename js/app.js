
// main.js used for all HTML path

(function () {

    // ======================= Multiple-assined variables ====================
      let body = document.querySelector('body');
      let mainContainer = document.querySelector('#mainContainer');
      let dropdown = document.querySelectorAll('.dropdown');
  
      console.log('window.machMedia:- ', window.matchMedia('(max-width: 768px)'));
      const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
      let touchSupported = window.matchMedia('(pointer: coarse)').matches;  // A finger on a touchscreen is a coarse pointer
      let pointerFineSupported = window.matchMedia('(pointer: fine)').matches; // A mouse or stylus is a fine pointer
      
    // SECTION: =============== Header, Navigator, and Footer (scroll-up)
    // ================================================================
    // let header = document.querySelector('header');
    let header = document.querySelector('.header');   // ########### header
    let navBar = document.querySelector('.nav-bar');
    let sticky = navBar.offsetTop;
    console.log('sticky is ', sticky);
  
    let scrollToTopEl = document.querySelector('#scrollToTop'); // Footer (scrool-up)
    let stickyPosition = 600;
  
    // Function-1
    addMultipleEvent(window, 'resize scroll load orientationchange', utillFunction);
    addMultipleEvent(document, 'resize scroll load orientationchange', utillFunction);
  
    function utillFunction(){
      let offSetWidth = body.offsetWidth;
      console.log('offSetWidth is ', offSetWidth);
      if (offSetWidth > 1006) {    // = 1024px
        dropdown?.forEach((li) => {
          li.classList.add("dropdown-wrapper");
        })
      }
      else {
        dropdown?.forEach((li) => {
          li.classList.remove("dropdown-wrapper");
        })
      }
  
      if (window.scrollY >= stickyPosition) {
        scrollToTopEl.classList.remove("scroll-up");
      } else {
        scrollToTopEl.classList.add("scroll-up");
      
      }
    }
  
    scrollToTopEl.addEventListener('click', scrollToTopFn, false);
    function scrollToTopFn() {
      window.scrollTo({
        top: 0,
          behavior: "smooth"
      });
    }
  
    // SECTION: ============================================= Navigator
    // ================================================================
  
    dropdown?.forEach(li => {
      let firstChiledElement = li.children[0]; 
      let secondChildElemet = firstChiledElement.children[1]; 
      if(secondChildElemet) {
          addEvent(secondChildElemet, 'click', dropDownToggle);
        }
    });
    function dropDownToggle(e){
      const target = getTarget(e); 
      const parentElemet = target.parentNode.parentNode;
      parentElemet.classList.toggle('open');
    }
  
  
    // SECTION-PART: ===================== Menu Icon - Max-Width 1024px
    // ================================================================
  
    let menusSmallSize = document.querySelector('#menu-small-size');
    let nav_list = document.querySelector('.nav-list');    // ############ navContainer
    let menu_container = document.querySelector('.menu-container');
  
    nav_list.style.left="-100%";  // ###########
    let btnChild = menu_container.firstElementChild;
  
    addEvent(menusSmallSize, 'click', () => {
      menusSmallSize.classList.toggle('active');
    })
  
    addEvent(btnChild, 'click', menuToggle);
  
    function menuToggle(){
      if (nav_list.style.left=="-100%") {
        nav_list.style.left="0";
      }
      else {
        nav_list.style.left="-100%";
      }     
    }
  
      // SECTION: =========================================== Footer-Date
      // ================================================================
      let footer_2 = document.querySelector('#_footer');
      let footerDate = footer_2.querySelector('#footerDate');
  
      const today = new Date();
      const year = today.getFullYear();
  
      footerDate.innerHTML = '<p>&copy ' + year + ' Lalemda Hamza\'s Family. All rights reserved.</p>';
  
      
      // ##### For Language Change
      // NOTE: For language of Amharic and English
      let languageToggle = document.getElementById("language-toggle");
      let amharicLang  = document.querySelectorAll('._st');
      let englishLang  = document.querySelectorAll('._en');
  
      if(!localStorage.getItem('checkboxState')) {
          languageStorage();  
      } else {
      setLanguage();
      }
  
      function languageStorage() {
          localStorage.setItem("checkboxState", languageToggle.checked);
          setLanguage();
      }
  
      function setLanguage() {
          let storedValue = localStorage.getItem("checkboxState");
          if (storedValue === "true") {
          languageToggle.checked = true;
          checkedTrue();
          } else {
          languageToggle.checked = false;
          checkedFalse();
          }
      }
  
      function checkedTrue() {
          if(amharicLang) {
          amharicLang.forEach(am => {
              am.classList.remove('hide-lang');
          });
          }
          if(englishLang) {
          englishLang.forEach(en => {
              en.classList.add('hide-lang');
          });
          }
      }
      function checkedFalse() {
          if(amharicLang) {
          amharicLang.forEach(am => {
              am.classList.add('hide-lang');
          });
          }
          if(englishLang) {
          englishLang.forEach(en => {
              en.classList.remove('hide-lang');
          });
          }
      }
  
      languageToggle.addEventListener("change", languageStorage);



    // SECTION: For Password check
    // ================================================================

    const pass_container = document.querySelector('#passwordContainer');
    const check_pass = document.querySelector('#checkPass');
    const show_pass = document.querySelector('#showPass');
    let messageElement = document.querySelector('#message');
    let passwordInput = document.querySelector('#passwordInput');

    if(!localStorage.getItem('checkPass')) {
      passStorage();  
    } else {
    checkPass();
    }

    function passStorage() {
      pass_container.classList.remove('hide-pass');
    }

    function checkPass() {
      let localStoredValue = localStorage.getItem("checkPass");
      fetch('../../../js/users.json')
      .then(response => response.json())
      .then(data => {
        var storedPassword = data.password;
        if (localStoredValue === storedPassword) {
          pass_container.classList.add('hide-pass');
        } else {
          pass_container.classList.remove('hide-pass');
        }
      })
      .catch(error => {
        showMessage("Error fetching user data.");
        console.error(error);
      });
      
    }

    function checkPassword() {
      let passwordInputValue = passwordInput.value;
      fetch('../../../js/users.json')
        .then(response => response.json())
        .then(data => {
          let storedPassword = data.password;
          if (passwordInputValue === storedPassword) {
            localStorage.setItem("checkPass", passwordInputValue);
            window.location.reload();
            pass_container.classList.add('hide-pass');
            // showMessage("Password is correct!");
          } else {
            showMessage("Password is incorrect. Please try again.");
          }
        })
        .catch(error => {
          showMessage("Error fetching user data.");
          console.error(error);
        });
    }
    
    function showMessage(message) {
      messageElement.textContent = message;
    }

    function showPassword() {
      if(passwordInput.value.length == 0) {
        showMessage("Please enter the password.");
      } else {
        passwordInput.type = show_pass.checked ? 'text' : 'password';
      }
    }

    check_pass.addEventListener('click', checkPassword, false);
    show_pass.addEventListener('change', showPassword, false);
    passwordInput.addEventListener('focus', function() {
      messageElement.textContent = '';
    });


    // SECTION: Log Out
    // ================================================================
    let log_out = document.querySelector('#logOut');

    function logOutFn () {
      if(localStorage.getItem('checkPass')) {
        localStorage.removeItem('checkPass');
        window.location.reload(); 
      } else {
        console.log('No "checkPass" local storage');
      }
    }

    log_out.addEventListener('click', logOutFn, false);
  
  }())
  
