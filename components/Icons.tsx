const paths: Record<string, string> = {
  heart: "M12 21s-7.5-4.6-9.5-9C.8 8.4 2.6 5 6 5c2 0 3.2 1 4 2.2C10.8 6 12 5 14 5c3.4 0 5.2 3.4 3.5 7-2 4.4-5.5 9-5.5 9z",
  mind: "M12 3a7 7 0 0 0-4 12.7V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 3z M9.5 8.5a2.5 2.5 0 1 1 5 0",
  move: "M5 12h14 M13 6l6 6-6 6 M8 4v4 M8 16v4",
  puzzle: "M4 7h4a2 2 0 1 1 4 0h4a2 2 0 0 1 2 2v4a2 2 0 1 0 0 4v1a2 2 0 0 1-2 2h-4v-2a2 2 0 1 0-4 0v2H6a2 2 0 0 1-2-2v-4a2 2 0 1 1 0-4V9a2 2 0 0 1 0-2z",
  voice: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z M19 10v1a7 7 0 0 1-14 0v-1 M12 18v4 M8 22h8",
  bowl: "M4 12h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8z M8 12c0-4 4-4 4-8 M13 12c0-3 3-3 3-6",
  shield: "M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5l8-3z M9 12l2 2 4-4",
  drop: "M12 2.7s6.5 6.6 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 9.3 12 2.7 12 2.7z",
  check: "M5 13l4 4L19 7",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z",
  pin: "M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 3",
  star: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  calendar: "M8 2v4 M16 2v4 M3 9h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  users: "M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2 M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  leaf: "M11 20A7 7 0 0 1 4 13c0-5 4-9 10-11 4-1.3 7-1 7-1s-.3 3-1.4 7C18 14 15 18 11 20z M4 21c3-4 7-7 12-8",
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: keyof typeof paths | string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[name] ?? paths.check} />
    </svg>
  );
}
