import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

/* there's at least 4 ways to create react component:
 * ES5 - createClass - see important-notes.txt #5
 * ES6 - class
 * ES5 - stateless function
 * ES6 - stateless function
 * ...
 * the traditional way: ES6 class + ES6 stateless function
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    title: 'The Muslim Pirate',
                    data: {

                    }
                },
                {
                    title: 'Personal Info.',
                    data: {

                    }
                },
                {
                    title: 'CV',
                    data: {

                    }
                },
                {
                    title: 'Project List',
                    data: {

                    }
                }
            ],
            info: {
                fullname: 'Muhammad Habib Allah',
                birthDate: '1991-08-16',
                email: 'muhammad.habib.allah@gmail.com'
            }
        };
    };

    render () {
        return (
            <div className="App">
                <div>
                    {this.state.tabs[0].title}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));