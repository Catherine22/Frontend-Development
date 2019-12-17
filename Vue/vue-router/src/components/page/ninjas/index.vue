<template>
    <v-container>
        <form class="query-area">
            <div class="query-date">
                <v-icon>mdi-calendar-month</v-icon>
                <span class="query-font">from</span>
                <span class="query-font">&mdash;</span>
                <span class="query-font">to</span>
            </div>
            <input type="text" placeholder="id" />
            <input type="submit" value="Submit" />
        </form>
        <table>
            <tr>
                <th v-for="title in titles" :key="title" bgcolor="#28ae7b">{{ title }}</th>
            </tr>
            <tr
                v-for="(ninja, index) in ninjas"
                :key="ninja.id"
                :class="index % 2 === 0 ? 'light-row' : 'dark-row'"
            >
                <td align="center">{{ ninja.id }}</td>
                <td align="center">{{ ninja.name }}</td>
                <td align="center">{{ ninja.dept }}</td>
                <td align="center">{{ unixTimestampToDatetime(ninja.onBoard) }}</td>
            </tr>
        </table>
    </v-container>
</template>

<script>
import Vue from 'vue';
import { ninjas } from '@/constants';
export default Vue.extend({
    name: 'ninjas',
    data: () => ({
        titles: ['ID', 'Name', 'Dept.', 'On board'],
        ninjas
    }),

    methods: {
        unixTimestampToDatetime(timestamp) {
            let date = new Date(timestamp * 1000);
            return `${this.addZero(date.getMonth())}-${this.addZero(
                date.getDate()
            )}-${date.getFullYear()} ${this.addZero(date.getHours())}:${this.addZero(
                date.getMinutes()
            )}:${this.addZero(date.getSeconds())}`;
        },

        addZero(num) {
            if (num < 10) {
                return `0${num}`;
            }

            return `${num}`;
        }
    }
});
</script>

<style scoped>
table {
    width: 100%;
    margin: auto;
    border-collapse: collapse;
    border-top: 1px solid #28ae7b;
    border-bottom: 1px solid #cdcdcd;
}

table th {
    color: black;
    padding: 8px;
}

table td {
    padding: 8px;
}

.dark-row {
    background-color: #cdcdcd;
    color: black;
}

.light-row {
    background-color: white;
    color: black;
}

.query-area {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 16px 0px 16px 0px;
}

.query-date {
    width: 40%;
    border: 2px solid #dedede;
    border-radius: 8px;
    padding: 4px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.query-font {
    margin: 0px 8px 0px 8px;
    color: #7f6944;
}

input[type='text'],
select {
    width: 32%;
    padding: 4px 8px 4px 8px;
    border: 2px solid #dedede;
    border-radius: 8px;
}

input[type='submit'],
select {
    width: 16%;
    background-color: #dedede;
    padding: 4px 8px 4px 8px;
    border: 2px solid #dedede;
    border-radius: 8px;
}
</style>
