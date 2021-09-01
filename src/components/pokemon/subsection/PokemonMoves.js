import React from "react";

export default function PokemonMoves({ moves }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Levels Learned At</th>
        </tr>
      </thead>
      <tbody>
        {moves.map((moveItem, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td className="text-capitalize">{moveItem.move.name}</td>
              <td>
                {moveItem.version_group_details
                  .map((level) => level.level_learned_at)
                  .join(", ")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
