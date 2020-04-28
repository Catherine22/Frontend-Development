import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text, boolean, array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mainComponents from './index.vue';
const description = {
    mainComponents: {
        props: {
            titles: {
                name: 'Titles displayed in the table',
                key: 'Key is equivalent to properties of the objects in dataset'
            },
            dataset: 'Data filled in table',
            preferences: {
                clickable: '',
                checkboxes: '',
                pagination: {
                    enable: '',
                    totalSize: '',
                    offset: '',
                    limit: ''
                },
                exportToExcel: ''
            }
        }
    }
};
const notes = '<div style="color: #f33">Table</div>';
const info = {
    summary: 'Styled table with paging capability'
};
const mockTitles = [
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
];
const mockDataset = [
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
];
const stories = storiesOf('Components/cTable', module);
stories.addDecorator(withKnobs);
stories.add(
    'no data',
    () => ({
        components: { mainComponents },
        props: {
            titles: {
                default: mockTitles
            },
            dataset: {
                default: []
            }
        },
        description,
        template:
            '<main-components class="global_block" :titles="titles" :dataset="dataset" :preferences="preferences" />'
    }),
    {
        notes,
        info
    }
);

stories.add(
    'clickable',
    () => ({
        components: { mainComponents },
        props: {
            titles: {
                default: mockTitles
            },
            dataset: {
                default: mockDataset
            },
            preferences: {
                default: object('preferences', {
                    clickable: true
                })
            }
        },
        description,
        template:
            '<main-components class="global_block" :titles="titles" :dataset="dataset" :preferences="preferences" />'
    }),
    {
        notes,
        info
    }
);

stories.add(
    'with checkboxes',
    () => ({
        components: { mainComponents },
        props: {
            titles: {
                default: mockTitles
            },
            dataset: {
                default: mockDataset
            },
            preferences: {
                default: object('preferences', {
                    checkboxes: true
                })
            }
        },
        description,
        template:
            '<main-components :titles="titles" :dataset="dataset" :preferences="preferences" />'
    }),
    {
        notes,
        info
    }
);

stories.add(
    'premium table',
    () => ({
        components: { mainComponents },
        props: {
            titles: {
                default: mockTitles
            },
            dataset: {
                default: mockDataset
            },
            preferences: {
                default: object('preferences', {
                    clickable: true,
                    checkboxes: true,
                    pagination: {
                        enable: true,
                        totalSize: 123,
                        offset: 0,
                        limit: 10
                    },
                    exportToExcel: true
                })
            }
        },
        description,
        template:
            '<main-components :titles="titles" :dataset="dataset" :preferences="preferences" />'
    }),
    {
        notes,
        info
    }
);
// @onCheckboxChanged="onCheckboxChanged" @onOffsetChanged="onOffsetChanged" @onLimitChanged="onLimitChanged"
