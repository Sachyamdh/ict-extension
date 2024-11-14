import { useState } from "react";
import {
  CheckAiButton,
  DefaultContainer,
  UploadImageIcon,
  defaultContainerContent,
  h3Styles,
  triangleBottomRight,
  triangleTopLeft,
} from "../../styles/styles";
import { AddSingleLable, Addlabel } from "../../utils/addLabel";
import { handleBulkImages, handleSingleImage } from "../../utils/handleCheckAI";
import { Button } from "./Button";
import ImageUploadForm from "./Form";

export const Default = () => {
  const [form, showForm] = useState(false);

  const handleCheckAI = async () => {
    const targeElement = document.querySelector("a.YsLeY");
    let result;
    if (!targeElement) {
      result = await handleBulkImages();
      if (result) {
        Addlabel(result);
      }
    } else {
      const imageElement = targeElement.querySelector(
        "img"
      ) as HTMLImageElement;
      if (imageElement) {
        const imageUrl = imageElement.src;
        result = await handleSingleImage(imageUrl);
        console.log("result", result);
        if (result !== undefined) AddSingleLable(result);
      } else {
        console.log("No image found inside the target <a> tag.");
      }
    }
  };

  return (
    <div style={DefaultContainer}>
      <div style={triangleTopLeft}></div>
      <div style={triangleBottomRight}></div>
      <div style={defaultContainerContent}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontSize: "8px",
          }}
        >
          <h3 style={h3Styles} onClick={() => showForm(false)}>
            The Neural Sherpas
          </h3>
          <span>AI Image Detector</span>
        </div>

        {form ? (
          <ImageUploadForm />
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "5px",
            }}
          >
            <Button type="button" onClick={handleCheckAI} style={CheckAiButton}>
              <img
                src="https://s3-alpha-sig.figma.com/img/c0ec/8b30/4b9543caf8856f637be3c117a9bf0291?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dh6TSG22M3HnNW~zUCDSghVbt8T6qsPUuhCAK1FHC3tHMg4mZ8ilxj3UuZIoscmPa4SzhuW-ZSzlO9LB6VHhXNiUe5BIBafNxWyvmU1mgnnSmNml2ScGgkRSJPaLPB0dve-TN6PN6luV466ZRVq0oov28p-mCLEksaFcpWVGtqpfT5q~8lT3oGknKxsgGgvtwsNwbwpKJ32urkWJ5Vv~ol26NJsMUBqexer-BwrtpAbTS291UNZinx6oHgrjRBnTXuHgLq3N1Vz83D5OmNusGwRsv9o6iCPxz6UUKS5rbNX8MXXmRgQpvqfEPq9SkBtSEPqdJKnSHCrEYQXt-eWXsg__"
                alt="Logo"
                style={{ width: "25px", height: "25px", objectFit: "fill" }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check for AI
              </span>
            </Button>
            <Button
              type="button"
              onClick={() => showForm(true)}
              style={UploadImageIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  d="M6.375 4.49813C6.27554 4.49813 6.18016 4.53764 6.10983 4.60796C6.03951 4.67829 6 4.77367 6 4.87313V5.01563L5.445 4.46063C5.24903 4.26621 4.98417 4.15711 4.70813 4.15711C4.43208 4.15711 4.16722 4.26621 3.97125 4.46063L3.70875 4.72313L2.77875 3.79313C2.58004 3.60398 2.31621 3.49849 2.04188 3.49849C1.76754 3.49849 1.50371 3.60398 1.305 3.79313L0.75 4.34813V2.24813C0.75 2.14867 0.789509 2.05329 0.859835 1.98296C0.930161 1.91264 1.02554 1.87313 1.125 1.87313H3.75C3.84946 1.87313 3.94484 1.83362 4.01516 1.76329C4.08549 1.69297 4.125 1.59759 4.125 1.49813C4.125 1.39867 4.08549 1.30329 4.01516 1.23297C3.94484 1.16264 3.84946 1.12313 3.75 1.12313H1.125C0.826631 1.12313 0.540483 1.24166 0.329505 1.45263C0.118526 1.66361 0 1.94976 0 2.24813V6.74813C0 7.0465 0.118526 7.33265 0.329505 7.54363C0.540483 7.7546 0.826631 7.87313 1.125 7.87313H5.625C5.92337 7.87313 6.20952 7.7546 6.4205 7.54363C6.63147 7.33265 6.75 7.0465 6.75 6.74813V4.87313C6.75 4.77367 6.71049 4.67829 6.64017 4.60796C6.56984 4.53764 6.47446 4.49813 6.375 4.49813ZM1.125 7.12313C1.02554 7.12313 0.930161 7.08362 0.859835 7.0133C0.789509 6.94297 0.75 6.84759 0.75 6.74813V5.40938L1.8375 4.32188C1.89259 4.26938 1.96577 4.24009 2.04188 4.24009C2.11798 4.24009 2.19116 4.26938 2.24625 4.32188L3.435 5.51063L5.0475 7.12313H1.125ZM6 6.74813C5.9992 6.81987 5.97555 6.88949 5.9325 6.94688L4.24125 5.24813L4.50375 4.98563C4.53063 4.95819 4.56273 4.93639 4.59814 4.92151C4.63356 4.90663 4.67159 4.89896 4.71 4.89896C4.74842 4.89896 4.78644 4.90663 4.82186 4.92151C4.85728 4.93639 4.88936 4.95819 4.91625 4.98563L6 6.07688V6.74813ZM7.76625 1.23188L6.64125 0.10688C6.60559 0.0727398 6.56353 0.045978 6.5175 0.0281301C6.4262 -0.00937669 6.3238 -0.00937669 6.2325 0.0281301C6.18647 0.045978 6.14441 0.0727398 6.10875 0.10688L4.98375 1.23188C4.91314 1.30249 4.87347 1.39827 4.87347 1.49813C4.87347 1.59799 4.91314 1.69377 4.98375 1.76438C5.05436 1.83499 5.15014 1.87466 5.25 1.87466C5.34986 1.87466 5.44564 1.83499 5.51625 1.76438L6 1.27688V3.37313C6 3.47259 6.03951 3.56797 6.10983 3.63829C6.18016 3.70862 6.27554 3.74813 6.375 3.74813C6.47446 3.74813 6.56984 3.70862 6.64017 3.63829C6.71049 3.56797 6.75 3.47259 6.75 3.37313V1.27688L7.23375 1.76438C7.26861 1.79953 7.31009 1.82743 7.35578 1.84646C7.40148 1.8655 7.4505 1.8753 7.5 1.8753C7.5495 1.8753 7.59852 1.8655 7.64422 1.84646C7.68991 1.82743 7.73139 1.79953 7.76625 1.76438C7.8014 1.72952 7.8293 1.68804 7.84833 1.64235C7.86737 1.59665 7.87717 1.54763 7.87717 1.49813C7.87717 1.44863 7.86737 1.39961 7.84833 1.35391C7.8293 1.30822 7.8014 1.26674 7.76625 1.23188Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
