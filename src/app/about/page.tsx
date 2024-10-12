import Header from "@/app/cmoponents/header/page";
import React from "react";
import Footer from "@/app/cmoponents/footer/page";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className=" mt-4 mx-auto px-12 py-4 mb-10">
       
      <p>About Page.</p>
        
      </div>
      <footer><Footer /></footer>
    </main>
  );
}
