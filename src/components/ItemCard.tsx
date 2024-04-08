import imgPreview from "../assets/images/image-product-1.jpg";
import thumbNailOne from "../assets/images/image-product-1-thumbnail.jpg";
import thumbNailTwo from "../assets/images/image-product-2-thumbnail.jpg";
import thumbNailThree from "../assets/images/image-product-3-thumbnail.jpg";
import thumbNailFour from "../assets/images/image-product-4-thumbnail.jpg";
import largeImageOne from "../assets/images/image-product-1.jpg"; // Import larger version
import largeImageTwo from "../assets/images/image-product-2.jpg"; // Import larger version
import largeImageThree from "../assets/images/image-product-3.jpg"; // Import larger version
import largeImageFour from "../assets/images/image-product-4.jpg"; // Import larger version
import { PiShoppingCart } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { useState } from "react";

interface Image {
  thumbnail: string;
  large: string;
}

const ItemCard = () => {
  const [count, setCount] = useState<number>(0);
  const [previewImage, setPreviewImage] = useState<string>(imgPreview);
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // State to track selected thumbnail index
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const [popupPreviewImage, setPopupPreviewImage] = useState<string>("");
  const [popupImages, setPopupImages] = useState<Image[]>([]);
  const [popupSelectedIndex, setPopupSelectedIndex] = useState<number>(0); // State to track selected thumbnail index in popup

  const openPopup = (index: number) => {
    setIsPopupOpen(!isPopupOpen);
    setPopupImages(images); // Set popup images to initial state
    setPopupPreviewImage(images[index].large); // Set preview image for popup
    setIsPopupOpen(true); // Open popup
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const changeImgPreview = (image: Image, index: number) => {
    setPreviewImage(image.large);
    setSelectedIndex(index); // Update selected index
  };

  const changeImgPopup = (image: Image, index: number) => {
    setPopupPreviewImage(image.large);
    setPopupSelectedIndex(index); // Update selected index in popup
  };

  const increase = () => {
    setCount(count + 1);
  };

  const images: Image[] = [
    { thumbnail: thumbNailOne, large: largeImageOne },
    { thumbnail: thumbNailTwo, large: largeImageTwo },
    { thumbnail: thumbNailThree, large: largeImageThree },
    { thumbnail: thumbNailFour, large: largeImageFour },
  ];

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-20">
      <div className="flex mx-auto gap-28 place-items-center max-w-screen-lg">
        <div className="img-container">
          <img
            id="preview"
            src={previewImage}
            alt=""
            className="mb-6 rounded-2xl max-w-[30rem] shadow-lg cursor-pointer"
            onClick={() => openPopup(0)}
          />

          <div className="flex gap-5 justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.thumbnail}
                onClick={() => changeImgPreview(image, index)}
                className={`aspect-square w-[6.5rem] rounded-xl cursor-pointer shadow-md ${selectedIndex === index ? "opacity-40 outline outline-offset-2 outline-orange-700" : ""}`} // Apply border if the thumbnail is selected
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="mb-4 text-amber-600 font-semibold">
            SNEAKER COMPANY
          </span>
          <h1 className="mb-6 font-bold text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mb-6 text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <p className="flex gap-5 items-baseline">
            <span className="mb-2 text-2xl font-bold">$125.00</span>
            <span className="px-2 text-lg font-semibold text-orange-600/90 bg-[#ffede0] rounded-md">
              50%
            </span>
          </p>
          <del className="mb-8 font-medium text-gray-400">$250.00</del>
          <div className="flex items-center">
            <button
              type="button"
              className="py-2 px-4 rounded-l-lg text-orange-500 text-lg font-bold bg-[#f7f8fd]"
              onClick={decrease}
            >
              -
            </button>
            <span className="py-2 w-16 px-4 text-lg text-center font-bold bg-[#f7f8fd]">
              {count}
            </span>
            <button
              type="button"
              className="py-2 px-4 rounded-r-lg text-orange-500 text-lg font-bold bg-[#f7f8fd]"
              onClick={increase}
            >
              +
            </button>
            <button
              type="button"
              className="ml-6 w-full justify-center rounded-lg py-3 flex gap-3 font-semibold text-sm bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-200/90 hover:-translate-y-2 hover:scale-105 transition-all"
            >
              <PiShoppingCart className="size-5" />
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed w-screen h-screen z-10 top-0 right-0 left-0 bottom-0">
          <div
            className="fixed w-full h-full bg-black/65"
            onClick={togglePopup}
          ></div>
          <div className="flex items-center justify-center h-full">
            <div className="relative max-w-screen-lg mx-auto flex z-20">
              <div className="">
                <img
                  src={popupPreviewImage}
                  alt="Preview"
                  className="mb-6 rounded-2xl max-w-[38rem] shadow-lg"
                />
                <div className="flex gap-5 justify-center">
                  {popupImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.thumbnail}
                      onClick={() => changeImgPopup(image, index)}
                      className={`aspect-square w-[6.5rem] rounded-xl cursor-pointer shadow-md ${popupSelectedIndex === index ? "outline outline-offset-4 outline-gray-300 " : ""}`} // Apply border if the thumbnail is selected
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <button
                className="absolute -top-10 right-0 z-20"
                onClick={togglePopup}
              >
                <IoClose className="z-20 text-white size-7" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
