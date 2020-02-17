import React ,{Component} from 'react';
import 'LowComponent.css'



class LowComponent extends Component {

    state = {

        lowComponentPartitions : [
           {title : "title0" , info : 'info0'},
           {title : "title1" , info : 'info1'},
           {title : "title2" , info : 'info2'},
           {title : "title3" , info : 'info3'},
        ],


    }


    render () {
        return(
            <div className ="main_low_component">
                <ul>
                    <li href = "/"></li>
                    <li href = "/"></li>
                    <li href = "/"></li>
                    <li href = "/"></li>
                </ul>

            </div>
        );
    }



}

export default LowComponent;