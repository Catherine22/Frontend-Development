<template>
    <div class="user_input" :style="inputStyle">
        <div class="user_input_content">
            <label class="label">{{ label }}</label>
            <input
                type="text"
                class="input"
                :placeholder="placeholder"
                v-model="value"
                @keypress="handleInput($event)"
            />
        </div>
        <h1></h1>
        <div class="user_input_error" v-if="showError && errorMessage">{{ errorMessage }}</div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: 'label'
        },
        inputStyle: {
            type: Object,
            default: () => {}
        },
        rules: {
            type: Array,
            default: () => []
        },
        showError: {
            type: Boolean,
            default: true
        },
        numberOnly: {
            type: Object,
            default: () => {
                return { enable: false, errorMessage: '' };
            }
        },
        onValueChange: {
            type: Function,
            default: value => {
                return value;
            }
        },
        verify: {
            type: Function,
            default: isValid => {
                return isValid;
            }
        }
    },
    data() {
        return {
            value: '',
            errorMessage: ''
        };
    },
    watch: {
        value(val) {
            this.onValueChange(val);
            this.handleValidator(val);
        }
    },
    methods: {
        handleInput(e) {
            const charCode = e.which ? e.which : e.keyCode;
            if (this.stopInput(charCode)) {
                this.errorMessage = this.numberOnly.errorMessage
                    ? this.numberOnly.errorMessage
                    : 'Number only';
                e.preventDefault();
            } else {
                this.errorMessage = '';
            }
        },
        stopInput(charCode) {
            if (this.numberOnly && this.numberOnly.enable) {
                if (charCode >= 48 && charCode <= 57) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        handleValidator(val) {
            let isValid = true;

            if (!val || val.length === 0) {
                this.errorMessage = '';
            }

            if (isValid && this.rules && this.rules.length > 0) {
                for (let i = 0; i < this.rules.length; i++) {
                    const rule = this.rules[i];
                    if (!rule.func(val)) {
                        isValid = false;
                        this.errorMessage = rule.errorMessage ? rule.errorMessage : 'Invalid input';
                        return;
                    }
                }
            }
            this.verify(isValid);
        }
    }
};
</script>

<style lang="scss" scoped>
.user_input {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    &_content {
        display: flex;
        width: 100%;
        align-items: center;
    }
    &_error {
        text-align: right;
        color: #ed4c67;
        font-size: 14px;
        margin-top: 6px;
    }
    .label {
        padding-right: 8px;
        color: inherit;
        flex-shrink: 0;
    }
    .input {
        display: flex;
        width: 100%;
        padding: 8px 10px;
        outline: none;
        font-size: 16px;
        color: inherit;
        border: solid 1px gray;
    }
    .input::placeholder {
        color: inherit;
        opacity: 0.5;
    }
}
</style>
