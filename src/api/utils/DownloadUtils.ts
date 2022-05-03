const downloadJson = (fileName: string, objectData: any) => {
  if (!fileName || !objectData) {
    return;
  }

  const contentType = 'application/json;charset=utf-8;';

  const a = document.createElement('a');
  a.download = fileName;
  a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const DownloadUtils = {
  downloadJson,
};
