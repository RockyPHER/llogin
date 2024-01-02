"use client";
import { ReactComponentElement, useState } from "react";

export default function LoginContainer() {
  const [idx, setIdx] = useState(0);

  const container: JSX.Element[] = [
    <UsernameContainer />,
    <PasswordContainer />,
  ];

  function onClickHandler() {
    setIdx((idx + 1) % container.length);
  }

  return (
    <main className="flex flex-col items-center space-y-4 bg-gray-400 p-6">
      {container[idx]}
      <button
        onClick={onClickHandler}
        className="bg-blue-500 px-4 py-2 rounded-md"
      >
        Login
      </button>
    </main>
  );
}

export function UsernameContainer() {
  return (
    <main className="flex flex-col items-center space-y-4">
      <div className="flex flex-col">
        <label>Username</label>
        <div className="flex flex-row">
          <input></input>
          <div className="bg-slate-600">lock</div>
        </div>
      </div>
    </main>
  );
}

export function PasswordContainer() {
  return (
    <main className="flex flex-col items-center space-y-4">
      <div className="flex flex-col">
        <label>Password</label>
        <div className="flex flex-row">
          <input></input>
          <div className="bg-slate-600">lock</div>
        </div>
      </div>
    </main>
  );
}
