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
    // Esto se deja para futuras y posibles acciones para el banner. Promociones por ejemplo
  };

  return (
    <div className="banner-container">
      {data && (
        <Carousel autoplay afterChange={onChange}>
          <div style={contentStyle}>
            <img style={{ width: "100%", height: "25rem" }} alt={data.name} src={data[0].img} />
          </div>
          <div style={contentStyle}>
            <img style={{ width: "100%", height: "25rem" }} alt={data.name} src={data[1].img} />
          </div>
          <div style={contentStyle}>
            <img style={{ width: "100%", height: "25rem" }} alt={data.name} src={data[2].img} />
          </div>
          <div style={contentStyle}>
            <img style={{ width: "100%", height: "25rem" }} alt={data.name} src={data[3].img} />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
