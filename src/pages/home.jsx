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
import Tab1 from '../components/Organism/Tab1/Tab1'
import Tab3 from '../components/Organism/Tab3/Tab3'
import Tab4 from '../components/Organism/Tab4/Tab4'

function HomePage() {
  const [activeTab, setActiveTab] = useState('tab-1')

  return (
    <Page className="h-screen !bg-gradient pt-14">
      <div className="bg-tertiary w-full flex p-3 items-center fixed top-0 justify-between z-50">
        <NavLeft>
          <img src="/images/logo.svg" className="w-10 mr-3" />
        </NavLeft>
        <NavTitle className="text-white font-bold font-bungee text-xl">
          Pomod'ouro
        </NavTitle>
        <NavRight>
          <Link panelOpen="right">
            <Icon f7="menu" size="30px" className="text-white" />
          </Link>
        </NavRight>
      </div>
      <Toolbar tabbar icons position="bottom" className="!bg-tertiary">
        <Link
          tabLink="#tab-1"
          iconMd="material:hourglass_top"
          className={`!text-white ${activeTab === 'tab-1' ? 'underline' : ''}`}
          tabLinkActive={activeTab === 'tab-1'}
          onClick={() => setActiveTab('tab-1')}
        />
        <Link
          tabLink="#tab-2"
          iconIos="f7:calendar_fill"
          iconMd="material:queue_music"
          className={`!text-white ${activeTab === 'tab-2' ? 'underline' : ''}`}
          tabLinkActive={activeTab === 'tab-2'}
          onClick={() => setActiveTab('tab-2')}
        />
        <Link
          tabLink="#tab-3"
          iconMd="material:checklist"
          className={`!text-white ${activeTab === 'tab-3' ? 'underline' : ''}`}
          tabLinkActive={activeTab === 'tab-3'}
          onClick={() => setActiveTab('tab-3')}
        />
        <Link
          tabLink="#tab-4"
          iconMd="material:menu_book"
          className={`!text-white ${activeTab === 'tab-4' ? 'underline' : ''}`}
          tabLinkActive={activeTab === 'tab-4'}
          onClick={() => setActiveTab('tab-4')}
        />
        <Link
          tabLink="#tab-5"
          iconMd="material:pie_chart"
          className={`!text-white ${activeTab === 'tab-5' ? 'underline' : ''}`}
          tabLinkActive={activeTab === 'tab-5'}
          onClick={() => setActiveTab('tab-5')}
        />
      </Toolbar>

      <Tabs className="px-3 py-2">
        <Tab
          id="tab-1"
          className="w-full h-full"
          tabActive={activeTab === 'tab-1'}
        >
          <Tab1 />
        </Tab>
        <Tab
          id="tab-2"
          className="page-content"
          tabActive={activeTab === 'tab-2'}
        >
          {/* Conteúdo da aba 2 */}
        </Tab>
        <Tab
          id="tab-3"
          className="page-content"
          tabActive={activeTab === 'tab-3'}
        >
          <Tab3 />
        </Tab>
        <Tab
          id="tab-4"
          className="page-content"
          tabActive={activeTab === 'tab-4'}
        >
          <Tab4 />
        </Tab>
        <Tab
          id="tab-5"
          className="page-content"
          tabActive={activeTab === 'tab-5'}
        >
          {/* Conteúdo da aba 5 */}
        </Tab>
      </Tabs>
    </Page>
  )
}

export default HomePage
