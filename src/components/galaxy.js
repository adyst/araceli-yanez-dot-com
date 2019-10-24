import React from 'react'
import * as THREE from "three"

class Galaxy extends React.Component {
  componentDidMount() {
    const fov = 25
    const aspect = window.innerWidth / window.innerHeight
    const near = 100
    const far = 2000

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const light = new THREE.HemisphereLight(0xffffff,0xff0000,1)

    light.position.set(1, 0, 1).normalize()
    scene.add(light)
    camera.position.z = 1000
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.mouseX = 0
    this.mouseY = 0
    this.windowHalfX = window.innerWidth / 2
    this.windowHalfY = window.innerHeight / 2
    this.theta = 0
    this.radius = 500
    this.isMobile = window.matchMedia('(max-width: 768px)').matches

    this.addSphericalStars()

    window.addEventListener( 'resize', this.onWindowResize, false )
    document.addEventListener( 'mousemove', this.onDocumentMouseMove, false )

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize, false)
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  addSphericalStars = () => {
    let geometry = new THREE.SphereGeometry( 5, 32, 32 )
  
    for (let i = 0; i < 750; i++ ) {
      let randomColor = this.randomGalaxyColor()
      let material = new THREE.MeshLambertMaterial( { color: randomColor } )
      let object = new THREE.Mesh(geometry, material)
      
      object.position.x = this.random(-1000, 1000)
      object.position.y = this.random(-1000, 1000)
      object.position.z = this.random(-1000, 1000)
      object.rotation.x = this.random(0, 2 * Math.PI)
      object.rotation.y = this.random(0, 2 * Math.PI)
      object.rotation.z = this.random(0, 2 * Math.PI)
      let randomScale = this.random(0.25, 2)
      object.scale.x = randomScale
      object.scale.y = randomScale
      object.scale.z = randomScale
      
      this.scene.add(object)
    }
  }
  
  random = (min, max) => {
    return parseInt(Math.random() * (max-min+1), 10) + min
  }

  randomGalaxyColor = () => {
    let h = this.random(330, 360)
    let s = this.random(80, 100)
    let l = this.random(40, 70)
    return 'hsl(' + h + ',' + s + '%,' + l + '%)'
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.isMobile = window.matchMedia('(max-width: 768px)').matches
  
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  onDocumentMouseMove = (event) => {
    this.mouseX = event.clientX - this.windowHalfX
    this.mouseY = event.clientY - this.windowHalfY
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    if(this.isMobile){
      this.theta += 0.01
      this.camera.position.x = this.radius * Math.sin( THREE.Math.degToRad( this.theta ) )
      this.camera.position.y = this.radius * Math.sin( THREE.Math.degToRad( this.theta ) )
      this.camera.position.z = this.radius * Math.cos( THREE.Math.degToRad( this.theta ) )
    }
    else {
      this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.05
      this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * 0.05
    }

    this.camera.lookAt( this.scene.position );  
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <div className="background" ref={mount => {this.mount = mount}}/>
  }
}

export default Galaxy