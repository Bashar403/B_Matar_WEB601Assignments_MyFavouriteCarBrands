import { Content } from './content-interface';

export class ContentList {
    private contentList : Content[] = [];

    constructor() {
        this.contentList = [];
    }

    getContentList() {
        return this.contentList;
    }

    addContent(content : Content) {
        this.contentList.push(content);
    }

    getLength() {
        return this.contentList.length;
    }

    getHTML(index : number) {
        let content = this.contentList[index];
        let html = `<h3>${content.title}</h3>
                    <p>${content.description}</p>
                    <p>Created by: ${content.creator}</p>
                    <img src="${content.imgURL}" alt="${content.title}">
                    <p>Type: ${content.type}</p>`;
        return html;
    }


   
    
}