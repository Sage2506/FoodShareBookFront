export function buildImageSecureUrl (image) {
  if ( image === undefined || image === null || image ==="" ){
    return ''
  } else {
    let imageData = image.split(' ');
    const imageSecureUrl = `https://res.cloudinary.com/dbo96sjb/image/upload/v${imageData[0]}/${imageData[1]}.${imageData[2]}`;
    return imageSecureUrl;
  }
}

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

export function paginate(totalItems, currentPage = 1 , pageSize = 10, maxPages = 10, links){
  let result = {}
  let totalPages = Math.ceil(totalItems / pageSize);
  // ensure current page isn't out of range
  if (currentPage < 1) {
      currentPage = 1;
  } else if (currentPage > totalPages) {
      currentPage = totalPages;
  }

  let startPage;
  let endPage;
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
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
      arrows : extractLinksPages(links)
  };
  
  return result;
}

function extractPageNumber(link){
  let page_index = link.indexOf('page=');
  let greater_than_index = link.indexOf('&per_page')
  let page = link.substring(page_index+5,greater_than_index);
  return page;
}

function extractLinkRef(link) {
  let page_index = link.indexOf('rel="');
  let greater_than_index = link.length - 1
  let page = link.substring(page_index+5,greater_than_index);
  return page;
}

export function extractLinksPages(links = ''){
  let pages = {};

  links = links.split(',');
  links.forEach(link => {
    pages[extractLinkRef(link)] = extractPageNumber(link)
  });
  return pages;
}

export function urlGetParam(param, link) {
  let result = '';
  let startIndex = link.indexOf(param)
  if (startIndex > -1) {
    link = link.substring(startIndex + param.length +1 );
    let i = 0;
    while(i < link.length && link[i] !== '&')	{
      result += link[i]
      i++;
    }
  }
  return result;
}