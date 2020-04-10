import React, { PureComponent } from 'react';
import axios from 'axios';
import './Chart.css';
import ChartComponent from './ChartComponent/ChartComponent';



class Chart extends PureComponent {


    state = {
        repos: [{}],

        urls: {
            urlReact: "/facebook/react",
            urlMeteor: "/meteor/meteor",
            urlVue: "/vuejs/vue",
            urlAngular: "/angular/angular",
            urlThree: "/mrdoob/three.js",
            urlAurelia: "/aurelia/framework",
            urlEmber: "/emberjs/ember.js",
        }
        ,
        error: 0,
    }


    executeRequests = () => {
        const requestReact   = axios.get(this.state.urls.urlReact)
        const requestVue     = axios.get(this.state.urls.urlVue)
        const requestAurelia = axios.get(this.state.urls.urlMeteor)
        const requestAngular = axios.get(this.state.urls.urlAngular)
        
        axios.all([requestReact,  requestVue, requestAngular , requestAurelia])
            .then(res => res.map(r => r.data))
            .then(resChanged => resChanged.map(rc => ({...rc, name : rc.name.toUpperCase()})))
            .then(resUpdated => {
                this.setState({ repos: resUpdated })
                this.setState({ error: 1 })
                console.log("respuesta de git =====>", resUpdated)
            }
            )
            .catch(error => {
                console.log("SOMETHING WENT WRONG=======>", error)
                this.setState({ error: 2 })
            });
    }

    ordenar = (repos) => {

        repos.sort((a, b) => {
            if (a.stargazers_count < b.stargazers_count) {
                return 1;
            }
            if (a.stargazers_count > b.stargazers_count) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        console.log(repos)
    }

    render() {
        this.ordenar(this.state.repos)


        return (
            <div className="chart_container">
                <div className="charts_header">
                    <h1 style={{ textAlign: "center" }}>Most Popular Frameworks</h1>
                </div>
                <button onClick={this.executeRequests} style={{ marginTop: "2vw" }}>show charts</button>
                <div className="charts_body_container">
                    {this.state.repos.map((props , i) => {
                        return (
                            <ChartComponent
                                titulo={props.name}
                                key={i}
                                stars={props.stargazers_count}
                                click={this.executeRequests}
                                status={this.state.error}
                            />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Chart; 
