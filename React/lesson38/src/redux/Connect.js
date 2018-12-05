import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.shape({
                getState: PropTypes.func.isRequired,
                dispatch: PropTypes.func.isRequired,
                subscribe: PropTypes.func.isRequired
            })
        };

        constructor() {
            super();
            this.state = {allProps: {}}
        }

        componentWillMount() {
            const {subscribe} = this.context.store;
            this._updateProps();
            subscribe(this._updateProps.bind(this));
        }

        _updateProps() {
            const {getState} = this.context.store;
            let stateProps = mapStateToProps(getState(), this.props); //额外传入
            let  allProps = { // 整合自己的 props 和从 state 生成的 props
                ...stateProps,
                ...this.props
            };
            console.log('connect _updateProps', allProps);
            this.setState({
                allProps
            });
        };


        render() {
            const {store} = this.context;
            let stateProps = mapStateToProps(store.getState());
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return (<WrappedComponent {...stateProps}/>);
        }
    }

    return Connect;
};
