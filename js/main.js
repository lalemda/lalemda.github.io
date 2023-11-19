// index.js file is mainly used for home-page template

(function () {
    // GENERIC: ============================================= Variables
    // ================================================================
    let _gallery_body = document.querySelector('body');
    let touchSupported = window.matchMedia('(pointer: coarse)').matches;  // A finger on a touchscreen is a coarse pointer
    let pointerFineSupported = window.matchMedia('(pointer: fine)').matches; // A mouse or stylus is a fine pointer


    // GENERIC: ======================================== Truncated Text
    // ================================================================
    // Truncated Text with link
    let extra_long_link = document.querySelectorAll('.extra-long-link');
    let long_link = document.querySelectorAll('.long-link');
    let medium_link = document.querySelectorAll('.medium-link');
    let small_link_plus = document.querySelectorAll('.small-link-plus');
    let small_link = document.querySelectorAll('.small-link');
  
    // Truncated Text without link
    let extra_long_text = document.querySelectorAll('.extra-long-text');
    let long_text = document.querySelectorAll('.long-text');
    let medium_text = document.querySelectorAll('.medium-text');
    let small_text_plus = document.querySelectorAll('.small-text-plus');
    let small_text = document.querySelectorAll('.small-text');
  
    // Truncated Text with link
    truncatedTextLink(extra_long_link, 1000);
    truncatedTextLink(long_link, 500);
    truncatedTextLink(medium_link, 150);
    truncatedTextLink(small_link_plus, 100);
    truncatedTextLink(small_link, 50);
    
    // Truncated Text without link
    truncatedText(extra_long_text, 1000);
    truncatedText(long_text, 500);
    truncatedText(medium_text, 150);
    truncatedText(small_text_plus, 100);
    truncatedText(small_text, 50);
    
    // Truncated Text with link
    function truncatedTextLink(element, textlength) {
      element.forEach(el => {
        // let textElement = text.children[0];
        let textElement = el.querySelectorAll('.text-link');
        textElement.forEach(textEl => {
          let inputText = textEl.textContent.trim();
          if (inputText.length > textlength) {
            console.log('value', inputText.length);
            let truncatedText = inputText.substring(0, textlength) + "...";
            textEl.textContent = truncatedText;
          }
        })
      })
    }
    
    // Truncated Text without link
    function truncatedText(element, textlength) {
      element.forEach(el => {
        // let textElement = text.children[0];
        let textElement = el.querySelectorAll('.text');
        textElement.forEach(textEl => {
          let inputText = textEl.textContent.trim();
          if (inputText.length > textlength) {
            console.log('value', inputText.length);
            if (textlength >= 101) {
              let truncatedText = inputText.substring(0, textlength) + "...";
              let truncated_text = document.createElement("p");
              // let readMoreBtn = document.createElement("button");
              let readMoreBtn = document.createElement("span");
              truncated_text.setAttribute("class", "truncated-text");
              truncated_text.textContent = truncatedText;
              el.appendChild(truncated_text);
              const attributes = {
                class: 'readMoreBtn',
                dataReadLess: 'Show less',
                dataReadMore: 'Show more',
              };
              
              setMultipleAttributes(readMoreBtn, attributes);
              el.appendChild(readMoreBtn);
              
              readMoreBtn.style.display = "inline";
              readMoreBtn.addEventListener('click', toggleText, false);
            }
            else {
              textEl.textContent = inputText.substring(0, textlength) + "...";
              textEl.style.display = 'block'
            }
          } else {
            textEl.style.display = "block";
          }
        })
      })
    }
  
  function toggleText() {
    let parentElement = this.parentNode;
    parentElement.classList.toggle("expanded");
  }
  
  
  
    // GENERIC: ============================= Gallery Full-screen viwer
    // ================================================================
    // NOTE: For two or more figures (Photos)
    
    let _gallery_wrapper = document.querySelectorAll('._gallery-wrapper');
  
    _gallery_wrapper.forEach(gw => {
      gw.addEventListener('click', function(e) {
        fullScreenFn(e, gw);
      }, false);
    });
  
    function fullScreenFn(e, gw) {
      let target = e.target;
      if(target.nodeName.toLowerCase() == 'img') {
        console.log('true');
        let _galleryImg = gw.getElementsByTagName('img');
        let index = Array.prototype.indexOf.call(_galleryImg, target);
        let slideIndex = index;
        console.log('Index of the element:', index);
  
        let gallery_w_container = document.createElement("div");
        gallery_w_container.setAttribute("class", "_gallery-w-container");
  
        let gallery_w = document.createElement("div");
        gallery_w.setAttribute("class", "_gallery-w");
  
        let inner_wrapper = document.createElement("div");
        inner_wrapper.setAttribute("class", "_inner_wrapper");
  
        let prev = document.createElement("a");
        prev.setAttribute("class", "prev");
        let leftSlide = document.createElement("i");
        leftSlide.setAttribute("class", "bi bi-chevron-left");
        prev.appendChild(leftSlide);
  
        let next = document.createElement("a");
        next.setAttribute("class", "next");
        let rightSlide = document.createElement("i");
        rightSlide.setAttribute("class", "bi bi-chevron-right");
        next.appendChild(rightSlide);
  
        let closeEl = document.createElement("span");
        closeEl.setAttribute("class", "gallery-close");
        let closeIcon = document.createElement("i");
        closeIcon.setAttribute("class", "bi bi-x-lg");
        closeEl.appendChild(closeIcon);
  
        // Copy elements from gallery_wrapper to inner_wrapper 
        let figuresToCopy = gw.children;
        for (let i = 0; i < figuresToCopy.length; i++) {
          let figures = figuresToCopy[i].cloneNode(true);
          inner_wrapper.appendChild(figures);
        }
  
        gallery_w.appendChild(inner_wrapper);
        gallery_w.appendChild(prev);
        gallery_w.appendChild(next);
        gallery_w.appendChild(closeEl);
        gallery_w_container.appendChild(gallery_w);
        _gallery_body.appendChild(gallery_w_container);
  
        // ### Create Slide-Gallery
        let slider = document.querySelector('._gallery-w');
        let slides = document.querySelectorAll('._inner_wrapper figure');
        console.log('slides is:- ', slides.length);
  
        let preSlider = slider.children[1];
        let nextSlider = slider.children[2];
        let closeSlider = slider.children[3];
  
        preSlider.addEventListener('click', prevSlide, false ); // Both touch screen and desktop
        nextSlider.addEventListener('click', nextSlide, false );   // Both touch screen and desktop
        closeSlider.addEventListener('click', closeGallery, false); // Both touch screen and desktop
  
        if(pointerFineSupported) {
          preSlider.addEventListener('mouseover', prevMouseOver, false );
          preSlider.addEventListener('mouseout', prevMouseOut, false );
  
          nextSlider.addEventListener('mouseover', nextMouseOver, false );
          nextSlider.addEventListener('mouseout', nextMouseOut, false );
  
          closeSlider.addEventListener('mouseover', closeMouseOver, false );
          closeSlider.addEventListener('mouseout', closeMouseOut, false );
        }
  
        function showSlide(n) {
          slides.forEach(slide => slide.style.display = "none");
          slides[n].style.display = "block";
        }
        function nextSlide() {
          slideIndex++;
          if (slideIndex >= slides.length) {
          slideIndex = 0;
          }
          showSlide(slideIndex);
        }
        function prevSlide() {
          slideIndex--;
          if (slideIndex < 0) {
          slideIndex = slides.length - 1;
          }
          showSlide(slideIndex);
        }
        showSlide(slideIndex);
  
        function prevMouseOver() { preSlider.style.backgroundColor = "rgba(241, 243, 245, 1)"; }
        function prevMouseOut() { preSlider.style.backgroundColor = "rgba(241, 243, 245, .6)"; }
  
        function nextMouseOver() { nextSlider.style.backgroundColor = "rgba(241, 243, 245, 1)"; }
        function nextMouseOut() { nextSlider.style.backgroundColor = "rgba(241, 243, 245, .6)"; }
  
        function closeMouseOver() { closeSlider.style.backgroundColor = "rgba(241, 243, 245, 1)"; }
        function closeMouseOut() { closeSlider.style.backgroundColor = "rgba(241, 243, 245, .6)"; }
  
        // ### Remove Slide-Gallery
        function closeGallery() {
          _gallery_body.removeChild(gallery_w_container);
        }
      }
    }
    
    // GENERIC: ============================= Photo Full-screen viwer-2
    // ================================================================
    // NOTE: For one figure (Photo)

    let _photo_wrapper = document.querySelectorAll('._photo-wrapper');

    _photo_wrapper?.forEach(fw => {
      fw.addEventListener('click', function(e) {
        fullScreenPhotoFn(e, fw);
        // fullScreenPhotoFnTwo();
      }, false);
    });
  
    function fullScreenPhotoFn(e, fw) {
      let target = e.target;
      if(target.nodeName.toLowerCase() == 'img') {
        console.log('true');
        let photo_w_container = document.createElement("div");
        photo_w_container.setAttribute("class", "_photo-w-container");
  
        let photo_w = document.createElement("div");
        photo_w.setAttribute("class", "_photo-w");
  
        let inner_wrapper = document.createElement("div");
        inner_wrapper.setAttribute("class", "_inner_wrapper");
  
        let closeEl = document.createElement("span");
        closeEl.setAttribute("class", "photo-close");
        let closeIcon = document.createElement("i");
        closeIcon.setAttribute("class", "bi bi-x-lg");
        closeEl.appendChild(closeIcon);
  
        // Copy element from _gallery_wrapper to inner_wrapper 
        let figure = fw.cloneNode(true);
        inner_wrapper.appendChild(figure);
  
        photo_w.appendChild(inner_wrapper);
        photo_w.appendChild(closeEl);
        photo_w_container.appendChild(photo_w);
        _gallery_body.appendChild(photo_w_container);
        
        let closeSlider = photo_w.children[1];
        closeSlider.addEventListener('click', closePhoto, false); // Both touch screen and desktop
        
        // window.addEventListener('popstate', function(event) {
        //   console.log("Popstate event canceled!");
        //   event.preventDefault(); // Cancel the popstate event
        //   history.replaceState(null, document.title, window.location.href); // Restore the original URL
        //   console.log("Popstate event canceled!");
        // })
  
        if(pointerFineSupported) {
          closeSlider.addEventListener('mouseover', closeMouseOver, false );
          closeSlider.addEventListener('mouseout', closeMouseOut, false );
        }
  
        function closeMouseOver() { closeSlider.style.backgroundColor = "rgba(241, 243, 245, 1)"; }
        function closeMouseOut() { closeSlider.style.backgroundColor = "rgba(241, 243, 245, .6)"; }
  
        // ### Remove Full-Screen Photo
        function closePhoto() {
          _gallery_body.removeChild(photo_w_container);
        }
      }
    }

    
    // SECTION: ============================ Individual-1 (Family-Tree)
    // ================================================================

    // ### Family-Tree
    let family_tree_containerd = document.querySelectorAll('.family-tree-container');
    let tree_close = document.querySelectorAll('.tree-close');

    family_tree_containerd.forEach(divEl => {
      divEl.addEventListener('click', familyTreeFn, false);
    });
    tree_close.forEach(spanEl => {
      spanEl.addEventListener('click', familyTreeClose, false);
    });

  function familyTreeFn(e) {
    let target = e.target;
    let parentDiv, family_tree;
    if(target.nodeName.toLowerCase() == 'span') {
      parentDiv = target.parentNode.parentNode;
      family_tree = parentDiv.querySelector('.family-tree');
      family_tree.style.display = 'flex';
    }
    if(target.nodeName.toLowerCase() == 'button') {
      parentDiv = target.parentNode;
      family_tree = parentDiv.querySelector('.family-tree');
      family_tree.style.display = 'flex';
    }
  }

  function familyTreeClose (e) {
    let target = e.target;
    let parentSpan, parentDiv;
    if(target.nodeName.toLowerCase() == 'i') {
      parentSpan = target.parentNode;
      parentDiv = parentSpan.parentNode.parentNode;
      parentDiv.style.display = 'none';
    }

    if(target.nodeName.toLowerCase() == 'span') {
      parentDiv = target.parentNode.parentNode;
      parentDiv.style.display = 'none';
    }
  }
  

  // SECTION: ========================================= Count Sibling
  // ================================================================

  let _count_sibling = document.querySelector('._count-sibling');
  let all_bro = _count_sibling?.querySelectorAll('.brother');
  let all_sis = _count_sibling?.querySelectorAll('.sister');
  let all_male = _count_sibling?.querySelectorAll('.male');
  let all_female = _count_sibling?.querySelectorAll('.female');

  let bro = document.querySelectorAll('.bro');
  let sis = document.querySelectorAll('.sis');
  let son = document.querySelectorAll('.son')
  let daughter = document.querySelectorAll('.daughter');

  console.log('All Bro', all_bro?.length);
  console.log('All Sis', all_sis?.length);
  console.log('All son', all_male?.length);
  console.log('All daughter', all_female?.length);

  function countSiblingFn() {
    bro.forEach(b => {
      let text1 = b.textContent;
      b.textContent = text1 + all_bro.length;
    });
    sis.forEach(s => {
      let text2 = s.textContent;
      s.textContent = text2 + all_sis.length;
    });

    son.forEach(s => {
      let text3 = s.textContent;
      s.textContent = text3 + all_male.length;
    });

    daughter.forEach(d => {
      let text4 = d.textContent;
      d.textContent = text4 + all_female.length;
    });
  }
  countSiblingFn()





  
}());


