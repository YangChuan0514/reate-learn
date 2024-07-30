import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>我是登陆</div>
      {/* 声明式导航 */}
      <Link to={"/text"}>去文章页面</Link>
      {/* 命令式导航 */}
      <div
        onClick={() => {
          nav("/text");
        }}
      >
        去文章页面
      </div>
      {/* 携带参数 url直接携带 */}
      <div
        onClick={() => {
          nav("/text?id=1001&name=小明");
        }}
      >
        去文章页面带参数
      </div>
      {/* 携带参数 使用路由声明携带 */}
      <div
        onClick={() => {
          nav("/text/1001/小明");
        }}
      >
        去文章页面带参数
      </div>
    </div>
  );
};
