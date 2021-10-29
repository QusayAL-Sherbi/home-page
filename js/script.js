// Get Elements
let tabsBtns = document.querySelectorAll('.tabs li'),
    tabsContentDivs = document.querySelectorAll('.tabs-content > div'),
    pseudoEl = window.getComputedStyle(document.querySelector('.tabs li'), '::after').getPropertyValue('border-color');

console.log(pseudoEl)

// Color Variable
let bgc;

tabsBtns.forEach(tabBtn => {

  tabBtn.addEventListener('click', function(e) {

    tabsBtns.forEach(el => {
      el.classList.remove('active');
    })

    e.currentTarget.classList.add('active');

    bgc = e.currentTarget.dataset.bgc;

    tabsContentDivs.forEach(tabDiv => {

      tabDiv.classList.remove('active')

      tabDiv.style.backgroundColor = `#${bgc}`;

    })

    document.querySelector(e.currentTarget.dataset.cont).classList.add('active')

  })

})