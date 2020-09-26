import React from 'react'
import ReactMde from "react-mde"
import Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css"
const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
})
type Props = {
    contents: string,
    title: string,
    onChangeContents: (val: string) => void,
    onSetHtml: (val: string) => void,
    onSetTitle: (val: string) => void
}
export default function MarkdownEditor(props: Props) {
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write")
    const minEditorHeight = 600
    function handleChange(v: string) {
        console.log(v)
        props.onChangeContents(v)
        props.onSetHtml(converter.makeHtml(v))
    }
    return(
        <div>
            <div className="article-title">
                <input type="text" value={props.title} onChange={event =>props.onSetTitle(event.target.value)}/>
            </div>
            <ReactMde
                minEditorHeight={minEditorHeight}
                value={props.contents}
                onChange={handleChange}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown => 
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </div>
    )
}