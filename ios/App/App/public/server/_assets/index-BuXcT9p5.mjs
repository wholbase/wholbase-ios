import { r as registerPlugin } from "../server-_index.mjs";
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var MediaType;
(function(MediaType2) {
  MediaType2[MediaType2["Photo"] = 0] = "Photo";
  MediaType2[MediaType2["Video"] = 1] = "Video";
})(MediaType || (MediaType = {}));
var MediaTypeSelection;
(function(MediaTypeSelection2) {
  MediaTypeSelection2[MediaTypeSelection2["Photo"] = 0] = "Photo";
  MediaTypeSelection2[MediaTypeSelection2["Video"] = 1] = "Video";
  MediaTypeSelection2[MediaTypeSelection2["All"] = 2] = "All";
})(MediaTypeSelection || (MediaTypeSelection = {}));
var EncodingType;
(function(EncodingType2) {
  EncodingType2[EncodingType2["JPEG"] = 0] = "JPEG";
  EncodingType2[EncodingType2["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var CameraErrorCode;
(function(CameraErrorCode2) {
  CameraErrorCode2["CameraPermissionDenied"] = "OS-PLUG-CAMR-0003";
  CameraErrorCode2["GalleryPermissionDenied"] = "OS-PLUG-CAMR-0005";
  CameraErrorCode2["NoCameraAvailable"] = "OS-PLUG-CAMR-0007";
  CameraErrorCode2["TakePhotoCancelled"] = "OS-PLUG-CAMR-0006";
  CameraErrorCode2["TakePhotoFailed"] = "OS-PLUG-CAMR-0010";
  CameraErrorCode2["TakePhotoInvalidArguments"] = "OS-PLUG-CAMR-0014";
  CameraErrorCode2["InvalidImageData"] = "OS-PLUG-CAMR-0008";
  CameraErrorCode2["EditPhotoFailed"] = "OS-PLUG-CAMR-0009";
  CameraErrorCode2["EditPhotoCancelled"] = "OS-PLUG-CAMR-0013";
  CameraErrorCode2["EditPhotoEmptyUri"] = "OS-PLUG-CAMR-0024";
  CameraErrorCode2["ImageNotFound"] = "OS-PLUG-CAMR-0011";
  CameraErrorCode2["ProcessImageFailed"] = "OS-PLUG-CAMR-0012";
  CameraErrorCode2["ChooseMediaFailed"] = "OS-PLUG-CAMR-0018";
  CameraErrorCode2["ChooseMediaCancelled"] = "OS-PLUG-CAMR-0020";
  CameraErrorCode2["MediaPathError"] = "OS-PLUG-CAMR-0021";
  CameraErrorCode2["FetchImageFromUriFailed"] = "OS-PLUG-CAMR-0028";
  CameraErrorCode2["RecordVideoFailed"] = "OS-PLUG-CAMR-0016";
  CameraErrorCode2["RecordVideoCancelled"] = "OS-PLUG-CAMR-0017";
  CameraErrorCode2["VideoNotFound"] = "OS-PLUG-CAMR-0025";
  CameraErrorCode2["PlayVideoFailed"] = "OS-PLUG-CAMR-0023";
  CameraErrorCode2["EncodeResultFailed"] = "OS-PLUG-CAMR-0019";
  CameraErrorCode2["FileNotFound"] = "OS-PLUG-CAMR-0027";
  CameraErrorCode2["InvalidArgument"] = "OS-PLUG-CAMR-0031";
  CameraErrorCode2["GeneralError"] = "OS-PLUG-CAMR-0026";
})(CameraErrorCode || (CameraErrorCode = {}));
const Camera = registerPlugin();
export {
  Camera,
  CameraDirection,
  CameraErrorCode,
  CameraResultType,
  CameraSource,
  EncodingType,
  MediaType,
  MediaTypeSelection
};
