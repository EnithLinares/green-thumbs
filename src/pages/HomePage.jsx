import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
    const [plants, setPlants] = useState(null);
    const [loading, setLoading] = useState(true);

    const plantsData = async () => {
        try {
            const plantResponse = await axios.get(
                `http://localhost:8080/plants`
            );
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
        <div>
            {plants.map((plant) => (
                <img
                    key={plant.id}
                    src={`http://localhost:8080/${plant.image}`}
                />
            ))}
        </div>
    );
}
