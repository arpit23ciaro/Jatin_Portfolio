import  { useEffect, useState, useRef } from "react";
export default function RoleTyper({
  roles = ["Senior GRC Analyst"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1500,
  loop = true,
}) {
  const [index, setIndex] = useState(0); 
  const [display, setDisplay] = useState(""); 
  const [deleting, setDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    const currentRole = roles[index % roles.length];
    let timeoutId;

    if (!deleting) {
      if (display.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplay(currentRole.slice(0, display.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setDeleting(true);
        }, pause);
      }
    } else {
      if (display.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplay(currentRole.slice(0, display.length - 1));
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => {
          const next = i + 1;
          if (!loop && next >= roles.length) return i; 
          return next % roles.length;
        });
      }
    }

    return () => clearTimeout(timeoutId);
  }, [display, deleting, index, roles, typingSpeed, deletingSpeed, pause, loop]);

  return (
    <span className="role-typer" aria-live="polite">
      <span className="role-text">{display}</span>
      <span className={`caret ${deleting ? "caret--pause" : ""}`} aria-hidden="true" />
    </span>
  );
}
