export const fileFormat = (url = "") => {
  const fileExtension = url.split(".").pop();
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  )
    return "video";

  if (
    fileExtension === "mp3" ||
    fileExtension === "wav" ||
    fileExtension === "ogg"
  )
    return "audio";

  if (
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "png" ||
    fileExtension === "gif"
  )
    return "image";

  return "file";
};

export const transformImage = (url, width = "100") => {
  return url;
};
