import Head from 'next/head';
import Image from 'next/image';
import { Inria_Sans } from '@next/font/google';

const inria_sans = Inria_Sans({ subsets: ['latin'], weight: ['400','700'] });

const BRANDS = [
  { id: 1, imgSrc: "/images/mi.png", title: "MI"},
  { id: 2, imgSrc: "/images/toyota.png", title: "Toyota"},
  { id: 3, imgSrc: "/images/samsung.png", title: "Samsung"},
  { id: 4, imgSrc: "/images/lux.png", title: "Lux"},
  { id: 5, imgSrc: "/images/nestle.png", title: "Nestle"},
  { id: 6, imgSrc: "/images/nokia.png", title: "Nokia"},
  { id: 7, imgSrc: "/images/apple.png", title: "Apple"},
  { id: 8, imgSrc: "/images/garnier.png", title: "Garnier"},
  { id: 9, imgSrc: "/images/bgroup.png", title: "BASHUNDHARA GROUP"},
  { id: 10, imgSrc: "/images/lifebuoy.png", title: "Lifebuoy"},
  { id: 11, imgSrc: "/images/tesla.jpeg", title: "Tesla"},
];

const TOUR_DESTINATIONS = [
  { id: 1, imgSrc: "/images/goldengatebridge.jpeg", title:"Sundarban Premium Group Tour Package - 50 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 2, imgSrc: "/images/grouptour.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 3, imgSrc: "/images/changi.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 4, imgSrc: "/images/sauditwintower.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 5, imgSrc: "/images/singapore.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 6, imgSrc: "/images/changi.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 7, imgSrc: "/images/burjkhalifa.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
  { id: 8, imgSrc: "/images/nwfp.jpeg", title:"Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay", oldPrice:"262,500", newPrice:"140,000"},
];

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Online Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inria_sans.className} px-3 sm:px-5 py-3`}>
        <section className='mt-5 md:px-14 lg:px-0'>
          <div>
            <h3 className='font-bold text-2xl'>Shop by Brands</h3>
          </div>
          <div className='mt-3 py-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-[2vw] md:gap-[1vw]'> 
              {
                BRANDS.map(brand => (<div key={brand.id} className="">
                <div className='bg-white mx-auto rounded-md shadow-sm'>
                  <div className='w-full brand-item h-[90px] sm:h-[110px] flex justify-center pt-5'>
                      <Image className='object-contain w-[75px] sm:w-[90px]' src={brand.imgSrc} alt={brand.title} width={90} height={90}  />
                    </div>
                    <p className='text-center brand-text px-2 text-sm lg:text-base h-[3.7rem] sm:h-[5.12rem] pt-2 sm:pt-5'>{brand.title}</p>
                </div>
              </div>))
              }
          </div>
        </section>
        {/* ------------ */}
        {/* Travel & Tours */}
        {/* ------------ */}
        <section className='mt-5 md:px-14 lg:px-0'>
          <div>
            <h3 className='font-bold text-2xl'>Travel & Tours</h3>
          </div>
          <div className='mt-3 py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-[3vw] md:gap-[2vw] lg:gap-[1vw]'>
              {
                TOUR_DESTINATIONS.map(destination => (<div key={destination.id} className="">
                <div className='bg-white mx-auto rounded-md shadow-sm'>
                  <div className='w-full h-[130px] grid-item flex justify-center md:pt-2 lg:pt-8 xl:pt-9'>
                      <Image className='object-contain destination-img scale-90 sm:scale-105 md:scale-105 lg:scale-110' src={destination.imgSrc} alt={destination.title} width={150} height={150}  />
                    </div>
                    <p className='pl-1 title md:mt-5 lg:mt-6 xl:mt-7 lines-2 max-w-[150px] sm:max-w-[200px] md:max-w-[175px] lg:max-w-[170px] mx-auto text-sm h-[2.5rem] overflow-hidden text-ellipsis text-gray-700 font-light'>{destination.title}</p>
                    <div className='max-w-[140px] prices mt-1 sm:max-w-[190px] md:max-w-[165px] lg:max-w-[160px] pb-3 text-lg mx-auto'>
                      <del className='text-base text-gray-400'>${destination.oldPrice}</del>
                      <p className='font-normal'>${destination.newPrice}</p>
                    </div>
                </div>
              </div>))
              }
          </div>
        </section>
      </main>
    </div>
  )
}
