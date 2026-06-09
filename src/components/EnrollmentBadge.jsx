import './EnrollmentBadge.css';

export default function EnrollmentBadge({ count }) {
  if (count === 0) return null;

  return (
    <span className="enrollment-badge">
      {count}
    </span>
  );
}