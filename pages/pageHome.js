import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageHome() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('', ['main', 'header', 'button'])}
        <body>
            ${header('/')}

            <main>
                <h1>Sveikia atvyke i "Atlyginimas" platforma!</h1>
                <p>Pasirinkite savo sekanti zingsni:</p>
                <a class="btn" href="/create-account">Sukurti paskyra</a>
                <a class="btn" href="/accounts">Perziureti visas paskyras</a>
            </main>

            ${footer()}
        </body>
        </html>`;
}