import imageCompression from "browser-image-compression";

const useCompressImage = () => {
  const options = {
    maxSizeMB: 1,
    useWebWorker: true,
  };

  const compress = async (file: File) => imageCompression(file, options);

  return { compress };
};

export default useCompressImage;
