import React, {Component} from "react";
import PropTypes from 'prop-types';
import Picker from "rmc-picker/lib/Picker";
import ReactLoading from "react-loading";

class Post extends Component {
    static defaultPropTypes = {
        url: PropTypes.string.isRequired,
        httpMethod: PropTypes.string.isRequired,
        onResponse: PropTypes.func.isRequired,

        price: PropTypes.object.isRequired,

        currencyArray: PropTypes.array.isRequired,
        symbolArray: PropTypes.array.isRequired,
        onPickerSelect: PropTypes.func.isRequired,
        symbol: PropTypes.string.isRequired
    };

    static defaultProps = {
        url: '',
        httpMethod: 'GET',
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
                            resolve({content: xmlHttp.response});
                        } else {
                            //fail
                            this.updateState(XMLHttpRequest.DONE);
                            reject({statue: xmlHttp.status});
                        }
                        this.onLoading(false);
                    }
                };
                xmlHttp.open(this.props.httpMethod, this.props.url);
                xmlHttp.responseType = 'json';
                xmlHttp.send();
                this.updateState(XMLHttpRequest.LOADING);
            }));
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

export default Post;
