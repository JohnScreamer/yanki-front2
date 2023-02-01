import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ua">
            <Head>
                <link rel="shortcut icon" href="/public/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
