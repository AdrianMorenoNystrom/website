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
    <div>
          <div className="page">
            <div className="table-container">
            <table>
                <tr>
                    <th>Namn</th>
                    <th>Länk</th>
                    <th>Datum</th>
                </tr>
                {posts.map((post) => (
                    <tr key={post.id}>
                  <td>{post.name}</td>
                  <td><a href={post.html_url} target="_blank">Länk</a></td>
                  <td>{formatIsoDate(post.created_at)}</td>
                    </tr>
                ))}
            </table>
            
          </div>
        </div>
    </div>
  );
}
