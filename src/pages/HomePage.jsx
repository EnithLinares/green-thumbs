import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(true);

  const plantsData = async () => {
    try {
      const plantResponse = await axios.get(`http://localhost:8080/plants`);
      setPlants(plantResponse.data);
    } catch (error) {
      console.error("error fetching plants", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    plantsData();
  }, []);

  if (loading) {
    return <div>Plants loading, one moment please</div>;
  }

  return (
    <section className="plants">
      <Link to="/new-plant">
        <button className="plants__button">Add Plant</button>
      </Link>
      <div className="plants__row">
        {plants.map((plant) => (
          <div className="plants__item" key={plant.id}>
            <img
              src={`http://localhost:8080/${plant.image}`}
              className={
                plant.species === "pothos"
                  ? "plants__image plants__image--offset"
                  : "plants__image"
              }
            />
            <div className="plants__popup" id="plants__popup">
              <h1>{plant.nickname}</h1>
              <p>{plant.species}</p>
              <p>water {plant.watering}</p>
              <p>{plant.sunlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
