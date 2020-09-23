import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './layout.scss'

function CrticleArticle () {
    return (
        <div>
            我是创建文章
        </div>
    )
}
function ManageArticle () {
    return (
        <div>
            我是管理文章
        </div>
    )
}
export default function Home() {
    return (
        <Router>
            <div className="layout">
                <div className="layout-page-wrapper">
                    <aside className="left-wrapper">
                        <ul className="menu-list">
                            <li className="item">
                                <Link to="/create-article"><span>发表文章</span></Link>
                            </li>
                            <li>
                                <Link to="/manage-article"><span>管理文章</span></Link>
                            </li>
                        </ul>
                    </aside>
                    <div className="right-wrapper"> 
                    <Switch>
                        <Route path="/create-article">
                            <CrticleArticle></CrticleArticle>
                        </Route>
                        <Route>
                            <ManageArticle></ManageArticle>
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}