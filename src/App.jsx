import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const copyTask = [...task];

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setdetails("");
    copyTask.push_back({ title, details });
    settask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Notes for Your App
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full lg:w-1/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Create Note</h2>

          <div className="flex flex-col gap-5">
            <input
              className="w-full px-5 py-4 bg-zinc-950 border border-zinc-700 rounded-2xl outline-none focus:border-white transition"
              type="text"
              placeholder="Enter your note title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              className="w-full h-40 px-5 py-4 bg-zinc-950 border border-zinc-700 rounded-2xl outline-none resize-none focus:border-white transition"
              value={details}
              placeholder="Enter details"
              onChange={(e) => {
                setdetails(e.target.value);
              }}
            ></textarea>

            <button className="w-full bg-white text-black rounded-2xl py-4 font-semibold text-lg hover:bg-zinc-200 transition">
              Add Note
            </button>
          </div>
        </form>

        <div className="w-full lg:w-2/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Your Notes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            <div className="h-52 rounded-2xl bg-white text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Meeting Notes</h3>
              <p className="text-sm text-zinc-700">
                Discuss project flow and divide work among teammates.
              </p>
            </div>

            <div className="h-52 rounded-2xl bg-yellow-200 text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Ideas</h3>
              <p className="text-sm text-zinc-700">
                Add search, filter, and category options in notes app.
              </p>
            </div>

            <div className="h-52 rounded-2xl bg-pink-200 text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Reminder</h3>
              <p className="text-sm text-zinc-700">
                Complete UI before moving to backend integration.
              </p>
            </div>

            <div className="h-52 rounded-2xl bg-blue-200 text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Design</h3>
              <p className="text-sm text-zinc-700">
                Use clean cards with soft colors and rounded corners.
              </p>
            </div>

            <div className="h-52 rounded-2xl bg-green-200 text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Task</h3>
              <p className="text-sm text-zinc-700">
                Make the app responsive for mobile and laptop view.
              </p>
            </div>

            <div className="h-52 rounded-2xl bg-purple-200 text-black p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2">Personal</h3>
              <p className="text-sm text-zinc-700">
                Keep the design minimal, modern, and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
