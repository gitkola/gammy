import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, saveTheme } from "../../redux/actions/themeActions";
import type { Theme } from "../../redux/reducers/themeReducer";
import type { AppState } from "../../redux/store";

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: AppState) => state.theme.theme);
  const dispatchRef = useRef<any>({});
  dispatchRef.current = useDispatch();
  useEffect(() => {
    dispatchRef.current(getTheme());
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    dispatchRef.current(saveTheme(newTheme));
  };

  return (
    <button
      onClick={toggleTheme}
      className="mr-3 px-3 py-3 justify-center align-middle rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
    >
      {theme === "light" ? (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z"
              stroke="#323232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <svg
          fill="#ffffff"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.004 512.004"
          transform="rotate(270)matrix(1, 0, 0, -1, 0, 0)"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M256.003,106.667c-82.481,0-149.333,66.853-149.333,149.333s66.853,149.333,149.333,149.333S405.337,338.481,405.337,256 S338.484,106.667,256.003,106.667z M256.003,362.667c-58.917,0-106.667-47.75-106.667-106.667s47.75-106.667,106.667-106.667 S362.67,197.083,362.67,256S314.92,362.667,256.003,362.667z"></path>{" "}
                  <path d="M256.003,170.667c-47.131,0-85.333,38.202-85.333,85.333s38.202,85.333,85.333,85.333s85.333-38.202,85.333-85.333 S303.135,170.667,256.003,170.667z M256.003,298.667c-23.567,0-42.667-19.099-42.667-42.667s19.099-42.667,42.667-42.667 S298.67,232.433,298.67,256S279.57,298.667,256.003,298.667z"></path>{" "}
                  <path d="M256.003,91.221c11.782,0,21.333-9.551,21.333-21.333V21.333C277.337,9.551,267.785,0,256.003,0 S234.67,9.551,234.67,21.333v48.555C234.67,81.67,244.221,91.221,256.003,91.221z"></path>{" "}
                  <path d="M256.003,420.783c-11.782,0-21.333,9.551-21.333,21.333v48.555c0,11.782,9.551,21.333,21.333,21.333 s21.333-9.551,21.333-21.333v-48.555C277.337,430.334,267.785,420.783,256.003,420.783z"></path>{" "}
                  <path d="M490.67,234.667h-48.555c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333h48.555 c11.782,0,21.333-9.551,21.333-21.333S502.452,234.667,490.67,234.667z"></path>{" "}
                  <path d="M91.67,256c0-11.782-9.551-21.333-21.333-21.333H21.334c-11.782,0-21.333,9.551-21.333,21.333 s9.551,21.333,21.333,21.333h49.003C82.119,277.333,91.67,267.782,91.67,256z"></path>{" "}
                  <path d="M402.689,139.484l46.421-46.421c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-46.421,46.421 c-8.331,8.331-8.331,21.839,0,30.17S394.358,147.815,402.689,139.484z"></path>{" "}
                  <path d="M109.315,372.518L62.894,418.94c-8.331,8.331-8.331,21.839,0,30.17s21.839,8.331,30.17,0l46.421-46.421 c8.331-8.331,8.331-21.839,0-30.17C131.154,364.187,117.646,364.187,109.315,372.518z"></path>{" "}
                  <path d="M402.689,372.516c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17l46.421,46.421 c8.331,8.331,21.839,8.331,30.17,0s8.331-21.839,0-30.17L402.689,372.516z"></path>{" "}
                  <path d="M109.315,139.482c8.331,8.331,21.839,8.331,30.17,0s8.331-21.839,0-30.17L93.064,62.891 c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17L109.315,139.482z"></path>{" "}
                  <path d="M441.325,154.161l-22.336,9.493c-10.843,4.609-15.898,17.135-11.289,27.978s17.135,15.897,27.978,11.289l22.336-9.493 c10.843-4.609,15.898-17.135,11.289-27.978C464.694,154.606,452.168,149.552,441.325,154.161z"></path>{" "}
                  <path d="M70.692,357.848l22.336-9.493c10.843-4.609,15.898-17.135,11.289-27.978c-4.609-10.843-17.135-15.898-27.978-11.289 l-22.336,9.493c-10.843,4.609-15.898,17.135-11.289,27.978C47.323,357.402,59.849,362.457,70.692,357.848z"></path>{" "}
                  <path d="M459.063,315.032l-22.507-9.088c-10.925-4.411-23.358,0.869-27.769,11.794c-4.411,10.925,0.869,23.358,11.794,27.769 l22.507,9.088c10.925,4.411,23.358-0.869,27.769-11.794C475.268,331.876,469.988,319.444,459.063,315.032z"></path>{" "}
                  <path d="M52.946,196.974l22.507,9.088c10.925,4.411,23.358-0.869,27.769-11.794s-0.869-23.358-11.794-27.769l-22.507-9.088 C57.996,153,45.563,158.28,41.152,169.205C36.74,180.13,42.021,192.563,52.946,196.974z"></path>{" "}
                  <path d="M348.349,418.985c-4.609-10.843-17.135-15.898-27.978-11.289s-15.897,17.135-11.289,27.978l9.493,22.336 c4.609,10.843,17.135,15.898,27.978,11.289c10.843-4.609,15.897-17.135,11.289-27.978L348.349,418.985z"></path>{" "}
                  <path d="M163.649,93.025c4.609,10.843,17.135,15.898,27.978,11.289c10.843-4.609,15.898-17.135,11.289-27.978L193.422,54 c-4.609-10.843-17.135-15.898-27.978-11.289c-10.843,4.609-15.897,17.135-11.289,27.978L163.649,93.025z"></path>{" "}
                  <path d="M194.265,408.784c-10.925-4.411-23.358,0.869-27.769,11.794l-9.088,22.507c-4.411,10.925,0.869,23.358,11.794,27.769 c10.925,4.411,23.358-0.869,27.769-11.794l9.088-22.507C210.47,425.628,205.19,413.195,194.265,408.784z"></path>{" "}
                  <path d="M317.735,103.218c10.925,4.411,23.358-0.869,27.769-11.794l9.088-22.507c4.411-10.925-0.869-23.358-11.794-27.769 s-23.358,0.869-27.769,11.794l-9.088,22.507C301.53,86.374,306.81,98.807,317.735,103.218z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
