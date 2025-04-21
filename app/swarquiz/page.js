import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
      <main>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         grid-rows-50 grid-rows-50 place-items-center">
         <div>
          <Link href='quranquiz'>
            <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
              <Image className="w-64 h-52"
                src= '/fatiha.webp'
                alt="animals image"
                priority={true}
                width={768}
                height={300}
              /> 
            </div>
          </Link>
          </div>
          <div>
        <Link href='bodyquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/body.jpeg'
              alt="body image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
    </div>
    
    
      
         
    </main>
  )
}