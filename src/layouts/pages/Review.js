import React from "react";
import { commaLogo, profileIcon1, profileIcon2, profileIcon3 } from "../assets";
import PageHeading from "../components/sub-components/PageHeading";
import ReviewCard from "../components/sub-components/ReviewCard";

const Review = () => {
  document.title = "NS | Review";
  const reviews = [
    {
      commaLogo: commaLogo,
      reviewDesc:
        "Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!",
      profileIcon: profileIcon1,
      customer: "Patrick Hellinger",
      rating: 3,
    },
    {
      commaLogo: commaLogo,
      reviewDesc:
        "Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!",
      profileIcon: profileIcon2,
      customer: "Helen Marksen",
      rating: 3.5,
    },
    {
      commaLogo: commaLogo,
      reviewDesc:
        "Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!",
      profileIcon: profileIcon3,
      customer: "Serena Williams",
      rating: 4.5,
    },
  ];

  const iterate = {
    reviews: reviews.map((ele, index) => {
      const { commaLogo, reviewDesc, profileIcon, customer, rating } = ele;
      return (
        <ReviewCard
          key={index}
          data={{ commaLogo, reviewDesc, profileIcon, customer, rating }}
        />
      );
    }),
  };

  return (
    <>
      <section className="review" id="review">
        <PageHeading first="customer's" last="review" />
        <div className="box-container">{iterate.reviews}</div>
      </section>
    </>
  );
};

export default Review;
