const WelcomeSvg = (props: any) => (
  <svg
    id="visual"
    viewBox="0 0 540 960"
    width={540}
    height={960}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0} y={0} width={540} height={960} fill="#001220" />
    <defs>
      <linearGradient id="grad1_0" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="30%" stopColor="#001220" stopOpacity={1} />
        <stop offset="70%" stopColor="#001220" stopOpacity={1} />
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad2_0" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="30%" stopColor="#001220" stopOpacity={1} />
        <stop offset="70%" stopColor="#001220" stopOpacity={1} />
      </linearGradient>
    </defs>
    <g transform="translate(540, 960)">
      <path
        d="M-486 0C-483.6 -66.8 -481.2 -133.7 -449 -186C-416.8 -238.3 -354.7 -276 -300.5 -300.5C-246.3 -325 -199.9 -336.2 -151.2 -364.9C-102.4 -393.6 -51.2 -439.8 0 -486L0 0Z"
        fill="#FBAE3C"
      />
    </g>
    <g transform="translate(0, 0)">
      <path
        d="M486 0C453.2 52.6 420.4 105.1 401.9 166.5C383.4 227.8 379.3 297.9 343.7 343.7C308 389.4 240.9 410.9 178.3 430.5C115.8 450.2 57.9 468.1 0 486L0 0Z"
        fill="#FBAE3C"
      />
    </g>
  </svg>
);
export default WelcomeSvg;
