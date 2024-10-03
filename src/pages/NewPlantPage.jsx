import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NewPlantPage() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    const [species, setSpecies] = useState("");
    const [watering, setWatering] = useState("");
    const [sunlight, setSunlight] = useState("");

    const [errors, setErrors] = useState({});

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/plants", {
                name: { nickname },
                species: { species },
                watering: { watering },
                sunlight: { sunlight },
            });
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    // const validateForm = () => {
    //     const newErrors = {};
    //     if (!nickname) newErrors.name = "Plant nickname is required";
    //     if (!species) newErrors.species = "Plant species is required";
    //     if (!watering)
    //         newErrors.watering = "Plant watering frequency is required";
    //     if (!sunlight)
    //         newErrors.sunlight = "Plant preferred sunlight is required";

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    // if (validateForm()) {
    //     setNickname("");
    //     setSpecies("");
    //     setWatering("");
    //     setSunlight("");
    //     setErrors({});
    // }

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="newplant">
            <form onSubmit={handleFormSubmit} className="form">
                <label className="form__label">
                    Give your plant a name
                    <input
                        onChange={(e) => {
                            setNickname(e.target.value);
                            if (errors.nickname) {
                                setErrors((prev) => ({
                                    ...prev,
                                    nickname: "",
                                }));
                            }
                        }}
                        type="text"
                        name="nickname"
                        placeholder="Add a nickname for your plant"
                        value={nickname}
                        className="form__input"
                        required
                    />
                    {errors.nickname && (
                        <p className="form__error">{errors.nickname}</p>
                    )}
                </label>

                <label className="form__label">
                    What is your plant's species?
                    <input
                        onChange={(e) => {
                            setSpecies(e.target.value);
                            if (errors.species) {
                                setErrors((prev) => ({
                                    ...prev,
                                    species: "",
                                }));
                            }
                        }}
                        type="text"
                        name="species"
                        placeholder="Add a species to your plant"
                        value={species}
                        className="form__input"
                        required
                    />
                    {errors.description && (
                        <p className="form__error">{errors.description}</p>
                    )}
                </label>

                <label className="form__label">
                    How often does it need to be watered?
                    <input
                        onChange={(e) => {
                            setWatering(e.target.value);
                            if (errors.watering) {
                                setErrors((prev) => ({
                                    ...prev,
                                    watering: "",
                                }));
                            }
                        }}
                        type="text"
                        name="species"
                        placeholder="Add a species to your plant"
                        value={watering}
                        className="form__input"
                        required
                    />
                    {errors.description && (
                        <p className="form__error">{errors.description}</p>
                    )}
                </label>
                <label className="form__label">
                    What kind of sunlight makes your plant happy?
                    <input
                        onChange={(e) => {
                            setSunlight(e.target.value);
                            if (errors.sunlight) {
                                setErrors((prev) => ({
                                    ...prev,
                                    sunlight: "",
                                }));
                            }
                        }}
                        type="text"
                        name="sunlight"
                        placeholder="For example: full sun or full shade"
                        value={sunlight}
                        className="form__input"
                        required
                    />
                    {errors.description && (
                        <p className="form__error">{errors.description}</p>
                    )}
                </label>

                <div className="form__buttons">
                    <button
                        text="ADD PLANT"
                        type="submit"
                        className="form__submit"
                    >
                        ADD YOUR PLANT
                    </button>

                    <p onClick={handleCancel} className="form__cancel">
                        CANCEL
                    </p>
                </div>
            </form>
        </div>
    );
}
