import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from "prop-types";
const responsive = {
  0: { items: 1 },
};

const HomeCarousel = ({ items }) => {
  return (
    <div className="mx-auto  ">
      <AliceCarousel
        responsive={responsive}
        items={items}
        disableButtonsControls
        autoPlay
        animationDuration={5000}
        infinite
      />
    </div>
  );
};

HomeCarousel.propTypes = {
  items: PropTypes.array,
};

export default HomeCarousel;
