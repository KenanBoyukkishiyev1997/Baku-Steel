
export function header() {
  const header = document.getElementById('header');

  const headerText = document.createElement('div');


  headerText.innerHTML = `<div class="contanier">
    <div class="header__flex">
        
        <div class="logo">
            <img class="logo__img" src="./img/logo.png" alt="logo">
        </div>

        <div class="header__box ">
            <form class="header__box-form respons-desc" >
            <div class='header__box-group'>
            <input placeholder='Axtarış' type='text' class='header__box-input'/>
            <img src='./img/svg/serachIcon.svg'/>
            </div>
            </form>
            <div class="header__box-lang respons-desc">
            <div class="dropdown">
            <div class='dropdown-flex'>
              <span class="dropbtn">AZ </span>
              <img src='./img/svg/arrowLang.svg' /> 
              </div>
              <div class="dropdown-content">
                <a href="#" data-language="AZ">AZ</a>
                <a href="#" data-language="RU">RU</a>
                <a href="#"data-language="EN">EN</a>
              </div>
            </div>
          </div>

          <div class="header__bar">
          <img src='./img/svg/bar.svg' alt='bar' />
  </div>

  <div class='barMob'>
  <ul class='barMob__list'>
  <li class='barMob__item barMob__close'> <a href="#"> x </a></li>

  <li class='barMob__item'> <a href="calucator.html"> Sİfariş </a></li>
  <li class='barMob__item'> <a href="tender.html"> Tender elanlari </a></li>
  <li class='barMob__item'> <a href="media.html"> Media </a> </li>
  <li class='barMob__item'> <a href="career.html"> Karyera </a> </li>
  <li class='barMob__item'> <a href="faq.html"> Faq </a></li>
  <li class='barMob__item'> <a href="contact.html"> Əlaqə </a> </li>

  <li class='barMob__item barMob__itemHideMob'>  <form class="header__box-form" >
  <div class='header__box-group'>
  <input placeholder='Axtarış' type='text' class='header__box-input'/>
  <img src='./img/svg/serachIcon.svg'/>
  </div>
  </form> </li>
  <li class='barMob__item barMob__itemHideMob'> 
  <div class="header__box-lang-mob">
  <div class="dropdown">
  <div class='dropdown-flex'>
    <span class="dropbtn-mob">AZ </span>
    <img src='./img/svg/arrowLang.svg' /> 
    </div>
    <div class="dropdown-content-mob">
    <a href="#" data-language-mob="AZ">AZ</a>

      <a href="#" data-language-mob="RU">RU</a>
      <a href="#" data-language-mob="EN">EN</a>
    </div>
  </div>
</div>
 </li>
  
  
  </ul>


  
  </div>
        </div>
      

    </div>
    
</div>`;

  header.appendChild(headerText);

  document.querySelector(".header__bar").addEventListener("click", () => {
    document.querySelector('.barMob').style.right = '0'
  })
  document.querySelector(".barMob__close").addEventListener("click", () => {
    document.querySelector('.barMob').style.right = '-500px'
  })
  // Show the dropdown when clicking the button
  document.querySelector(".dropbtn").addEventListener("click", function () {
    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });

  // Handle language selection
  const languageLinks = document.querySelectorAll(".dropdown-content a");
  languageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLanguage = event.target.getAttribute("data-language");

      // Update the selected option
      document.querySelector(".dropbtn").textContent = selectedLanguage;

      // Hide the dropdown
      document.querySelector(".dropdown-content").style.display = "none";

      // Remove the selected option from the dropdown
      languageLinks.forEach(option => {
        if (option.getAttribute("data-language") === selectedLanguage) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
        }
      });
    });
  });

  // Initialize with "AZ" selected
  document.querySelector(".dropbtn").textContent = "AZ";



  ////////////////////////////////////////////////////////////

  // Handle language selection

  document.querySelector(".dropbtn-mob").addEventListener("click", function () {
    const dropdownContentMob = document.querySelector(".dropdown-content-mob");
    if (dropdownContentMob.style.display === "none" || dropdownContentMob.style.display === "") {
      dropdownContentMob.style.display = "block";
    } else {
      dropdownContentMob.style.display = "none";
    }
  });
  const languageLinksMob = document.querySelectorAll(".dropdown-content-mob a");
  languageLinksMob.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLanguageMob = event.target.getAttribute("data-language-mob");

      // Update the selected option
      document.querySelector(".dropbtn-mob").textContent = selectedLanguageMob;

      // Hide the dropdown
      document.querySelector(".dropdown-content-mob").style.display = "none";

      // Remove the selected option from the dropdown
      languageLinksMob.forEach(option => {
        if (option.getAttribute("data-language-mob") === selectedLanguageMob) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
        }
      });
    });
  });

  // Initialize with "AZ" selected
  document.querySelector(".dropbtn-mob").textContent = "AZ";

}

