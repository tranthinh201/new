// const slideImage = document.querySelectorAll(".slide-image");
// const slidesContainer = document.querySelector(".slides-container");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");
// const navigationDots = document.querySelector(".navigation-dots");

// let numberOfImages = slideImage.length;
// let slideWidth = slideImage[0].clientWidth;
// let currentSlide = 0;

// // Set up the slider

// function init() {
//   /*   
//     slideImage[0] = 0
//     slideImage[1] = 100%
//     slideImage[2] = 200%
//     */

//   slideImage.forEach((img, i) => {
//     img.style.left = i * 100 + "%";
//   });

//   slideImage[0].classList.add("active");

//   createNavigationDots();
// }

// function init() {
//   /*   
//     slideImage[0] = 0
//     slideImage[1] = 100%
//     slideImage[2] = 200%
//     */

//   slideImage.forEach((img, i) => {
//     img.style.left = i * 100 + "%";
//   });

//   slideImage[0].classList.add("active");

//   createNavigationDots();
// }


// init();


// // Create navigation dots

// function createNavigationDots() {
//   for (let i = 0; i < numberOfImages; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("single-dot");
//     navigationDots.appendChild(dot);

//     dot.addEventListener("click", () => {
//       goToSlide(i);
//     });
//   }

//   navigationDots.children[0].classList.add("active");
  
// }

// // Next Button

// nextBtn.addEventListener("click", () => {
//   if (currentSlide >= numberOfImages - 1) {
//     goToSlide(0);
//     return;
//   }

//   currentSlide++;
//   goToSlide(currentSlide);
// });

// // Previous Button

// prevBtn.addEventListener("click", () => {
//   if (currentSlide <= 0) {
//     goToSlide(numberOfImages - 1);
//     return;
//   }

//   currentSlide--;
//   goToSlide(currentSlide);
// });

// // Go To Slide

// function goToSlide(slideNumber) {
//   slidesContainer.style.transform =
//     "translateX(-" + slideWidth * slideNumber + "px)";

//   currentSlide = slideNumber;

//   setActiveClass();
// }

// // Set Active Class

// function setActiveClass() {
//   // Set active class for Slide Image

//   let currentActive = document.querySelector(".slide-image.active");
//   currentActive.classList.remove("active");
//   slideImage[currentSlide].classList.add("active");

//   //   set active class for navigation dots

//   let currentDot = document.querySelector(".single-dot.active");
//   currentDot.classList.remove("active");
//   navigationDots.children[currentSlide].classList.add("active");
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000);
}


// Back top

function goToTop() {
  var backtop = document.getElementById("backtop");
  var timer = setInterval(function() {
    document.documentElement.scrollTop -= 20;

    if(document.documentElement.scrollTop <= 0) {
      clearInterval(timer);
    }
    // else if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {
    //   backtop.style.display = "block";
    // } else {
    //   backtop.style.display = "none";
    // }
  }, 5);
}


function checkPass() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  
  let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
  }
  if(email == "" && pass == "") {
    alert("Vui l??ng nh???p email v?? m???t kh???u");
  }
  else if(isEmailAddress(email) == false) {
    alert("B???n ???? nh???p sai ?????nh d???ng email");
    // document.getElementById("form-reset").reset()
  }
}


function checkContact() {
  let isEmailAddress = val => {
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
    }
  
    let check  = val =>{
      return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(val);
    }
  var fullName = document.getElementById("fullName-contact").value;
  var phoneNumber = document.getElementById("phoneNumber-contact").value;
  var email = document.getElementById("email-contact").value;
  var textContact = document.getElementById("text-contact").value;
  var selectedValue = document.getElementById("product-qt").value;
  
  console.log(selectedValue);

  
  if(fullName == "" || phoneNumber == "" || email == "") {
    alert("Vui l??ng nh???p ?????y ????? th??ng tin!");
  }
  else if(selectedValue == "check") {
    alert("Vui l??ng ch???n s???n ph???m quan t??m!");
  }
  else if(check(phoneNumber) == false) {
    alert("B???n ???? nh???p sai ?????nh d???ng s??? ??i???n tho???i!")
  }
  else if(isEmailAddress(email) == false) {
      alert("B???n ???? nh???p sai ?????nh d???ng email");
  }
  else {
    alert("Th??ng tin c???a b???n ???? ???????c g???i t???i HTN" + "\n" + "Ch??ng t??i s??? li??n h??? v???i b???n trong th???i gian s???m nh???t!");
    
  }
  // document.getElementById("form-reset").reset();
}


function checkRegister() {
  let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
  }

  let check  = val =>{
    return /^[0-9]+$/.test(val);
  }

  var aa = document.getElementsByClassName

  var surname = document.getElementById("surname-reg").value;
  var name = document.getElementById("name-reg").value;
  var dateOfBirth = document.getElementById("date-reg");
  var phoneadd = document.getElementById("phone-reg");
  var adress = document.getElementById("address-reg").value;
  var email = document.getElementById("email-reg").value;
  var pass = document.getElementById("password-reg").value;
  var confirmPass = document.getElementById("confirm-password-rg").value;


  if(surname == "" || name == "" || adress == "" || email == "" || pass == "" || confirmPass == "") {
    alert("Vui l??ng nh???p ?????y ????? th??ng tin!");
  }
  else if(isEmailAddress(email) == false) {
    alert("B???n ???? nh???p sai ?????nh d???ng email");
  }
  else if(check(phoneadd) == true) {
    alert("B???n ???? nh???p sai ?????nh d???ng s??? ??i???n tho???i!")
  }
  else if(pass != confirmPass) {
    alert("M???t kh???u kh??ng gi???ng nhau!");
  }
  else {
    alert("B???n ???? ????ng k?? t??i kho???n th??nh c??ng!");
    // document.getElementById("form-reg").reset()
  }
}

function checkEmailHome() {
  let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
  }

  let emailHome = document.getElementById("email-home").value;
   var text = document.getElementById("check-email");

  if(emailHome == "") {
    text.innerHTML = "Vui l??ng nh???p email!";
  }
  else if(isEmailAddress(emailHome) == false) {
    text.innerHTML = "B???n ???? nh???p sai ?????nh d???ng email. Vui l??ng nh???p l???i!";
  }
  else {
    alert("B???n ???? ????ng k?? nh???n ??u ????i th??nh c??ng!");
    text.innerHTML = "";
    document.getElementById("email-home").value = "";
    
  }
}


function send() {
    var ten= document.getElementById("ten").value;
    var ho=document.getElementById("ho").value;
    var sdt=document.getElementById("so").value;
    var email=document.getElementById("email").value;
    var nd=document.getElementById("nd").value;
    let SDT=val =>
    {
        return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(val);
    }
    let cmail=val =>
    {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val);
    }
    if(ten=="" || ho==""|| sdt==""||email==""|| nd=="")
    {
        alert("Vui l??ng nh???p ?????y ????? th??ng tin!");

    }    
    else if(cmail(email)==false)
    {
        alert("B???n ???? nh???p sai ?????nh d???ng email!");
    }
    else if(SDT(sdt)==false)
    {
        alert("b???n ???? nh???p sai ?????nh d???ng s??? ??i???n tho???i");
    }
    else
    {
        alert("B???n ???? ????ng k?? th??nh c??ng!");
        confirm('Th??ng tin b???n v???a nh???p l??:\n T??n:'+ten+"\n H???:"+ho+"\n sdt:" +sdt+"\n email:" +email+"\n N???i dung:"+nd+"\n");
        document.formh.reset();
    }
}







