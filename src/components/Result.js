

export default function Result({ Score }) {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-12 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col gap-8 text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
          🎉 Quiz Finished!
        </h1>

        {/* Score */}
        <div className="text-3xl font-semibold text-gray-800">
          Your Final Score: <span className="text-purple-600">{Score}</span>
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <div className="rounded-full w-40 h-40 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-4xl font-bold shadow-lg">
            {Score}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-2xl hover:scale-105 transform transition duration-200 shadow-lg text-xl"
          >
            🔄 Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
