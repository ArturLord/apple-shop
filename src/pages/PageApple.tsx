import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PageApple: React.FC = () => {
  const [apple, setApple] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchApple() {
      try {
        const { data } = await axios.get(
          `https://63a305fb471b38b206038c10.mockapi.io/items/${id}`
        );
        setApple(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchApple();
  }, []);

  if (!apple) {
    return <>"Загрузка"</>;
  }

  return (
    <div className="container">
      <img src={apple.imageUrl} alt="asd" />
      <h2>{apple.title}</h2>
      <h4>{apple.price} руб</h4>
    </div>
  );
};

export default PageApple;
