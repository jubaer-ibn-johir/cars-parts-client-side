import React from "react";
import man1 from "../../assets/images/man1.png";
import man2 from "../../assets/images/man2.png";
import man3 from "../../assets/images/man3.png";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Jubaer Ibn Zohir",
      review:
        "I'm Jubaer, i have three cars, sometime those cars need repair and parts. i've taken service from this company. i'm satisfied.",
        img: man1,
        rating: <div className="rating rating-md">
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      </div>
    },
    {
      _id: 2,
      name: "Mostafa Al-Bari Rafi",
      review:
        "I'm Rafi, i have three cars, sometime those cars need repair and parts. i've taken service from this company. i'm satisfied.",
        img: man2,
        rating: <div className="rating rating-md">
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      </div>
    },
    {
      _id: 3,
      name: "Hasan Hafizur Rahman",
      review:
        "I'm Shanto, i have three cars, sometime those cars need repair and parts. i've taken service from this company. i'm satisfied.",
        img: man3,
        rating: <div className="rating rating-md">
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      </div>
    },
  ];
  return (
    <section className="mx-6">
      <div>
        <div className="text-center">
          <h2 className="font-bold uppercase text-3xl">Reviews</h2>
          <h2 className="text-3xl">What Our Customers Say</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
              reviews.map(review => <ReviewCard
                key={review._id}
                review={review}

              ></ReviewCard>)
          }
      </div>
    </section>
  );
};

export default Reviews;
