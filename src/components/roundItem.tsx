import React, { useState, useMemo } from "react";
import { RoundsListProps } from "@/components/types";
import RoundDetailsComponent from "@/components/roundDetails";

type PropsType = {
  item: RoundsListProps;
};

const RoundItemComponent: React.FC<PropsType> = ({ item }) => {
  const [selectedRoundId, setSelectedRoundId] = useState<string>("");
  const [roundCounter, setRoundCounter] = useState<number>(0);
  const imgSrc = `/images/reload.png`;
  const date = useMemo(() => new Date(item.dateTime), [item.dateTime]);
  const formattedDate = useMemo(
    () =>
      date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    [date],
  );

  const handleItemClick = (id: string) => {
    setSelectedRoundId(id);
    setRoundCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <li className="item">
      {selectedRoundId && (
        <button
          className="buttonRefresh"
          onClick={() => handleItemClick(item.roundId)}
        >
          <img src={imgSrc} alt="reload" />
        </button>
      )}
      <div onClick={() => handleItemClick(item.roundId)}>
        <div className="itemHeader">
          <span>{item.roundId}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <RoundDetailsComponent
        roundId={selectedRoundId}
        fetchDataCounter={roundCounter}
      />
    </li>
  );
};

export default RoundItemComponent;
