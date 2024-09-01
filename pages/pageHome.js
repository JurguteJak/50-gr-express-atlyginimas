export function pageHome() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Atlyginimai</title>
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="stylesheet" href="/css/header.css" />
        </head>
        <body>
            <header>
                <img src="/img/logo.png" alt="Logo">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
            </header>

            <main>
                <h1>Welcome to "Atlyginimas" platform!</h1>
                <p>Choose your next action:</p>
                <a href="/create-account">Create account</a>
                <a href="/all-accounts">View all accounts</a>
            </main>

            <footer>
                Cipyright &copy; 2024
            </footer>
        </body>
        </html>`;
}