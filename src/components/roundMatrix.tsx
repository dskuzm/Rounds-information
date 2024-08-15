import React from "react";
import classNames from "classnames";

type PropsType = {
  items: string;
  height: number;
};

const RoundMatrixComponent: React.FC<PropsType> = ({ items, height }) => {
  const itemsList = items.split(",");
  const isPartOfVerticalGroup = (index: number): boolean =>
    itemsList[index] === "4" && itemsList[index - 5] === "4";

  return (
    <div className="gameField">
      {itemsList.map((item, index) => {
        const isGroupOfFour = item === "4";
        const imgSrc = `/Rounds-information/images/${item}.png`;

        const className = classNames("gameItem", {
          groupOfFour: isGroupOfFour,
          hidden: isGroupOfFour && isPartOfVerticalGroup(index),
        });

        return (
          <div key={index} className={className}>
            <img src={imgSrc} alt={`item ${item}`} />
          </div>
        );
      })}
    </div>
  );
};

export default RoundMatrixComponent;
