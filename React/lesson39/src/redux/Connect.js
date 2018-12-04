import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
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
            const {getState, dispatch} = this.context.store;
            // 防止 mapStateToProps 没有传入
            let stateProps = mapStateToProps ? mapStateToProps(getState(), this.props) : {};
            // 防止 mapDispatchToProps 没有传入
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(dispatch, this.props) : {};

            let  allProps = { // 整合自己的 props 和从 state 生成的 props
                ...stateProps,
                ...dispatchProps,
                ...this.props
            };
            console.log('connect _updateProps', allProps);
            this.setState({
                allProps
            });
        };


        render() {
            return (<WrappedComponent {...this.state.allProps}/>);
        }
    }

    return Connect;
};
