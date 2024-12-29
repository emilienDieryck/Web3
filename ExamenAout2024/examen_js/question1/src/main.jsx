import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from 'components/Home/Home.jsx'
import Books from 'components/Books/Books.jsx'
import App from 'components/App/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BookProvider } from 'contexts/BookContext.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </React.StrictMode>,
);
