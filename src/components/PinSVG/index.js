// components/PinSVG.jsx

const PinSVG = ({ color = "#FF0000" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" fill="#FFF" />
  </svg>
);

export default PinSVG;
