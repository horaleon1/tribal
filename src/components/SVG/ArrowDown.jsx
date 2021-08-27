const ArrowDown = ({ transform = "rotate(0)" }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={transform}
    >
      <path
        d="M1.5 1.75L6 6.25L10.5 1.75"
        stroke="#0D2A25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
