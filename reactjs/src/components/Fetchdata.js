import React from 'react';
import { FormText } from 'react-bootstrap';

class Fetchdata extends React.Component {
    constructor(props) {
        super(props);
            this.headers = [
                { key : 'ID', label : 'ID'},
                {key : 'name ', label : 'name'} ,
                {key : 'description' , label : 'description' } ,
                {key : 'image' , label :'image'} 
            ];
        
    }

    componentDidMount() {
        fetch ('localhost/').then (response => {
            console.log(response);
            return response.json();

        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log('error reading data' + err);
        })
    }

    render () {
        return (
            <div className='container'>
                <button type='button'>delete</button>
                <table>
                    <thead>
                        <tr>
                            {
                                this.headers.map(function(h) {
                                    return (
                                        <th key={h.key}>
                                            {h.label}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}