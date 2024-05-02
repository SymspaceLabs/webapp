"use client"

// export const metadata = {
//   title: 'Sign Up',
//   description: 'Page description',
// }



import React, { useState } from 'react';
import Link from 'next/link'
import AuthLogo from '../auth-logo'
import { supabase } from '../../../supabase';

export default function SignUp() {
  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    height:'',
    weight:'',
    preferredSizeTops:'',
    preferredSizeBottoms:'',
    preferredSizeShoes:'',
    streetAddress:'',
    city:'',
    postcode:'',
    country:''
  })


  function handleChange(event:any) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  }
  

  async function handleSubmit(e:any){
    e.preventDefault()
    console.log(formData)

    if(formData.email && formData.password && formData.confirmPassword){
      try {
        const { data, error } = await supabase.auth.signUp(
          {
            email: formData.email,
            password: formData.password,
            // options: {
            //   data: {
              //   firstName: formData.firstName,
              //   lastName: formData.firstName,
              //   height: formData.height,
              //   weight: formData.weight,
              //   preferredSizeTops: formData.preferredSizeTops,
              //   preferredSizeBottoms: formData.preferredSizeBottoms,
              //   preferredSizeShoes: formData.preferredSizeShoes,
              // }
            // }
          }
        )
        if (error) throw error
        alert('Check your email for verification link')
        if(data){
          await supabase
            .from('user')
            .insert({ 
                firstName: formData.firstName,
                lastName: formData.firstName,
                height: formData.height,
                weight: formData.weight,
                preferredSizeTops: formData.preferredSizeTops,
                preferredSizeBottoms: formData.preferredSizeBottoms,
                preferredSizeShoes: formData.preferredSizeShoes,
                streetAddress:formData.streetAddress,
                city:formData.city,
                postcode:formData.postcode,
                country:formData.country,
            })
        }
        
      } catch (error) {
        alert(error)
      }
    }


  }
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Create your free account</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">

        <form>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="company">First name<span className="text-rose-500">*</span></label>
                  <input
                    id="firstName"
                    onChange={handleChange}
                    className="form-input w-full"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="full-name">Last name <span className="text-rose-500">*</span></label>
                  <input 
                    id="lastName"
                    onChange={handleChange}
                    className="form-input w-full"
                    type="text"
                    placeholder="Doe"
                    required
                  />
                </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="email">Email<span className="text-rose-500">*</span></label>
              <input
                id="email"
                onChange={handleChange}
                className="form-input w-full"
                type="email"
                placeholder="markrossi@company.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password">Password <span className="text-rose-500">*</span></label>
                <input
                  id="password"
                  onChange={handleChange}
                  className="form-input w-full"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password">Confirm password <span className="text-rose-500">*</span></label>
                <input
                  id="confirmPassword"
                  onChange={handleChange}
                  className="form-input w-full"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="company">Height<span className="text-rose-500">*</span></label>
                  <input
                    id="height"
                    onChange={handleChange}
                    className="form-input w-full"
                    type="text"
                    placeholder="170cm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="full-name">Weight<span className="text-rose-500">*</span></label>
                  <input 
                    id="weight"
                    onChange={handleChange}
                    className="form-input w-full"
                    type="text"
                    placeholder="60kg"
                    required
                  />
                </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="referrer">Preferred Size Tops<span className="text-rose-500">*</span></label>
              <select
                id="preferredSizeTops"
                onChange={handleChange}
                className="form-select text-sm py-2 w-full"
                required
              >
                <option>10 cm</option>
                <option>20 cm</option>
                <option>30 cm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="referrer">Preferred Size Bottoms<span className="text-rose-500">*</span></label>
              <select
                id="preferredSizeBottoms"
                onChange={handleChange}
                className="form-select text-sm py-2 w-full"
                required
              >
                <option>10 cm</option>
                <option>20 cm</option>
                <option>30 cm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="referrer">Preferred Size Shoes<span className="text-rose-500">*</span></label>
              <select
                id="preferredSizeShoes"
                onChange={handleChange}
                className="form-select text-sm py-2 w-full"
                required
              >
                <option>10 cm</option>
                <option>20 cm</option>
                <option>30 cm</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="company">Street address<span className="text-rose-500">*</span></label>
                  <input id="streetAddress" className="form-input w-full" type="text" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="full-name">City<span className="text-rose-500">*</span></label>
                  <input id="city" className="form-input w-full" type="text" placeholder="Doe" required />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="company">Postcode<span className="text-rose-500">*</span></label>
                  <input id="postcode" className="form-input w-full" type="text" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="full-name">Country<span className="text-rose-500">*</span></label>
                  <input id="country" className="form-input w-full" type="text" placeholder="Doe" required />
                </div>
            </div>
          </div>
          <div className="mt-6">
            <button onClick={handleSubmit} className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
              Sign Up <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <div className="text-sm text-slate-400">
            Already have an account? <Link className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="/signin">Sign in</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-slate-800 grow mr-3" aria-hidden="true" />
          <div className="text-sm text-slate-500 italic">or</div>
          <div className="border-t border-slate-800 grow ml-3" aria-hidden="true" />
        </div>

        {/* Social login */}
        <div className="flex space-x-3">
          <button className="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
            <span className="relative">
              <span className="sr-only">Continue with Twitter</span>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z" />
              </svg>
            </span>
          </button>
          <button className="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
            <span className="relative">
              <span className="sr-only">Continue with GitHub</span>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </>
  )
}
