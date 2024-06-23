"use client"
import React from "react";
import { useForm } from 'react-hook-form';
import { LinkedInIcon, TikTokIcon, Instagram } from "../icons";
import Link from "next/link";


const Footer = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

return (
    <footer className='mt-16 bg-Grey flex flex-col items-center text-light'>
        <h3 className='mt-5 mb-5 font-medium text-center capitalize text-2xl px-4'>
        <a href="/About">About</a> | <a href="/">Home</a>
        </h3>
        <p className='mt-5 mb-5 font-medium text-center capitalize px-4'>
    Subscribe to stay up to date on articles and new information!
        </p>

    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-5 font-medium text-center capitalize px-4' >
      <input className='border-black border-2 p-1 m-2' type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input className='border-black border-2 p-1 m-2' type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input className='border-black border-2 p-1 m-2' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

      <input className='text-Grey border-black border-2 p-1 m-2 bg-Brown' type="submit" />
    </form>
    <div className='flex items-center mt-7 mb-3'>
        <a href="https://www.linkedin.com/in/duqerin/" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/erin_walen?igsh=d2JhcGx6bTcxaDB5" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><Instagram/></a>
        <a href="https://www.tiktok.com/@erinaudreyrn?_t=8licRfZ19kF&_r=1" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><TikTokIcon/></a>

    </div>
    <div className='w-full mt-15 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
        <span>&copy;2024 EW Healh & Wellness</span>
        <Link href="/sitemap.xml">sitemap.xml</Link>

    </div>
    </footer>
)

};

export default Footer;
