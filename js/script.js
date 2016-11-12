/* globals Vue */
'use strict'

const en = {
  lang: 'en',
  nav: {
    abt: 'About',
    gl: 'Gallery',
    test: 'Testimonials',
    tm: 'Team',
    ptn: 'Partners',
    ct: 'Contact'
  },
  intro: {
    header: 'About',
    tab4: 'Universities',
    text1ebec: 'European BEST Engineering Competition, short EBEC, is the largest engineering competition in Europe, conducted by students for students and gathers best European students of engineering. Teams composed of 4 students from technology fields, regardless of the status of their degree, are challenged to solve the tasks that are provided by BEST or by partner companies in 3 different competition levels. The team which proves to be the most efficient, creative and successful at the end of the competition’s finale is granted with the “BEST Engineers of Europe” title.',
    h1ebec: 'Teamwork',
    p1ebec: 'Gather your people and choose one competition',
    h2ebec: 'Team Design',
    p2ebec: 'Create something extraordinary from random materials',
    h3ebec: 'Case Study',
    p3ebec: 'Encounter and solve problems in an ingenious way',
    tex2ebec: 'Engineering Competitions (EC) were initially born in Canada. Canadian Federation of Engineering Students (CFES) established in 1985 the idea of having this competitions under the name of Canadian Engineering Competitions (CEC). The aim of these Engineering Competitions were to provide soft skills such as teamwork or public speaking among the technical ones, eventually developing the participants. ',
    text3ebec: 'This idea of organizing competitions was promoted in General Assembly 2002 and in Summer Courses that same year. In those first days, the competitions Core Team was planning already to have a Competitions pyramidal system, as the Canadians were already doing it. They wanted to have new groups formed at higher levels to keep up with BEST spirit, meaning that participants had to work with people from other countries that they didn’t know from before.'
  }
}

const ro = {
  lang: 'ro',
  nav: {
    abt: 'Despre',
    gl: 'Galerie',
    test: 'Testimoniale',
    tm: 'Echipa',
    ptn: 'Parteneri',
    ct: 'Contact'
  },
  intro: {
    header: 'Despre',
    tab4: 'Universitati',
    text1ebec: 'European BEST Engineering Competition, pe scurt EBEC, este cea mai mare competiţie de inginerie din Europa, creată de studenţi pentru studenţi pentru a-i aduna cei mai buni studenţi europeni de la inginerie. Echipe formate din 4 studenţi de la profile tehnice, indiferent de anul universitar, sunt provocaţi să rezolve probleme oferite de BEST şi partenerii săi în 3 nivele diferite de competiţie. Echipa care se dovedeşte a fi cea mai eficientă, creativă şi de succes la sfârşitul finalei competiţiei va primi titlul „BEST Engineers of Europe”.',
    h1ebec: 'Lucru in echipa',
    p1ebec: 'Strange echipa si alege proba',
    h2ebec: 'Design in echipa',
    p2ebec: 'Creaza ceva extraordinar din materiale neconventionale',
    h3ebec: 'Studiu de caz',
    p3ebec: 'Analizeaza si rezolva problemele intr-un mod ingenios',
    tex2ebec: 'Competiţiile de Inginerie (EC) au luat naştere în Canada. Federaţia Canadiană a Studenţilor de la Inginerie (CFES) a creat în 1985 idea de competiţii sub numele de Canadian Engineering Competitions (CEC). Aceste competiţii de inginerie aveau ca scop să ofere soft skills precum lucrul în echipă sau vorbitul în public studenţilor de la inginerie, eventual să-i dezvolte pe participanţi.',
    text3ebec: 'Idea organizării competiţiilor a fost promovată în Adunarea Generală din 2002 şi în Cursurile de Vară din acelaşi an. În acele zile, echipa de organizare a Competiţiilor se gândea să creeze un sistem piramidal pentru Competiţii, la fel cum făceau canadienii. Voiau să aibe grupuri noi formate la cele mai înalte nivele pentru a ţine pasul cu spiritul BEST, însemnând că participanţii trebuiau să lucreze cu oameni din alte ţări pe care nu-i cunoşteau dinainte.'
  }
}

const app = new Vue({
  el: '#app',
  data: {
    page: en
  },
  methods: {
    changeToEn () { this.page = en },
    changeToRo () { this.page = ro }
  }
})

console.log(app)
