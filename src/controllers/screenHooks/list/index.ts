// Package
import { useEffect, useState } from "react";

// Api
import useApi from "../../../api";

interface dataRespItems {
  id: number;
  title: string;
  author: string;
}

const useList = () => {
  const [listPosts, setListPosts] = useState<Array<dataRespItems>>([])

  const {useActions} = useApi()
  const {usePostsActions} = useActions()
  const {actGetPosts} = usePostsActions()

  const showListPosts = (data: Array<dataRespItems>) => {
    setListPosts(data)
  }
  const onError = () => {
    console.error("Fail connection")
  }
  useEffect(() => {
    actGetPosts(null, showListPosts, onError)
  }, []);

  return {
    listPosts
  };
};

export default useList;
