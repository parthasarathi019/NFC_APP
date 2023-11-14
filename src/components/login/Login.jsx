import React from "react";
import img from '../../assets/Logo.png'

const Login = () => {
  return (
    <section className="max-w-md md:max-w-xl mx-auto h-fit my-20">
      {/* <h1 className="text-center text-2xl font-semibold">Welcome to the webstie</h1> */}
      <div className="shadow-2xl py-10 flex flex-col items-center rounded-3xl mx-3">
        <img src={img} alt="logo img" className="w-24 h-16" />
        <p className="text-xl font-semibold text-gray-700 mb-5">User Login</p>
        <form className="flex flex-col gap-3">
          <div className="bg-gray-100 w-fit rounded-2xl flex px-3 py-2 items-center gap-2">
            <MaterialSymbolsPerson />
            <input type="text" placeholder="User Name" 
            className="outline-none bg-transparent min-w-[250px]"/>
          </div>
          <div className="bg-gray-100 w-fit rounded-2xl flex px-3 py-2 items-center gap-2">
            <MaterialSymbolsLockOpenRounded />
            <input type="text" placeholder="Password" 
            className="outline-none bg-transparent min-w-[250px]"/>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-700 font-[450]">
            <div className="flex items-center gap-1">
                <input type="checkbox"/>
                <p>Remember me</p>
            </div>
            <p>Forgot password?</p>
          </div>
          <div className="flex items-center gap-2 border px-5 py-2 rounded-2xl justify-center">
            <IonLogoGoogle/>
            <p>Sign with google</p>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 font-semibold 
            bg-white rounded-3xl">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};


export function IonLogoGoogle(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96Z"></path></svg>
    )
  }

export function MaterialSymbolsLockOpenRounded(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h9V6q0-1.25-.875-2.125T12 3q-1.05 0-1.838.638T9.1 5.224q-.1.35-.413.563T8 6q-.425 0-.713-.275t-.212-.65q.275-1.7 1.662-2.888T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Z"></path></svg>
    )
  }

export function MaterialSymbolsPerson(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
      ></path>
    </svg>
  );
}

export default Login;
