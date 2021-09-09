import { map, tap } from 'rxjs/operators';
import { Website } from '@full-stack/interfaces';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { join } from 'path';
import { from, Observable } from 'rxjs';
import * as csv from 'csvtojson';

@Controller(['reports/get'])
export class ApiGetReportsController {
    static headers = [
        'websiteId',
        'date',
        'widgetId',
        'clicks',
        'impressions',
        'revenue',
    ];
    static filePath = join(__dirname, 'assets/all_data.csv');

    @Get('allData')
    allData(): Observable<Website[]> {
        return this.readFile();
    }

    @Get(':time')
    data(@Param('time', ParseIntPipe) time: number): Observable<Website[]> {
        return this.readFile().pipe(
            map(websites => websites.filter(data => new Date(data.date).getTime() === time))
        );
    }

    private readFile(): Observable<Website[]> {
        return from(
            csv({
                headers: ApiGetReportsController.headers,
            }).fromFile(ApiGetReportsController.filePath)
        );
    }
}
