import React, {Component} from 'react';
import Picker from 'rmc-picker';
import ReactLoading from 'react-loading';
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
            selectedCurrencyIndex: 0,
            isLoading: false
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
            return currency;
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
        this.onLoading(true);
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
                        this.onLoading(false);
                    }
                };
                xmlHttp.open(this.props.httpMethod, this.props.url);
                xmlHttp.responseType = 'json';
                xmlHttp.send();
                this.updateState(XMLHttpRequest.LOADING);
            }))
        }
    }

    onLoading(show) {
        this.setState({
            isLoading: show
        });
    }

    render() {
        const {price, symbol} = this.props;
        let resultView = (this.state.isLoading) ?
            <ReactLoading type={'bubbles'} height={'10%'} width={'10%'} color={'#007aff'} className="loading"/> :
            <div>
                <div>{price && price.last ? `last: ${symbol} ${price.last}` : ''}</div>
                <div>{price && price.high ? `high: ${symbol} ${price.high}` : ''}</div>
                <div>{price && price.low ? `low: ${symbol} ${price.low}` : ''}</div>
            </div>;
        return (
            <div className="center">
                <h1>Bit coin price</h1>
                {resultView}
                {/**(Optional)Picker**/}
                <div className="pickerWrapper">
                    <Picker selectedValue={this.state.selectedCurrencyIndex}
                            onValueChange={this._onPickerChange.bind(this)}>
                        {this.state.currencyPickerItems}
                    </Picker>
                </div>
                {/**(Optional)Picker**/}
                <button className="button" onClick={this._getPostData.bind(this)}>刷新</button>
            </div>
        );
    }
}

export default Exercise;
