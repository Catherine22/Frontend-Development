import React, {Component} from 'react';
import Picker from 'rmc-picker';
import 'rmc-picker/assets/index.css';

class Exercise extends Component {

    constructor(props) {
        super(props);
        this.baseUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
        this.currencyArray = ['AUD', 'BRL', 'CAD', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'ILS', 'INR', 'JPY', 'MXN', 'NOK', 'NZD', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'USD', 'ZAR'];
        this.symbolArray = ['$', 'R$', '$', '¥', '€', '£', '$', 'Rp', '₪', '₹', '¥', '$', 'kr', '$', 'zł', 'lei', '₽', 'kr', '$', '$', 'R'];

        this.state = {
            url: `${this.baseUrl}${this.currencyArray[0]}`,
            symbol: this.symbolArray[0],
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

class Post extends Component {

    static defaultProps = {
        url: '',
        httpMethod: 'GET',
        content: '',
        onResponse: null,

        price: null,

        currencyArray: [],
        symbolArray: [],
        onPickerSelect: null,
        symbol: null
    };

    constructor(props) {
        super(props);
        this.state = {
            state: null,
            currencyPickerItems: this.fillInPickers(),
            selectedCurrencyIndex: 0
        };
        console.log(this.props);
    }

    _onPickerChange(value) {
        const {currencyArray, onPickerSelect} = this.props;
        console.log('Selected', currencyArray[value]);
        this.setState({
            selectedCurrencyIndex: value,
        });
        if (onPickerSelect) {
            onPickerSelect(value);
        }
    }


    fillInPickers() {
        const items = [];
        this.props.currencyArray.map((currency, i) => {
            items.push(<Picker.Item value={i} key={i}>
                {currency}
            </Picker.Item>);
        });
        return items;
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
        const {price, symbol} = this.props;
        return (
            <div>
                <h1>Bit coin price</h1>
                <div>{price && price.last ? `last: ${symbol} ${price.last}` : ''}</div>
                <div>{price && price.high ? `high: ${symbol} ${price.high}` : ''}</div>
                <div>{price && price.low ? `low: ${symbol} ${price.low}` : ''}</div>
                {/**(Optional)Picker**/}
                <div style={{background: '#f5f5f9', padding: 10, width: 400}}>
                    <Picker selectedValue={this.state.selectedCurrencyIndex}
                            onValueChange={this._onPickerChange.bind(this)}>
                        {this.state.currencyPickerItems}
                    </Picker>
                </div>
                {/**(Optional)Picker**/}
                <button onClick={this._getPostData.bind(this)}>刷新</button>
            </div>
        );
    }
}

export default Exercise;
