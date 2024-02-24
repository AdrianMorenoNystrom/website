import { useEffect, useState } from "react";
import '../styles/Portfolio.css';

export default function Portfolio() {
  const [posts, setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.github.com/users/AdrianMorenoNystrom/repos")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false); // Move setIsLoading inside this block
      })
      .catch((error) => {
        console.error("kunde inte läsa data", error);
        setIsLoading(false); // Handle errors and set isLoading to false
      });
  }, []);

  const formatIsoDate = (isoDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(isoDate).toLocaleDateString('sv-SE', options);
  };

  return (
    <div>
          <div className="page">
            <div className="table-container">
            {isLoading ? <p>Laddar github projekt.</p> : null}
              <h1>Mina github projekt.</h1>
            <table>
                <tr>
                    <th>Namn</th>
                    <th>Länk</th>
                    <th>Datum</th>
                </tr>
                {posts.map((post) => (
                    <tr key={post.id}>
                  <td>{post.name}</td>
                  <td><a href={post.html_url} target="_blank" rel="noreferrer">Länk</a></td>
                  <td>{formatIsoDate(post.created_at)}</td>
                    </tr>
                ))}
            </table>
            
          </div>
        </div>
    </div>
  );
}
