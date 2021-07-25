import React from 'react'

interface Props {
  headers: string[];
  data: Data[]
  linkedColumns: {
    [index: number]: string
  };
};

interface Data {
  key: string | number;
  fields: (string | number)[];
};

const Table = ({headers = [], data = [], linkedColumns}: Props) => {
  return (
    <div className="table-container">
      <table className="table is-fullwidth">
        <thead>
          <tr>{ headers.map(h => <th key={h}>{h}</th>) }</tr>
        </thead>
        <tbody>
          {
            data.map(row => (
              <tr key={row.key}>
                {
                  row.fields.map((field, i) => (
                    linkedColumns[i]
                    ? <td key={i} ><a href={`${linkedColumns[i]}${field}`}>{field}</a></td>
                    : <td key={i}>{field}</td>
                  ))
                }
              </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;