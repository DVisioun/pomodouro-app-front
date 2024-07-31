import React, { useState } from 'react'
import {
  View,
  Page,
  LoginScreen,
  LoginScreenTitle,
  f7,
  f7ready,
  Link,
} from 'framework7-react'

function Login() {
  // Login screen demo data
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7)
    }

    // Call F7 APIs here
  })

  return (
    <LoginScreen id="my-login-screen">
      <View>
        <Page className="h-screen">
          <div className="!bg-gradient h-screen px-10 space-y-10 flex justify-center items-center flex-col">
            <LoginScreenTitle className="font-bungee text-primary">
              Login
            </LoginScreenTitle>
            <div className="flex flex-col gap-4 w-full !font-sora !text-primary font-semibold">
              <input
                type="text"
                placeholder="username"
                className="!p-4 !bg-secondary !shadow-custom !rounded-lg"
              />
              <input
                type="password"
                placeholder="password"
                className="!p-4 !bg-secondary !shadow-custom !rounded-lg"
              />
            </div>
            <Link href="/home" className="text-primary underline font-semibold">
              Sign In
            </Link>
          </div>
        </Page>
      </View>
    </LoginScreen>
  )
}

export default Login
