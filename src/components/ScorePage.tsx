import scoreLists from "../libs/js/scoreLists.json";
import { useState } from "react";
const handleGetScore = () => {
  console.log(scoreLists);
};

function ScoreTable() {
  const [isShowDetail, setShowDetail] = useState(false);
  const [isList, setIsList] = useState({
    difficult: "",
    gauge: {
      level: "-",
      point: 0,
    },
    memo: "",
    option: {
      speed: 1,
      turn: "normal",
    },
    result: {
      score: 0,
      exScore: 0,
      bestExScore: 0,
      marvelous: 0,
      perfect: 0,
      great: 0,
      good: 0,
      ok: 0,
      miss: 0,
      maxCombo: 0,
      fast: 0,
      slow: 0,
    },
  });
  const handleShowDetail = (getDetail: any) => {
    console.log(getDetail);
    setIsList(getDetail);
    handleShow();
  };
  const handleShow = () => {
    isShowDetail ? setShowDetail(false) : setShowDetail(true);
    console.log(isShowDetail);
  };

  const items = scoreLists.map((item: any, idx: number) => (
    <div key={idx} className="flex">
      <div className="w-1/6 border px-2 py-1 text-xs">{item.songName}</div>
      <div className="w-5/6">
        {item.scoreLists.single.map((difficulty: any, idx2: number) => (
          <div className="flex [&>div]:w-1/5" key={idx2}>
            <div className="border px-2 py-1">{difficulty.difficult}</div>
            <div className="border">
              <div className="w-1/2 px-2 py-1">
                {difficulty.gauge.level}
                <span className="pl-1 text-xs">({difficulty.gauge.point})</span>
              </div>
            </div>
            <div className="border px-2 py-1">{difficulty.result.score}</div>
            <div className="border px-2 py-1">{difficulty.result.exScore}</div>
            <div className="border px-2 py-1">
              <button
                onClick={() => handleShowDetail(difficulty)}
                className="rounded-md bg-red-400 px-2 py-1 text-xs text-white"
              >
                check
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <>
      <div className="[&>div:nth-child(even)]:bg-gray-100">{items}</div>
      <div className={`${isShowDetail ? "block" : "hidden"}`}>
        <ScoreDetail
          props={{
            onHandle: () => handleShow(),
            onLists: isList,
          }}
        />
      </div>
    </>
  );
}

function ScoreDetail({ props }: { props: any }) {
  return (
    <>
      <div>
        <div onClick={props.onHandle}>close</div>
        <div>難度:{props.onLists.difficult}</div>
        <div>Flare skill: {props.onLists.gauge.level}</div>
        <div>score:{props.onLists.result.score}</div>
        <div>EX Score:{props.onLists.result.exScore}</div>
        <div>best EX Score:{props.onLists.result.bestExScore}</div>
        <div>Marvelous:{props.onLists.result.marvelous}</div>
        <div>Prefect:{props.onLists.result.perfect}</div>
        <div>Great:{props.onLists.result.great}</div>
        <div>Good:{props.onLists.result.good}</div>
        <div>OK:{props.onLists.result.ok}</div>
        <div>Miss:{props.onLists.result.miss}</div>
        <div>fast:{props.onLists.result.fast}</div>
        <div>slow:{props.onLists.result.slow}</div>
      </div>
    </>
  );
}
export function ScorePage() {
  return (
    <>
      <div>
        <button
          onClick={handleGetScore}
          className="my-1 rounded-md bg-green-200 px-2 py-1 text-xs"
        >
          取得結果
        </button>

        <div className="flex [&>div]:w-1/6">
          <div className="border px-2 py-1">Music</div>
          <div className="border px-2 py-1">Sequence</div>
          <div className="border px-2 py-1">Flare Skill | Points</div>
          <div className="border px-2 py-1">Score</div>
          <div className="border px-2 py-1">EX Score</div>
          <div className="border px-2 py-1">Detail</div>
        </div>
        <ScoreTable />
      </div>
    </>
  );
}
