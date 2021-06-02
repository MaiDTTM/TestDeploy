import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '',
    };

    componentClicked = () => {
        console.log('click');
    };

    responseGoogle = (response) => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userId: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            picture: response.profileObj.imageUrl,
        });
    };

    render() {
        let googleContent;

        if (this.state.isLoggedIn) {
            googleContent = (
                <div
                    style={{
                        width: '100%',
                        background: '#cecece',
                        padding: 20,
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2 style={{ margin: '10px 20px' }}>Welcome {this.state.name}</h2>
                    <h4 style={{ margin: '10px 20px' }}>email: {this.state.email}</h4>
                    <h4 style={{ margin: '10px 20px' }}>userID: {this.state.userId}</h4>
                </div>
            );
        } else {
            googleContent = <GoogleLogin clientId='326538060414-5vqrgaosddu857h2siom011r796tfl4j.apps.googleusercontent.com' buttonText='Login' onSuccess={this.responseGoogle} onFailure={this.responseGoogle} cookiePolicy={'single_host_origin'} />;
        }

        return <div>{googleContent}</div>;
    }
}

export default Google;
