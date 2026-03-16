import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleListPage from './pages/ArticlesListPage'
import Layout from './layout'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRouteComponent from './ProtectedRouteComponent'
import SecretsPage from './pages/SecretsPage'

const isLoggedIn = true; // <-- change to true to allow access

const routes = [{
  path: '/',
  element: <Layout></Layout>,
  errorElement: <NotFoundPage></NotFoundPage>,
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
  {
      path: '/secrets',
      element: (
        <ProtectedRouteComponent isAuth={isLoggedIn}>
          <SecretsPage />
        </ProtectedRouteComponent>
      )
  }
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
