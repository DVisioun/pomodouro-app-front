import { Button, Link, Page } from 'framework7-react'
import React from 'react'
import Login from '../components/Molecule/Login/Login'

function Start() {
  return (
    <Page className="no-swipeback">
      <div className="w-full h-full flex flex-col justify-center items-center p-5 gap-12 bg-gradient">
        <img src="/images/logo.svg" className="w-36" />
        <div className="text-center space-y-5">
          <h1 className="text-primary text-4xl font-bold font-bungee">
            Pomod’ouro
          </h1>
          <p className="text-primary font-sora text-xs font-semibold">
            Organize da melhor forma o seu tempo, faça anotações e escute a sua
            playlist
          </p>
        </div>
        <Link
          className="bg-primary shadow-button w-32 py-2 rounded-full font-bungee text-white"
          href="/home"
        >
          Entrar
        </Link>
      </div>
    </Page>
  )
}

export default Start
