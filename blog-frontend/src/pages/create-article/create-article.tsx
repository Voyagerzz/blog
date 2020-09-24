import React, { useState } from 'react'
import MarkdownView from '../../component/markdown-view'
import MarkdownEditor from '../../component/markdown-editor'
import './create-article.scss'

export default function CreateArticle() {
    const [contents, onChangeContents] = useState('')
    const [htmlTemplate, onSetHtml] = useState('')
    return (
        <div className="create-article">
            <div className="editor-preview">
                <div className="editor-container">
                    <MarkdownEditor contents={contents} onChangeContents={onChangeContents} onSetHtml={onSetHtml}></MarkdownEditor>
                </div>
                <div className="markdown-view">
                    <MarkdownView htmlTemplate={htmlTemplate}></MarkdownView>
                </div>
            </div>
           
            <div className="sub-article" role="button">
                发表
            </div>    
        </div>  
    )
}