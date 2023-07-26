import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const localImage = (id) => `/img/${id}.jpg`
const images = [
  // Front

  // Back
  { position: [1.5, 0.4, 0.8], rotation: [0, 0, 0], url: localImage('001') },
  { position: [0, 0.4, 1.8], rotation: [0, 0, 0], url: localImage('002') },
  { position: [-1.5, 0.4, 2.8], rotation: [0, 0, 0], url: localImage('003') }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
