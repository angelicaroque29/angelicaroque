"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/nav";

export function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.12, rootMargin: "-64px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <Nav />
    </div>
  );
}
