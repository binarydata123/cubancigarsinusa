"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "" }) {
  const pathname = usePathname();

  const isMenuActive = (menuHref) => {
    return menuHref && menuHref.split("/")[1] === pathname.split("/")[1];
  };

  return (
    <>
      <li className="menu-item">
        <Link
          href="/home-multi-brand"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive("/") ? "activeMenu" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/about-us"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive("/about-us") ? "activeMenu" : ""
          }`}
        >
          About Us
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/shop-default"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive("/shop-default") ? "activeMenu" : ""
          }`}
        >
          Shop
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/blog-list"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive("/blog") ? "activeMenu" : ""
          }`}
        >
          Blog
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/contact-1"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive("/contact-us") ? "activeMenu" : ""
          }`}
        >
          Contact Us
        </Link>
      </li>
    </>
  );
}
