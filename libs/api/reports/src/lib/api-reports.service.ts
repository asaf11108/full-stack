/*
https://docs.nestjs.com/providers#services
*/

import { Website } from '@full-stack/interfaces';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { Observable, from } from 'rxjs';
import * as csv from 'csvtojson';

@Injectable()
export class ApiReportsService {
    static headers = [
        'websiteId',
        'date',
        'widgetId',
        'clicks',
        'impressions',
        'revenue',
    ];
    static filePath = join(__dirname, 'assets/all_data.csv');

    get websites(): Observable<Website[]> {
        return from(
            csv({
                headers: ApiReportsService.headers,
            }).fromFile(ApiReportsService.filePath)
        );
    }
}
