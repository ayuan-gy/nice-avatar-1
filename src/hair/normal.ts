export default function hairNormal(props: { color: string }): string {
  const { color } = props;
  return `<svg style="position: absolute;bottom: 20%;width: 94%;height: 81%;left: -0.5%" width="240" height="270" viewBox="0 0 240 270" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M123.788 17.4887L123.864 17.4969L123.941 17.4991C150.61 18.2835 171.342 28.8969 186.013 41.8493C200.069 54.2583 208.463 68.7231 211.2 78.5817C207.14 80.8991 200.185 82.8931 191.315 84.5285C181.639 86.3123 170.022 87.615 158.168 88.5436C134.462 90.4007 109.978 90.7491 98.5428 90.5005L92.4699 90.3685L97.2764 94.0826C99.774 96.0125 103.099 97.3557 106.615 98.3003C110.156 99.2517 114.034 99.8354 117.746 100.167C121.57 100.509 125.299 100.589 128.387 100.51C117.8 108.672 104.325 114.948 91.0384 119.6C75.6922 124.973 60.7685 128.12 51.2093 129.521L49.0601 129.836L49.551 131.952C52.8984 146.381 59.0518 171.603 63.179 188.519C65.01 196.025 66.4422 201.895 67.0537 204.463C68.1379 209.017 71.5518 215.508 75.4484 221.491C79.0412 227.008 83.2329 232.38 86.7703 235.687L78.9322 267.5H49.3714C57.7091 254.787 59.469 240.097 57.7689 224.517C55.9286 207.653 50.0074 189.513 43.7659 171.35C43.1514 169.562 42.5339 167.774 41.9165 165.986C36.2326 149.527 30.5644 133.113 27.4936 117.382C24.0922 99.9582 23.9407 83.6514 30.3264 69.3137C40.6653 46.0999 58.9929 32.6198 77.3255 25.1911C95.701 17.745 113.945 16.4399 123.788 17.4887Z" fill="${color || "#171921"}" stroke="#171921" stroke-width="4" ></path>
    </svg>`;
}