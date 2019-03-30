import React, {Component} from 'react';
import './App.css';
import {Row, Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: '',
            currentNum: 0,
            result: 0,
            operators: '',
            countTimes: 0
        }
        this.addNum = this.addNum.bind(this);
        this.plus = this.plus.bind(this);
        this.substract = this.substract.bind(this);
        this.multi = this.multi.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
        this.equal = this.equal.bind(this);
    }

    addNum(e) {
        const value = e.target.value;
        if(this.state.countTimes > 0) {
            this.setState(state => {
                return {
                    screen: ''
                }
            })
            
        }
        this.setState(state => {
            return {
                screen: state.screen + value
            }
        })
    }

    plus() {
        this.setState(state => {
            return {
                currentNum: parseInt(state.screen),
                screen: '',
                operators: '+'
            };
        });
    }

    substract() {
        this.setState(state => {
            return {
                currentNum: parseInt(state.screen),
                screen: '',
                operators: '-'
            };
        });
    }

    multi() {
        this.setState(state => {
            return {
                currentNum: parseInt(state.screen),
                screen: '',
                operators: 'x'
            };
        });
    }

    divide() {
        this.setState(state => {
            return {
                currentNum: parseInt(state.screen),
                screen: '',
                operators: '/'
            };
        });
    }

    clear() {
        this.setState(state => {
            return {
                screen: '',
                countTimes: 0
            }
        })
    }

    equal() {
        switch(this.state.operators) {
            case '+': {
                this.setState(state => {
                    return {
                        result: state.currentNum + parseInt(state.screen)
                    }
                })
                break;
            }
            case '-': {
                this.setState(state => {
                    return {
                        result: state.currentNum - parseInt(state.screen)
                    }
                })
                break;
            }
            case 'x': {
                this.setState(state => {
                    return {
                        result: state.currentNum * parseInt(state.screen)
                    }
                })
                break;
            }
            case '/': {
                this.setState(state => {
                    return {
                        result: (state.currentNum / parseInt(state.screen))
                    }
                })
                break;
            }
        };
        
        this.setState(state => {
            return {
                screen: state.result,
                countTimes: this.state.countTimes + 1
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
                            <div className="calculator">
                                <div className="screenResult">
                                    <span style={{
                                        paddingLeft: `0.5rem`,
                                        paddingRight: `0.5rem`
                                    }}>{this.state.screen}</span>
                                </div>
                                <div className="calculatorItem">
                                    <button className="items clear" onClick={this.clear}>C</button>
                                    <div className="items pos-neg">+/-</div>
                                    <button className="items percent">%</button>
                                    <button className="items divide operators" onClick={this.divide}>/</button>
                                    <button className="items seven" onClick={this.addNum} value="7">7</button>
                                    <button className="items eight" onClick={this.addNum} value="8">8</button>
                                    <button className="items nine" onClick={this.addNum} value="9">9</button>
                                    <button className="items multi operators" onClick={this.multi}>x</button>
                                    <button className="items four" onClick={this.addNum} value="4">4</button>
                                    <button className="items five" onClick={this.addNum} value="5">5</button>
                                    <button className="items six" onClick={this.addNum} value="6">6</button>
                                    <button className="items substract operators" onClick={this.substract}>-</button>
                                    <button className="items one" onClick={this.addNum} value="1">1</button>
                                    <button className="items two" onClick={this.addNum} value="2">2</button>
                                    <button className="items three" onClick={this.addNum} value="3">3</button>
                                    <button className="items plus operators" onClick={this.plus}>+</button>
                                    <button className="items zero" onClick={this.addNum}>0</button>
                                    <button className="items dot">.</button>
                                    <button className="items equal operators" onClick={this.equal}>=</button>
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
