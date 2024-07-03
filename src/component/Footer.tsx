const Footer = () => {
  return (
    <div className="fixed bottom-0 z-20 w-full h-10 flex flex-col  justify-center bg-blue-400 text-white font-bold text-center xl:max-w-[1000px]">
      <span className="">Copyright &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
