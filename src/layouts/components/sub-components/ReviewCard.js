import React from "react";

const ReviewCard = (props) => {
  const { commaLogo, reviewDesc, profileIcon, customer, rating } = props.data;
  const starMaker = (rating) => {
    const count = [];
    let temp = rating;
    for (let i = 0; i < parseInt(rating); i++) {
      count.push(i + 1);
      temp -= 1;
    }
    if (temp !== 0) count.push(temp);
    return count;
  };
  const rating_star = starMaker(rating);
  const iterate = {
    rating_star: rating_star.map((ele, index) => {
      if (ele === 0.5) {
        return <i key={index} className="fas fa-star-half-alt"></i>;
      }
      return <i key={index} className="fas fa-star"></i>;
    }),
  };

  return (
    <div className="box">
      <img src={commaLogo} alt="quote" />
      <p>{reviewDesc}</p>
      <img src={profileIcon} alt="customer-avatar" className="user" />
      <h3>{customer}</h3>
      <div className="stars">{iterate.rating_star}</div>
    </div>
  );
};

export default ReviewCard;
