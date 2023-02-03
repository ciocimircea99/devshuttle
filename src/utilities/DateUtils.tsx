

export default class DateUtils {
    static getCurrentTimestamp(): number {
        return Date.now()
    }
    static getDateFromTimestamp(timestamp: number): string {
        var timezone = new Date().getTimezoneOffset();
        return new Date(timestamp, timezone).toDateString()
    }
    static getTimeStampFromDate(date: string): number {
        date.split("-");
        var newDate = new Date(
            Number.parseInt(date[2]),
            Number.parseInt(date[1]),
            Number.parseInt(date[0]));
        return newDate.getTime()
    }
}