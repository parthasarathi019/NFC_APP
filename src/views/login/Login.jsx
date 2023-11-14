import img from "../../assets/Logo.png";
import Apis from "../../Link/Links";
const Login = () => {
  return (
    <section className="max-w-md md:max-w-xl mx-auto h-fit my-20">
      {/* <h1 className="text-center text-2xl font-semibold">Welcome to the webstie</h1> */}
      <div className="shadow-none sm:shadow-2xl py-10 flex backdrop-blur-md flex-col items-center rounded-3xl mx-0 sm:mx-3">
        <img src={img} alt="logo img" className="w-24 h-16" />
        <p className="text-xl font-semibold text-gray-700 mb-5">User Login</p>
        <form className="flex flex-col gap-3">
          <div className="bg-gray-100 w-fit rounded-2xl flex px-3 py-2 items-center gap-2">
            <MaterialSymbolsPerson />
            <input
              type="text"
              placeholder="User Name"
              className="outline-none bg-transparent min-w-[250px]"
            />
          </div>
          <div className="bg-gray-100 w-fit rounded-2xl flex px-3 py-2 items-center gap-2">
            <MaterialSymbolsLockOpenRounded />
            <input
              type="text"
              placeholder="Password"
              className="outline-none bg-transparent min-w-[250px]"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-700 font-[450]">
            <div className="flex items-center gap-1"></div>
            <p>Forgot password?</p>
          </div>
          <div className="p-3 w-full flex justify-between items-center gap-2 relative">
            <span className="block h-px bg-slate-800 w-full"></span>
            <span>or</span>
            <span className="block h-px bg-slate-800 w-full"></span>
          </div>
          <button
            onClick={() => {
              window.open(Apis().google, "_blank");
            }}
            className="flex cursor-pointer hover:shadow-md items-center bg-slate-100 gap-2 border px-5 py-2 rounded-2xl justify-center"
          >
            <DeviconGoogle />
            <p>Sign with google</p>
          </button>
          <div className="text-center">
            <button
              className="px-8 py-3 font-semibold 
            bg-white rounded-3xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export function DeviconGoogle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#fff"
        d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
      ></path>
      <path
        fill="#e33629"
        d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
      ></path>
      <path
        fill="#f8bd00"
        d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
      ></path>
      <path
        fill="#587dbd"
        d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
      ></path>
      <path
        fill="#319f43"
        d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsLockOpenRounded(props) {
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
        d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h9V6q0-1.25-.875-2.125T12 3q-1.05 0-1.838.638T9.1 5.224q-.1.35-.413.563T8 6q-.425 0-.713-.275t-.212-.65q.275-1.7 1.662-2.888T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Z"
      ></path>
    </svg>
  );
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
