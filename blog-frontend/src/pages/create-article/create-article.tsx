import React, { useState } from 'react'
import MarkdownView from '../../component/markdown-view'
import MarkdownEditor from '../../component/markdown-editor'
import { publishArticle } from '../../api/module/system'
import './create-article.scss'
function postArticle (htmlTemplate: string, title: string) {
    publishArticle({
        content: htmlTemplate,
        title: title,
        date_posted: Date.now(),
        description: 'first a article'
    }).then((data: any) => {
        console.log(data)
    })
}
export default function CreateArticle() {
    const [contents, onChangeContents] = useState('')
    const [htmlTemplate, onSetHtml] = useState('')
    const [title, onSetTitle] = useState('')
    return (
        <div className="create-article">
            <div className="editor-preview">
                <div className="editor-container">
                    <MarkdownEditor 
                        title={title}
                        contents={contents}
                        onSetTitle={onSetTitle}
                        onChangeContents={onChangeContents}
                        onSetHtml={onSetHtml}
                    />
                </div>
                <div className="markdown-view">
                    <MarkdownView htmlTemplate={htmlTemplate}></MarkdownView>
                </div>
            </div>
           
            <div className="sub-article" role="button" onClick={() => postArticle(contents, title)}>
                发表
            </div>    
        </div>  
    )
}