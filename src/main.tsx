import {createRoot} from 'react-dom/client'
import { App } from './App'
import './index.css'
import 'react-day-picker/dist/style.css';
import './styles/daypicker.css'

const root = createRoot(document.getElementById("root")!)

root.render(<App />)