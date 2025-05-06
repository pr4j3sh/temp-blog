import "./globals.css";
import Navbar from "@/components/navbar";
import { AUTHOR, SITE } from "@/lib/consts";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata = {
  title: `${SITE.TITLE}`,
  description: `${SITE.DESCRIPTION}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="antialiased">
          <div className="container">
            <Navbar site={SITE} />
            {children}
            <Footer author={AUTHOR} />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
