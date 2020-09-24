import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import {} from 'react-markdown/'
type Props = {
    htmlTemplate: string
}

export default function MarkdownView (props: Props) {
    return (
        <ReactMarkdown source={props.htmlTemplate} escapeHtml={false}></ReactMarkdown>
    )
}