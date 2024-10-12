import Header from "@/app/cmoponents/header/page";
import React from "react";
import Footer from "@/app/cmoponents/footer/page";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col">
        <Header />
        <div className=" mt-10 mx-auto px-4 py-4 mb-28 max-w-6xl w-full"> 
          <p>Contact us page.</p>
        </div>
        <footer><Footer /></footer>
      </main>
    );
    
}