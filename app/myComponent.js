import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <p>{this.props.info.text}</p>
                <input defaultValue={this.props.info.name} onChange={this.props.onChange} />
                <p>{this.props.count}</p>
                <button onClick={this.props.add}>加1</button>
                <button onClick={this.props.substract}>减1</button>
                <button onClick={this.props.toZero}>置0</button>
            </div>
        )
    }
}

export default MyComponent
