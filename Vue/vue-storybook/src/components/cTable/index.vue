<template>
    <div class="session">
        <table class="c_table">
            <tr>
                <th v-if="preferences && preferences.checkboxes">
                    <el-checkbox v-model="selectAll" />
                </th>
                <th v-for="title in titles" :key="title.key">
                    {{ title.name }}
                </th>
            </tr>
            <tr
                v-show="dataset && dataset.length > 0"
                v-for="(rowData, x) in dataset"
                :key="x"
                :class="[preferences && preferences.clickable ? 'clickable' : null]"
            >
                <td v-if="preferences && preferences.checkboxes" class="cell">
                    <el-checkbox v-model="selectRows[x]" />
                </td>
                <td
                    v-for="(property, y) in titles"
                    :key="y"
                    class="cell"
                    @click="
                        () =>
                            preferences && preferences.clickable
                                ? $emit('onItemClick', rowData, property)
                                : null
                    "
                >
                    {{ rowData[property.key] }}
                </td>
            </tr>
        </table>

        <div v-show="!(dataset && dataset.length > 0)" class="no_data">No data</div>

        <el-pagination
            v-show="preferences && preferences.pagination && preferences.pagination.enable"
            class="pagnation"
            @size-change="size => $emit('onLimitChanged', size)"
            @current-change="page => $emit('onOffsetChanged', page)"
            :page-sizes="[10, 25, 50, 100]"
            :page-size="getPageSize()"
            :total="getTotalSize()"
            layout="total, sizes, prev, pager, next, jumper"
        />
    </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'cTable',
    props: {
        titles: {
            type: Array,
            required: true,
            default: () => []
        },
        dataset: {
            type: Array,
            required: true,
            default: () => []
        },
        preferences: {
            type: Object,
            required: false,
            default: () => {
                return {
                    clickable: false,
                    checkboxes: false,
                    pagination: {
                        enable: false,
                        totalSize: 0,
                        offset: 0,
                        limit: 0
                    },
                    exportToExcel: false
                };
            }
        }
    },
    data() {
        return {
            selectAll: false,
            selectRows: Array(),
            checkboxesClone: Array()
        };
    },
    methods: {
        onPageSizeChange(newSize) {
            console.log(`${newSize} items per page`);
        },
        goToPage(index) {
            console.log(`current page: ${index}`);
        },
        getPageSize() {
            return this.preferences &&
                this.preferences.pagination &&
                this.preferences.pagination.limit
                ? this.preferences.pagination.limit
                : 0;
        },
        getTotalSize() {
            return this.preferences &&
                this.preferences.pagination &&
                this.preferences.pagination.totalSize
                ? this.preferences.pagination.totalSize
                : 0;
        }
    },
    watch: {
        dataset(value) {
            console.log('dataset', value);
        },
        selectAll(value) {
            this.selectRows = this.selectRows.map(row => value);
        },
        selectRows(value) {
            let count = 0;
            value.forEach(row => {
                row && count++;
            });

            if (count === value.length) {
                this.selectAll = true;
            }

            if (this.selectAll && count === value.length - 1) {
                this.checkboxesClone = [...this.selectRows];
                this.selectAll = false;
            }

            if (count === 0 && this.checkboxesClone.length > 0) {
                this.selectRows = [...this.checkboxesClone];
                this.checkboxesClone = [];
            }
            this.$emit('onCheckboxChanged', this.selectRows);
        },
        preferences(value) {
            console.log('p', value);
        }
    },
    mounted() {
        this.selectRows = [];
        if (this.dataset && this.dataset.length > 0) {
            for (let i = 0; i < this.dataset.length; i++) {
                this.selectRows.push(false);
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.session {
    background-color: white;
    box-shadow: -7.829px 11.607px 21px 0px rgba(71, 95, 123, 0.2);
    border-radius: 6px;
    padding: 16px;
    margin: auto;
    .c_table {
        width: 100%;
        margin: auto;
        text-align: center;
        border-radius: 3px;
        border-collapse: collapse;
        overflow: hidden;
        background: white;
        th {
            padding: 16px;
            line-height: 24px;
            text-align: left;
            color: #132441;
            background-color: #e0e0e0;
            border-right: 1px solid white;
        }
        th:last-child {
            border-right: none;
        }
        tr {
            // &:nth-of-type(odd) {
            //     background-color: #fffbfa;
            // }
            &:hover {
                background-color: rgb(234, 240, 249);
                color: white;
            }
            border: 1px solid #e0e0e0;
        }
        .no_data {
            margin: auto;
            padding-top: 48px;
            padding-bottom: 32px;
            color: #132441;
            text-align: center;
        }
        .clickable {
            &:hover {
                cursor: pointer;
            }
        }
        .cell {
            padding: 16px;
            text-align: left;
            line-height: 24px;
            color: #132441;
            border-top: 1px solid #e0e0e0;
            border-right: 1px solid #e0e0e0;
        }
        .pagnation {
            margin-top: 16px;
        }
    }
}
</style>
