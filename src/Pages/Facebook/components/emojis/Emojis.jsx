import { Clear, InsertEmoticon, Mood, MoodBad, SentimentDissatisfied, SentimentSatisfied, SentimentVeryDissatisfied, SentimentVerySatisfied } from "@material-ui/icons";
import React from "react";
// onClick={()=>{setEmoji(false)}}

const Emojis = ({ setEmoji }) => {
  return (
    <div>
      <div className="text-5xl h-full w-full fixed top-1/2 left-1/2 bg-opacity-60 bg-white transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-ceneter z-50" >
        <div className="w-6/12 bg-white  flex flex-wrap mx-auto items-center p-5 shadow-2xl ">
        <span className="w-full flex justify-end items-center">
        <Clear className="text-black cursor-pointer " onClick={()=>{setEmoji(false)}}/>
        </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer  " onClick={()=>{setEmoji(false)}}>
            <InsertEmoticon style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling Happy
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentSatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling saatisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentVeryDissatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling disaatisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentVerySatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling very saatisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <Mood style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling moody
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <MoodBad style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling bad
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentDissatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling dissaatisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentVeryDissatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling dissatisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <SentimentVerySatisfied style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling satisfied
            </h1>
          </span>
          <span className="flex items-center space-x-5 w-1/2 p-5 hover:bg-gray-300 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={()=>{setEmoji(false)}}>
            <Mood style={{ fontSize: 30 }} className="text-yellow-500" />
            <h1 className="text-base font-bold text-gray-700 tracking-widest">
              Feeling moody
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Emojis;
