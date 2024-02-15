import React from "react";
import '../styles/Cv.css';
import cvData from '../cv.json';

export default function Cv() {
    return (
        <div className="cv">
            <div className="tables">
            <h1>Arbetslivserfarenhet</h1>
            <table className="work">
                <tr>
                    <th>Roll</th>
                    <th>Arbetsplats</th>
                    <th>Period</th>
                </tr>
                {cvData.jobb.map((jobb) => (
                    <tr key={jobb.id}>
                        <td>{jobb.titel}</td>
                        <td>{jobb.arbetsplats}</td>
                        <td>{jobb.period}</td>
                    </tr>
                ))}
            </table>
            <h1 className="utbildning">Utbildning</h1>
            <table className="student">
                <tr>
                    <th>Utbildning</th>
                    <th>Skola</th>
                    <th>Period</th>
                </tr>
                {cvData.utbildning.map((utb) => (
                    <tr key={utb.id}>
                        <td>{utb.program}</td>
                        <td>{utb.utbildning}</td>
                        <td>{utb.period}</td>
                    </tr>
                ))}
            </table>
            </div>
        </div>
    );
}
