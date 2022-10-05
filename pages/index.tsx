import type { NextPage } from 'next'
import Head from 'next/head'
import BuildPopUps from '../components/BuildPopUps'
import ContentModal from '../components/contentModal'
import Conversions from '../components/Conversions'
import Faq from '../components/Faq'
import FirstCnent from '../components/firstCnent'
import Modals from '../components/modals'
import ModalView from '../components/modalView'
import SecondComponent from '../components/SecondComponent'
import SettingsVsCode from '../components/SettingsVsCode'
import TargetingRules from '../components/TargetingRules'
import { DataProvider } from '../poviders/dataProvider'
const Home: NextPage = () => {
  return (
    <DataProvider>
      <div className='w-full h-full'>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <FirstCnent />
        <SecondComponent />
        <Modals />
        <ModalView />
        <ContentModal />
        <TargetingRules />
      </div>
      <SettingsVsCode />
      <Conversions/>
      <Faq/>
      <BuildPopUps/>
    </DataProvider>

  )
}

export default Home
