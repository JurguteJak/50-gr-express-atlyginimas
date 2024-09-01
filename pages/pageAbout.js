import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageAbout() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Apie projekta', ['main', 'header'])}
        <body>
            ${header('/about')}

             <main>
                <h1>Apie projekta</h1>
                <p>Projektas, kuriame galima:</p>
                <h2>Darbuotoju profilis</h2>
                <ul>
                    <li>susikurti</li>
                    <li>pamatyti visu registruotu darbuotoju sarasa</li>
                    <li>pasalinti</li>
                    <li>redaguoti varda</li>
                    <li>redaguoti pavarde</li>
                </ul>
            </main>

            ${footer()}    
        </body>
        </html>`;
}