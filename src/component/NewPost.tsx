import ReactDom from "react-dom";
import { blogContextProvider } from "../contextComponent/Context";

const NewPost = ({ children }: any) => {
  const { open } = blogContextProvider();
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="flex flex-col justify-center place-items-center w-1/2 h-screen">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-20"></div>
      <div className="fixed h-screen z-20 top-0 bottom-0 left-0 right-0 flex justify-center place-items-center ">
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default NewPost;
