import React from 'react'

const Quiz = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-700 to-green-500">
    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl my-32">
            Welcome to FantasyQuiz#156
          </h2>
            </div>
        <div className="mt-8">
          <div className="mt-6">
            <a href="/quiz" className="block w-full px-5 py-3 text-lg font-medium text-center text-green-600 bg-white rounded-lg shadow-lg hover:bg-indigo-50 sm:text-xl">
              Start Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
);
}

export default Quiz