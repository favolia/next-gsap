"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapText = () => {
    // const tl = gsap.timeline({
    //     repeat: -1,
    //     repeatDelay: .2,
    //     yoyo: true
    // })

    useGSAP(() => {
        // hai
        gsap.to('#h', {
            x: 150,
            y: -150,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a1', {
            x: 160,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut',
        })

        gsap.to('#i1', {
            x: 160,
            y: -75,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut',
        })
        // hai

        // nama
        gsap.to('#n', {
            x: 10,
            y: -20,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a2', {
            x: 0,
            y: 15,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#m', {
            x: -30,
            y: 0,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a3', {
            x: -5,
            y: 0,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })
        // nama

        // saya
        gsap.to('#s1', {
            x: 40,
            y: -20,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a4', {
            x: 30,
            y: 15,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#y', {
            x: 40,
            y: 0,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a5', {
            x: -5,
            y: 0,
            // rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })
        // saya

        // dais
        gsap.to('#d', {
            x: -100,
            y: 100,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#a6', {
            x: -150,
            y: 50,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#i2', {
            x: -155,
            y: -10,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })

        gsap.to('#s2', {
            x: -130,
            y: -70,
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'back.inOut'
        })
        // dais

    }, [])

    return (
        <div className='h-screen w-full flex justify-center items-center relative overflow-hidden'>
            <div className='flex gap-x-1 relative'>
                <div className='flex'>
                    <div className='' id='h'>H</div>
                    <div className='' id='a1'>a</div>
                    <div className='' id='i1'>i</div>
                </div>
                <div className='flex'>
                    <div className='' id='n'>n</div>
                    <div className='' id='a2'>a</div>
                    <div className='' id='m'>m</div>
                    <div className='' id='a3'>a</div>
                </div>
                <div className='flex'>
                    <div className='' id='s1'>s</div>
                    <div className='' id='a4'>a</div>
                    <div className='' id='y'>y</div>
                    <div className='' id='a5'>a</div>
                </div>
                <div className='flex'>
                    <div className='' id='d'>d</div>
                    <div className='' id='a6'>a</div>
                    <div className='' id='i2'>i</div>
                    <div className='' id='s2'>s</div>
                </div>
            </div>
        </div>
    )
}

export default GsapText