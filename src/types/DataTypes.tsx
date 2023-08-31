import { RefObject } from "react";
import sanitizeHtml from 'sanitize-html';

interface IPosterData {
  material: string;
  width: number;
  height: number;
  posterDiscription: string;
  posterId?: string;
}
  
interface ICallbackSettingsFrame {
  callback: (inputX: number, inputY: number, materialOption: RefObject<HTMLSelectElement>) => void;
}
  
interface ISettingsFrameData {
  widthValue: number;
  heightValue: number;
  materialOptionRef: RefObject<HTMLSelectElement>;
  inputTextRef: RefObject<HTMLTextAreaElement>;
  outputTextRef: RefObject<HTMLTextAreaElement>;
}

export type {IPosterData, ICallbackSettingsFrame, ISettingsFrameData};