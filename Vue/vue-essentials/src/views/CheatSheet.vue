<template>
    <div class="cheatSheet">
        <h1>Vue.js Cheat sheet</h1>
        <a :href="website">v-bind + &lt;a&gt;</a>
        <p v-html="divTag"></p>

        <p></p>
        <h2>#1 v-on, click events</h2>
        <p>(vue variables in html tag) My age is {{ age }}</p>
        <button @click="add(1)" @dblclick="add(10)">Add</button>
        <button @click="substract(1)" @dblclick="substract(10)">Substract</button>
        <div id="canvas" @mousemove="onMouseMove">[{{ x }}, {{ y }}]</div>
        <p></p>

        <p></p>
        <h2>#2 Event modifiers</h2>
        <button @click.once="onButtonClickOnce">@click.once</button>
        <a :href="website" @click.prevent="onAClick">@click.prevent: prevent default behaviors</a>
        <p></p>

        <p></p>
        <h2>#3 Key modifiers</h2>
        <label>Name:</label>
        <input type="text" @keyup.enter="onTypeEnter" placeholder="Enter" />
        <label>Password:</label>
        <input
            type="password"
            @keyup.alt.enter="onTypeAltEnter"
            placeholder="alt / option + enter"
        />
        <p></p>

        <p></p>
        <h2>#4 Two way binding</h2>
        <label>Name:</label>
        <input type="text" v-model="name" />
        <label>Password:</label>
        <input type="password" v-model="password" />
        <h3>Preview</h3>
        <div>Name: {{ name }}</div>
        <div>Password: {{ password }}</div>
        <p></p>

        <p></p>
        <h2>#5 Computed Properties</h2>
        <label>Say something:</label>
        <input type="text" v-model="rawMessage" />
        <div>Reversed Message: {{ reversedMessage }}</div>
        <a href="https://stackoverflow.com/questions/44350862/method-vs-computed-in-vue"
            >See method vs computed property</a
        >
        <p></p>

        <p></p>
        <h2>#6 Dynamic CSS</h2>
        <div @click="isRed = !isRed" :class="{ red: isRed }">
            <span>{{ dynamicCssBtn }}</span>
        </div>

        <p>
            <button @click="isJasonRed = !isJasonRed">Toggle color</button>
            <button @click="isJasonNearby = !isJasonNearby">Toggle nearby</button>
        </p>

        <div :class="dynamicCssJason">
            <span>Jason</span>
        </div>
        <p></p>

        <p></p>
        <h2>#7 Conditionals</h2>
        <label>Type a number:</label>
        <input type="number" v-model="givenNumber" />

        <div v-show="isOdd">{{ givenNumber }} is a odd number</div>
        <div v-show="isEven">{{ givenNumber }} is a even number</div>
        <p></p>

        <p></p>
        <h2>#8 List & Loop</h2>
        <ul>
            <li v-for="student in students" :key="student">{{ student }}</li>
        </ul>
        <ul style="list-style-type:none">
            <li v-for="(teacher, index) in staff" :key="teacher.name">
                {{ index + 1 }}. {{ teacher.name }}
            </li>
        </ul>
        <ul>
            <li v-for="teacher in staff" :key="teacher.name">
                <div v-for="(v, k) in teacher" :key="v">{{ k }}: {{ v }}</div>
            </li>
        </ul>
        <p></p>

        <h2>#9 Shared components</h2>
        <button-counter></button-counter>

        <h2>#10 Refs</h2>
        <input type="text" ref="refInput" />
        <button @click="readRef">Read Ref</button>

        <h2>#11 Primitive vs Reference Type</h2>
        <h3>1. Reference Type</h3>
        <!--This design is a bit weird, if I update props from component1, props in component2 will be upeated as well. In React, I have to update root data and press it to other components in order to do so.-->
        <student :students="students"></student>
        <student :students="students"></student>
        <button @click="dropOut">Drop out students from root view</button>

        <h3 class="deprecated-item">2. Primitive Type = <code>$emit</code></h3>
        <!--Messanger1 pushes events to the parent(this component), the parent pushes to Messanger2, and vice versa-->
        <messanger1 @yell="saveMessageFrom1($event)" :message="messageBox.from2"></messanger1>
        <messanger2 @yell="saveMessageFrom2($event)" :message="messageBox.from1"></messanger2>

        <h3>2. Primitive Type = <code>EventBus</code></h3>
        <!--Messanger1 communicate with Messanger2 directly without their parent component getting involved-->
        <messanger1 :usingEventBus="true"></messanger1>
        <messanger2 :usingEventBus="true"></messanger2>
    </div>
</template>

<script>
// @ is an alias to /src
import ButtonCounter from '@/components/ButtonCounter.vue';
import Student from '@/components/Student.vue';
import Messanger1 from '@/components/Messanger1.vue';
import Messanger2 from '@/components/Messanger2.vue';
export default {
    name: 'cheatSheet',
    components: {
        'button-counter': ButtonCounter,
        student: Student,
        messanger1: Messanger1,
        messanger2: Messanger2
    },
    data() {
        return {
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
            ],

            // #11
            messageBox: {
                from1: null,
                from2: null
            }
        };
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
            return !!this.givenNumber && this.givenNumber > 0 && this.givenNumber % 2 === 1;
        },
        isEven() {
            return !!this.givenNumber && this.givenNumber > 0 && this.givenNumber % 2 === 0;
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
        },
        dropOut() {
            this.students.pop();
        },
        saveMessageFrom1(event) {
            console.log('from1', event);
            this.messageBox.from1 = event;
        },
        saveMessageFrom2(event) {
            this.messageBox.from2 = event;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
    width: 60%;
    padding: 200px 20px;
    text-align: center;
    border: 1px solid #333333;
    margin: auto;
}

.deprecated-item {
    text-decoration: line-through;
}

span {
    background: green;
    display: inline;
    padding: 10px;
    color: white;
    margin: 10px 0;
}

.red span {
    background: red;
}

.nearby span:after {
    content: 'nearby';
    margin-left: 10px;
}
</style>
