import { Html, Head, Main, NextScript } from "next/document";
import { ACCENT_COLOR } from "../common/colors";

export default function Document() {
    return (
        <Html lang="ua">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/ico/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/ico/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/ico/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/ico/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content={ACCENT_COLOR} />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
