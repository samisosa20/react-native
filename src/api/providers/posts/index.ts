import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const usePostsProviders = () => {
  const getListPosts = (search: string | null) => {
    const response = axios({
      method: "GET",
      url: "/posts",
      params: { q: search },
    });
    return trackPromise(response);
  };
  
  const getPost = (id: string) => {
    const response = axios({
      method: "GET",
      url: `/Posts/${id}`,
    });
    return trackPromise(response);
  };
  return { getListPosts, getPost, };
};

export default usePostsProviders;