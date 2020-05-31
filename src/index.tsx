import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,withRouter } from 'react-router-dom'
import * as Sentry from '@sentry/browser'

import { Error } from './sharedComponents'
import App from './App'

// Sentry.init({
//     dsn: 'https://96b0481bcf204abfaec06fb7ffc59ed8@sentry.io/1315175'
// })

class SentryWrapper extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         error: null
    //     }
    // }

    // componentDidCatch(error, errorInfo) {
    //     this.setState({ error })
    //     Sentry.withScope(scope => {
    //         Object.keys(errorInfo).forEach(key => {
    //             scope.setExtra(key, errorInfo[key])
    //         })
    //         Sentry.captureException(error)
    //     })
    // }

    render() {
        return this.props.children
        // if (this.state.error) {
        //     return <Error />
        // } else {
        //     return this.props.children
        // }
    }
}

ReactDOM.render(
    <SentryWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SentryWrapper>,
    document.getElementById('root')
)
