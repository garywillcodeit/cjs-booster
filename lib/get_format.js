/**
 * Get a file format from its mimetype".
 * @param {String} mimetype - The file's mimetype.
 * @returns {String} - The file's format.
 * */

const getFormat = (mimetype) => {
  let format;
  switch (mimetype) {
    case "audio/aac":
      format = "aac";
      break;
    case "application/x-abiword":
      format = "abw";
      break;
    case "application/octet-stream":
      format = "arc";
      break;
    case "video/x-msvideo":
      format = "avi";
      break;
    case "application/vnd.amazon.ebook":
      format = "azw";
      break;
    case "application/octet-stream":
      format = "bin";
      break;
    case "image/bmp":
      format = "bmp";
      break;
    case "application/x-bzip":
      format = "bz";
      break;
    case "application/x-bzip2":
      format = "bz2";
      break;
    case "application/x-csh":
      format = "csh";
      break;
    case "text/css":
      format = "css";
      break;
    case "text/csv":
      format = "csv";
      break;
    case "application/msword":
      format = "doc";
      break;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      format = "docx";
      break;
    case "application/vnd.ms-fontobject":
      format = "eot";
      break;
    case "application/epub+zip":
      format = "epub";
      break;
    case "image/gif":
      format = "gif";
      break;
    case "text/html":
      format = "html";
      break;
    case "image/x-icon":
      format = "ico";
      break;
    case "text/calendar":
      format = "ics";
      break;
    case "application/java-archive":
      format = "jar";
      break;
    case "image/jpeg":
      format = "jpeg";
      break;
    case "image/jpg":
      format = "jpg";
      break;
    case "application/javascript":
      format = "js";
      break;
    case "application/json":
      format = "json";
      break;
    case "audio/midi":
      format = "midi";
      break;
    case "video/mpeg":
      format = "mpeg";
      break;
    case "application/vnd.apple.installer+xml":
      format = "mpkg";
      break;
    case "video/mp4":
      format = "mp4";
      break;
    case "application/vnd.oasis.opendocument.presentation":
      format = "odp";
      break;
    case "application/vnd.oasis.opendocument.spreadsheet":
      format = "ods";
      break;
    case "application/vnd.oasis.opendocument.text":
      format = "odt";
      break;
    case "audio/ogg":
      format = "oga";
      break;
    case "video/ogg":
      format = "ogv";
      break;
    case "application/ogg":
      format = "ogx";
      break;
    case "font/otf":
      format = "otf";
      break;
    case "image/png":
      format = "png";
      break;
    case "application/pdf":
      format = "pdf";
      break;
    case "application/vnd.ms-powerpoint":
      format = "ppt";
      break;
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      format = "pptx";
      break;
    case "application/x-rar-compressed":
      format = "rar";
      break;
    case "application/rtf":
      format = "rtf";
      break;
    case "application/x-sh":
      format = "sh";
      break;
    case "image/svg+xml":
      format = "svg";
      break;
    case "application/x-shockwave-flash":
      format = "swf";
      break;
    case "application/x-tar":
      format = "tar";
      break;
    case "image/tiff":
      format = "tiff";
      break;
    case "application/typescript":
      format = "ts";
      break;
    case "font/ttf":
      format = "ttf";
      break;
    case "application/vnd.visio":
      format = "vsd";
      break;
    case "audio/x-wav":
      format = "wav";
      break;
    case "audio/webm":
      format = "weba";
      break;
    case "video/webm":
      format = "webm";
      break;
    case "image/webp":
      format = "webp";
      break;
    case "font/woff":
      format = "woff";
      break;
    case "font/woff2":
      format = "woff2";
      break;
    case "application/xhtml+xml":
      format = "xhtml";
      break;
    case "application/vnd.ms-excel":
      format = "xls";
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      format = "xlsx";
      break;
    case "application/xml":
      format = "xml";
      break;
    case "application/vnd.mozilla.xul+xml":
      format = "xul";
      break;
    case "application/zip":
      format = "zip";
      break;
    case "video/3gpp":
      format = "3gp";
      break;
    case "audio/3gpp":
      format = "3gp";
      break;
    case "video/3gpp2":
      format = "3g2";
      break;
    case "audio/3gpp2":
      format = "3g2";
      break;
    case "application/x-7z-compressed":
      format = "7z";
      break;

    default:
      format = "Unknow mimetype.";
  }

  return format;
};

module.exports = { getFormat };
