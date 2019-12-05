Vue.component('button-counter', {
    data() {
        return {
            count: 0
        };
    },
    template:
        '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

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
        givenNumber: null,

        // #8
        students: ['Jeff', 'Erica', 'Madeline'],
        staff: [
            {
                name: 'Conan',
                age: 45
            },
            {
                name: 'Bill',
                age: 40
            }
        ]
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
        },
        readRef() {
            console.log(this.$refs);
            alert(`You've typed "${this.$refs.refInput.value}"`);
        }
    }
});

var vm1 = new Vue({
    el: '#vm1',
    data: {
        title: 'View Model 1'
    },
    methods: {}
});

var vm2 = new Vue({
    el: '#vm2',
    data: {
        title: 'View Model 2'
    },
    methods: {
        overrideTitle1() {
            vm1.title = 'New View Model 1';
        }
    }
});
