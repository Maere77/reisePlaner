import {Info} from "../Info.tsx";
import {useState} from "react";
import "./css/todo.css"

type PropsInfo = {
    recieve?: Info,
    active?: boolean,
}

export default function Todo(props: PropsInfo) {
    let countTshirt: number | undefined = 0;
    const [checked] = useState()
    const [checked1] = useState()
    const [checked2] = useState()
    const [checked3] = useState()
    const [checked4] = useState()


    function calcSocs() {
        try {
            let countSocs: number | undefined = 0;

            if (props.recieve?.hygiene == "1") {
                countSocs = Math.ceil(props.recieve.holidayDays / 1.5)
            } else if (props.recieve?.hygiene == "2") {
                countSocs = props.recieve.holidayDays
            } else {
                // @ts-ignore
                countSocs = Math.ceil(props.recieve?.holidayDays * 1.5)
            }
            return countSocs
        } catch (e) {
            console.log(e)
        }
    }

    function calcUnderwear() {
        if (props.recieve?.hygiene == "1") {
            return 1
        } else {
            return props.recieve?.holidayDays
        }
    }

    function calcTShirt() {
        try {
            let countPants: number | undefined = 0;

            if (props.recieve?.hygiene == "1") {
                countPants = Math.ceil(props.recieve.holidayDays / 4)
            } else if (props.recieve?.hygiene == "2") {
                countPants = Math.round(props.recieve.holidayDays / 2)
            } else {
                countPants = props.recieve?.holidayDays
            }
            return countPants;
        } catch (e) {
            console.log(e)
        }
    }


    function calcPants() {
        if (props.recieve?.hygiene == "1") {
            if (props.recieve.season == "summer") {
                countTshirt = Math.ceil(props.recieve.holidayDays / 12)
            } else {
                countTshirt = Math.ceil(props.recieve.holidayDays / 8)
            }
        } else if (props.recieve?.hygiene == "2") {
            if (props.recieve.season == "summer") {
                countTshirt = Math.ceil(props.recieve.holidayDays / 3)
            } else {
                countTshirt = props.recieve.holidayDays / 4
            }
        } else {
            if (props.recieve?.season == "summer") {
                countTshirt = props.recieve?.holidayDays
            }
            // @ts-ignore
            countTshirt = Math.ceil(props.recieve?.holidayDays / 1.5)
        }
        return countTshirt;
    }

    function calcPullover() {
        if (props.recieve?.hygiene == "1") {
            return 1
        } else if (props.recieve?.hygiene == "2") {
            return props.recieve.holidayDays
        } else {
            // @ts-ignore
            return Math.ceil(props.recieve?.holidayDays * 10)
        }
    }

    return (
        <>
            {props.active === true &&
                <>
                    <h1>To-Do List</h1>
                    <div className="checkbox-container" style={{display: "flex"}}>
                        <input type="checkbox" id="strikethrough" value={checked + ""}
                        />
                        <label id="textLabel"
                               style={{textDecorationLine: checked === true ? "line-through" : ""}}>Unterhosen {calcUnderwear()}</label>
                    </div>
                    <div className="checkbox-container" style={{display: "flex"}}>
                        <input type="checkbox" id="strikethrough" value={checked1 + ""}
                        />
                        <label id="textLabel"
                               style={{textDecorationLine: checked1 === true ? "line-through" : ""}}>T-Shirt {calcTShirt()}</label>
                    </div>
                    <div className="checkbox-container" style={{display: "flex"}}>
                        <input type="checkbox" id="strikethrough" value={checked2 + ""}
                        />
                        <label id="textLabel"
                               style={{textDecorationLine: checked2 === true ? "line-through" : ""}}>Socken {calcSocs()}</label>
                    </div>
                    <div className="checkbox-container" style={{display: "flex"}}>
                        <input type="checkbox" id="strikethrough" value={checked3 + ""}
                        />
                        <label id="textLabel"
                               style={{textDecorationLine: checked3 === true ? "line-through" : ""}}>Pullover {calcPullover()}</label>
                    </div>
                    <div className="checkbox-container" style={{display: "flex"}}>
                        <input type="checkbox" id="strikethrough" value={checked4 + ""}
                        />
                        <label id="textLabel"
                               style={{textDecorationLine: checked4 === true ? "line-through" : ""}}>Hosen {calcPants()}</label>
                    </div>

                </>
            }
        </>
    );
}
