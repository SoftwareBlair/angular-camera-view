(function () {

  'use strict'

  const app = angular.module('cameraApp')

  app.controller('camerasCtrl', function () {

    this.cameras = [
      {
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        onSale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        onSale: false
      },
      {
        id: 3,
        name: 'Nikon D810A',
        image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      },
      {
        id: 4,
        name: 'Sony A100',
        image: 'https://www.dpreview.com/files/p/articles/5753855911/Images/frontview.jpeg',
        rating: 3,
        price: 395.00,
        onSale: true
      },
      {
        id: 5,
        name: 'Sony A6000',
        image: 'http://www.dpreview.com/files/p/articles/6015073280/images/front.jpeg',
        rating: 5,
        price: 524.00,
        onSale: false
      }
    ]

    this.selectVal = 'name'

    this.searchCam = ''

  });

  app.controller('cartMgr', function () {

    this.cart = []
    this.subtotal = 0
    this.tax = 0
    this.total = 0

    this.addItem = (item) => {

      let itemArr = this.cart.map((data) => {
        return data.name
      })

      let itemIndex = itemArr.indexOf(item.name)

      if (itemIndex === -1)
      {
        this.item = 1
        this.cart.push(item)
      }
      else
      {
        this.cart[itemIndex]++
      }

      this.subtotal += this.item.price
      this.tax = parseFloat(this.subtotal) * 0.08
      this.total = parseFloat(this.subtotal) + parseFloat(this.tax)

    }

  })

})()
