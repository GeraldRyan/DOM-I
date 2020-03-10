const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// Create Nav Bar
let navLinks = document.querySelectorAll("nav a")

let nav = []
for (i = 1; i<navLinks.length+1; i++){
nav[i] = document.querySelector(`nav a:nth-child(${i})`);
nav[i].innerText =siteContent["nav"]["nav-item-"+i];
}

// Make em Green
nav.forEach( (el)=>{
  el.style.color = "green"
})

let navBar = document.querySelector('nav')
let appendNode = document.createElement('a')
appendNode.innerText = "Appended"
navBar.appendChild(appendNode)
appendNode.style.color = 'green'
let prependNode = document.createElement('a')
prependNode.innerText = "prepended"
prependNode.style.color = "green"
navBar.prepend(prependNode)


// Make em Green
nav.forEach( (el)=>{
  el.style.color = "green"
})


// section cta
let codeSnipImg = document.getElementById("cta-img")
codeSnipImg.setAttribute('src', siteContent["cta"]["img-src"])

let h1 = document.querySelector(".cta-text h1")
h1.innerText = siteContent['cta']['h1']

let button = document.querySelector(".cta-text button")
button.innerText = siteContent["cta"]["button"]



// Section Main Content

let topContentH4 = document.querySelectorAll(".text-content h4")
let topContentText = document.querySelectorAll(".text-content p")
topContentH4[0].innerText = siteContent["main-content"]["features-h4"]
topContentH4[1].innerText = siteContent["main-content"]["about-h4"]
topContentH4[2].innerText = siteContent["main-content"]["services-h4"]
topContentH4[3].innerText = siteContent["main-content"]["product-h4"]
topContentH4[4].innerText = siteContent["main-content"]["vision-h4"]

topContentText[0].innerText = siteContent["main-content"]["features-content"]
topContentText[1].innerText = siteContent["main-content"]["about-content"]
topContentText[2].innerText = siteContent["main-content"]["services-content"]
topContentText[3].innerText = siteContent["main-content"]["product-content"]
topContentText[4].innerText = siteContent["main-content"]["vision-content"]


// // Forsaken Method
// topContentH4.forEach(  (el) =>
// {el.innerText = "The This"
// })

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"] )

// Contact and Footer

let contactH4 = document.querySelector(".contact h4")
let contactP = document.querySelectorAll(".contact p")

contactH4.innerText = siteContent["contact"]["contact-h4"]
contactP[0].innerText = siteContent["contact"]["address"]
contactP[1].innerText = siteContent["contact"]["phone"]
contactP[2].innerText = siteContent["contact"]["email"]

let footerP = document.querySelector("footer p")
footerP.innerText = siteContent["footer"]["copyright"]

// testing again