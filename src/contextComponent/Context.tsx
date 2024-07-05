import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import useAxiosFetch from "../useAxiosFetch/UseAxiosFetch";
import axios from "axios";

export interface Props {
  _id: string;
  title: string;
  body: string;
  addTitle: string;
  setAddTitle: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  created:[]

}

const blogContext = createContext<null | any>({});

export const blogContextProvider = () => {
  return useContext(blogContext);
};

export const Context = ({ children }: any) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [posts, setPost] = useState<Props[]>([]);
  const [addTitle, setAddTitle] = useState("");
  const [addPost, setAddPost] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editPost, setEditPost] = useState("");
  const [open, setOpen] = useState(false);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:4000/users"
  );

  useEffect(() => {
    setPost(data);
  }, [data]); 

  const searchPost = posts
    .filter(
      (post) => (post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || post.body.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    )
    .reverse();

  useEffect(() => {
    searchPost;
  }, [posts, search]);

  const handleDelete = async (_id: string) => {
    await axios.delete(`http://localhost:4000/users/${_id}`);
    try {
      let poster = posts.filter((post) => post._id !== _id);
      setPost(poster);
      navigate("/");
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    }
  };

  const openPost = () => {
    setOpen(true);
  };

  const closePost = () => {
    setOpen(false);
  };

  const submitBlog = async () => {
    const add = {
      _id: (posts.length + 1).toString(),
      title: addTitle,
      body: addPost,
    };

    if (addTitle === "" || addPost === "") {
      alert("fields cant be blank");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/users", add);

      return setPost((prev: any) => {
        setAddTitle("");
        setAddPost("");
        setOpen(false);
        return [...prev, response.data];
      });
    } catch (error: any) {
      alert(`${error.message}`);
      console.log(`Error: ${error.message}`);
    }
  };

  const handleEdit = async (_id: string) => {
    const edit = {
      _id: (posts.length + 1).toString(),
      title: editTitle,
      body: editPost,
    };

    if (editPost === "" || editTitle === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.put(
          `http://localhost:4000/users/${_id}`,
          edit
        );

        setEditPost("");
        setEditTitle("");
        navigate("/");
        setPost(
          posts.map((post) => (post._id === _id ? { ...response.data } : post))
        );
      } catch (error: any) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  return (
    <blogContext.Provider
      value={{
        search,
        setSearch,
        posts,
        setPost,
        addTitle,
        setAddTitle,
        addPost,
        setAddPost,
        open,
        setOpen,
        searchPost,
        handleDelete,
        openPost,
        closePost,
        submitBlog,
        fetchError,
        isLoading,
        navigate,
        handleEdit,
        editPost,
        editTitle,
        setEditPost,
        setEditTitle,
      }}
    >
      {children}
    </blogContext.Provider>
  );
};
