import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UploadPage from './upload-page'
import App from './App'

const router = createBrowserRouter([{
    path: '/',
    element: <App />
}, {
    path: '/UploadPage',
    element: <UploadPage />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
