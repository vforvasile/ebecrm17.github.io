/* globals Vue */
'use strict'

const en = {
  lang: 'en',
  nav: {
    about: 'About',
    gallery: 'Gallery',
    testimonials: 'Testimonials',
    team: 'Team',
    partners: 'Partners',
    contact: 'Contact'
  },
  intro: {
    header: 'About',
    tab4: 'Universities'
  }
}

const ro = {
  lang: 'ro',
  nav: {
    about: 'Despre',
    gallery: 'Galerie',
    testimonials: 'Testimoniale',
    team: 'Echipa',
    partners: 'Parteneri',
    contact: 'Contacteaza-ne'
  },
  intro: {
    header: 'Despre',
    tab4: 'Universitati'
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
