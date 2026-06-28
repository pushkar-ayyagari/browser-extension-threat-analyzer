import JSZip from "jszip";

export async function readZipFile(file: File) {
  const zip = await JSZip.loadAsync(file);

  const fileNames = Object.keys(zip.files).filter(
    (name) => !zip.files[name].dir
  );

  return fileNames;
}