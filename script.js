// ===  Want each of 24 calendar doors to open only if number matches today's date or earlier:

// var date = new Date();
// var todaysDate = date.getDate();

// === To test/view other dates, set var todaysDate to a fixed number to pretend that's today's date:

var todaysDate = 24;

// ===  Get the modal popup box + content + close span

var modal = document.getElementById('modalPopup');

var modalDailyDate = document.querySelector('.dailyDate');
var modalDailyTitle = document.querySelector('.dailyTitle');
var modalDailyContent = document.querySelector('.dailyContent');
var modalDailyTime = document.querySelector('.dailyTime');
var modalDailyLocation = document.querySelector('.dailyLocation');
var modalDailyPrice = document.querySelector('.dailyPrice');
var modalDailyLink = document.querySelector('.dailyLink');
var spanClose = document.querySelector('.close');

// ===  Array of popup messages for each door

var moreInfo = [
                  { date: "Dijous 1 de Desembre del 2022",
                    title: "Grup de WhatsApp",
                    content: "La Marta ha creat un grup de WhatsApp, s'enviarà un recordatori pel xat per fer un sopar tot junts.",
                    linkUrl: "https://drive.google.com/file/d/1wLP63F54hmfWNNM7YEi8lH5XDi78vCcW/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { date: "Divendres 2 de Desembre del 2022",
                    title: "Calendari d'Advent",
                    content: "Avui podreu veure un vídeo del Calendari d'Advent dels altres anys.",
                    linkUrl: "https://drive.google.com/file/d/1h_xObKBToSQCyHIDitOZy7pPrPIGGA0t/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { date: "Dissabte 3 de Desembre del 2022",
                    title: "Paquet Regal",
                    content: "Avui tindreu un regal sorpresa!",
                    linkUrl: "https://drive.google.com/file/d/188K_Nx-t9Ly_wRyZaf1DJn65TpC6TmNz/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { date: "Diumenge 4 de Desembre del 2022",
                    title: "Postal de Nadal",
                    content: "Avui podreu veure un vídeo de les Postals de Nadal.",
                    linkUrl: "https://drive.google.com/file/d/1PKMOAK6V26LvLGBORkS9aiEe1UjAnGpR/view?usp=share_link",
                    linkText: "Imatge"
                  },

                  { date: "Dilluns 5 de Desembre del 2022",
                    title: "Mercats de Nadal",
                    content: "Avui podreu veure un vídeo dels Mercats de Nadal dels anteriors anys.",
                    linkUrl: "https://drive.google.com/file/d/19PeMJzNMPZ4tQx3mcGtE50Uf5bG93a2w/view?usp=share_link",
                    linkText: "Vídeo"
                  },

                  { date: "Dimarts 6 de Desembre del 2022",
                    title: "Activitat Conjunta",
                    content: "Avui hem de decidir entre el dia 9, 10 o 11 de Desembre per fel el pessebre tots junts.",
                    linkUrl: "https://drive.google.com/file/d/16VLzYNfSBW0qsJYL2cF6L4I-CLFTMF5E/view?usp=share_link",
                    linkText: "Imatge"
                  },

                  { date: "Dimecres 7 de Desembre del 2022",
                    title: "Decoració de Nadal",
                    content: "Avui podreu veure un vídeo de les decoracions Nadalenques dels anteriors anys.",
                    linkUrl: "https://drive.google.com/file/d/16VLzYNfSBW0qsJYL2cF6L4I-CLFTMF5E/view?usp=share_link",
                    linkText: "Imatge"
                  },

                  { date: "Dijous 8 de Desembre del 2022",
                    title: "Paquet Regal",
                    content: "Avui tindreu un regal sorpresa!",
                    linkUrl: "https://drive.google.com/file/d/188K_Nx-t9Ly_wRyZaf1DJn65TpC6TmNz/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { date: "Divendres 9 de Desembre del 2022",
                    title: "Activitat Conjunta",
                    content: "Avui us convido a fer un cafè tots junts.",
                    linkUrl: "https://drive.google.com/file/d/1XG0c1JnzDwqJJSsFR-H0-bP3ud5zLVjb/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { date: "Dissabte 10 de Desembre del 2022",
                    title: "Vídeo de la Fred.",
                    content: "Vídeo de les nevades i les excursions a la neu.",
                    linkUrl: "https://drive.google.com/file/d/1QIyKvfWR_I7FgLcmI0CaWTAESB_cPAra/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { date: "Diumenge 11 de Desembre del 2022",
                    title: "Vídeo dels pastorets",
                    content: "Vídeo d'àngels, dimonis i pastors, és a dir, els pastorets! En aquest vídeo podreu veure els pastorets que vau fer de petits.",
                    linkUrl: "https://drive.google.com/file/d/1aPo4f0miYO-cJ1ilWFp_sCHkn2-pEq_A/view?usp=share_link",
                    linkText:"Vídeo",
                    
                  },

                  { date: "Dilluns 12 de Desembre del 2022",
                    title: "Per molts anys Eudald!",
                    content: "Que passis un molt bon dia pel teu aniversari! Felicitats!!",
                    linkUrl: "https://drive.google.com/file/d/1gc2seVe8gNqHaMZwxvxN9NqqsNsO1cJh/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { date: "Dimarts 13 de Desembre del 2022",
                    title: "Circ de Nadal",
                    content: "Vídeo del Circ de Nadal de Girona durant les vacances de Nadal.",
                    linkUrl: "https://drive.google.com/file/d/1vYz9yc3cQLvmyxiglteqMxDN0fjjsS4A/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { date: "Dimecres 14 de Desembre del 2022",
                    title: "Pessebres",
                    content: "Vídeo recopilant els pessebres que heu fet i el concurs que en Xavier va guanyar!",
                    linkUrl: "https://drive.google.com/file/d/13N0SB8kcXqGOypltT7COs2y4fC7jmIlj/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { date: "Dijous 15 de Desembre del 2022",
                    title: "Tió, tió, caga turro!",
                    content: "Vídeo fent cagar el tió amb la família per Nadal.",
                    linkUrl: "https://drive.google.com/file/d/1yZC2IuBS7zNgESZjjJbETx61umZga5F8/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Divendres 16 de Desembre del 2022",
                    title: "El vers de Nadal",
                    content: "Vídeo amb imatges dels vers de Nadal que s'han recitat amb família durant els anys.",
                    linkUrl: "https://drive.google.com/file/d/1LSp697Akmq7C9EgeQh8LlzM8esvltcoa/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Dissabte 17 de Desembre del 2022",
                    title: "Dinars en Família",
                    content: "Vídeo amb fotos familiars preparant els àpats i celebrant junts les festes.",
                    linkUrl: "https://drive.google.com/file/d/1LAnh-__Gc5oMewf-LCnu2BVMuMRYk9JT/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Diumenge 18 de Desembre del 2022",
                    title: "Cap d'Any",
                    content: "Vídeo recopilatori dels Caps d'Anys que s'han celebrat amb família.",
                    linkUrl: "https://drive.google.com/file/d/1j1UacU5myHObloiSmbIeEm5TuviEW_IB/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Dilluns 19 de Desembre del 2022",
                    title: "Paquet Regal",
                    content: "Avui tindreu un regal sorpresa!",
                    linkUrl: "https://drive.google.com/file/d/188K_Nx-t9Ly_wRyZaf1DJn65TpC6TmNz/view?usp=share_link",
                    linkText:"Imatge",
                  },

                  { 
                    date: "Dimarts 20 de Desembre del 2022",
                    title: "Carter Reial",
                    content: "Vídeo amb imatges d'anar a portar les cartes als reis i al carter reial la nit del 5 de gener. ",
                    linkUrl: "https://drive.google.com/file/d/1t2JS7P3aHu5VwUliOsuiR2-GFHj3OjV0/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Dimecres 21 de Desembre del 2022",
                    title: "Fanalets de Nadal",
                    content: "Vídeo d'anar esperar els reis amb els fanalets i el concurs que vau participar. ",
                    linkUrl: "https://drive.google.com/file/d/1k0GNovzmIQ7rKwlgUjC15_yamC_F4yby/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Dijous 22 de Desembre del 2022",
                    title: "Patges d'Orient",
                    content: "Vídeo amb els patges anant a esperar els reis d'Orient.",
                    linkUrl: "https://drive.google.com/file/d/1BQFSMhSceiSLHjtEiiA9Ap2vDuUEbo0C/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Divendres 23 de Desembre del 2022",
                    title: "Reis Mags",
                    content: "Vídeo amb imatges recopilant les cavalcades dels reis i portant les cartes pels patges reials.",
                    linkUrl: "https://drive.google.com/file/d/1E92oz6TCg29m3-QLVSxSDqxzA_gLRPSi/view?usp=share_link",
                    linkText:"Vídeo",
                  },

                  { 
                    date: "Dissabte 24 de Desembre del 2022",
                    title: "Per molts anys Núria!",
                    content: "Que passis un molt bon dia pel teu aniversari! Felicitats!!",
                    linkUrl: "https://drive.google.com/file/d/1hi6wOfNV7ixO4e0B4Edyzt0oZ271xrZ0/view?usp=share_link",
                    linkText:"Imatge",
                  },

               ];

// === no hover action if higher than today's date (add class 'no-hover') 

function noHover() {

  var doorNumber = this.innerHTML;
  var calendarNum = parseInt(doorNumber, 10);

  if (calendarNum > todaysDate) {
    this.parentNode.classList.add("no-hover");
  }

}

// === door-front: hover + click events 

var doorFronts = document.querySelectorAll(".front");

for (var i = 0; i < doorFronts.length; i++) {
  doorFronts[i].addEventListener("mouseover", noHover);
  doorFronts[i].addEventListener("click", clickFront);
}

// === door-back: click event 

var doorBacks = document.querySelectorAll(".back");

for (var i = 0; i < doorBacks.length; i++) {
  doorBacks[i].addEventListener("click", clickBack);
}

// === door-front: click toggles class 'open'

function clickFront() {

  var numberClicked = this.innerHTML;
  var calendarNum = parseInt(numberClicked, 10);
  // console.log(numberClicked);
  // console.log(calendarNum);

  if (calendarNum <= todaysDate) {
   this.parentNode.classList.toggle("open");
  }

};

// === door-back: click opens the modal + displays corresponding content 

function clickBack() {

  // find number of corresponding door-front (as back has no innerHTML of its own) //
  var calendarNum = this.previousElementSibling.innerHTML;
  // -1 from door-front to get correct message array index //
  var calendarNumIndex = calendarNum - 1;

  // change modal css to display it //
  modal.style.display = "block";

  // put message from array into modal content //

  modalDailyDate.innerHTML = moreInfo[calendarNumIndex].date;
  modalDailyTitle.innerHTML = moreInfo[calendarNumIndex].title;
  modalDailyContent.innerHTML = moreInfo[calendarNumIndex].content;
 // modalDailyTime.innerHTML = moreInfo[calendarNumIndex].time;
  //modalDailyLocation.innerHTML = moreInfo[calendarNumIndex].location;
 // modalDailyPrice.innerHTML = moreInfo[calendarNumIndex].price;
  modalDailyLink.href = moreInfo[calendarNumIndex].linkUrl;
  modalDailyLink.innerHTML = moreInfo[calendarNumIndex].linkNA;
  modalDailyLink.innerHTML = moreInfo[calendarNumIndex].linkText;

 

  // can toggle door closed again IF want to: //
  // this.parentNode.classList.toggle("open");

};


// === click span (x) to close modal 

spanClose.onclick = function() {
  modal.style.display = "none";
}

// === click anywhere outside modal to close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
