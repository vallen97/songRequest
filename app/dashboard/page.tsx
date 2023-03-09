"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface pageProps {}

interface songRequest {
  id: number;
  songName: String;
  submitter: String;
  songURL: String;
}

interface userRequest {
  id: String;
  name: String;
  email: String;
  username: String;
  password: String;
  emailVerified: Date;
  image: String;
  accessToken: String;
}

const requestTableName: Array<String> = [
  "songName",
  "submitter",
  "songURL",
  "edit",
];
const userTableName: Array<String> = ["name", "username", "edit"];

async function deleteRequest(id: number): Promise<void> {
  try {
    const body = {};

    await fetch(`/api/request/requests`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(id: String): Promise<void> {
  try {
    const body = {};

    await fetch(`/api/user/users`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default function Dashboard() {
  // const songs: any = await fetchSongRequest();
  const [songData, setSongData] = useState<Array<any>>([]);
  const [userData, setUserData] = useState<Array<any>>([]);

  const [showUsers, setShowUsers] = useState<boolean>();
  const { data: session }: any = useSession();

  const songs = null;
  async function fetchRequestedSongs() {
    fetch("/api/request/requests")
      .then((res) => res.json())
      .then((data) => {
        setSongData(data);
      });
  }

  async function fetchRequestedUsers() {
    fetch("/api/user/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }

  useEffect(() => {
    fetchRequestedUsers();
    fetchRequestedSongs();
  }, []);

  if (session?.user)
    return (
      <>
        <ul
          className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e: any) => {
            if (e.target.value === "users") setShowUsers(true);
            else if (e.target.value === "songs") setShowUsers(false);
          }}
        >
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-radio-license"
                type="radio"
                value="users"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Users
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                defaultChecked
                id="list-radio-id"
                type="radio"
                value="songs"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Song Requests
              </label>
            </div>
          </li>
        </ul>
        {showUsers ? (
          <>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {userTableName.map((tName, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3"
                        key={index.toString()}
                      >
                        {tName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {userData.map((request: userRequest) =>
                    request.email != session.user.email ? null : (
                      <tr
                        key={request.id.toString()}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          skip me
                        </th>
                        <td className="px-6 py-4">skip me</td>

                        <td className="px-6 py-4"></td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {requestTableName.map((tName, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3"
                        key={index.toString()}
                      >
                        {tName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {songData.map((request: songRequest) => (
                    <tr
                      key={request.id.toString()}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {request.songName}
                      </th>
                      <td className="px-6 py-4">{request.songURL}</td>
                      <td className="px-6 py-4">{request.submitter}</td>
                      <td className="px-6 py-4">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            deleteRequest(request.id);
                            fetchRequestedSongs();
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </>
    );
  else return <div>Sign in to view this page</div>;
}
