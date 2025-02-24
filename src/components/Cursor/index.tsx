"use client";
import { useEffect } from "react";
import { initCursor } from "@/util/util";
import './cursor.scss';
export default function Cursor() {
  useEffect(() => {
    initCursor(); 
  }, []);

  return (
    <div className="cursor">
      <div className="cursor_main">
        <div className="cursor_inner"></div>
      </div>
    </div>
  ) 
}