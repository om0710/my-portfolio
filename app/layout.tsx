import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Bansal — AI/ML & Generative AI Engineer",
  description: "AI/ML undergraduate specializing in Generative AI engineering, building LLM-powered agents, multi-agent workflows, and RAG pipelines.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "LangGraph",
    "LangChain",
    "RAG",
    "Om Bansal",
    "Portfolio",
    "Bennett University"
  ],
  authors: [{ name: "Om Bansal" }],
  openGraph: {
    title: "Om Bansal — AI/ML & Generative AI Engineer",
    description: "AI/ML undergraduate specializing in Generative AI engineering, building LLM-powered agents, multi-agent workflows, and RAG pipelines.",
    url: "https://github.com/om0710",
    siteName: "Om Bansal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Bansal — AI/ML & Generative AI Engineer",
    description: "AI/ML undergraduate specializing in Generative AI engineering, building LLM-powered agents, multi-agent workflows, and RAG pipelines.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
