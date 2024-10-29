import Header from './Header'
import FeatureSection from './components/FeatureSection'
import Hr from './components/Hr'

import ContactForm from './components/ContactForm';
import GithubLink from './components/GithubLink';
import UpworkLink from './components/UpworkLink';
import LinkedInLink from './components/LinkedInLink';
import { Fragment } from 'react';


import hero_image from './assets/hero.png';
import izichange_1_image from './assets/izichange.png';
import izichange_2_image from './assets/izichange2.png';
import izipay_image from './assets/izipay.png';
import kyasms_image from './assets/kyasms.png';
import HomeSection from './components/HomeSection';
import ViewPort from './components/ViewPort';

function App() {
  return <Fragment>
    <Header />
    <main className='max-w-screen-xl mx-auto'>
      <HomeSection className="" id="hero" >
        <div className='lg:flex  gap-20 items-center'>
          <div className='w-full'>
            <h1 className='text-8xl font-bebas tracking-wide'>
              HI, I AM <br />
              ABAKOU NAZAIRE
            </h1>
            <div className='max-w-md text-xl dark:opacity-60 mt-6 font-mono'>
              Fullstack, Web3 developer passionate about building awesome apps.
            </div>

            <div className='mt-12 flex gap-4 lg:gap-6 items-center mb-16 lg:mb-0'>
              <a href="https://wa.me/22997206401" target='_blank' className='font-mono dark:bg-yellow-600  bg-yellow-500  px-5 py-2.5 rounded-full hover:px-8 transition-all'>
                <span className='flex items-center gap-5 text-nowrap'>
                  <span>Hire me </span> <span className='rounded-full w-[0.8rem] h-[0.4rem] bg-black/50'></span>
                </span>
              </a>
              <GithubLink />
              <LinkedInLink />
              <UpworkLink />
            </div>
          </div>
          <div className='w-full '>
            <img src={hero_image} className='w-full rounded-lg max-w-[32rem]' />
          </div>
        </div>
      </HomeSection>

      <Hr />
      <HomeSection id='works'>

        <h1 className='text-6xl font-bebas tracking-wide'>
          FEATURED PROJECTS
        </h1>

        <h4 className='font-manrope dark:opacity-50'>
          Here are some of the recents projects i've worked on.
        </h4>

        <div className='mt-24 flex flex-col gap-32'>
          <FeatureSection
            badge="Decentralized finance"
            image={izipay_image}
            title={"Cryptocurrency payment platform"}
            description={"pay.izichange.com is the payment gateway solution. It providing a streamlined and efficient method for businesses and individuals to accept cryptocurrency payments. It focuses on enabling smooth transactions through a secure, intuitive, and fast system that caters to merchants looking to integrate crypto payments into their platforms."}
            year={"2023-2024"}
            role={"FullStack & Tech Lead"}
            link={"https://pay.izichange.com"}
          />

          <FeatureSection
            badge="Marketing"
            image={kyasms_image}
            title={"Marketing SMS Provider"}
            description={"kyasms is a platform designed to offer bulk SMS services, enabling businesses and individuals to send messages to large groups efficiently. It focuses on providing fast, reliable, and affordable SMS delivery solutions, which can be used for marketing campaigns, notifications, alerts, and customer engagement."}
            year={"2021-Now"}
            role={"FullStack developer & Cofounder"}
            link={"https://kyasms.net"}
          />

          <FeatureSection
            badge="Decentralized finance"
            image={izichange_1_image}
            verso={izichange_2_image}
            title={"Cryptocurrency exchange platform"}
            description={"izichange.com is a cryptocurrency exhcnage platform that simplifies the process of buy and sell crypto, managing, and processing cryptocurrency transactions for businesses and individuals. The platform provides a secure, efficient, and user-friendly solution for Web3 actors"}
            year={"2022-2024"}
            role={"FullStack developer"}
            link={"https://izichange.com"}
          />



        </div>
      </HomeSection>

      <Hr />

      <HomeSection id='about_me'>
        <div className='flex gap-16 flex-col lg:flex-row'>

          <div className='w-full'>
            <h1 className='text-6xl font-bebas tracking-wide'>
              ABOUT ME
            </h1>

            <h4 className='opacity-50 mt-5'>I do not have much to say</h4>
          </div>

          <div className='w-full'>
            <h1 className='text-4xl italic tracking-wide'>
              Love make things easy
            </h1>
          </div>
        </div>

      </HomeSection>

      <Hr />


      <HomeSection id='contact'>
        <div className='flex gap-16 flex-col lg:flex-row'>

          <div className='w-full'>
            <h1 className='text-6xl font-bebas tracking-wide'>
              LETS CONNECT
            </h1>

            <h5 className='text-lg my-4 leading-loose'>
              Say hello at <a href="mailto:abakou.nz@gmail.com" className='font-bold text-yellow-700'>abakou.nz@gmail.com</a> <br />
              For more info, here’s my <a href="figma" className='font-bold text-yellow-700'>resume</a> <br />
            </h5>

            <div className='flex gap-16 mt-12'>
              <GithubLink />
              <LinkedInLink />
              <UpworkLink />
            </div>
          </div>

          <div className='w-full'>
            <ContactForm />

          </div>

        </div>

      </HomeSection>
    </main>

    <footer className='py-24 text-center text-xs '>
      <span className='opacity-40'>&copy; 2024 Abakou</span>
    </footer>

    <ViewPort/>
  </Fragment>
}

export default App
