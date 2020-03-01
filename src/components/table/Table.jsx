import React from 'react';


function Table(props) {
    if (props.data.Response == 'False'){
        return (
            <div>
                <h2>Filmas nerastas</h2>
            </div>
        )

    } else {
        return (
            <div className="table">
                <table>
                    <thead className="thead-dark">
                        <tr>
                            <th>Pavadinimas</th>
                            <th>Apie</th>
                            <th>Imdb įvertinimas</th>
                            <th>Trukmė</th>
                            <th>Režisierius</th>
                        </tr>
                        <tr>
                            <td>{props.data.Title}</td>
                            <td>{props.data.Plot}</td>
                            <td>{props.data.Rated}</td>
                            <td>{props.data.Runtime}</td>
                            <td>{props.data.Director}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        );

    }
}

export default Table;