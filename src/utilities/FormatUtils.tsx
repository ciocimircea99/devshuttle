

export default class FormatUtil {
    static HTMLtoString(unformatted: string): string {
        return unformatted.replaceAll('<br>', '\n')
    }
}