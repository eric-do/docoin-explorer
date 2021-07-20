import React from 'react'

interface Props {
  headers: string[];
  data: Data[]
};

interface Data {
  key: string | number;
  fields: (string | number)[];
};

const Table = ({headers = [], data = [] as Data[]}: Props) => {
  return (
    <div className="table-container">
      <table className="table is-fullwidth">
        <thead>
          <tr>{ headers.map(h => <th key={h}>{h}</th>) }</tr>
        </thead>
        <tbody>
          {
            data.map(row => {
              return (
                <tr key={row.key}>
                  { row.fields.map((field, i) => <td key={i}>{field}</td>)}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;