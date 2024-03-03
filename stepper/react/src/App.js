import './App.css';
import { useState } from 'react';

function App() {

  const [step, setStep] = useState(1);



  return (
    <>
      <div className="w-[100%] p-10 flex justify-center">
        <div className="w-[80%]">
          {/* heading */}
          <div
            className="w-[100%] text-[25px] text-red-500 font-semibold flex justify-center items-center"
          >
            Stepper
          </div>
          <div className="w-[100%] py-10">

            <ol
              className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
            >


              <li
                className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <span
                  className={`${step === 1 ? 'text-blue-600' : 'text-green-600'} flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}

                >
                  {
                    (step !== 1) &&
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                      />
                    </svg>
                  }
                  {
                    (step === 1) &&
                    <span className="me-2">1</span>
                  }
                  Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>


              <li
                className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <span
                  className={`${step === 2
                    ? 'text-blue-600'
                    : step < 2
                      ? 'text-gray-600'
                      : 'text-green-600'}  flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}

                >

                  {
                    (step !== 2) &&
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                      />
                    </svg>
                  }
                  {
                    (step === 2) &&
                    <span className="me-2">2</span>
                  }
                  Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>
              <li className="flex items-center">
                <span
                  className={`${step === 3
                    ? 'text-blue-600'
                    : step < 3
                      ? 'text-gray-600'
                      : 'text-green-600'}  flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}

                >
                  {
                    (step !== 3) &&
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                      />
                    </svg>
                  }
                  {
                    (step === 3) &&
                    <span className="me-2">3</span>
                  } Confirmation
                </span>
              </li>
            </ol>


            {(step === 1) && <div className="w-[100%] py-10 text-[20px]">Step 1 (Personal Info)</div>}
            {(step === 2) && <div className="w-[100%] py-10 text-[20px]">Step 2 (Account Info)</div>}
            {(step === 3) && <div className="w-[100%] py-10 text-[20px]">Step 3 (Confirmation)</div>}
            {(step === 4) && <div className="w-[100%] py-10 text-[20px]">Step 4 (Done)</div>}





            {/* buttons */}

            <div className="w-[100%] mt-10 flex justify-between">
              {/* back button */}
              <div className="w-[50%] flex justify-center items-center">
                <button
                  className={`border-2 py-2 px-5 w-[30%]  ${step === 1 ? 'border-gray-400 text-gray-400' : 'border-black text-black'}`}
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}

                >
                  BACK
                </button>
              </div>
              {/* next button */}
              <div className="w-[50%] flex justify-center items-center">
                <button
                  className={`border-2 py-2 px-5 w-[30%] border-black ${step === 4 ? 'border-gray-400 text-gray-400' : 'border-black text-black'}`}
                  disabled={step === 4}
                  onClick={() => setStep(step + 1)}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
