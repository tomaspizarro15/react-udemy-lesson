import React , {Component} from "react";


class Componente2 extends Component {

    state = {

        pets : [
            { id : '1' , owner : 'Tomas',  name : 'Piru'},
            {id : '2' , owner : 'Maximilian ,' , name : 'Charly'},
            {id : '3 ' , owner : 'Pablo', name : 'Khaleesi' }
        ]   

    }
    


    render () {     
        return(
            <p/>
        ) 
    } 
}


export default Componente2; 