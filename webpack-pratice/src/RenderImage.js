import g from '../public/asset/g.jpg'

class Image {
  constructor() {
    this.renderImg()
  }

  renderImg() {
    const img = document.createElement('img')
    img.src = g
    document.body.appendChild(img)
  }
}

new Image()
