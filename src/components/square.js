import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Y'
        };
    }

    componentDidMount() {
        console.log('mount');
    }

    componentWillUnmount() {
        console.log('i will unmount');
    }

    componentDidUpdate() {
        console.log('i will update');
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                点一下我就会变{this.state.value}
            </button>
        );
    }
}

export default Square;