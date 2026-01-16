import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: 'swap',
  variable: '--font-hindi',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Preprankup - SSC परीक्षा तैयारी | AI-Powered Mock Tests",
  description: "भारत का प्रमुख SSC परीक्षा तैयारी प्लेटफॉर्म। 1000+ मॉक टेस्ट, AI विश्लेषण और स्मार्ट इनसाइट्स के साथ अपनी रैंक सुधारें। India's leading SSC exam preparation platform.",
  keywords: "SSC, CGL, CHSL, MTS, mock tests, exam preparation, AI analysis, government jobs, सरकारी नौकरी, मॉक टेस्ट",
  authors: [{ name: "Preprankup" }],
  openGraph: {
    title: "Preprankup - SSC परीक्षा तैयारी | AI-Powered Mock Tests",
    description: "SSC परीक्षा के लिए AI-पावर्ड मॉक टेस्ट और स्मार्ट विश्लेषण। Practice real SSC exam-level mock tests.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi-en" className={`${inter.variable} ${notoSansDevanagari.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
