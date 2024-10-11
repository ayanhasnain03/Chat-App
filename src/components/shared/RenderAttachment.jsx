import { FileOpen } from "@mui/icons-material";
import { transformImage } from "../../lib/features";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls={true} />;

    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Altattachment"
          width={"200px"}
          height={"200px"}
          style={{ borderRadius: "10px", objectFit: "contain" }}
        />
      );

    case "audio":
      return <audio src={url} controls={true} preload="none" />;

    default:
      return <FileOpen />;
  }
};

export default RenderAttachment;
