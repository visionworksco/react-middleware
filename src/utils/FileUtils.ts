const blobToFile = (blob: Blob | null, fileName: string): File | null => {
  return blob ? new File([blob], fileName) : null;
};

const fileToBlob = async (file: File) =>
  new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });

export const FileUtils = {
  blobToFile,
  fileToBlob,
};
