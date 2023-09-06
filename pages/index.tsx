/* eslint-disable @next/next/no-img-element */
import { JetBrains_Mono, Inter } from 'next/font/google';
import { TwitterIcon } from '@/icons/twitter';
import { GithubIcon } from '@/icons/github';
import { ZalandoIcon } from '@/icons/zalando';
import dynamic from 'next/dynamic';

const ThemeSwitchButton = dynamic(() => import('@/components/ThemeSwitch'), { ssr: false });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col w-full max-w-screen-sm p-8 mx-auto ${jetbrains.variable} ${inter.variable} font-sans`}
    >
      <header className='flex items-center'>
        <img
          className='rounded-full dark:grayscale dark:hover:filter-none'
          draggable='false'
          alt='Saiem Saeed'
          src='https://res.cloudinary.com/read-cv/image/upload/c_fill,h_92,w_92/dpr_1.0/v1/1/profilePhotos/WuSineU1QoZMajOofGs5xvO4dPw1/bc8304b0-4ebf-4c9f-a3e1-89e58d82d1c3.jpg?_a=ATO2BZS0'
          srcSet='https://res.cloudinary.com/read-cv/image/upload/c_fill,h_92,w_92/dpr_1.0/v1/1/profilePhotos/WuSineU1QoZMajOofGs5xvO4dPw1/bc8304b0-4ebf-4c9f-a3e1-89e58d82d1c3.jpg?_a=ATO2BZS0 1x, https://res.cloudinary.com/read-cv/image/upload/c_fill,h_92,w_92/dpr_2.0/v1/1/profilePhotos/WuSineU1QoZMajOofGs5xvO4dPw1/bc8304b0-4ebf-4c9f-a3e1-89e58d82d1c3.jpg?_a=ATO2BZS0 2x, https://res.cloudinary.com/read-cv/image/upload/c_fill,h_92,w_92/dpr_3.0/v1/1/profilePhotos/WuSineU1QoZMajOofGs5xvO4dPw1/bc8304b0-4ebf-4c9f-a3e1-89e58d82d1c3.jpg?_a=ATO2BZS0 3x'
        />
        <div className='flex flex-col gap-1 text-sm leading-none pl-4 grow-[1]'>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Saiem Saeed</p>
            <div aria-label='social icons' className='flex gap-2'>
              <a
                target='_blank'
                href='https://twitter.com/saiemsaeed'
                className='hidden sm:flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-foreground hover:text-background rounded-md h-7 w-7 items-center justify-center p-0'
              >
                <TwitterIcon />
              </a>
              <a
                target='_blank'
                href='https://github.com/saiemsaeed'
                className='hidden sm:flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-foreground hover:text-background rounded-md h-7 w-7 items-center justify-center p-0'
              >
                <GithubIcon />
              </a>
              <ThemeSwitchButton />
            </div>
          </div>
          <p>
            Senior Web Engineer
            <span className='pl-2'>
              <ZalandoIcon />
            </span>
          </p>
        </div>
      </header>
      <span className='h-6'></span>
      <main>
        <div className='flex flex-col'>
          <h2 className='text-lg font-mono tracking-tighter'>about</h2>
          <div className='space-y-4 py-2'>
            <p className='text-muted-foreground'>
              A full-stack engineer for your startup who loves learning a new domain and building
              customer-obsessed products. Have an idea? and looking for a technical co-founder? feel
              free to reach out at{' '}
              <a
                href='mailto:hello@saiem.pro'
                target='_blank'
                rel='noreferrer'
                className='underline underline-offset-4 text-[#ff6f00]'
              >
                hello@saiem.pro
              </a>
            </p>
            <p className='text-muted-foreground'>
              Currently working in Zalando as a Senior Software Engineer. As well as learning about
              web3 and algorithms.
            </p>
          </div>
        </div>
        <div className='flex flex-col pt-4'>
          <h2 className='text-lg font-mono tracking-tighter'>current stack</h2>
          <div className='space-y-2 py-2'>
            <p>
              <span>10x &#x23AF; </span>
              <span className='text-muted-foreground'>
                typescript, javascript, react, next, html, css
              </span>
            </p>
            <p>
              <span>5x &#x23AF; </span>
              <span className='text-muted-foreground'>nodejs, nestjs, postgres, firebase</span>
            </p>
            <p>
              <span>1x &#x23AF; </span>
              <span className='text-muted-foreground'>aws, docker, golang</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col pt-4'>
          <h2 className='text-lg font-mono tracking-tighter'>contact</h2>
          <div className='space-y-2 py-2'>
            <p className='pb-2 sm:pb-0 '>
              <span>Email &#x23AF; </span>
              <a href='mailto:hello@saiem.pro' target='_blank' className='text-muted-foreground'>
                hello@saiem.pro
              </a>
            </p>
            <p className='pb-2 sm:pb-0 '>
              <span>LinkedIn &#x23AF; </span>
              <a
                href='https://linkedin.com/saiemsaeed'
                target='_blank'
                className='text-muted-foreground'
              >
                saiemsaeed
              </a>
            </p>
            <p className='pb-2 sm:pb-0 '>
              <span>GitHub &#x23AF; </span>
              <a
                href='https://github.com/saiemsaeed'
                target='_blank'
                className='text-muted-foreground'
              >
                saiemsaeed
              </a>
            </p>
            <p className='pb-2 sm:pb-0 '>
              <span>Twitter &#x23AF; </span>
              <a href='https://x.com/saiemsaeed' target='_blank' className='text-muted-foreground'>
                saiemsaeed
              </a>
            </p>
          </div>
        </div>
        {/* <div className='flex flex-col pt-4'>
          <h2 className='text-lg font-mono tracking-tighter'>experiences</h2>
          <ul className='flex flex-col gap-4 py-2'>
            <li>
              <a href=''>
                <h6 className='font-medium underline underline-offset-4'>zalando</h6>
              </a>
              <p className='text-muted-foreground'></p>
            </li>
            <li>
              <a href=''>
                <h6 className='font-medium underline underline-offset-4'>afiniti</h6>
              </a>
              <p className='text-muted-foreground'></p>
            </li>
            <li>
              <a href=''>
                <h6 className='font-medium underline underline-offset-4'>we.R.play</h6>
              </a>
              <p className='text-muted-foreground'></p>
            </li>
            <li>
              <a href=''>
                <h6 className='font-medium underline underline-offset-4'>flowster</h6>
              </a>
              <p className='text-muted-foreground'></p>
            </li>
          </ul>
        </div> */}
      </main>
    </div>
  );
}
