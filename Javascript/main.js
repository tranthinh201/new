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
    alert("Vui lòng nhập email và mật khẩu");
  }
  else if(isEmailAddress(email) == false) {
    alert("Bạn đã nhập sai định dạng email");
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
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
  else if(selectedValue == "check") {
    alert("Vui lòng chọn sản phẩm quan tâm!");
  }
  else if(check(phoneNumber) == false) {
    alert("Bạn đã nhập sai định dạng số điện thoại!")
  }
  else if(isEmailAddress(email) == false) {
      alert("Bạn đã nhập sai định dạng email");
  }
  else {
    alert("Thông tin của bạn đã được gửi tới HTN" + "\n" + "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!");
    
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
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
  else if(isEmailAddress(email) == false) {
    alert("Bạn đã nhập sai định dạng email");
  }
  else if(check(phoneadd) == true) {
    alert("Bạn đã nhập sai định dạng số điện thoại!")
  }
  else if(pass != confirmPass) {
    alert("Mật khẩu không giống nhau!");
  }
  else {
    alert("Bạn đã đăng ký tài khoản thành công!");
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
    text.innerHTML = "Vui lòng nhập email!";
  }
  else if(isEmailAddress(emailHome) == false) {
    text.innerHTML = "Bạn đã nhập sai định dạng email. Vui lòng nhập lại!";
  }
  else {
    alert("Bạn đã đăng ký nhận ưu đãi thành công!");
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
        alert("Vui lòng nhập đầy đủ thông tin!");

    }    
    else if(cmail(email)==false)
    {
        alert("Bạn đã nhập sai định dạng email!");
    }
    else if(SDT(sdt)==false)
    {
        alert("bạn đã nhập sai định dạng số điện thoại");
    }
    else
    {
        alert("Bạn đã đăng ký thành công!");
        confirm('Thông tin bạn vừa nhập là:\n Tên:'+ten+"\n Họ:"+ho+"\n sdt:" +sdt+"\n email:" +email+"\n Nội dung:"+nd+"\n");
        document.formh.reset();
    }
}







