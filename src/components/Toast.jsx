import { useState, useEffect } from "react";
import "./Toast.css";

export default function Toast({ message, show, duration = 3000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    visible && (
      <div className="toast">
        <p>{message}</p>
      </div>
    )
  );
}
