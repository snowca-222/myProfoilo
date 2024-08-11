import { useState } from "react";
import data from "./libs/js/user.json";
import { BoxInfo } from "./libs/ts/interface.ts";
import { ScorePage } from "@/components/ScorePage.tsx";
// import axios from "axios";
import { PPP, ggg } from "@/libs/js/api/post.js";

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

function BoxTitle({ title }: BoxInfo) {
  return <div> {title}</div>;
}
function Header({ onPage }: { onPage: any }) {
  const handleChangePage = (setPage: string) => {
    setIsSelect(setPage);
    const newPage = setPage;
    onPage(newPage);
  };

  const lists = [
    {
      id: "FlareSkill",
      title: "Flare Skill",
    },
    {
      id: "ScoreLists",
      title: "Score",
    },
    {
      id: "Rivals",
      title: "Rivals",
    },
  ];
  const [isSelect, setIsSelect] = useState("FlareSkill");

  let selectedStyle = "font-bold bg-yellow-400";
  const Navlists = lists.map((list) => (
    <button key={list.id} className="px-1">
      <div
        onClick={() => handleChangePage(list.id)}
        className={`rounded-md px-4 py-2 text-lg hover:bg-yellow-300 ${isSelect === list.id ? selectedStyle : "bg-yellow-400/30"}`}
      >
        {list.title}
      </div>
    </button>
  ));

  return (
    <>
      <header className="sticky top-0 bg-gray-200 py-2">
        <div className="container mx-auto">
          <nav className="flex justify-center">{Navlists}</nav>
        </div>
      </header>
    </>
  );
}

function FlarePage() {
  return (
    <>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="w-full bg-green-600">&nbsp;</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="bg-green-600 text-center text-white">SP</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="bg-green-600 text-center text-white">DP</div>
        </div>
      </div>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="bg-green-600 px-2 text-white">Rank</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">none</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">none</div>
        </div>
      </div>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="bg-green-600 px-2 text-white">Total</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0</div>
        </div>
      </div>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="bg-green-600 px-2 text-white">Classic</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
      </div>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="bg-green-600 px-2 text-white">White</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
      </div>
      <div className="flex py-1">
        <div className="w-1/3 px-1">
          <div className="bg-green-600 px-2 text-white">Gold</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
        <div className="w-1/3 px-1">
          <div className="border px-2">0 (0/30)</div>
        </div>
      </div>
    </>
  );
}
function SkillPage() {
  return (
    <>
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
    </>
  );
}
function handlePost() {
  PPP("Wayne", 37).then((res: any) => {
    console.log(res.data);
  });
  // axios
  //   .post(import.meta.env.VITE_API_URL, {
  //     method: "write",
  //     name: "wayne",
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
function handleGet() {
  ggg().then((res: any) => {
    console.log(res);
  });
}
function App() {
  const [page, setPage] = useState("FlareSkill");
  // 父子傳遞
  const handleChildStatePage = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <>
      <Header onPage={handleChildStatePage} />

      <div className="container mx-auto">
        {page === "FlareSkill" ? (
          <FlarePage />
        ) : page === "ScoreLists" ? (
          <ScorePage />
        ) : (
          <SkillPage />
        )}
      </div>
      <div>
        <button className="rounded-md bg-purple-300 p-2.5" onClick={handlePost}>
          測試POST
        </button>
        <button className="p2.5 rounded-md bg-orange-600" onClick={handleGet}>
          測試GET
        </button>
      </div>

      <Ori />
    </>
  );
}
function Ori() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <div className="card h-3 text-center">
          <button
            className="rounded-md bg-green-300 px-2 py-1"
            onClick={() => setCount((count) => count + 1)}
          >
            click
          </button>
          <div>count is {count}</div>
          <OriResult propCount={count} />
        </div>
      </div>
    </>
  );
}
function OriResult({ propCount }: { propCount: any }) {
  return (
    <>
      <div>count is {propCount}</div>
    </>
  );
}
export default App;
