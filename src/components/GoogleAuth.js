import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '706086607067-877t3641oh7ogag76lmn86a8sre60suc.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return(
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth;