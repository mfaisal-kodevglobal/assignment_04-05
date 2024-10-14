import Image from "next/image";
import Header from "./cmoponents/header/page";
import Footer from "./cmoponents/footer/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Header />
    <div style={{'background':'#f39ff3', 'marginTop':'65px'}} className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
    <img
              aria-hidden
              src="https://img.freepik.com/premium-vector/business-facebook-cover-design-template_412264-5922.jpg"
              alt="File icon"
              width={1550}
              height={500}
            />
      <div style={{'display':'flex'}}>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog1">Readmore..</Link></p>
        </div>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog2">Readmore..</Link></p>
        </div>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog3">Readmore..</Link></p>
        </div>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog4">Readmore..</Link></p>
        </div>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog5">Readmore..</Link></p>
        </div>
        <div style={{'width':'15%','padding':'10px', 'border':'1px solid gray'}}>
        <img
              aria-hidden
              src="https://i.pinimg.com/564x/1b/48/f8/1b48f8dd121c97ac9690921b441317a8.jpg"
              alt="File icon"
              width={100}
              height={100}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <p><Link href="/blog6">Readmore..</Link></p>
        </div>
        
       
      </div>
      <Footer />
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
    </>
    
  );
}
