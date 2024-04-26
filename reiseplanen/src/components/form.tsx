import "./css/form.css"
import {useState} from "react";
import {Info} from "../Info.tsx";

type InfoFormProps = {
    onSave: (info: Info) => void;
}

const defaultInfos = {
    gender: "men",
    stay: "hotel",
    hygiene: "2",
    holidayDays: 0,
    season: "sommer",
};

export default function Form(props: InfoFormProps) {
    const [infos, setInfos] = useState(defaultInfos);
    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.onSave(infos);
        console.log(infos);
    };

    const handleChange = (event: { target: { name: any; value: any; type: any; }; }) => {
        const {name, value, type} = event.target;
        const newValue = type === "number" ? parseInt(value) : value;
        setInfos((prevInfos) => ({
            ...prevInfos,
            [name]: newValue,
        }));
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Gender
                    <select
                        name="gender" required onChange={handleChange} value={infos.gender}>
                        <option value="man">Männlich</option>
                        <option value="woman">Webilich</option>
                        <option value="rest">de Rest</option>
                    </select>
                </label>

                <label>
                    Anzahl Ferien Tage
                    <input
                        type="number" name="holidayDays" value={infos.holidayDays || ""} required
                        onChange={handleChange}
                    />
                </label>

                <label> Wie Hygienisch sind Sie?
                    <label> Dreckig
                        <input
                            type="range" name="hygiene" min="1" max="3" step="1" value={infos.hygiene}
                            onChange={handleChange}/>
                        Sauber
                    </label>
                </label>

                <div>
                    <label>
                        <input
                            type="radio" name="stay" value="Wandern" onChange={handleChange}/>
                        Wandern
                    </label>
                    <label>
                        <input
                            type="radio" name="stay" value="Hotel" onChange={handleChange}/>
                        Hotel
                    </label>
                    <label>
                        <input
                            type="radio" name="stay" value="Lager" onChange={handleChange}/>
                        Lager
                    </label>
                </div>


                <label>
                    Jahreszeiten
                    <select
                        name="season" required onChange={handleChange} value={infos.season}>
                        <option value="sommer">20°C - 40°C</option>
                        <option value="frueling">10°C - 20°C</option>
                        <option value="herbst">5°C - 15°C</option>
                        <option value="winter">-10°C - 10°C</option>
                    </select>
                </label>
                <br/>
                <button type="submit">Submit the form</button>
            </form>
        </>
    );
}
