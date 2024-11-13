/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "../index.css";
import { containerStyle, headingStyle, logoImageStyle } from "../styles/styles";
import { Default } from "./reusable/Default";

export const Initial = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      {showButton ? (
        <Default />
      ) : (
        <div style={containerStyle} onClick={() => setShowButton(true)}>
          {" "}
          <img
            src="https://s3-alpha-sig.figma.com/img/c0ec/8b30/4b9543caf8856f637be3c117a9bf0291?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dh6TSG22M3HnNW~zUCDSghVbt8T6qsPUuhCAK1FHC3tHMg4mZ8ilxj3UuZIoscmPa4SzhuW-ZSzlO9LB6VHhXNiUe5BIBafNxWyvmU1mgnnSmNml2ScGgkRSJPaLPB0dve-TN6PN6luV466ZRVq0oov28p-mCLEksaFcpWVGtqpfT5q~8lT3oGknKxsgGgvtwsNwbwpKJ32urkWJ5Vv~ol26NJsMUBqexer-BwrtpAbTS291UNZinx6oHgrjRBnTXuHgLq3N1Vz83D5OmNusGwRsv9o6iCPxz6UUKS5rbNX8MXXmRgQpvqfEPq9SkBtSEPqdJKnSHCrEYQXt-eWXsg__"
            alt="logo"
            className="logo-image"
            style={logoImageStyle}
          />
          <h6 style={headingStyle}>Neural Sherpas</h6>
        </div>
      )}
    </>
  );
};
