import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./libs/js/user.json";
import { BoxInfo } from "./libs/ts/interface.ts";
const years = new Date().getFullYear() - 2014;

// 自我介紹
function IntroLists() {
  const listItems = data.intro.map((list) =>
    list.id === "years" ? (
      <li key={list.id}>{list.txt.replace("_", ` ${years} `)}</li>
    ) : (
      <li key={list.id}>{list.txt}</li>
    ),
  );
  return <ul>{listItems}</ul>;
}

// 技能
function Skill() {
  const listItems = data.skills.map((list, idx) => <li key={idx}>{list}</li>);
  return (
    <>
      <BoxTitle title="技能" />
      <ul>{listItems}</ul>
    </>
  );
}
// 軟體
function Software() {
  const listItems = data.software.map((list, idx) => (
    <li key={idx}>{list.name}</li>
  ));
  return (
    <>
      <BoxTitle title="軟體工具" />
      <ul>{listItems}</ul>
    </>
  );
}
// 語言
function Language() {
  const listItems = data.language.map((list, idx) => <li key={idx}>{list}</li>);
  return (
    <>
      <BoxTitle title="語言" />
      <ul>{listItems}</ul>
    </>
  );
}
// 興趣
function Hobbies() {
  const listItems = data.hobby.map((list, idx) => <li key={idx}>{list}</li>);
  return (
    <>
      <BoxTitle title="興趣" />
      <ul>{listItems}</ul>
    </>
  );
}
// 經歷
function Experience() {
  const listItems = data.experience.map((list, idx) => (
    <li key={idx}>
      <div>
        {list.year} - {list.office}
      </div>
      <ul>
        {list.works.map((a, iidx) => (
          <li className="pl-5" key={iidx}>
            {a}
          </li>
        ))}
      </ul>
    </li>
  ));
  return (
    <>
      <BoxTitle title="工作經歷" />
      <ul className="flex flex-col justify-between md:flex-row">{listItems}</ul>
    </>
  );
}

// SOHO
function SOHO() {
  const listItems = data.soho.map((list, idx) => <li key={idx}>{list}</li>);
  return (
    <>
      <BoxTitle title="接案經歷" />
      <ul>{listItems}</ul>
    </>
  );
}
function BoxTitle({ title }: BoxInfo) {
  return <div> {title}</div>;
}

function Header() {
  const [isSelect, setIsSelect] = useState("About");
  const lists = [
    {
      id: "About",
      title: "關於我",
    },
    {
      id: "works",
      title: "經歷",
    },
    {
      id: "skills",
      title: "工具 & 技能",
    },
  ];
  let selectedStyle = "font-bold bg-yellow-400";
  const NavLists = lists.map((list) => (
    <button className="px-1" onClick={() => setIsSelect(list.id)} key={list.id}>
      <div
        className={`rounded-md px-4 py-2 text-lg hover:bg-yellow-300 ${isSelect === list.id ? selectedStyle : "bg-yellow-400/30"}`}
      >
        {list.title}
      </div>
    </button>
  ));
  return (
    <>
      <header className="bg-gray-200 py-2">
        <div className="container mx-auto">
          <nav className="flex justify-center">{NavLists}</nav>
          <div>{isSelect}</div>
        </div>
      </header>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[calc(100dvh/2)] w-full bg-orange-200/40"></div>
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/3">
            <div className="p-3">
              <div className="h-72 w-72 rounded-full border"></div>
            </div>
          </div>
          <div className="w-1/2">
            <div>{data.office}</div>
            <div>
              {data.name_ch} {data.name_en}
            </div>
            <div>{data.email}</div>
            <IntroLists />
          </div>
        </div>
        <div className="flex">
          <div className="w-2/3 p-2.5">
            <div className="border p-2.5">
              <Experience />
            </div>
          </div>
          <div className="w-1/3 p-2.5">
            <div className="border p-2.5">
              <SOHO />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 p-2.5">
            <div className="border p-2.5">
              <Software />
            </div>
          </div>
          <div className="w-1/3 p-2.5">
            <div className="border p-2.5">
              <Skill />
            </div>
          </div>
          <div className="w-1/3 p-2.5">
            <div className="border p-2.5">
              <Hobbies />
              <Language />
            </div>
          </div>
        </div>
        <div>作品與案例</div>
      </div>
      <div className="hidden">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card h-3 w-2 text-center">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
