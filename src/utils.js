// Media resize

export const smallImage = (imagePath, size) => {
    const image = imagePath.match(/media\/(screenshots|games)/)
    ? imagePath.replace("/media/", `/media/resize/${size}/-/`)
    : imagePath;
    return image;
}