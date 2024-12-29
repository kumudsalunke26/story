// import React from "react";
// const StoryCards = ({ story, onView }) => {
//   return (
//     <div
//       className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
//       onClick={() => onView(story)} // Trigger onView with the story data
//     >
//       {/* Story Image */}
//       {story.imageUrl && (
//         <img
//           src={story.imageUrl}
//           alt="Story"
//           className="w-full h-[20rem] object-cover"
//         />
//       )}

//       {/* Badge */}
//       <div className="w-[7rem] absolute top-[19rem] left-4 bg-white py-1 px-3 rounded-full shadow-lg">
//         <span className="text-black font-semibold text-sm">JourneyStory</span>
//       </div>

//       {/* Story Headline and Content */}
//       {/* <div className="relative p-[1rem] gap-2">
        
//         {story.title && (
//           <h2 className="text-xl font-bold text-white h-[3rem] pt-4 gap-20">
//             {story.title}
//           </h2>
//         )}
        
//         {story.content && (
//           <p className="text-gray-300 mt-2">{story.content.slice(0, 100)}...</p>
//         )}
//       </div> */}
//       <div className="relative p-4 gap-2">
//   {/* Story Headline */}
//   {story.title && (
//     // <h2 className="text-lg font-bold text-white h-[3rem] pt-4">
//     <h2 className="text-lg md:text-xl font-bold text-white h-[3rem] pt-4">
//       {story.title}
//     </h2>
//   )}
//   {/* Story Content Preview */}
//   {story.content && (
//     <p className="text-sm md:text-base text-gray-300 mt-7">
//       {story.content.slice(0, 100)}...
//     </p>
//   )}
// </div>

//     </div>
//   );
// };

// export default StoryCards;





import React from "react";

const StoryCards = ({ story, onView }) => {
  return (
    <div
      className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
      onClick={() => onView(story)} // Trigger onView with the story data
    >
      {/* Story Image
      {story.imageUrl && (
        <img
          src={story.imageUrl}
          alt="Story"
          className="w-full h-[20rem] md:h-[25rem] object-cover object-center"
        />
      )}

     
      <div className="sm:w-[9rem] absolute top-[18rem] sm:top-[28rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
  <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
</div> */}
{/* Story Image */}
{story.imageUrl && (
  <img
    src={story.imageUrl}
    alt="Story"
    className="w-full h-[20rem] md:h-[25rem] object-cover object-center"
  />
)}

{/* Badge */}
{/* <div className="absolute top-[18rem] sm:top-[24rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
  <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
</div> */}
 <div className="absolute top-[19rem] sm:top-[24rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
  <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
</div>


     

      {/* Story Headline and Content */}
      <div className="relative p-4 gap-2">
        {/* Story Headline */}
        {story.title && (
          <h2 className="text-lg md:text-xl font-bold text-white h-[3rem] pt-4">
            {story.title}
          </h2>
        )}
        {/* Story Content Preview */}
        {story.content && (
          <p className="text-sm md:text-base text-gray-300 mt-4">
            {story.content.slice(0, 100)}...
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryCards;
