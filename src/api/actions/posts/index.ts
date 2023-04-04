// Hooks
import useProviders from "../../providers";

const usePostsActions = () => {
  const { usePostsProviders } = useProviders();
  const { getListPosts, getPost } = usePostsProviders();

  const actGetPosts = async (
    search: string | null,
    onSuccess: Function,
    onError: Function
  ) => {
    try {
      const res = await getListPosts(search);
      onSuccess && onSuccess(res.data);
    } catch (error) {
      console.log("error", error);
      onError && onError(error);
    }
  };

  const actGetPost = async (
    id: string,
    onSuccess: Function,
    onError: Function
  ) => {
    try {
      const res = await getPost(id);
      onSuccess && onSuccess(res.data);
    } catch (error) {
      console.log("error", error);
      onError && onError(error);
    }
  };
  return { actGetPosts, actGetPost };
};

export default usePostsActions;
