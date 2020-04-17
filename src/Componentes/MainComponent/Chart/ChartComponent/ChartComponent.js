import React from 'react';
import '../Chart.css';



const chartComponent = (props) => {

    let starsValue = [props.stars / 4000, "vw"]
    starsValue = starsValue.join("")
    starsValue = starsValue.toString();
    
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
                        <div style={{ width: "15%", height: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h1 style={{ fontSize: "1.5vw", margin: "0 0 0 1vw", color: "#1b1b1b" }}>{props.titulo}</h1>
                        </div>
                        <div style={{ width: "65%", height: "100%", backgroundColor: "white", display: "flex", alignItems: "center" }}>
                            <div style={{ height: "35%", width: starsValue, backgroundColor: "rgb(111 ,0 ,255)", borderRadius: "15px" }}></div>
                        </div>
                        <div style={{ width: "20%", height: "100%", backgroundColor: "#2b2b2b", display: "flex", justifyContent: "center", alignItems: "center", }}>
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