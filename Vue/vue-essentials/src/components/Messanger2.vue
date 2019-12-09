<template>
    <div>
        <!--$emit-->
        <div v-show="!usingEventBus">(Messanger2) Received: {{ message }}</div>
        <button @click="emit" v-show="!usingEventBus">Yell</button>

        <!--EventBus-->
        <div v-show="usingEventBus">(Messanger2) Received: {{ messageFromEventBus }}</div>
        <button @click="emitByEventBus" v-show="usingEventBus">Yell</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
    props: {
        message: {
            type: String,
            required: false
        },
        usingEventBus: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            messageFromEventBus: null
        };
    },
    methods: {
        emit() {
            this.$emit('yell', 'Hello from messanger2');
        },
        emitByEventBus() {
            eventBus.$emit('yell_from_message2', 'Hello from messanger2');
        }
    },
    created() {
        eventBus.$on('yell_from_message1', event => {
            this.messageFromEventBus = event;
        });
    },
    destroyed() {
        eventBus.$off('yell_from_message1');
    }
};
</script>
