
import "./Toast.css";

export default function Toast({ message, show }) {
  return (
    show && (
      <div className="toast">
        <p>{message}</p>
      </div>
    )
  );
}
