import { raiseError } from '../../actions/error';
import { IPagination } from '../../interfaces/common';
import { IPermissions } from '../../interfaces/permission_types';

export function buildImageSecureUrl (image : string) {
  if ( image === undefined || image === null || image ==="" ){
    return ''
  } else {
    let imageData = image.split(' ');
    const imageSecureUrl = `https://res.cloudinary.com/dbo96sjb/image/upload/v${imageData[0]}/${imageData[1]}.${imageData[2]}`;
    return imageSecureUrl;
  }
}

export async function uploadImage(image : string) {
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

export function paginate(totalItems : number, currentPage: number = 1 , pageSize : number = 10, maxPages : number = 10, links: string){
  let result : IPagination;
  let totalPages = Math.ceil(totalItems / pageSize);
  // ensure current page isn't out of range
  if (currentPage < 1) {
      currentPage = 1;
  } else if (currentPage > totalPages) {
      currentPage = totalPages;
  }

  let startPage : number;
  let endPage : number;
  if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
  } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          // current page near the end
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
      } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
      }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  // return object with all pager properties required by the view
  result = {
      arrows : extractLinksPages(links),
      currentPage: currentPage,
      endIndex: endIndex,
      endPage: endPage,
      pages: pages,
      pageSize: pageSize,
      startIndex: startIndex,
      startPage: startPage,
      totalItems: totalItems,
      totalPages: totalPages,
  };

  return result;
}

function extractPageNumber(link : string){
  let page_index = link.indexOf('page=');
  let greater_than_index = link.indexOf('&per_page')
  let page = link.substring(page_index+5,greater_than_index);
  return page;
}

function extractLinkRef(link : string) {
  let page_index = link.indexOf('rel="');
  let greater_than_index = link.length - 1
  let page = link.substring(page_index+5,greater_than_index);
  return page;
}

export function extractLinksPages(links : string = ''){
  let pages : { [key : string] : string } = {};
  const linksArray : string[] = links.split(',');
  linksArray.forEach(link => {
    pages[extractLinkRef(link)] = extractPageNumber(link)
  });
  return pages;
}
/*
export function urlGetParam(param, link) {
  let result = '';
  let startIndex = link.indexOf(param)
  if (startIndex > -1) {
    link = link.substring(startIndex + param.length +1 );
    let i = 0;
    while(i < link.length && link[i] !== '&')  {
      result += link[i]
      i++;
    }
  }
  return result;
}
 */
export const showError = (error : any) => {
  let {response} = error;
  let message = ''
  if(response === undefined){
    message = "Sin conexion a internet";
  } else {
    switch( response.status ){
      case 404: message = "Ruta no encontrada";
      break;
      case 401: message = "Peticion no valida";
      break;
      case 409:
      case 422:
      case 500: message = response.data.message;
      break;
      default: message = "Error en la petición";
    }
  }
  return raiseError(message);
}