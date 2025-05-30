import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const clasName =
    "inline-block rounded-lg bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 shadow-md transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const base =
    "inline-block rounded-lg bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 shadow-md transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3",
    small: base + " p-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button to={to} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
