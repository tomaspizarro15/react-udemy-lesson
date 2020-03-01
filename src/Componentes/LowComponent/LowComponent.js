import React, { Component } from 'react';
import './LowComponent.css'


class LowComponent extends Component {

    state = {

        Tarjetas: [
            { title: "Angular", content: "Angular JS Website developing curse", free: "Free curse", premium: "Private curse" },
            { title: "React", content: "React JS Website developing curse", free: "Free curse", premium: "Private curse" },
            { title: "PHP", content: "Backend developing curse", free: "Free curse", premium: "Private curse" },
        ],

        showTarjetas: 0,
    }



    sumarTarjetasHandler = () => {

        if (this.state.showTarjetas <= 3) {

            this.setState({ showTarjetas: this.state.showTarjetas + 1 })

        }

    }

    restarTarjetasHandler = () => {

        if (this.state.showTarjetas <= 3) {

            this.setState({ showTarjetas: this.state.showTarjetas - 1 })

        }

    }


    render() {


        return (

            <div className="low_component">

                <div className="low_component_tarjetas">
                   <ul>
                       <div className ="tarjetas">
                           <h1>Title</h1>
                           <p>content</p>
                       </div>
                       <div className ="tarjetas">
                           <h1>Title</h1>
                           <p>content</p>
                       </div>
                       <div className ="tarjetas">
                           <h1>Title</h1>
                           <p>content</p>
                       </div>     
                       
                   </ul>
                </div>

            </div>
        );
    }


}

export default LowComponent;                      