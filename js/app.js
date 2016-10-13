(function () {

  'use strict'

  const app = angular.module('cameraApp', [])

  $('select').material_select()

  app.filter('cameraStars', function () {
    return (number) => {
      let stars = ''
      for (let i = 0; i < number; i++) {
        stars += '⭐️ '
      }
      return stars
    }
  })

  app.filter('addItem', () => {
    return (item) => {

    }
  })

})()
