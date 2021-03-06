const Footer = () => {
  return (
    <footer className="py-5 bg-black2">
      <div className="container px-4 px-lg-5">
        <div className="footer-text">
          <p className="m-0 text-center text-white">
            Copyright &copy; Easy Delivery 2021
          </p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 61 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="pig-nose-footer">
              <g id="nose" filter="url(#filter0_d)">
                <path
                  d="M57 28.1944C57 38.526 50.3432 43.9195 39.3645 46.3727C34.1634 47.5349 28.7369 47.4982 23.5335 46.3467C12.3938 43.8815 4 38.4897 4 28.1944C4 17.681 10.6744 5.89734 22.383 1.37175C27.2652 -0.515325 32.7915 -0.460614 37.6166 1.56814C48.7052 6.23047 57 17.8297 57 28.1944Z"
                  fill="#D029D3"
                  fill-opacity="0.70"
                />
              </g>
              <g id="nostril-left-footer" filter="url(#filter1_d)">
                <path
                  d="M26.3988 24.5055C26.3988 28.9248 23.5033 32.5073 19.9316 32.5073C16.3598 32.5073 13.4643 28.9248 13.4643 24.5055C13.4643 20.0862 16.3598 14.6787 19.9316 14.6787C23.5033 14.6787 26.3988 20.0862 26.3988 24.5055Z"
                  fill="#FDB9FC"
                  fill-opacity="0.34"
                />
              </g>
              <g id="nostril-right-footer" filter="url(#filter2_d)">
                <path
                  d="M46.747 24.5055C46.747 28.9248 43.8515 32.5073 40.2798 32.5073C36.708 32.5073 33.8125 28.9248 33.8125 24.5055C33.8125 20.0862 36.708 14.6787 40.2798 14.6787C43.8515 14.6787 46.747 20.0862 46.747 24.5055Z"
                  fill="#FDB9FC"
                  fill-opacity="0.34"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="61"
                height="55.2275"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d"
                x="9.46429"
                y="14.6787"
                width="20.9345"
                height="25.8286"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d"
                x="29.8125"
                y="14.6787"
                width="20.9345"
                height="25.8286"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
