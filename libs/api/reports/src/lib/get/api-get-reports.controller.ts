import { ApiReportsService } from './../api-reports.service';
import { map, tap } from 'rxjs/operators';
import { Website } from '@full-stack/interfaces';
import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@Controller('get')
export class ApiGetReportsController {

    constructor(private apiReportsService: ApiReportsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('allData')
    allData(): Observable<Website[]> {
        return this.apiReportsService.websites;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':time')
    data(@Param('time', ParseIntPipe) time: number): Observable<Website[]> {
        return this.apiReportsService.websites.pipe(
            map(websites => websites.filter(data => new Date(data.date).getTime() === time))
        );
    }
}
