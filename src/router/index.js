import { createBrowserRouter} from "react-router-dom";
import { Login } from "../view/login";
import { Text } from "../view/text";
import App from "../App";
import Border from "../view/border";
import About from "../view/about";
import NotFound from '../view/notFound'
// l路由的两种类型
// hash, history
// hash 路由为 #/ 后加path 实现原理只要时将他 hashChange 不需要后端支持  createBrowserRouter
// history 路由为 / 后加path 实现为 history对象和浏览器的pushState方法 需要后端的支持  createHashRouter
const routerList = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      //   {
      //     path: "/border",
      //     element: <Border></Border>,
      //   },
      // 默认直接展示二级路由
      {
        index: true,
        element: <Border></Border>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/text/:id/:name",
    element: <Text></Text>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
export default routerList;
