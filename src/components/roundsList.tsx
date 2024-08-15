import React from "react";
import { useFetchRoundList } from "@/hooks/useFetchRoundList";
import RoundItem from "@/components/roundItem";
import { RoundsListProps } from "@/components/types";

const RoundListComponent: React.FC = () => {
  const { roundsList, loading, error } = useFetchRoundList();
  const imgSrc = `/images/reload.png`;
  if (loading)
    return (
      <div className="warningMessage">
        <img className="iconLoading" src={imgSrc} alt="reload" />
      </div>
    );
  if (error) return <div className="warningMessage">Error: {error}</div>;

  return (
    <div>
      <ul className="listItems">
        <li className="item listHeader">
          <div className="itemHeader">
            <span>Rounds</span>
            <span>Date</span>
          </div>
        </li>
        {roundsList?.map((item: RoundsListProps, key: number) => (
          <RoundItem key={key} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default RoundListComponent;
