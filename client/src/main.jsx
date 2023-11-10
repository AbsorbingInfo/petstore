import store from './store'
import { Provider } from 'react-redux'
import { router } from './App'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <Provider store={store}><RouterProvider router={router} /></Provider>)