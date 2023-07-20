import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
     
        {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
      
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
