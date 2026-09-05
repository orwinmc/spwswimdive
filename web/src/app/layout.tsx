import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
	variable: "--font-google-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sun Prairie West HS Swim & Dive Team",
	description: "A redirection page for SPWHS Swim & Dive Google Sites",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${googleSans.variable}`}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			</head>
			<body>{children}</body>
		</html>
	);
}
