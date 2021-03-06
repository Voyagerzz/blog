import React from 'react'
import { Route, Switch, Link, useRouteMatch} from 'react-router-dom'
import CreateArticle from '../create-article/create-article'
import './backend-home.scss'

// function CrticleArticle () {
//     return (
//         <div>
//             我是创建文章
//         </div>
//     )
// }
function ManageArticle () {
    return (
        <div>
            我是管理文章
        </div>
    )
}

export default function Backend() {
    const { url } = useRouteMatch()
    return (
            <div className="layout">
                <div className="layout-page-wrapper">
                    <aside className="left-wrapper">
                        <h1 className="web-title">
                            BLOG 后台
                        </h1>
                        <ul className="menu-list">
                            <li className="item">
                                <Link to={`${url}/create-article`}><span>发表文章</span></Link>
                            </li>
                            <li className="item">
                                <Link to={`${url}/manage-article`}><span>管理文章</span></Link>
                            </li>
                        </ul>
                    </aside>
                    <div className="right-wrapper"> 
                    <header className="right-header">
                        发表文章
                    </header>
                    <Switch>
                        <Route path="/create-article">
                            <CreateArticle></CreateArticle>
                        </Route>
                        <Route>
                            <ManageArticle></ManageArticle>
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
    )
}