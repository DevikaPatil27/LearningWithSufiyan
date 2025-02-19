"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 text-center">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to Next.js with ShadCN UI
      </h1>
      <p className="text-lg text-muted-foreground">
        A modern UI experience with powerful components.
      </p>
      <div className="flex gap-4">
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
        <Link href="/products">
          <Button variant="secondary">View Products</Button>
        </Link>
      </div>
    </main>
  );
}
