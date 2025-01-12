import { useState, useEffect } from "react";
import { Photo, Loader } from "../../Components";
import axios from "axios";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [photos, setPhotos] = useState([]);
  const URL = "https://api.unsplash.com/photos";
  const API_KEY = "/?client_id=qhw7x6JDz1025xJWJLtaIS6uSa5Aw6wR986rP5Q9Tfs";

  const fetchPhotos = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${URL}${API_KEY}`);
      setPhotos(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : photos && photos.length ? (
        photos.map((photo) => (
          <Photo
            key={photo.id}
            imageURL={photo.urls.regular}
            imageAltText={photo.alt_description}
            likeCount={photo.likes}
            ownerProfileImg={photo.user.profile_image.small}
            altOwnerProfileImg={photo.user.name}
          />
        ))
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default Home;
