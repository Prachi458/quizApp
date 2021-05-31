import React from "react";
import { useSelector } from "react-redux";

const UsersHistory = () => {
  const usersData = useSelector((state) => state.user.usersData);
  const result = useSelector((state) => state.result.score);

  return (
    <div>
      <table className="table-class">
        <thead>
          <th className="table__heading-class">Name</th>
          <th className="table__heading-class">Category</th>
          <th className="table__heading-class">Difficulty</th>
          <th className="table__heading-score-class">Score</th>
        </thead>
        {usersData.map((item) => {
          return (
            <tbody>
              <tr>
                <td className="table__data-class">{item.name}</td>
                <td className="table__data-class">{item.category}</td>
                <td className="table__data-class">{item.difficulty}</td>
                <td className="table__data-score-class">{result}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default UsersHistory;
