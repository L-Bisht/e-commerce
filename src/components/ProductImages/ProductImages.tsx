import { Box } from "@mui/material";
import { useState } from "react";

type TProps = {
  images: Array<string>;
};

function ProductImages({ images }: TProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images?.[0]);
  return (
    <>
      <Box
        sx={{
          width: "358px",
          height: "290px",
          background: `url(${selectedImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
        }}
      ></Box>
      {images.map((image) => (
        <Box
          onClick={() => setSelectedImage(image)}
          sx={{
            width: "100px",
            height: "100px",
            background: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
        ></Box>
      ))}
    </>
  );
}

export default ProductImages;
