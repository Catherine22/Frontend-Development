import React, {Component} from 'react';

class Exercise extends Component {

    getDefaultStyledPost(style) {
        return (<Post style={style}>React.js 小书</Post>);
    }

    render() {
        return (
            <div>
                {this.getDefaultStyledPost({color: 'black', fontSize: '20px'})}
                {this.getDefaultStyledPost({color: 'purple'})}
                {this.getDefaultStyledPost()}
            </div>
        );
    }
}

class Post extends Component {
    static defaultProps = {
        style: {color: 'red', fontSize: '12px'}
    };

    //'\'font-size: 12px; color: blue;\''
    JSXToHtml(style) {
        let htmlString = '';
        let keySet = Object.keys(style);
        keySet.map((value) => {
            htmlString += this.camelCaseToHtmlStyle(value);
            htmlString += ':';
            htmlString += style[value];
            htmlString += ';';
        });
        return htmlString;
    }

    camelCaseToHtmlStyle(property) {
        let res = '';
        for (let i = 0; i < property.length; i++) {
            if (property.charCodeAt(i) >= 65 && property.charCodeAt(i) <= 90 /*All capital letters (ASCII code from A to Z)*/) {
                res += '-';
                res += property.charAt(i).toLowerCase();
            } else
                res += property.charAt(i);
        }
        return res;
    }

    render() {
        const htmlStyle = this.JSXToHtml(this.props.style);
        console.log(htmlStyle);
        return (<div
            dangerouslySetInnerHTML={{__html: `<p style=${this.JSXToHtml(this.props.style)}>${this.props.children}</p>`}}/>);
    }
}

export default Exercise;
