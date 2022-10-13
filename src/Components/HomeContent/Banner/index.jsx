import { useContext } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import { Carousel } from "antd";
import "./Banner.css";
// App
const Banner = () => {
  const { data } = useContext(GeneralContext);

  const contentStyle = {
    with: "100%",
    height: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  console.log("dataaa", data);
  return (
    <div className="banner-container">
      {data && (
        <Carousel autoplay afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
