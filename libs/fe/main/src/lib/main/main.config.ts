import { TableColumn } from '@swimlane/ngx-datatable';

export const TABLE_CONFIG: TableColumn[] = [
    { prop: 'websiteId', name: 'Website ID', width: 200 },
    { prop: 'date', name: 'Date', width: 200 },
    { prop: 'widgetId', name: 'Widget ID', width: 200 },
    { prop: 'clicks', name: 'Clicks', width: 200 },
    { prop: 'impressions', name: 'Impressions', width: 200 },
    { prop: 'revenue', name: 'Revenue', width: 200 },
];