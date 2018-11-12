import React, {Component} from 'react';
import Post from './Post';
import 'rmc-picker/assets/index.css';
import './Exercise.css';

class Exercise extends Component {

    constructor(props) {
        super(props);
        this.baseUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
        this.currencyArray = ['AUD', 'BRL', 'CAD', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'ILS', 'INR', 'JPY', 'MXN', 'NOK', 'NZD', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'USD', 'ZAR'];
        this.symbolArray = ['$', 'R$', '$', '¥', '€', '£', '$', 'Rp', '₪', '₹', '¥', '$', 'kr', '$', 'zł', 'lei', '₽', 'kr', '$', '$', 'R'];

        this._updateCurrency(0);
        this.state = {
            url: this.url,
            symbol: this.symbol,
            price: null
        };
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
            this.setState(
                {
                    price: price,
                    url: this.url,
                    symbol: this.symbol
                }
            );
        }, (response) => {
            console.log('rejected');
            alert(`Error: ${response.status}:`);
        });
    }

    _updateCurrency(index) {
        this.url = `${this.baseUrl}${this.currencyArray[index]}`;
        this.symbol = this.symbolArray[index];
    }

    render() {
        console.log(this.state);
        console.log('url', `${this.baseUrl}${this.currencyArray[this.state.currencyIndex]}`);
        return (
            <div>
                <Post
                    currencyArray={this.currencyArray}
                    symbolArray={this.symbolArray}
                    symbol={this.state.symbol}
                    onPickerSelect={this._updateCurrency.bind(this)}
                    url={this.state.url}
                    price={this.state.price}
                    onResponse={this._handleResponse.bind(this)}
                />
            </div>);
    }
}
export default Exercise;
