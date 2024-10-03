import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";

export default function HomePage() {
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(true);

  const plantsData = async () => {
    try {
      const plantResponse = await axios.get(`http://localhost:8080/plants`);
      setPlants(plantResponse.data);
      console.log(plantResponse);
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
      <div className="plants__row">
        {plants.map((plant) => (
          <img
            key={plant.id}
            src={`http://localhost:8080/${plant.image}`}
            className={
              plant.species === "pothos"
                ? "plants__image plants__image--offset"
                : "plants__image"
            }
          />
        ))}
      </div>
    </section>
  );
}
