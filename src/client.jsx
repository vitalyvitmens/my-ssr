import { hydrateRoot } from 'react-dom/client'
import { App } from './App'

if (typeof window !== 'undefined') {
  hydrateRoot(document, <App />)
}
