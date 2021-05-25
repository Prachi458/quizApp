import React from "react";

const UsersHistory = ({ usersData }) => {
  return (
    <div>
      <table className="table-class">
        <th className="table__heading-class">Name</th>
        <th className="table__heading-class">Category</th>
        <th className="table__heading-class">Difficulty</th>
        <th className="table__heading-score-class">Score</th>

        {usersData.map((item) => {
          return (
            <tr>
              <td className="table__data-class">{item.name}</td>
              <td className="table__data-class">{item.category}</td>
              <td className="table__data-class">{item.difficulty}</td>
              <td className="table__data-score-class">{item.score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default UsersHistory;
