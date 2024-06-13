import { NgbDateStruct, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { DatetimeFormatter } from "../../services/formatters/datetime/datetime-formatter.service";
export declare class DateTimeModel {
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    displaySeconds: boolean;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    constructor(init?: Partial<DateTimeModel>);
    static toDateTimeStruct(formatter: any, dateString: string): DateTimeModel | null;
    static internalToDateTimeStruct(formatter: any, dateString: string): DateTimeModel | null;
    toUserFormat(formatter: DatetimeFormatter): string;
}
