import { Box, Stack } from "@mui/material";
import { useState } from "react";

type TProps = {
  images: string[];
};

function ProductImages({ images = [] }: TProps) {
  const [selectedImage, setSelectedImage] = useState<string>(() => images[0]);
  return (
    <Stack direction="row" spacing={1}>
      <Stack direction="column" spacing={1}>
        {images.map((image) => (
          <Box
            key={image.split("/").pop()}
            onClick={() => setSelectedImage(image)}
            sx={{
              width: "80px",
              height: "80px",
              background: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderRadius: "12px",
              border: "1px solid black",
            }}
          ></Box>
        ))}
      </Stack>
      <Box
        sx={{
          width: "640px",
          height: "290px",
          background: `url(${selectedImage || images?.[0]})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
        }}
      ></Box>
    </Stack>
  );
}

export default ProductImages;
