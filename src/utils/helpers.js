export const downloadCV = (url) => { 
  fetch(url).then(response=> {
    console.log(response)
    response.blob()
  }).then(blob => {
    const blobURL = window.URL.createObjectURL(new Blob([blob]))
    const filename = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=blobURL
    aTag.setAttribute('download', filename)
    document.body.appenChild(aTag)
    aTag.click()
    aTag.remove()
  })
}