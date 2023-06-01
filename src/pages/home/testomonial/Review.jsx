const Review = ({review}) => {
    const {name, img, location, review:userReview } = review;
    return (
        <div className="p-3">
            <div>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className="flex justify-start gap-5 mt-10">
<div>
<div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} />
  </div>
</div>
</div>
<div>
    <h3>{name}</h3>
    <p>{location}</p>
</div>

            </div>
        </div>
    );
};

export default Review;