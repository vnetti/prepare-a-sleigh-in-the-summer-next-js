import classes from './styles.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <h1><span>Загружаюсь</span></h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ background: 'none', display: 'block', shapeRendering: 'auto' }}
        width="211px"
        height="211px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <circle cx="60" cy="50" r="4" fill="#ff638e">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="-0.67s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="-0.67s"
            />
          </circle>
          <circle cx="60" cy="50" r="4" fill="#ff638e">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="-0.33s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="-0.33s"
            />
          </circle>
          <circle cx="60" cy="50" r="4" fill="#ff638e">
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="0s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="0s"
            />
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fe9c2c" transform="rotate(90 50 50)" />
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fe9c2c">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;45 50 50;0 50 50"
              keyTimes="0;0.5;1"
            />
          </path>
          <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#fe9c2c">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;-45 50 50;0 50 50"
              keyTimes="0;0.5;1"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
