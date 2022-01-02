export class FileUtils {
  static blobToFile = (blob: Blob | null, fileName: string): File | null => {
    return blob ? new File([blob], fileName) : null;
  };
}
