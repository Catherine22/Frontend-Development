<template>
    <div class="c_table_demo">
        <c-table
            class="c_table"
            :titles="titles"
            :dataset="dataset"
            :preferences="preferences"
            @onItemClick="onItemClick"
            @onCheckboxChanged="onCheckboxChanged"
            @onOffsetChanged="onOffsetChanged"
            @onLimitChanged="onLimitChanged"
            @onExport="onExport"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import cTable from '@/components/cTable/index.vue';
export default Vue.extend({
    name: 'About',
    components: {
        cTable
    },
    data() {
        return {
            titles: [
                {
                    name: 'Status',
                    key: 'statue'
                },
                {
                    name: 'Signal Name',
                    key: 'signalName'
                },
                {
                    name: 'Severity',
                    key: 'severity'
                },
                {
                    name: 'Stage',
                    key: 'stage'
                },
                {
                    name: 'Schedule',
                    key: 'schedule'
                },
                {
                    name: 'Team Lead',
                    key: 'teamLead'
                }
            ],
            dataset: [
                {
                    signalName: 'Astrid: NE shared managed-features',
                    severity: 'Medium',
                    stage: 'trigged',
                    schedule: '0:33',
                    teamLead: 'Chase Nguyen'
                },

                {
                    statue: 'Offline',
                    severity: 'Medium',
                    stage: 'trigged',
                    schedule: '0:33',
                    teamLead: 'Chase Nguyen'
                },
                {
                    statue: 'Offline',
                    signalName: 'Astrid: NE shared managed-features',
                    stage: 'trigged',
                    schedule: '0:33',
                    teamLead: 'Chase Nguyen'
                },
                {
                    statue: 'Offline',
                    signalName: 'Astrid: NE shared managed-features',
                    severity: 'Medium',
                    schedule: '0:33',
                    teamLead: 'Chase Nguyen'
                },
                {
                    statue: 'Offline',
                    signalName: 'Astrid: NE shared managed-features',
                    severity: 'Medium',
                    stage: 'trigged',
                    teamLead: 'Chase Nguyen'
                },
                {
                    statue: 'Offline',
                    signalName: 'Astrid: NE shared managed-features',
                    severity: 'Medium',
                    stage: 'trigged',
                    schedule: '0:33'
                }
            ],
            preferences: {
                clickable: true,
                checkboxes: true,
                pagination: {
                    enable: true,
                    totalSize: 234,
                    offset: 3,
                    limit: 10
                },
                exportToExcel: true
            }
        };
    },
    methods: {
        onItemClick(rowData, property) {
            alert(`${property.name}: ${rowData[property.key]}`);
        },
        onCheckboxChanged(checkboxes) {
            console.log('onCheckboxChanged', checkboxes);
        },
        onOffsetChanged(newOffset) {
            console.log('onOffsetChanged', newOffset);
        },
        onLimitChanged(newLimit) {
            console.log('onLimitChanged', newLimit);
        },
        onExport() {
            console.log('onExport');
        }
    }
});
</script>

<style lang="scss" scoped>
.c_table_demo {
    .block {
        background: white;
        border-radius: 3px;
        width: 200px;
        height: 150px;
        margin: 20px;
        box-shadow: 0 0 3px #ededed;
    }
    .c_table {
        width: 80%;
    }
}
</style>
