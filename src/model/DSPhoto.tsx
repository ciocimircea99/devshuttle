export function genPhotoArray(photoNumber: number): string[] {
    let result: string[] = []
    for (let i = 0; i < photoNumber; i++) {
        if (i % 2 == 0) {
            result.push('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg')
        } else {
            result.push('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg')
        }
    }
    return result
}