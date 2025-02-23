const menuOpenBtn = document.getElementById('openMenu')
const menuCloseBtn = document.getElementById('closeMenu')
const navBarList = document.getElementById('navBarList')
const project1 = document.getElementById('project1')
const project1CodeIcon = document.getElementById('project1-code-icon')
const cvDownloadButton = document.getElementById('cvDownloadButton')
const logo = document.getElementById('logo');
const section1 = document.getElementById('section1');

// Get the elements
const skillButton = document.getElementById('skill');
const experienceButton = document.getElementById('experience');
const projectsButton = document.getElementById('projects');
const contactButton = document.getElementById('contact');

// Get the sections
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');



// ----- NAVBAR CLICK SCROLL ANIMATION START ------
skillButton.addEventListener('click', () => {
  section2.scrollIntoView({
    behavior: 'smooth',  
    block: 'start',      
  });
});

experienceButton.addEventListener('click', () => {
  section3.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

projectsButton.addEventListener('click', () => {
  section4.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

contactButton.addEventListener('click', () => {
  section5.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

logo.addEventListener('click', () => {
  section1.scrollIntoView({
    behavior: 'smooth',  
    block: 'start',      
  });
});
// ----- NAVBAR CLICK SCROLL ANIMATION END ------




// ----- ONSCROLL ANIMATION START ------
gsap.registerPlugin(ScrollTrigger);

const skillIcons = Array.from({ length: 15 }, (_, i) => document.getElementById(`icon${i + 1}`));

skillIcons.forEach((icon, index) => {
  gsap.fromTo(icon, 
    {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: icon,
        start: "top 80%", 
        end: "top 50%",  
        scrub: true,      
        markers: false, 
        delay: index * 0.3,
      }
    }
  );
});


gsap.fromTo("#section2-heading", 
    {
      opacity: 0,
      x: "-50%",  
    },
    {
      opacity: 1,
      x: "0%",  
      ease: "power3.out",  
      scrollTrigger: {
        trigger: "#section2-heading",
        start: "top 80%",  
        end: "top 50%",    
        scrub: 1,       
        markers: false,   
      }
    }
  );


  gsap.fromTo("#section3-heading", 
    {
      opacity: 0,
      x: "50%",  
    },
    {
      opacity: 1,
      x: "0%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section3-heading",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        markers: false,
      }
    }
  );

  
  gsap.fromTo("#section4-heading", 
    {
      opacity: 0,
      x: "-50%",
    },
    {
      opacity: 1,
      x: "0%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section4-heading",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        markers: false,
      }
    }
  );


  gsap.fromTo("#section5-heading", 
    {
      opacity: 0,
      x: "-50%",
    },
    {
      opacity: 1,
      x: "0%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section5-heading",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        markers: false,
      }
    }
  );



  gsap.registerPlugin(ScrollTrigger);

const workExpCards = Array.from({ length: 3 }, (_, i) => document.getElementById(`card${i + 1}`));

workExpCards.forEach((card, index) => {
  gsap.fromTo(card, 
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: { 
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        markers: false,
        delay: index * 0.2,
      }
    }
  );
});



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#project1", 
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#project1",
      start: "top 70%",
      end: "top 50%",
      scrub: 5,
      markers: false,
    }
  }
);

  
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#leftform", 
  {
    opacity: 0,
    x: -200,
  },
  {
    opacity: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#leftform",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      markers: false,
    }
  }
);

gsap.fromTo("#rightform", 
  {
    opacity: 0,
    x: 200,
  },
  {
    opacity: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#rightform",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      markers: false,
    }
  }
);


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#section1-heading", 
  {
    opacity: 0,
    y: -100,
    scale: 0.8,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "power3.out",
    duration: 1.5,
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#section1-para", 
  {
    opacity: 0,
    x: -200,
  },
  {
    opacity: 1,
    x: 0,
    ease: "power3.out",
    duration: 1.5,
  }
);



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#buttons", 
  {
    opacity: 0,
    x: -200,
  },
  {
    opacity: 1,
    x: 0,
    ease: "power3.out",
    duration: 1.5,
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#section1-img", 
  {
    opacity: 0,
    scale: 0.7,
    rotation: 45,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "power3.out",
    duration: 1.5,
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#logo", 
  {
    opacity: 0,
    scale: 0.5,
    rotation: 180,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "power3.out",
    duration: 1.5,
  }
);

// ----- ONSCROLL ANIMATION END ------


// ----- MENU ONCLICK  START ------
menuOpenBtn.addEventListener('click', () => {
    menuOpenBtn.classList.remove('block')
    menuOpenBtn.classList.add('hidden')

    menuCloseBtn.classList.remove('hidden')
    menuCloseBtn.classList.add('block')

    navBarList.classList.add('transition-transform', 'duration-700', 'ease-in-out');
    navBarList.classList.remove('-translate-x-250');
    navBarList.classList.add('translate-x-0');
});

menuCloseBtn.addEventListener('click', () => {
    menuOpenBtn.classList.remove('hidden')
    menuOpenBtn.classList.add('block')

    menuCloseBtn.classList.remove('block')
    menuCloseBtn.classList.add('hidden')

    navBarList.classList.add('transition-transform', 'duration-700', 'ease-in-out');
    navBarList.classList.remove('translate-x-0');
    navBarList.classList.add('-translate-x-250');
});
// ----- MENU ONCLICK  END ------

// ----- PROJECT SECTION HOVER  START ------
project1.addEventListener('mouseover', ()=>{
    project1CodeIcon.classList.remove('hidden')
    project1CodeIcon.classList.add('block')
})

project1.addEventListener('mouseover', ()=>{
    project1CodeIcon.classList.remove('block')
    project1CodeIcon.classList.add('hidden')
})
// ----- PROJECT SECTION HOVER  END ------


// ----- CV DONWLOAD FUNCTIONALITY HOVER  START ------
cvDownloadButton.addEventListener('click', ()=>{
    const cvPath = '../assets/pdf _files/Talal.pdf'
    const link = document.createElement('a')
    link.href = cvPath
    link.download = 'Talal_CV.pdf'

    link.click()

    if(link.download){
        let div = document.create
    }
    else{
        alert('There is an error')
    }
})

// ----- CV DONWLOAD FUNCTIONALITY HOVER END ------