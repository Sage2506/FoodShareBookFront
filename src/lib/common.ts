import axios from "axios";

export const uploadImageToCloudinaryNotWorking = (image, folder, public_id = '') => {
  let url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
  let xhr = new XMLHttpRequest();
  let fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      let imageData = response.version + ' ' + response.public_id + ' ' + response.format
      return imageData
      /*if ( this.state.ingredient.id !== undefined && this.state.ingredient.id !== null ){
        this.props.update_ingredient(this.state.ingredient.id, {...this.state.ingredient, image : imageData})
      } else {
        this.props.create_ingredient({...this.state.ingredient, image : imageData})
      }*/
    }
  };

  fd.append("tags", "browser_upload");
  fd.append("upload_preset", "rfsb_images")
  fd.append("api_key", "757447362712211");
  fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
  fd.append("folder", folder);
  fd.append("file", image);
  if( public_id !== ''){
    fd.append("public_id",public_id);
  }
  xhr.send(fd);
}

export const uploadImageToCloudinary = (image, folder, public_id = '') =>{
  const parameters = {
    tags: "browser_upload",
    upload_preset: "rfsb_images",
    api_key: "757447362712211",
    api_secret: "z_F0g_ccUUJG24DDJJjyNdjl0RM",
    folder: folder,
    file: image
  }
  if (public_id !== ''){
    parameters['public_id'] = public_id
  }
  return axios.post(`https://api.cloudinary.com/v1_1/dbo96sjb/upload`,
    parameters)
}

export const convertPermisionStringToList = ( permission ) => {

  if( permission.list !== undefined && permission.list !== null && permission.list !== '' && permission.list !== [] && permission.list.length > 0){
    permission.list = permission.list.split(',').filter( id => id !== '' ).map( id => parseInt(id))
  } else {
    permission.list = []
  }
}