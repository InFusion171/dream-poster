import sanitizeHtml from "sanitize-html";
import { IPosterData, ISettingsFrameData } from "../types/DataTypes";
import postPosterData from "../network/Network";
import { RefObject, useRef } from "react";

class SettingsFrameDataManager {
    private settingsFrameData: ISettingsFrameData = {
        widthValue: 0, 
        heightValue: 0, 
        materialOptionRef: useRef<HTMLSelectElement>(null), 
        inputTextRef: useRef<HTMLTextAreaElement>(null),
        outputTextRef: useRef<HTMLTextAreaElement>(null)
    };

    private posterData: IPosterData = {
        material: "", 
        height: 0, 
        width: 0, 
        posterDiscription: ""
    };

    constructor(settingsFrameData?: ISettingsFrameData) {
        if(typeof settingsFrameData === "undefined")
            return;
        
        this.settingsFrameData = settingsFrameData;
    }

    private settingsFrameDataToPosterData() {
        if(this.settingsFrameData.outputTextRef.current === null)
            return;

        if(this.settingsFrameData.materialOptionRef.current === null)
            return;

        this.posterData.height = this.settingsFrameData.heightValue;
        this.posterData.width = this.settingsFrameData.widthValue;
        this.posterData.material = this.settingsFrameData.materialOptionRef.current.value;
        this.posterData.posterDiscription = this.settingsFrameData.outputTextRef.current.value;
    }

    width(width?: number) {
        if (typeof width !== 'undefined')
            this.settingsFrameData.widthValue = width;

        return this.settingsFrameData.widthValue;
    }

    height(height?: number) {
        if (typeof height !== 'undefined')
            this.settingsFrameData.heightValue = height;

        return this.settingsFrameData.widthValue;
    }

    material(material?: RefObject<HTMLSelectElement>) {
        if(typeof material !== 'undefined')
            this.settingsFrameData.materialOptionRef = material;

        return this.settingsFrameData.materialOptionRef;
    }

    outputText(outputText?: RefObject<HTMLTextAreaElement>) {
        if(typeof outputText !== 'undefined')
            this.settingsFrameData.outputTextRef = outputText;

        return this.settingsFrameData.outputTextRef;
    }

    inputText(inputText?: RefObject<HTMLTextAreaElement>) {
        if(typeof inputText !== 'undefined')
            this.settingsFrameData.inputTextRef = inputText;

        return this.settingsFrameData.inputTextRef;
    }

    private isValidPosterData(): boolean {
        return this.posterData.height !== 0 || this.posterData.width !== 0 || 
            this.posterData.material !== "" || this.posterData.posterDiscription !== "";
    }

    moveInputTextToOutputText() {
        if(this.settingsFrameData.inputTextRef.current === null || this.settingsFrameData.outputTextRef.current === null)
          return;
    
       
        this.settingsFrameData.outputTextRef.current.value = sanitizeHtml(this.settingsFrameData.inputTextRef.current.value);
        this.settingsFrameData.inputTextRef.current.value = "";    
        this.settingsFrameData.inputTextRef.current.style.height = "inherit";
    }
    
    sendData(url: string) {
        this.settingsFrameDataToPosterData();

        if(!this.isValidPosterData())
        {
            alert("Invalid Data: " + this.posterData.toString());
            return;
        }

        postPosterData(url, this.posterData);
    }
}

export default SettingsFrameDataManager