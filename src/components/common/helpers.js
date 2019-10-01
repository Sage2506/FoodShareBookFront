export async function uploadImage(image) {
  let url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
  let xhr = new XMLHttpRequest();
  let fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      let imageData = response.version + ' ' + response.public_id + ' ' + response.format
      return imageData;
    } else {
      return '';
    }
  };

  fd.append("tags", "browser_upload");
  fd.append("upload_preset", "rfsb_images")
  fd.append("api_key", "757447362712211");
  fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
  fd.append("folder","ingredients");
  fd.append("file", image);
  xhr.send(fd);
}

export function buildImageSecureUrl (image) {
  if ( image === undefined || image===null || image ===""){
    return ''
  } else {
    let imageData = image.split(' ');
    const imageSecureUrl = `https://res.cloudinary.com/dbo96sjb/image/upload/v${imageData[0]}/${imageData[1]}.${imageData[2]}`;
    return imageSecureUrl;
  }
}