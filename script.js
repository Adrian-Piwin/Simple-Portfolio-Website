// Loading dom
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
          var containerList = document.getElementsByClassName("imgcontainer");
          var modal = document.getElementById("modal");

          var title = document.getElementById("title");
          var homebtn = document.getElementById("homebtn");
          var aboutbtn = document.getElementById("aboutbtn");
          var contactbtn = document.getElementById("contactbtn");

          var homepage = document.getElementById("homepage");
          var aboutmepage = document.getElementById("aboutme");
          var contactpage = document.getElementById("contact");

          // Header for sticky
          var header = document.getElementById("header");
          var sticky = header.offsetTop;

          var modalOpen = false;

          var modalTitle = [ // Title for the popup in order
            "Project 1",
            "Project 2",
            "Project 3",
            "Project 4",
            "Project 5",
            "Project 6",
            "Project 7",
            "Project 8"
          ];

          var modalContent = [ // Description of popup in order
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo",
            "taken in april 13th, 2018 <br>edited by me <br>a wonderful photo"
          ];

          // Start on homepage
          aboutbtn.style.opacity = 0.5;
          contactbtn.style.opacity = 0.5;
          homebtn.style.opacity = 1;

          setHeader();

          // Add onclick to all containers
          for (var i=0; i<containerList.length; i++){
            containerList[i].onclick = function() { 
              openModal(this);
            }
          }

          // Clicking x on modal window closes it
          modal.childNodes[1].childNodes[1].onclick = function() {
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            modal.style.display = "none";

            modalOpen = false;
          }

          // Clicking outside modal window closes it
          window.onclick = function(event) {
            if (event.target == modal) {
              const body = document.body;
              const scrollY = body.style.top;
              body.style.position = '';
              body.style.top = '';
              window.scrollTo(0, parseInt(scrollY || '0') * -1);
              modal.style.display = "none";

              modalOpen = false;
            }
          }

          // Clicking on header title sends to home
          title.onclick = function(event) {
            aboutmepage.style.display = "none";
            contactpage.style.display = "none";
            homepage.style.display = "flex";

            aboutbtn.style.opacity = 0.5;
            contactbtn.style.opacity = 0.5;
            homebtn.style.opacity = 1;
          }

          // Clicking on home nav sends to home
          homebtn.onclick = function(event) {
            aboutmepage.style.display = "none";
            contactpage.style.display = "none";
            homepage.style.display = "flex";

            aboutbtn.style.opacity = 0.5;
            contactbtn.style.opacity = 0.5;
            homebtn.style.opacity = 1;
          }

          // Clicking on aboutme nav sends to about me
          aboutbtn.onclick = function(event) {
            aboutmepage.style.display = "flex";
            contactpage.style.display = "none";
            homepage.style.display = "none";

            aboutbtn.style.opacity = 1;
            contactbtn.style.opacity = 0.5;
            homebtn.style.opacity = 0.5;
          }

          // Clicking on contact nav sends to contact
          contactbtn.onclick = function(event) {
            aboutmepage.style.display = "none";
            contactpage.style.display = "flex";
            homepage.style.display = "none";

            aboutbtn.style.opacity = 0.5;
            contactbtn.style.opacity = 1;
            homebtn.style.opacity = 0.5;
          }

          // Change modal according to selected container
          function openModal(selected){
            modal.style.display = "block";

            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;
            
            iSelect = String(selected.id);
            iSelect = parseInt(iSelect.slice(iSelect.length-1,iSelect.length));

            modal.childNodes[1].childNodes[3].src = selected.childNodes[1].src;
            modal.childNodes[1].childNodes[5].innerHTML = modalTitle[iSelect-1];
            modal.childNodes[1].childNodes[7].innerHTML = modalContent[iSelect-1];

            modalOpen = true;
          }

          // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
          function setHeader() {
            if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
            } else if (window.pageYOffset <= sticky && modalOpen == false){
              header.classList.remove("sticky");
            }
          }

          // When the user scrolls the page, execute setHeader 
          window.onscroll = function() {setHeader()};

          window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
          });
        }

})(window, document, undefined);