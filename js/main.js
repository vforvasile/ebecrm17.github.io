(function($) {
    $(function() {
      // menu collapse
              $('.button-collapse').sideNav({
                  menuWidth: 200,
                  edge: 'left',
                  closeOnClick: true,
                  draggable: false,
              });


        $('.scrollspy').scrollSpy({scrollOffset: 50});



// animation
        new WOW().init();
    });
})(jQuery);

// preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(300).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(300)
		.fadeOut();
});



$(document).ready(function(){
         $('ul.tabs').tabs();
       });


// video
var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "II";
	} else {
        vid.pause();
        pauseButton.innerHTML = "►";
	}
})

// scroll to top button
$(document).ready(function() {
if ($('.mbr-arrow-up').length) {
    var $scroller = $('#scrollToTop'),
        $main = $('body,html'),
        $window = $(window);
    $scroller.css('display', 'none');
    $window.scroll(function () {
    if ($(this).scrollTop() > 0) {
        $scroller.fadeIn();
    } else {
        $scroller.fadeOut();
    }
    });
    $scroller.click(function() {
        $main.animate({
            scrollTop: 0
        }, 400);
        return false;
    });
}
});

// Owl Carousel init
$(document).ready(function()
{
  var carousel = $(".owl-carousel");
	if(carousel.length > 0)
	{
		var data = carousel.data();
		$(".owl-carousel").owlCarousel(data);
	}
});

// slider mtz
$(document).ready(function(){
  $('.slider').slider({
    full_width: true,
    height:450,
    transition: 500,
    indicators: false,
});

});




/* globals Vue */
// Vue here
'use strict'

var en = {
  lang: 'en',
  nav: {
    abt: 'About',
    gl: 'Gallery',
    test: 'Testimonials',
    tm: 'Team',
    ptn: 'Partners',
    ct: 'Contact'
  },

  ctest: {
    title: 'Contest',
    rules: 'Rules',
    rule1: 'Enter the contest with your email or facebook/twitter account',
    rule2: 'Answer the mandatory question and get 3 entries.',
    rule3: 'You can also LIKE our facebook page for 2 entries (optionally).',
    rule4: 'Multiple accounts will disqualify you!',
    msg: 'The Winner will be picked-up randomly by the system. Good luck!'
  },

  intro: {
    header: 'About',
    tab4: 'Universities',
    h1ebec: 'What is BEST?',
    p1ebec: 'BEST (Board of European Students of Technology) is a non-profit, non-political, non-representative students’ organisation with the aim of providing communication, cooperation and exchange possibilities for students of technology since 1989.',
    h2ebec: 'What is EBEC?',
    p2ebec: 'European BEST Engineering Competition, short EBEC, is the largest engineering competition in Europe, conducted by students for students and gathers best European students of engineering.',
    h3ebec: 'EBEC Pyramid',
    p3ebec: 'EBEC has a developed chain of contest, a pyramidal structure. It consists of three levels, each level of pyramid refers to relevant rounds that are being held throughout the year.',
    h4ebec: 'EBEC in numbers:',
    p4li1: '84 local rounds in 32 european countries',
    p4li2: '15 national & regional rounds',
    p4li3: '1 final round held in Brno'
  },
  uni: {
    chan: 'Chancellor',
    fnd: 'Founded',
    nrSt: 'Nr. of students',
    nrFc: 'Nr. of faculties',
    adds: 'Address',
    phn: 'Phone',
    bucur1: 'Politehnica University of Bucharest',
    bucur2: 'Politehnica University of Bucharest is an institution of high education from Bucharest, Romania. It is considered one of the biggest technical universities from Romania, with 15 faculties and more than 25.000 students.',
    chi1: 'Technical University of Moldova',
    chi2: 'Technical University of Moldova is the only technical institution of high education from Chisinau, Moldova ',
    iasi1: 'Technical University of Iasi',
    iasi2: 'Technical University of Iasi "Gheorghe Asachi" is an institution of high education in Iasi, Romania. In 2011 it was ranked as the first level University of advanced research and education from Romania.',
    cluj1: 'Technical University of Cluj-Napoca',
    cluj2: 'Technical University of Cluj-Napoca is an institution of high education from Cluj-Napoca, Romania.',
    bras1: '"Transilvania" University of Brasov',
    bras2: '"Transilvania" University of Brasov is an institution of high education from Brasov, Romania, with 18 faculties, more than 18.528 studends and 764 teachers.'
  },
  team: {
    nr1: 'Regional Coordinator',
    nr2: 'Local Coordinator',
    nr3: 'Secretary',
    nr4: 'Fundraising Responsible',
    nr5: 'HR Responsible',
    nr6: 'Topics Responsible',
    nr7: 'Design Responsible',
    nr8: 'PR Responsible',
    nr9: 'IT Responsible'
  },

  testmn: {
    ren: 'EBEC means youth, creativity and passion for the automotive industry. We continued to support BEST in this projesct because we believe in the power of creativity of the students with a passion for automotive industry. In all these years, we found students who manage to surprise us with their vision.',
    bsc: 'For Bosch, EBEC is a competition in which every employer needs to invest because it represents a good opportunity to identify new  talent and to come up with interesting trials in which students have the opportunity and desire to work. Bosch proudly supports EBEC.',
    pax1: 'After the first  trial, we ranked 5th place, but after the final score, we obtained 7th place. The important thing is that we got up there and that we proudly represented Romania and Republic of Moldova at a European engineering competition that brings the best students in the spotlight.',
    pax2: 'For the trial set of Autodesk, we had to learn before the competition, the new 360 Fusion program, to be able to create 3D, the prototype of the proposed. The trials were real challenges, but ultimately that is the beauty of this competition.',
    pax3: 'Participation to the international stage of EBEC, was for us a constructive experience, surprising herself by nature. This competition challenged us to give all the best in front of dozens of young people of different nationalities, as passionate and motivate as we.',
  }
}

var ro = {
  lang: 'ro',
  nav: {
    abt: 'Despre',
    gl: 'Galerie',
    test: 'Testimoniale',
    tm: 'Echipa',
    ptn: 'Parteneri',
    ct: 'Contact'
  },

  ctest: {
    title: 'Concurs',
    rules: 'Reguli',
    rule1: 'Intră cu adresa de mail sau profilul de facebook/twitter',
    rule2: 'Răspunde la întrebarea obligatorie pentru a obține 3 intrări în concurs',
    rule3: 'Ne poți da LIKE la pagina de facebook pentru extra 2 intrări (opțional)',
    rule4: 'Crearea mai multor conturi va duce la descalificare',
    msg: 'Câștigătorii vor fi selectați aleatoriu de către sistem. Succes!'
  },

  intro: {
    header: 'Despre',
    tab4: 'Universități',
    h1ebec: 'Ce este BEST?',
    p1ebec: 'BEST (Board of European Students of Technology) este o organizație studențească europeană, non-profit, apolitică și non-reprezentativă, care se adresează studenților de la universitățile tehnice.',
    h2ebec: 'Ce este EBEC?',
    p2ebec: 'European BEST Engineering Competition, pe scurt EBEC, este cea mai mare competiţie de inginerie din Europa, creată de studenţi pentru studenţi pentru a-i aduna cei mai buni studenţi europeni de la inginerie.',
    h3ebec: 'Piramida EBEC',
    p3ebec: 'EBEC este dezvoltat pe un sistem înlănţuit, piramidal. Este format din trei nivele, fiecare nivel al piramidei referindu-se la rundele relevante ce au loc pe toată perioada anului.',
    h4ebec: 'EBEC în cifre:',
    p4li1: '84 de runde locale în 32 de țări europene',
    p4li2: '15 runde naţionale şi regionale',
    p4li3: '1 rundă finală organizată la Brno'
  },

  uni: {
    chan: 'Rector',
    fnd: 'Înființare',
    nrSt: 'Nr. de studenți',
    nrFc: 'Nr. de facultăți',
    adds: 'Adresă',
    phn: 'Telefon',
    bucur1: 'Universitatea Politehnică din București',
    bucur2: 'Universitatea Politehnică din București este o instituție de învățământ superior de stat din București, România. Totodată, este cea mai mare universitate tehnică din țară, având 15 facultăți și aproximativ 25.000 de studenți.',
    chi1: 'Universitatea Tehnică a Moldovei',
    chi2: 'Universitatea Tehnică a Moldovei este o instituție de învățămant superior tehnic din Chișinău, Republica Moldova și este unica de acest profil acreditată de stat. ',
    iasi1: 'Universitatea Tehnică din Iași',
    iasi2: 'Universitatea Tehnică „Gheorghe Asachi” din Iași este o instituție de învățământ superior din Iași, România. În 2011, a fost clasificată în prima categorie din România, cea a universităților de cercetare avansată și educație.',
    cluj1: 'Universitatea Tehnică din Cluj-Napoca',
    cluj2: 'Universitatea Tehnică din Cluj-Napoca este o instituție de invățământ superior tehnic de stat din Cluj-Napoca, România.',
    bras1: 'Universitatea „Transilvania” din Brașov',
    bras2: 'Universitatea „Transilvania” este o instituție de invățământ superior de stat din Brașov, România, care cuprinde 18 facultăți, un număr de 18.528 de studenți și 764 de cadre didactice. '


  },
  team: {
    nr1: 'Coordonator Regional',
    nr2: 'Coordonator Local',
    nr3: 'Secretar',
    nr4: 'Responsabil de Fundraising',
    nr5: 'Responsabil de Resurse Umane',
    nr6: 'Responsabil de Topicuri',
    nr7: 'Responsabil de Design',
    nr8: 'Responsabil de PR',
    nr9: 'Responsabil de IT'
  },

  testmn: {
    ren: 'EBEC înseamnă tinerețe, vitalitate, creativitate și multă pasiune pentru domeniul auto. Am continuat să fim alături de BEST în acest proiect pentru că noi credem în puterea de creativitate a studenților pasionați de auto. Am descoperit în toți acești ani tineri care reusesc să ne surprindă cu viziunea lor.',
    bsc: 'Pentru Bosch EBEC reprezintă o competiție în care fiecare angajator ar trebui să investească pentru că reprezintă o oportunitate bună de a identifica talente, de a veni cu probe interesante la care studenții au posibilitatea și dorinta să lucreze. Bosch susține în continuare EBEC!',
    pax1: 'În urma primei probe ne-am clasat pe locul 5, dar în urma punctajului final, am obţinut locul 7. Important este faptul că am ajuns până acolo şi că am reprezentat cu mândrie România şi Republica Moldova la un concurs European de inginerie care-i aduce în prim plan pe cei mai buni studenţi.',
    pax2: 'Pentru proba pregatită de Autodesk, a trebuit să învățăm în perioada de dinainte a concursului noul program Fusion 360, astfel încât să fim capabili să ne modelăm 3D, prototipul propus. Probele au fost adevărate provocări, însă până la urmă acesta este farmecul acestui concurs.',
    pax3: 'Participarea la etapa internațională a EBEC a fost pentru noi o experiența constructivă, însăși prin natura sa provocatoare. Această competiție ne-a provocat să dăm tot ce este mai bun în fața a zeci de tineri de diferite naționalități, la fel de pasionați și motivați ca noi.',
  }
}

var app = new Vue({
  el: '#app',
  data: {
    pg: en
  },
  methods: {
    changeToEn () { this.pg = en },
    changeToRo () { this.pg = ro },
  }
})

// console.log(app)

// VUe here
