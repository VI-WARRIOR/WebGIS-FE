import { Card } from "../../compoments/card";
import { CardFiveStar } from "../../compoments/card/index.five-star";
import { CarouselRoot } from "../../compoments/carousel";
import { CarouselSlitElement } from "../../compoments/carousel/index.v2";
import { InputSearch } from "../../compoments/input-search";
import { TextSlogan } from "../../compoments/text-slogan";

export const Home = () => {
  const letContainer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {" "}
      <CarouselRoot />
      <TextSlogan />
      <InputSearch placeholder="Tìm phòng giá rẻ và vị trí đẹp" />
      <div className="container mx-auto px-16">
        <CarouselSlitElement />
        <div className="text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-5">
          <h3 className="text-white">Phòng nổi bật </h3>
        </div>
      </div>
      {/* <div className="container mx-auto mt-8 flex flex-wrap">
        {letContainer.map((item) => {
          return <Card />;
        })}
      </div>
      <div className="container mx-auto px-16">
        <div className="text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-5">
          <h3 className="text-white">Phòng 5 ⭐ </h3>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        {letContainer.map((item) => {
          return <CardFiveStar />;
        })}
      </div> */}
    </>
  );
};
