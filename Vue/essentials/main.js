var vm = new Vue({
    el: '#example',
    data: {
        website: 'https://vuejs.org/',
        divTag: '<div>html tag from vm data</div>',

        // #1
        age: 7,
        x: 0,
        y: 0,

        // #4
        name: null,
        password: null,

        // #5
        rawMessage: null,

        // #6
        isRed: true,
        isJasonRed: true,
        isJasonNearby: false,

        // #7
        givenNumber: null
    },
    computed: {
        reversedMessage() {
            if (!this.rawMessage || /S+/.test(this.rawMessage)) return null;
            return this.rawMessage
                .split('')
                .reverse()
                .join('');
        },
        dynamicCssBtn() {
            return this.isRed ? 'Convert to Green' : 'Convert to Red';
        },
        dynamicCssJason() {
            return {
                red: this.isJasonRed,
                nearby: this.isJasonNearby
            };
        },
        isOdd() {
            return (
                !!this.givenNumber &&
                this.givenNumber > 0 &&
                this.givenNumber % 2 === 1
            );
        },
        isEven() {
            return (
                !!this.givenNumber &&
                this.givenNumber > 0 &&
                this.givenNumber % 2 === 0
            );
        }
    },
    methods: {
        add(increasment) {
            this.age += increasment;
        },
        substract(decresment) {
            this.age -= decresment;
        },
        onMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        onButtonClickOnce() {
            alert('Button clicked');
        },
        onAClick() {
            alert('Not direct to the website');
        },
        onTypeEnter() {
            alert('Name submitted!');
        },
        onTypeAltEnter() {
            alert('Age submitted!');
        }
    }
});
