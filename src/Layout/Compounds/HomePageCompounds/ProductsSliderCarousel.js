import { Carousel } from "@material-tailwind/react";

export function ProductsCarousel({ Myproducts }) {
  return (
    <Carousel className="rounded-xl h-full w-full">
      {Myproducts.productImg.map((img, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            key={index}
            src={img}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}
