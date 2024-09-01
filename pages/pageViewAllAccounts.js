import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageViewAllAccounts() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Visos paskyros', ['main', 'header', 'table'])}
        <body>
            ${header('/accounts')}   

            <main>
                <h1>Visos paskyros</h1>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Vardas</td>
                            <td>Isidarbinimo data</td>
                            <td>Valandinis</td>
                            <td>Atlyginimas</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jonas</td>
                            <td>2020-01-01</td>
                            <td>5</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maryte</td>
                            <td>2021-02-02</td>
                            <td>6</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Petras</td>
                            <td>2022-03-14</td>
                            <td>7</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ona</td>
                            <td>2024-08-01</td>
                            <td>10</td>
                            <td>---</td>
                        </tr>
                    </tbody>
                </table>
            
            </main>

            ${footer()}
        </body>
        </html>`;
}