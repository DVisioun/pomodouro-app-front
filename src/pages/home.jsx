import React, { useState } from 'react'
import {
  Link,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Page,
  Tab,
  Tabs,
  Toolbar,
  Icon,
} from 'framework7-react'
import '../css/app.css'

function HomePage() {
  return (
    <Page className='h-screen !bg-gradient'>
      <div className='bg-tertiary w-full flex p-3 items-center fixed top-0 justify-between'>
        <NavLeft>
          <img src='/images/logo.svg' className='w-10 mr-3' />
        </NavLeft>
        <NavTitle className='text-white font-bold font-bungee text-xl'>Pomod'ouro</NavTitle>
        <NavRight>
          <Link panelOpen="right">
            <Icon f7="menu" size="30px" className='text-white'></Icon>
          </Link>
        </NavRight>
      </div>
      <Toolbar tabbar icons position='bottom' className='!bg-tertiary'>
        <Link
          tabLink="#tab-1"
          iconMd="material:hourglass_top"
          className='!text-white focus:underline'
        />
        <Link
          tabLink="#tab-2"
          iconIos="f7:calendar_fill"
          iconMd="material:queue_music"
          className='!text-white focus:underline'
        />
        <Link
          tabLink="#tab-3"
          iconMd="material:checklist"
          className='!text-white focus:underline'
        />
        <Link
          tabLink="#tab-4"
          iconMd="material:menu_book"
          className='!text-white focus:underline'
        />
        <Link
          tabLink="#tab-5"
          iconMd="material:pie_chart"
          className='!text-white focus:underline'
        />
      </Toolbar>

      <Tabs>
        <Tab id="tab-1" className="w-full h-full" tabActive>
          Teste
        </Tab>
        <Tab id="tab-2" className="page-content">

        </Tab>
        <Tab id="tab-3" className="page-content">

        </Tab>
        <Tab id="tab-4" className="page-content">

        </Tab>
        <Tab id="tab-5" className="page-content">

        </Tab>
      </Tabs>
    </Page >
  )
}
export default HomePage
