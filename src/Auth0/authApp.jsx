import { useState } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import LoginButton from './login'
import LogoutButton from './logout'
import Profile from './profile'

function AuthApp() {

    return (
        <>
            <Auth0Provider
                domain="dev-wa00qehjpvdyoa0i.us.auth0.com"
                clientId="1BrTeNepcPvjBQyUXhQg9ZzYVUWwUBCz"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <LoginButton />
                <LogoutButton />
                <Profile />
                <h1>Thi si auth 0</h1>
            </Auth0Provider>
        </>
    )
}

export default AuthApp;
