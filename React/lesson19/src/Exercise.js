import React, {Component} from 'react';

class Exercise extends Component {

    constructor(props) {
        super(props);
        this.baseUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
        // this.currencyArray = ["AUD", "BRL", "CAD", "CNY", "EUR", "GBP", "HKD", "IDR", "ILS", "INR", "JPY", "MXN", "NOK", "NZD", "PLN", "RON", "RUB", "SEK", "SGD", "USD", "ZAR"]
        // this.symbolArray = ["$", "R$", "$", "¥", "€", "£", "$", "Rp", "₪", "₹", "¥", "$", "kr", "$", "zł", "lei", "₽", "kr", "$", "$", "R"]

        this.state = {
            price: null
        }
    }

    _handleResponse(promise) {
        promise.then((response) => {
            console.log('fulfilled');
            const jsonString = JSON.stringify(response);
            const {content} = JSON.parse(jsonString);
            console.log(content);
            const price = Object.assign({}, this.state.price);
            price.high = content.high;
            price.low = content.low;
            price.last = content.last;

            this.setState({price: price});
        }, (response) => {
            console.log('rejected');
            alert(`Error: ${response.status}:`);
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Post
                    url={this.baseUrl}
                    price={this.state.price}
                    onResponse={this._handleResponse.bind(this)}
                />
            </div>);
    }
}


class Post extends Component {

    static defaultProps = {
        url: '',
        httpMethod: 'GET',
        content: '',
        onResponse: null,

        price: null
    };

    constructor(props) {
        super(props);
        this.state = {
            state: null
        };
    }

    updateState(state) {
        this.setState(
            {
                state: state
            }
        )
    }

    _getPostData() {
        if (this.props.onResponse) {
            this.props.onResponse(new Promise((resolve, reject) => {
                let xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = () => {
                    if (xmlHttp.readyState === XMLHttpRequest.DONE) {
                        if (xmlHttp.status === 200) {
                            // success
                            this.updateState(XMLHttpRequest.DONE);
                            resolve({content: xmlHttp.response})
                        } else {
                            //fail
                            this.updateState(XMLHttpRequest.DONE);
                            reject({statue: xmlHttp.status})
                        }
                    }
                };
                xmlHttp.open(this.props.httpMethod, this.props.url);
                xmlHttp.responseType = 'json';
                xmlHttp.send();
                this.updateState(XMLHttpRequest.LOADING);
            }))
        }
    }

    render() {
        const {price} = this.props;
        return (
            <div>
                <h1>Bit coin price</h1>
                <div>{price && price.last ? `last: ${price.last}` : ''}</div>
                <div>{price && price.high ? `high: ${price.high}` : ''}</div>
                <div>{price && price.low ? `low: ${price.low}` : ''}</div>
                <button onClick={this._getPostData.bind(this)}>刷新</button>
            </div>
        );
    }
}

export default Exercise;
