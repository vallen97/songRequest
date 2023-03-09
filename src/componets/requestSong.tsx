"use client";
import React, { useState } from "react";

interface requestSongProps {}

export const RequestSong: React.FC<requestSongProps> = ({}) => {
  const [songName, setSongName] = useState("");
  const [submitter, setSubmitter] = useState("");
  const [songURL, setSongURL] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const delay = (ms: number) => new Promise((res: any) => setTimeout(res, ms));

  const submitRequest = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { songName, submitter, songURL };

      await fetch(`/api/request/postRequest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setSuccess(true);
      await delay(5000);
      setSuccess(false);
    } catch (error) {
      console.error(error);
      setFailed(true);
      await delay(5000);
      setFailed(false);
    }
  };

  function submitterOnChange(event: any) {
    if (event.target.value.charAt(0) != "@")
      setSubmitter("@" + event.target.value);
    else setSubmitter(event.target.value);
  }

  return (
    <>
      <>
        {success ? (
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">successful</p>
                <p className="text-sm">Submission was Succesfully sumbitted</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
      <>
        {failed ? (
          <div
            className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Failed</p>
                <p className="text-sm">Submission was failed to be sumbitted</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>

      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Submit A Song
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={submitRequest}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Song Name:
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e: any) => setSongName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 undefined">
                Submitter:
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="@BDS9"
                  type="text"
                  name="submitter"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={submitterOnChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 undefined">
                Link to Song:
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="songLink"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e: any) => setSongURL(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestSong;
