import React, { useState, useRef } from "react";
import {
  AccountCircle,
  Clear,
  EmojiEmotions,
  LocationOn,
  Lock,
  PhotoLibrary,
} from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import Emojis from "../emojis/Emojis";

const PostPopUp = ({ setModal }) => {
  const imageInput = useRef(null);
  const [status , setStatus] = useState("")
  const [emoji , setEmoji] =useState(false)
  
  const getImage = () => {
    imageInput.current.click();
  };
 return (
   <>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 shadow-2xl rounded-xl bg-white  ">
      <div className="box space-y-5 ">
        <span className="font-medium relative text-lg text-black text-center block border-b-2 border-gray-200 py-2">
          Create post
          <span onClick={() => setModal(false)}>
            <Clear
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer"
              style={{ fontSize: 20 }}
            />
          </span>
        </span>
        <div className="userwraper flex items-center space-x-3 px-5 ">
          <AccountCircle
            className="text-gray-300 cursor-pointer "
            style={{ fontSize: 45 }}
          />
          <div className="space-y-1">
            <h1 className="username text-sm cursor-pointer">Mmo Globalia</h1>
            <div className="flex items-center space-x-2">
              <span className="time text-xs text-gray-500 tracking-widest cursor-pointer">
                4 mins
              </span>
              <span className="privacyIcon flex items-center cursor-pointer">
                <Lock style={{ fontSize: 15 }} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center ">
          <textarea
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="w-11/12  rounded-xl bg-gray-100 p-2  resize-none outline-none"
            name=""
            id="abc"
            cols="auto"
            rows="8"
            placeholder="What is in your mind Mmo?"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center w-full justify-around p-5">
        <input className="hidden" ref={imageInput} type="file" name="" id="" />
        <PhotoLibrary
          className="text-btn-blue cursor-pointer"
          style={{ fontSize: 30 }}
          onClick={getImage}
        />
        <GroupIcon
          className="text-btn-blue cursor-pointer"
          style={{ fontSize: 30 }}
        />
        <LocationOn
          className="text-btn-blue cursor-pointer"
          style={{ fontSize: 30 }}
        />
        <EmojiEmotions
          className="text-btn-blue cursor-pointer"
          style={{ fontSize: 30 }}
          onClick={()=>{setEmoji(!emoji)}}
        />
      </div>
      <div className="flex justify-center mb-5">
        <button
          className="w-10/12 mx-auto rounded-lg bg-btn-blue text-white  py-2 text-lg font-bold tracking-widest"
          onClick={()=>{setModal(!(setModal))}}
        >
          post
        </button>
      </div>
    </div>
    {emoji?<Emojis setEmoji={setEmoji} />:""}
  </>
  );
};

export default PostPopUp;
