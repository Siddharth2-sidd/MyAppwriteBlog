import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Protected, Login} from './components/index.js';
import AddPost from './components/pages/AddPost.jsx';
import AllPost from './components/pages/AllPost.jsx';
import Home from './components/pages/Home.jsx';
import Post from './components/pages/Post.jsx';
import SignUp from './components/pages/SignUp.jsx';
import EditPost from './components/pages/EditPost.jsx';

const router = createBrowserRouter([
{
  path:"/",
  element: <App />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:(
        <Protected authentication={false}>
          <Login />
        </Protected>
      )
    },
    {
      path:"/signup",
      element:(
        <Protected authentication={false}>
          <SignUp />
        </Protected>
      )
    },
    {
      path:"/all-Posts",
      element:(
        <Protected authentication>
          {" "}
          <AllPost />
        </Protected>
      )
    },
    {
      path:"/add-post",
      element:(
        <Protected authentication>
          {" "}
          <AddPost />
        </Protected>
      )
    },
    {
      path:"/edit-post/:slug",
      element:(
        <Protected authentication>
          {" "}
          <EditPost />
        </Protected>
      )
    },
    {
      path:"/post/:slug",
      element: <Post />
    },
  ],
}
])


createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
