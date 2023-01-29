export function genPhotoArray(photoNumber: number): string[] {
    let result: string[] = []
    for (let i = 0; i < photoNumber; i++) {
        if (i % 2 == 0) {
            result.push('https://steamuserimages-a.akamaihd.net/ugc/2058741574591784573/3F6DC13DDD4EB200A0C9B0F35B9CA7D25D59892D/')
        } else {
            result.push('https://steamuserimages-a.akamaihd.net/ugc/2058741574591785029/C7E0FB1F9004B59DD344A9288DFFFABCA2F8CE39/')
        }
    }
    return result
}