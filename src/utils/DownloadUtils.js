const downloadJson = (fileName, objectData) => {
  if (!fileName || !objectData) {
    return;
  }

  const contentType = 'application/json;charset=utf-8;';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], {
      type: contentType,
    });
    navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

export const DownloadUtils = {
  downloadJson,
};
