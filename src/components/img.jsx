import React from "react";
import { FacebookIcon, TelegramIcon } from "../assets";

export default function ContactImgs() {
  return (
    <>
      <a href="https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL">
        <img src={FacebookIcon} alt="Facebook" width={50} height={50} />
        <p>Thant Lynn Naing</p>
      </a>
      <a href="https://t.me/Th22001">
        <img src={TelegramIcon} alt="Telegram" width={50} height={50} />
        <p>@Th22001</p>
      </a>
    </>
  );
}
