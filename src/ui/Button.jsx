import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const clasName =
    "inline-block rounded-lg bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 shadow-md transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const base =
    "inline-block text-sm rounded-lg bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 shadow-md transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3",
    round:
      " px-2.5 py-1 text-sm inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 shadow-md transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    secondary:
      "inline-block text-sm border-2 border-stone-300  rounded-lg font-semibold uppercase tracking-wide text-stone-500 shadow-md transition-colors duration-300 hover:bg-stone-100 focus:outline-none focus:ring focus:ring-stone-700 focus:ring-offset-2 px-4 py-2.5 disabled:cursor-not-allowed",
    small: base + " p-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        to={to}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
