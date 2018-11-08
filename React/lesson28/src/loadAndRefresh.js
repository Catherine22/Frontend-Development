import React, {Component} from 'react';

const loadAndRefresh = (url, httpMethod, onResponse) => (Post) => {
    return class WrapComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isLoading: false
            };
        }

        _getPostData() {
            const httpMethod = httpMethod || 'GET';
            this.onLoading(true);
            if (onResponse) {
                onResponse(new Promise((resolve, reject) => {
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
                    xmlHttp.open(httpMethod, url);
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
            return (
                <Post onDataReceived={this._getPostData.bind(this)}/>
            );
        }
    };
};

export default loadAndRefresh;
