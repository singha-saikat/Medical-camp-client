
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Rating from "react-rating-stars-component";
import { Navigation } from "swiper/modules";
import axios from "axios";
import SectionTitle from "../../../Shared/Section Tittle/SectionTittle";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Clients Have to Say"
                heading="Participant Testimonials"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="testimonial-slider">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-4 my-8">
                            <Rating
                                count={5}
                                size={24}
                                value={review.rating}
                                edit={false}
                                activeColor="#FFC107"
                                emptyColor="#E0E0E0"
                            />
                            <p className="py-4 text-center text-gray-700">{review.details}</p>
                            <h3 className="text-2xl text-blue-600 font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Camp: {review.campName}
                                <br />
                                Date: {review.date}
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{review.feedback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
