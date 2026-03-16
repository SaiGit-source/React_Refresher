import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleListPage from './pages/ArticlesList'
import Layout from './layout'


const routes = [{
  path: '/',
  element: <Layout></Layout>,
  children: [{
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>
  },
  {
    path: '/articles',
    element: <ArticleListPage></ArticleListPage>
  },
  {
    path: '/articles/:name', // whatever goes in after /articles/{} will be the name parameter for useParams()
    element: <ArticlePage></ArticlePage>
  },
  ]

}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
