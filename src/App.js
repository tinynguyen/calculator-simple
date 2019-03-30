import React, {Component} from 'react';
import './App.css';
import {Row, Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'AAAA'
        }
        this.clear = this.clear.bind(this);
        this.seven = this.seven.bind(this);
    }

    clear() {
        this.setState({
            screen: ''
        })
    }

    seven(event) {
        this.setState({
            screen: this.state.screen + '7'
        })
        console.log(event);
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
                            <div className="calculator">
                                <div className="screenResult">
                                    {this.state.screen}
                                </div>
                                <div className="calculatorItem">
                                    <div className="items clear" onClick={this.clear}>C</div>
                                    <div className="items pos-neg">+/-</div>
                                    <div className="items percent">%</div>
                                    <div className="items divide operators">/</div>
                                    <div className="items seven" onClick={this.seven}>7</div>
                                    <div className="items eight">8</div>
                                    <div className="items nine">9</div>
                                    <div className="items multi operators">x</div>
                                    <div className="items four">4</div>
                                    <div className="items five">5</div>
                                    <div className="items six">6</div>
                                    <div className="items substract operators">-</div>
                                    <div className="items one">1</div>
                                    <div className="items two">2</div>
                                    <div className="items three">3</div>
                                    <div className="items plus operators">+</div>
                                    <div className="items zero">0</div>
                                    <div className="items dot">.</div>
                                    <div className="items equal operators">=</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;
