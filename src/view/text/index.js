import { useSearchParams, useParams } from "react-router-dom";
export const Text = () => {
  // url直接携带参数使用useSearchParams获取
  //   const [params] = useSearchParams();
  //   const id = params.get('id')
  //   const name = params.get('name')
  // 使用路由声明携带参数使用useParams获取
  const params = useParams();
  const id = params.id;
  const name = params.name;
  return (
    <div>
      我是文章页面-{id}-{name}
    </div>
  );
};
