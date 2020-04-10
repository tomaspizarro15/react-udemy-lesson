import React from 'react';
import '../Chart.css';
import starIcon from './iconstar.png'


const chartComponent = (props) => {

    let starsValue = [props.stars / 4000, "vw"]
    starsValue = starsValue.join("")
    starsValue = starsValue.toString();
    console.log("VALOR =====>", starsValue);

    let body;

    if (props.status === 2) {

        body = (
            <div>
                <h1>something went wrong</h1>
            </div>
        )
    }

    if (props.status === 1) {

        body = (
            <div className="charts">
                <div style={{ backgroundColor: "#white", height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "25%", height: "100%", backgroundColor: "rgb(255 , 102, 0)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ fontSize: "2vw", margin: "0 0 0 1vw", color: "white" }}>{props.titulo}</h1>
                    </div>
                    <div style={{ width: "60%", height: "100%", backgroundColor: "white", display: "flex", alignItems: "center" }}>
                        <div style={{ height: "50%", width: starsValue, backgroundColor: "#1b1b1b", borderRadius: "0 2px 2px 0" }}></div>
                    </div>
                    <div style={{ width: "15%", height: "100%", backgroundColor: "#2b2b2b", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <h1 style={{ fontSize: "1.4vw" , color :"white"}}>{props.stars}</h1>
                    </div>
                </div>

            </div>
        )
    }

    return (
        [body]
    )

}

export default chartComponent