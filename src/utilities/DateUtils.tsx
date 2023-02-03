

export default class DateUtils {
    static getCurrentTimestamp(): number {
        return Date.now()
    }
    static getDateFromTimestamp(timestamp: number): string {
        const date = new Date(timestamp)
        return date.getUTCDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCFullYear()
    }
    static getTimeStampFromDate(date: string): number {
        date.split("-");
        var newDate = new Date(
            Number.parseInt(date[2]),
            Number.parseInt(date[1] + 1),
            Number.parseInt(date[1]));
        return newDate.getTime()
    }
}