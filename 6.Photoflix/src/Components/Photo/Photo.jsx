import React from "react";

const Photo = ({
  imageURL,
  imageAltText,
  likeCount,
  ownerProfileImg,
  altOwnerProfileImg,
}) => {
  return (
    <article>
      <div>
        <img src={imageURL} alt={imageAltText} />
        <button>
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <div>
          <div>
            <span className="material-symbols-outlined">favorite</span>
            <span>{likeCount}</span>
            <button>
              <span className="material-symbols-outlined">share</span>
            </button>
            <button>
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <div>
            <img src={ownerProfileImg} alt={altOwnerProfileImg} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Photo;
