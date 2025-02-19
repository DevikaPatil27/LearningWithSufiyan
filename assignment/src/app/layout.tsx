import "./globals.css";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <header className="bg-card shadow-md p-4">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-xl font-bold">My App</h1>
            <ul className="flex gap-4">
              <li>
                <Link href="/">
                  <Button variant="ghost">Home</Button>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <Button variant="ghost">Register</Button>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <Button variant="ghost">Products</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
