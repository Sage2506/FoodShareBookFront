export function buildImageSecureUrl (image) {
  if ( image === undefined || image ===""){
    return ''
  } else {
    let imageData = image.split(' ');
    const imageSecureUrl = `https://res.cloudinary.com/dbo96sjb/image/upload/v${imageData[0]}/${imageData[1]}.${imageData[2]}`;
    return imageSecureUrl;
  }
}