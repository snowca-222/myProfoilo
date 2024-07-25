import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
const years = new Date().getFullYear() - 2014;
const user = {
  name_ch: "謝羽捷",
  name_en: "Wayne",
  email: "satoushoichi222@gmail.com",
  office: "Frontend Developer",
  intro: [
    "個性活潑、外向，善於溝通。",
    "喜愛創作與研究，分享知識與技巧。",
    "曾任職教育相關產業、進口代理業、遊戲業等相關產業。",
    `從事網頁前端設計/工程近  ${years} 年的實務經驗。( 以 Vue 為主，React 有開發基礎)`,
    "擅長 Vue 開發，具備清楚的思維來進行切版編排、RWD、互動效果等製作。",
    "從設計起家，因此在開發的過程中具備 UI / UX 的觀點進行調整。",
    "有接案經驗，以台灣為主，承接過來自美國的專案。",
    "每天練習英文、日本語，並花一點時間學習新知識與技術。",
  ],
  skills: [
    "HTML",
    "CSS3",
    "SASS/SCSS",
    "JavaScript",
    "Vue2/Vue3",
    "React.js",
    "RWD",
    "TailwindCSS",
    "RESTfulAPI",
    "UI/UX",
    "git版控",
    "3D 模型製作",
    "插畫",
    "平面設計",
  ],
  software: [
    {
      name: "Photoshop",
      icon: "",
    },
    {
      name: "Illustrator",
      icon: "",
    },
    {
      name: "Indesign",
      icon: "",
    },
    {
      name: "After Effects",
      icon: "",
    },
    {
      name: "Premiere Pro",
      icon: "",
    },
    {
      name: "Figma",
      icon: "",
    },
    {
      name: "Blender 3D",
      icon: "",
    },
    {
      name: "Zbrush",
      icon: "",
    },
    {
      name: "Clip Studio Paint",
      icon: "",
    },
  ],
  language: [
    "Chinese - 母語",
    "English - 初階(基本溝通/閱讀)",
    "Japanese - 初階(基本溝通/閱讀)",
  ],
  hobby: ["2D / 3D 創作", "模型製作", "影片創作", "羽球、游泳", "音樂遊戲"],
  experience: [
    {
      year: 2013,
      office: "平面美編人員",
      works: [
        "幼教教材書籍編排設計",
        "文宣海報、名片設計",
        "Flash 動畫製作",
        "產品包裝設計",
        "CIS 招牌與燈箱設計",
      ],
    },
    {
      year: 2014,
      office: "網頁前端設計師",
      works: [
        "網頁前端設計",
        "文宣海報、名片設計",
        "商品拍攝與美化",
        "紙本印刷設計與規範",
        "相關 logo 設計",
        "遊戲 UI 規劃與製作",
        "多媒體動畫設計",
        "聯播網廣告設計",
      ],
    },
    {
      year: 2019,
      office: "網頁前端工程師",
      works: [
        "網頁前端設計",
        "網頁前端資料處理",
        "API 資料串接",
        "多媒體動畫製作",
        "廣告製作",
        "UI 介面設計",
        "logo 設計",
      ],
    },
  ],
  soho: [
    "網頁書籍撰寫",
    "網頁錄影教學",
    "網頁教學課程現場助教",
    "Panasonic 商品插畫繪製",
    "手遊 PV 影片設計與製作",
    "遊戲相關周邊商品設計",
    "活動企劃與執行",
    "美甲師形象網站",
    "會計師形象網站",
    "營造產業形象網站",
    "機車貸款網站製作",
    "台美心理專業交流協會網站開發",
  ],
};

function HidBtn() {
  return <button className="rounded-md bg-green-400 px-2 py-1">隱藏</button>;
}
// 自我介紹
function IntroLists() {
  const listItems = user.intro.map((list, idx) => <li key={idx}>{list}</li>);
  return <ul>{listItems}</ul>;
}

// 技能
function Skill() {
  const listItems = user.skills.map((list, idx) => <li key={idx}>{list}</li>);
  return <ul>{listItems}</ul>;
}
// 軟體
function Software() {
  const listItems = user.software.map((list, idx) => (
    <li key={idx}>{list.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
// 語言
function Language() {
  const listItems = user.language.map((list, idx) => <li key={idx}>{list}</li>);
  return <ul>{listItems}</ul>;
}
// 興趣
function Hobbies() {
  const listItems = user.hobby.map((list, idx) => <li key={idx}>{list}</li>);
  return <ul>{listItems}</ul>;
}
// 經歷
function Experience() {
  const listItems = user.experience.map((list, idx) => (
    <li key={idx}>{list.year}</li>
  ));
  return <ul>{listItems}</ul>;
}

// SOHO
function SOHO() {
  const listItems = user.soho.map((list, idx) => <li key={idx}>{list}</li>);
  return <ul>{listItems}</ul>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HidBtn />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div>照片</div>
            <div>
              <Software />
            </div>
            <div>
              <Skill />
            </div>
            <div>
              <Hobbies />
            </div>
          </div>
          <div className="w-1/2">
            <div>{user.office}</div>
            <div>
              {user.name_ch} {user.name_en}
            </div>
            <div>{user.email}</div>
            <IntroLists />
            <Language />
            <SOHO />
            <Experience />
          </div>
        </div>
        <div>作品與案例</div>
      </div>
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
    </>
  );
}

export default App;
