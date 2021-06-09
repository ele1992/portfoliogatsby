import React, { useState } from "react";
import "../styles/global.css";

// markup
// const IndexPage = ({ data }) => {
//   const [activeProject, setActiveProject] = React.useState();

//   const toggleActiveProject = (project) => () => {
//     setActiveProject(project);
//   };

//   return (
//     <div className="text-white bg-black py-20 leading-loose">
//       <div className="max-w-screen-md mx-auto flex flex-col min-h-screen">
//         <header className="bg-black p-8">
//           <h1 className="text-4xl font-bold">Yip Au Yeung</h1>
//         </header>
//         <section className="p-8">
//           <Title>About me</Title>
//           <p className="mt-6">
//             Ever since I was born I have been working in the hospitality
//             industry, and although the customer interaction and creativity
//             needed to create food and solve any problem was very satisfying. I
//             knew that I could physically not be doing this my whole life. I made
//             my switch to programming because I loved the idea of building
//             whatever comes to mind. As long as you have an idea everything is
//             possible.
//           </p>
//           <p className="mt-6">
//             After finishing my course at Codaisseur I gained experience working
//             with HTML, CSS, Javascript, React, Git, Node.js, and REST API. I am
//             currently interested in UX/UI design.
//           </p>
//         </section>
//         <section className="flex-1 p-8">
//           <Title>Projects</Title>
//           <div className="grid grid-cols-2 my-8 gap-4">
//             {[
//               {
//                 title: "League of Tinder",
//                 description: "...",
//                 images: [],
//                 tags: ["React"],
//               },
//               {
//                 title: "Gatsby portfolio",
//                 description: "...",
//                 images: [
//                   "https://camo.githubusercontent.com/1bc44b088cb899cdce9db7320f8b9ffe069063f0545ce1a71fdef6f3d1040c71/68747470733a2f2f696d616765732e636f6e74656e74737461636b2e696f2f76332f6173736574732f626c74663266623134646433313736633666362f626c74363431643532326162393639663366342f3562393166633561343133333531356335633166326165392f646f776e6c6f6164",
//                 ],
//                 tags: ["React"],
//               },
//               {
//                 title: "Classroom assignment",
//                 description: "...",
//                 images: [],
//                 tags: ["React"],
//               },
//             ].map((project, i) => (
//               <Card
//                 onClick={toggleActiveProject(project)}
//                 key={i}
//                 title={project.title}
//                 description={project.description}
//                 tags={project.tags}
//               />
//             ))}
//           </div>
//         </section>
//         <section className="flex-1 p-8">
//           <Title>Links</Title>
//           <Links
//             links={[
//               { url: "linked.in", name: "LinkedIn" },
//               { url: "linked.in", name: "Github" },
//               { url: "linked.in", name: "E-mail" },
//             ]}
//           />
//         </section>
//         <footer className="bg-black text-white p-4 text-center">
//           Made by Yip
//         </footer>
//       </div>
//       {activeProject && (
//         <div
//           className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center"
//           onClick={toggleActiveProject(null)}
//         >
//           <div className="rounded p-8 bg-white text-black px-40 py-20">
//             <Title>{activeProject.title}</Title>
//             {activeProject.images.map((image) => (
//               <img className="max-w-md shadow" src={image} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Card = ({ title, description, tags, onClick }) => (
//   <div
//     className="bg-white rounded-xl p-8 text-black hover:bg-black cursor-pointer hover:text-white transition duration-200"
//     onClick={onClick}
//   >
//     <h1 className="text-2xl font-bold">{title}</h1>
//     <p className="mt-4">{description}</p>
//     <div className="my-2 flex justify-end">
//       {tags.map((tag, i) => (
//         <span
//           key={i}
//           className="inline-block rounded bg-green-400 text-white px-4"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// const Links = ({ links }) => (
//   <ul className="list-disc pl-6">
//     {links.map((link, i) => (
//       <Link key={i} url={link.url} name={link.name} />
//     ))}
//   </ul>
// );

// const Link = ({ url, name }) => (
//   <li>
//     <a className="underline" href={url} target="_blank" rel="noreferrer">
//       {name}
//     </a>
//   </li>
// );

// const Title = ({ children }) => (
//   <h2 className="text-2xl font-bold">{children}</h2>
// );

const Title = ({ children }) => (
  <h1 className="text-black text-2xl p-5">{children}</h1>
);

const Text = ({ children, toggleText }) => (
  <p className="text-black text-sm p-7 " onClick={() => toggleText()}>
    {children}
  </p>
);
const Carousel = ({ children }) => <div>({children})</div>;

const IndexPage = () => {
  const [showText, setShowText] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showContacts, setShowContacts] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const ShowAboutMeOnClick = () => {
    const timeInMiliseconds = showProjects ? 0 : 900;
    setShowProjects(true);
    setTimeout(() => {
      setShowAboutMe(true);
    }, timeInMiliseconds);
    // setShowAboutMe(!showAboutMe);
  };
  const ShowSkillsOnClick = () => {
    const timeInMiliseconds = showAboutMe ? 600 : 0;
    setShowAboutMe(false);
    setTimeout(() => {
      setShowProjects(false);
    }, timeInMiliseconds);
  };
  const ShowProjectsOnClick = () => {
    setShowAboutMe(false);
    setShowProjects(true);
  };

  const ShowContactsOnClick = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0">
        <nav className="flex text-white">
          <button onClick={() => ShowAboutMeOnClick()}>About Me</button>
          <button onClick={() => ShowSkillsOnClick()}>Skills</button>
          <button onClick={() => ShowProjectsOnClick()}>Projects</button>
          <button onClick={() => ShowContactsOnClick()}>Flip Menu</button>
        </nav>
      </header>
      <div className=" text-white mx-auto p-4 max-w-screen-md flex flex-col">
        <div className="scene">
          <div className={showContacts ? "menu is-flipped" : "menu"}>
            <div className="menu-card">
              <div className="menu-card-face menu-card-face-back">
                Backface-skills
              </div>
              <div className="menu-card-face menu-card-face-front">
                Front-skills
              </div>
            </div>
            <div
              className={
                showProjects
                  ? "menu-card is-right "
                  : "menu-card is-right is-flipped"
              }
            >
              <div className="menu-card-face menu-card-face-back">
                Backface-projects
              </div>
              <div className="menu-card-face menu-card-face-front">
                Front-projects
              </div>
            </div>
            <div
              className={
                showAboutMe
                  ? "menu-card is-left "
                  : "menu-card is-left is-flipped"
              }
            >
              <div className="menu-card-face menu-card-face-back">
                Backface-about
              </div>
              <div className="menu-card-face menu-card-face-front">
                Front-about
              </div>
            </div>

            {/* 
          <div className="menuCard_Cell menuCard_CellTwo">
            <div className="menuCard_CellTwo_Half"></div>
          </div>
          <div
            className={
              showProjects
                ? "menuCard_Cell menuCard_CellThree"
                : "menuCard_Cell menuCard_CellThree_flippedRight"
            }
          >
            <div className="menuCard_CellThree_Half"></div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
