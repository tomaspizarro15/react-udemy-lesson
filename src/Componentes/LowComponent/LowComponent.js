import React, { Component } from 'react';
import './LowComponent.css'


class LowComponent extends Component {

    state = {

        lowComponentPartitions: [
            { title: "title0", info: 'info0' },
            { title: "title1", info: 'info1' },
            { title: "title2", info: 'info2' },
            { title: "title3", info: 'info3' },

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

        if (this.state.showTarjetas === 1) {

            alert('se mostrara el primer componente')


        } else if (this.state.showTarjetas === 2) {

            alert('se mostrara el segundo componente')

        } else if (this.state.showTarjetas === 3) {
            alert('se mostrara el tercer componente')
        }
        return (


            <div className="main_low_component">
               
            </div>
        );
    }


}

export default LowComponent;