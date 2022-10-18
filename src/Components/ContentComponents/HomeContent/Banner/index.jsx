import { useContext } from "react";
// Context
import GeneralContext from "../../../../Context/GeneralContext";
// Style
import { Carousel } from "antd";
import "./Banner.css";
// App
const Banner = () => {
  const { data } = useContext(GeneralContext);

  const contentStyle = {
    with: "100%",
    height: "25rem",
    color: "#fff",
    lineHeight: "13rem",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = (currentSlide) => {
    //console.log(currentSlide);
  };

  // console.log("Log para la data, para las imágenes del banner", data)

  return (
    <div className="banner-container">
      {data && (
        <Carousel autoplay afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>Working Progress</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Working Progress</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Working Progress</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Working Progress</h3>
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
