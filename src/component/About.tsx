const About = () => {
  return (
    <main className="xl:max-w-[1000px] mt-40 mb-20 md:mt-36 md:text-left flex flex-col place-items-center sm:mt-48 w-full sm:text-center h-fit">
      <h2 className="text-4xl font-extrabold text-center">
        ABOUT <span className="text-pink-600">ME</span>
      </h2>
      <p className="text-xl pt-5 md:max-w-[700px] leading-7 sm:w-full sm:pl-5 sm:pr-5 font-medium">
        My name is{" "}
        <span className="text-2xl font-bold fullName">Omikunle Ademola Samuel</span>. A
        software developer(Front-End). This Blog was created with CRUD
        functionalities using React, where you can Create a post, Read the post,
        Upadate the post, and Delete the post. There is also a search
        functionality where you can search for a particular post using the
        title. TailwindCSS was used for styling and Typescript was used for
        types...
      </p>
    </main>
  );
};

export default About;
