import React from "react";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const testimonials = [
  {
    avatar: AVTR1,
    name: "fatema zohra",
    review:
      "jferhgj fnrjnfjd fdoskadkz<jx jedkoafj kedjfodh gjieuthgi nfdj fjrhg grjhg fbh hfeuhf ehfdjnvk hierjhug fjf jfrih ejfe jerhfu ejwfiohw fjwirhf fewjhf fhuiwrhf ahfuiehf jfr fjdh jhfencs hf hdwushf wk nejf hffj",
  },
  {
    avatar: AVTR2,
    name: "fatema zohra",
    review:
      "jferhgj fnrjnfjd fdoskadkz<jx jedkoafj kedjfodh gjieuthgi nfdj fjrhg grjhg fbh hfeuhf ehfdjnvk hierjhug fjf jfrih ejfe jerhfu ejwfiohw fjwirhf fewjhf fhuiwrhf ahfuiehf jfr fjdh jhfencs hf hdwushf wk nejf hffj",
  },
  {
    avatar: AVTR3,
    name: "fatema zohra",
    review:
      "jferhgj fnrjnfjd fdoskadkz<jx jedkoafj kedjfodh gjieuthgi nfdj fjrhg grjhg fbh hfeuhf ehfdjnvk hierjhug fjf jfrih ejfe jerhfu ejwfiohw fjwirhf fewjhf fhuiwrhf ahfuiehf jfr fjdh jhfencs hf hdwushf wk nejf hffj",
  },
  {
    avatar: AVTR4,
    name: "fatema zohra",
    review:
      "jferhgj fnrjnfjd fdoskadkz<jx jedkoafj kedjfodh gjieuthgi nfdj fjrhg grjhg fbh hfeuhf ehfdjnvk hierjhug fjf jfrih ejfe jerhfu ejwfiohw fjwirhf fewjhf fhuiwrhf ahfuiehf jfr fjdh jhfencs hf hdwushf wk nejf hffj",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My Recent Works</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" 
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={65}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='client avatar'/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
