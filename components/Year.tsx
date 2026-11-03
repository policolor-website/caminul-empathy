"use client";

import { useEffect, useState } from "react";

export default function Year() {
  const [y, setY] = useState<number | null>(null);
  useEffect(() => setY(new Date().getFullYear()), []);
  return <>{y ?? 2026}</>;
}
