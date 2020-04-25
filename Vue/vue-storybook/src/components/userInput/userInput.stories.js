import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import userInput from './index.vue';
const stories = storiesOf('COMPONENTS/Input/userInput', module);
stories.addDecorator(withKnobs);

const actionsData = {
    onValueChange: action('onValueChange'),
    verify: action('verify')
};

const description = {
    mainComponents: {
        props: {
            placeholder: 'A short hint that describes the expected value of an input field',
            label: 'Title of your input field',
            onValueChange: 'A function returns real-time value',
            verify: 'A function returns whether the input field is valid'
        }
    }
};
const notes = '<div style="color: #f33"></div>';
const info = {
    summary: 'Plain input capable of input validation'
};

stories.add(
    'userInput',
    () => ({
        components: { userInput },
        props: {
            placeholder: {
                default: text('placeholder', 'Please fill in your address')
            },
            label: {
                default: text('label', 'Address:')
            }
        },
        description,
        template: `<user-input :label="label" :placeholder="placeholder" :on-value-change="onValueChange" :verify="verify" />`,
        methods: actionsData
    }),
    {
        notes,
        info
    }
);

stories.add(
    'strictNumberInput',
    () => ({
        components: { userInput },
        props: {
            placeholder: {
                default: text('placeholder', 'Please fill in your phone number')
            },
            label: {
                default: text('label', 'Phone Number:')
            },
            rules: {
                default: object('rules', [
                    {
                        func: value => value && value.length > 0,
                        errorMessage: 'Please fill in your phone number'
                    }
                ])
            },
            numberOnly: {
                default: object('numberOnly', { enable: true, errorMessage: 'Number Only' })
            }
        },
        template: `<user-input :label="label" :placeholder="placeholder" :numberOnly="numberOnly" :rules="rules" :on-value-change="onValueChange" :verify="verify" />`,
        methods: actionsData
    }),
    {
        notes,
        info
    }
);

stories.add(
    'strictTextInput',
    () => ({
        components: { userInput },
        props: {
            placeholder: {
                default: text('placeholder', 'Please fill in your name')
            },
            label: {
                default: text('label', 'Name:')
            },
            rules: {
                default: object('rules', [
                    {
                        func: value => value && value.length > 0,
                        errorMessage: 'Please fill in your name'
                    },
                    (min, max) => ({
                        func: value => value && value.length >= min && value.length <= max,
                        errorMessage: `Please fill in ${min} - ${max} characters`
                    })
                ])
            }
        },
        template: `<user-input :label="label" :placeholder="placeholder" :rules="rules" :on-value-change="onValueChange" :verify="verify" />`,
        methods: actionsData
    }),
    {
        notes,
        info
    }
);
