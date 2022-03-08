
export const loadImage = (path, fileName) => {
    import(`${path}${fileName}`)
      .then(image => {
        return {src: image.default}
      })
    }