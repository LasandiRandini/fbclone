

"use client"; 

import {
  EmojiHappyIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

import { useRef } from "react";
import { db } from "../../firebase";
import firebase from "firebase/app"; 
import "firebase/firestore"; 

function InputBox() {
    const inputRef = useRef(null);

    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        inputRef.current.value = "";
    };

    return (
      <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-2">
        <div className="flex space-x-3 p-4 items-center">
          <form className="flex flex-1" onSubmit={sendPost}>
            <input
              className="rounded-full h-10 bg-gray-100 flex-grow px-5 focus:outline-none"
              type="text"
              ref={inputRef}
              placeholder={`What's on your mind?`}
            />
            <button hidden type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-evenly p-3 border-t">
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon">
            <PhotographIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
      </div>
    );
}

export default InputBox;
