import { useEffect, useState } from "react";
import '../styles/Portfolio.css';

export default function Portfolio() {
  const [posts, setPosts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/AdrianMorenoNystrom/repos")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("kunde inte läsa data", error));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + posts.length) % posts.length);
  };

  const formatIsoDate = (isoDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(isoDate).toLocaleDateString('sv-SE', options);
  };

  return (
    <div className="page">
      <div className="slides">
        {posts.map((post, index) => (
          <div key={post.id} className="slide" style={{ display: index === currentSlide ? "block" : "none" }}>
            <div className="project">
              <h2>{post.name}</h2>
              <p>Skapades: {formatIsoDate(post.created_at)}</p>
              <a href={post.html_url} target="_blank" rel="noopener noreferrer">
                (Länk till repository)
              </a>
              
            </div>
            <button class="btnleft" onClick={prevSlide}>&#10094;</button>
            <button class="btnright" onClick={nextSlide}>&#10095;</button>
          </div>
        ))}

      </div>
    </div>
  );
}
