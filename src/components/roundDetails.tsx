import React, { useEffect } from "react";
import { useFetchRound } from "@/hooks/useFetchRound";
import RoundMatrixComponent from "@/components/roundMatrix";

type PropsType = {
  roundId: string;
  fetchDataCounter: number;
};

const RoundDetailsComponent: React.FC<PropsType> = ({
  roundId,
  fetchDataCounter,
}) => {
  const { round, loading, error, fetchData } = useFetchRound(roundId);
  const imgSrc = `/Rounds-information/images/reload.png`;

  useEffect(() => {
    if (fetchDataCounter) {
      fetchData();
    }
  }, [fetchDataCounter, fetchData]);

  if (loading)
    return (
      <div className="warningMessage">
        <img className="iconLoading" src={imgSrc} alt="reload" />
      </div>
    );
  if (error)
    return <div className="warningMessage">Error loading round details</div>;

  return (
    round && (
      <div className="itemBody">
        <RoundMatrixComponent items={round.items} height={+round.height} />
      </div>
    )
  );
};

export default RoundDetailsComponent;
