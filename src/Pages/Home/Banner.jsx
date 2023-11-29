import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import banner_1 from "../../assets/Banner/banner-1.jpg"
import banner_2 from "../../assets/Banner/banner-2.jpg"
import banner_3 from "../../assets/Banner/banner-3.jpg"
import banner_4 from "../../assets/Banner/banner-4.jpg"
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <div className="h-[80vh] bg-hero  ">
      <div className="flex flex-col md:flex-row items-center justify-center pt-12 ">
        <div className="flex-1 px-2">
          <h1 className="text-3xl md:text-5xl text-center mb-2 text-blue-500 ">
            Food Made With Love
          </h1>
          <p className="text-center">
            Your passport to culinary excellence! Our Food and Beverage app
            brings you the finest offerings from renowned brands like McDonald,
            Starbucks, PepsiCo, and others.
          </p>
        </div>
        <div className="hidden md:inline flex-1 p-0 md:p-28 ">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            <div data-src={banner_1} />
            <div data-src={banner_2} />
            <div data-src={banner_3} />
            <div data-src={banner_4} />
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
