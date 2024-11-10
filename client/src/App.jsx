import React, { useEffect } from 'react'

import {useForm} from 'react-hook-form'

const App = () => {

  const {watch, register, handleSubmit, formState: { errors } } = useForm()
  
  const demo = (data) => {
    console.log(data)
  }


  return (
    <div className="w-full  bg-black">
      <div className="container min-h-screen mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit(demo)}
          className="w-full max-w-lg py-8 px-12 rounded-xl shadow-lg shadow-red-500 transition duration-300 flex flex-col gap-8"
        >
          <h2 className="text-white text-center text-4xl tracking-wide font-extralight">
            Register Form
          </h2>
          <input
            id="name"
            {...register('name', {
              required: true,
              minLength: 2,
              maxLength: 16,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter name.."
          />

          {errors.name && errors.name.type === 'required' && (
            <span className="text-white">Ad hissəsini doldurun</span>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <span className="text-white">Minimum 2 simvol daxil edin</span>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <span className="text-white">Maksimum 16 simvol daxil edin</span>
          )}
          {errors.name && errors.name.type === 'pattern' && (
            <span className="text-white">Yalnız herflerden istifade edin</span>
          )}

          <select
            id="gender"
            {...register('gender', {
              required: true,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
          >
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && errors.gender.type === 'required' && (
            <span className="text-white">Gender qeyd edin</span>
          )}

          <input
            id="email"
            {...register('email', {
              required: true,
              minLength: 5,
              maxLength: 30,
              pattern: /\S+@\S+\.\S+/,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter email.."
          />

          {errors.email && errors.email.type === 'required' && (
            <span className="text-white">Email hissəsini doldurun</span>
          )}
          {errors.email && errors.email.type === 'minLength' && (
            <span className="text-white">Minimum 5 simvol daxil edin</span>
          )}
          {errors.email && errors.email.type === 'maxLength' && (
            <span className="text-white">Maksimum 30 simvol daxil edin</span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span className="text-white">Email sintaksisine uygun yazin</span>
          )}

          <input
            id="age"
            {...register('age', {
              required: true,
              min: 18,
              max: 100,
              pattern: /^[0-9]+$/i,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter age.."
          />

          {errors.age && errors.age.type === 'required' && (
            <span className="text-white">Yaş hissəsini doldurun</span>
          )}
          {errors.age && errors.age.type === 'min' && (
            <span className="text-white">Minimum yaş 18</span>
          )}
          {errors.age && errors.age.type === 'max' && (
            <span className="text-white">Maksimum yaş 100</span>
          )}
          {errors.age && errors.age.type === 'pattern' && (
            <span className="text-white">Ancaq rəqəmlərdən istifadə edin</span>
          )}

          <input
            id="password"
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="password"
            placeholder="Enter password.."
          />

          {errors.password && errors.password.type === 'required' && (
            <span className="text-white">Yaş hissəsini doldurun</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="text-white">Minimum 8 simvol olar</span>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <span className="text-white">Maksimum 20 simvol olar</span>
          )}

          <input
            id="resetPassword"
            {...register('resetPassword', {
              required: true,
              validate: (value) => value === watch('password'),
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="password"
            placeholder="Enter password.."
          />

          {errors.resetPassword && errors.resetPassword.type === 'required' && (
            <span className="text-white">Tekrar parolu yazin</span>
          )}
          {errors.resetPassword && errors.resetPassword.type === 'validate' && (
            <span className="text-white">Tekrar parol duzgun deyil</span>
          )}

          <button
            className="text-white bg-red-500 py-2 text-2xl uppercase font-bold tracking-wider transition-all duration-300 hover:rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App