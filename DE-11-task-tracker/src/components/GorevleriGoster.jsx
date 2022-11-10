import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({ gorevler, setGorevler }) => {
  const deleteGorev = (id) => {
    setGorevler(gorevler.filter((i) => i.id !== id));
  };

  return (
    <div className="gorev-container">
      {gorevler.map((x) => {
        const { id, text, day, bittiMi } = x;

        return (
          <div
            className={bittiMi ? "trueStil" : "falseStil"}
            key={id}
            onDoubleClick={() =>
              setGorevler(
                gorevler.map((i) =>
                  i.id === id ? { ...i, bittiMi: !i.bittiMi } : i
                )
              )
            }
          >
            <h3 >
              {text}
              <FaTimesCircle className="sil-button"
               
                onClick={() => deleteGorev(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
