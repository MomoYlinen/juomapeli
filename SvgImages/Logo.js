import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={103}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M49.344 12.58a2.807 2.807 0 0 0 1.952-.664 2.302 2.302 0 0 0 .74-1.794 1.721 1.721 0 0 0-.652-1.443 2.682 2.682 0 0 0-1.695-.51 2.879 2.879 0 0 0-1.938.665 2.093 2.093 0 0 0-.776 1.655 1.988 1.988 0 0 0 .594 1.54c.392.37.986.552 1.775.552Z"
      fill="#fff"
    />
    <Path
      d="M100.358 16.38a1.84 1.84 0 0 0-1.276-.412 7.189 7.189 0 0 0-1.452.138 2.425 2.425 0 0 0-.434-1.044c-.172-.194-.513-.293-1.018-.293a7.71 7.71 0 0 0-4.515 1.512 10.894 10.894 0 0 0-3.406 3.938 11.092 11.092 0 0 0-1.28 5.201c0 .296.018.576.042.85-.187.167-.38.332-.574.492a3.381 3.381 0 0 1-2.075.763A2.802 2.802 0 0 1 82.66 27a2.07 2.07 0 0 1-.846-1.384c1.565-.763 2.674-1.622 3.317-2.607.644-.984 1.215-2.281 1.215-3.446v-.275a3.656 3.656 0 0 0-2.421-3.268 3.668 3.668 0 0 0-1.414-.21c-1.245 0-2.582.598-4.01 1.796s-2.697 3.124-3.808 5.778c0-1.166.036-2.3.106-3.402 3.063-3.074 5.275-5.761 6.635-8.062 1.36-2.3 2.041-4.522 2.041-6.663 0-1.331-.329-2.417-.986-3.26a3.127 3.127 0 0 0-2.576-1.26c-1.971 0-3.67 1.203-5.096 3.61-1.427 2.405-2.499 5.378-3.217 8.92a50.842 50.842 0 0 0-1.087 10.198c0 .79 0 1.58.037 2.37-.33.308-.668.613-1.018.901a3.385 3.385 0 0 1-2.075.77 2.78 2.78 0 0 1-1.71-.529 2.099 2.099 0 0 1-.849-1.395c1.566-.768 2.672-1.644 3.318-2.63a5.79 5.79 0 0 0 .966-3.236v-.288a3.659 3.659 0 0 0-2.414-3.282 3.673 3.673 0 0 0-1.416-.216c-1.246 0-2.582.604-4.01 1.812-1.428 1.208-2.697 3.147-3.806 5.819 0-1.175.035-2.319.104-3.431 3.066-3.097 5.279-5.805 6.637-8.124 1.36-2.318 2.039-4.558 2.039-6.717 0-1.347-.33-2.44-.986-3.286A3.114 3.114 0 0 0 62.754.738c-2 0-3.703 1.214-5.11 3.641-1.406 2.427-2.474 5.424-3.203 8.992a51.57 51.57 0 0 0-1.09 10.292v1.344c-.43.472-.876.932-1.338 1.378-.621.571-1.14.857-1.555.857a.956.956 0 0 1-.932-.55 3.57 3.57 0 0 1-.276-1.577c0-.891.276-2.596.828-5.115.439-2.08.658-3.408.658-3.983 0-.778-.588-1.166-1.765-1.166-.759 0-1.323.13-1.658.41-.336.281-.621.774-.828 1.512a36.205 36.205 0 0 0-1.02 4.514 25.272 25.272 0 0 0-.36 3.417c-.526.583-1.07 1.15-1.642 1.686-.636.561-1.183.84-1.644.84a.869.869 0 0 1-.725-.36 1.62 1.62 0 0 1-.276-1.012c0-.68.322-2.486.966-5.415.57-2.562.856-4.13.856-4.704a.753.753 0 0 0-.294-.702 2.308 2.308 0 0 0-1.106-.189c-.76 0-1.331.148-1.71.445a2.707 2.707 0 0 0-.849 1.477 41.07 41.07 0 0 1-1.71 5.15 15.067 15.067 0 0 1-1.676 3.124c-.518.686-.952 1.029-1.297 1.029a.586.586 0 0 1-.552-.29 2.11 2.11 0 0 1-.172-1.015c0-.8.231-2.4.695-4.8.138-.687.323-1.452.552-2.302a14.38 14.38 0 0 0 .382-1.853.873.873 0 0 0-.293-.719c-.198-.165-.562-.246-1.055-.246-.9 0-1.556.148-1.972.445-.47.38-.807.896-.966 1.477a29.533 29.533 0 0 0-1.142 4.55 29.65 29.65 0 0 0-.345 4.718v.047c-.051.04-.1.079-.15.113a3.898 3.898 0 0 1-2.307.739c-.964 0-1.713-.504-2.245-1.512-.533-1.007-.799-2.712-.799-5.115 0-.984.032-1.932.094-2.848 5.187-2.2 7.782-6.139 7.784-11.815 0-1.466-.298-2.65-.893-3.552a2.77 2.77 0 0 0-2.43-1.357c-1.392 0-2.653.687-3.783 2.06-1.13 1.374-2.077 3.159-2.84 5.355a38.73 38.73 0 0 0-1.69 7.072c-1.101.18-2.211.295-3.325.344l-2.86.163h-.024a.128.128 0 0 1-.106-.15c.481-3.168.728-5.692.74-7.575 0-2.151-.365-3.736-1.092-4.755-.728-1.02-1.761-1.529-3.099-1.529a7.544 7.544 0 0 0-4.19 1.366 11.655 11.655 0 0 0-3.42 3.446 4.248 4.248 0 0 0-.77 2.27c-.012.402.099.798.318 1.135a.884.884 0 0 0 .74.445c.327 0 .626-.194.892-.583 1.807-2.678 3.428-4.017 4.863-4.017a1.342 1.342 0 0 1 1.136.583c.288.391.431 1.122.431 2.198 0 1.674-.27 4.1-.808 7.279a.13.13 0 0 1-.12.11l-1.529.065c-.902.046-1.548.246-1.937.6-.39.355-.584.911-.584 1.664 0 .596.15 1.024.46 1.288.311.263.802.396 1.48.396l1.313-.061h.03a.128.128 0 0 1 .1.15A261.848 261.848 0 0 1 6.88 27.86a6.67 6.67 0 0 0-.153 1.23c0 1.328.657 1.991 1.972 1.99 1.213 0 2.034-.996 2.465-2.986.742-3.388 1.317-6.248 1.725-8.581.39-.025 1.119-.082 2.184-.173a39.614 39.614 0 0 0 4.276-.583.072.072 0 0 1 .032 0 .124.124 0 0 1 .113.135 28.928 28.928 0 0 0-.08 2.166c0 3.209.594 5.67 1.784 7.385 1.19 1.715 2.78 2.572 4.771 2.572 1.405 0 2.76-.518 4.065-1.555.03.044.054.09.083.133.658.947 1.505 1.42 2.541 1.422.9 0 1.742-.417 2.524-1.253.783-.835 1.37-2.03 1.763-3.586 0 1.534.26 2.708.778 3.57.518.86 1.331 1.27 2.436 1.27a6.713 6.713 0 0 0 3.862-1.19 15.272 15.272 0 0 0 1.61-1.285c.125.313.28.613.46.896.679 1.052 1.767 1.578 3.263 1.578 1.37 0 2.814-.663 4.331-1.991.09.456.265.892.515 1.285.329.48.853.721 1.573.721s1.244-.176 1.572-.53c.333-.351.629-1.03.883-2.035.37-1.398.88-2.756 1.52-4.054a14.005 14.005 0 0 1 2.09-3.222c.748-.834 1.434-1.25 2.058-1.25a.824.824 0 0 1 .629.29c.186.249.274.557.246.866a2.353 2.353 0 0 1-.655 1.684c-.436.458-1.162.89-2.18 1.297-.921.365-1.382.963-1.382 1.795 0 1.56.542 2.81 1.627 3.751 1.084.94 2.512 1.41 4.283 1.41a6.636 6.636 0 0 0 3.77-1.058c.263-.18.522-.37.775-.566.083.234.196.456.338.66a1.81 1.81 0 0 0 1.573.716c.714 0 1.239-.175 1.572-.524.333-.35.629-1.024.883-2.021a21.7 21.7 0 0 1 1.525-4.022 13.22 13.22 0 0 1 2.09-3.2c.753-.82 1.439-1.231 2.058-1.231a.835.835 0 0 1 .639.285c.19.242.286.545.268.852 0 .667-.468 1.44-.904 1.898-.436.458-1.164.891-2.18 1.302-.92.366-1.382.96-1.382 1.78 0 1.547.542 2.788 1.624 3.722 1.083.933 2.513 1.397 4.29 1.39a6.677 6.677 0 0 0 3.743-1.05c.318-.217.624-.446.927-.683.044.064.086.128.135.19a3.89 3.89 0 0 0 3.204 1.546c1.75 0 2.983-.985 3.698-2.954l-.035.549c0 .852.187 1.457.57 1.836.381.38.94.566 1.747.566.806 0 1.387-.187 1.745-.566.357-.379.535-1 .535-1.87a39.886 39.886 0 0 1 .207-4.274c.126-1.27.321-2.603.584-4 .183-.905.298-1.822.345-2.744a1.516 1.516 0 0 0-.449-1.182Zm-24.03-6.041A25.21 25.21 0 0 1 77.805 6c.505-1.071.964-1.607 1.378-1.607a.755.755 0 0 1 .69.53c.185.488.269 1.008.247 1.53 0 1.454-.467 3.076-1.4 4.867a22.107 22.107 0 0 1-3.547 4.962c.27-2.002.654-3.987 1.153-5.945Zm-17.163-.32a26.759 26.759 0 0 1 1.48-4.456c.507-1.101.963-1.652 1.367-1.652.301 0 .53.183.693.547.185.502.269 1.036.246 1.57 0 1.497-.466 3.164-1.4 5.002a22.894 22.894 0 0 1-3.541 5.095 55.884 55.884 0 0 1 1.156-6.107ZM25.17 8.838a18.48 18.48 0 0 1 1.43-3.741c.492-.916.985-1.371 1.429-1.366a.72.72 0 0 1 .616.448c.183.383.268.806.246 1.23 0 2.196-.389 3.992-1.168 5.389a7.606 7.606 0 0 1-3.416 3.126.14.14 0 0 1-.071 0 .131.131 0 0 1-.107-.1.131.131 0 0 1-.002-.05 37.613 37.613 0 0 1 1.043-4.936ZM95.934 21.44c-.416 2.288-.888 3.878-1.417 4.77-.53.893-1.117 1.339-1.765 1.337a1.251 1.251 0 0 1-1.052-.532c-.266-.354-.4-.875-.4-1.563a9.264 9.264 0 0 1 .728-3.638 7.385 7.385 0 0 1 1.934-2.764 4.11 4.11 0 0 1 2.628-1.08l-.656 3.47Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
