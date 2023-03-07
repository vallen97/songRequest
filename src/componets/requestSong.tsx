"use client";
import React, { useState } from "react";

interface requestSongProps {}

export const RequestSong: React.FC<requestSongProps> = ({}) => {
  const [songName, setSongName] = useState("");
  const [submitter, setSubmitter] = useState("");
  const [songURL, setSongURL] = useState("");
  const [success, setSuccess] = useState(false);

  const submitRequest = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { songName, submitter, songURL };

      await fetch(`/api/request/postRequest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("Succesfully sumbitted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
                  onChange={(e: any) => setSubmitter(e.target.value)}
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
