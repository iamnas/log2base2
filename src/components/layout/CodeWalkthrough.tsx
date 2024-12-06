// const CodeWalkthrough = () => {
//   return (
//     <div className="bg-white py-10 px-5 lg:px-20">
//       <h1 className="text-center text-3xl font-bold mb-10 text-purple-600">
//         See why learners choose us
//       </h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Left Side */}
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold text-gray-800">
//             CODE WALKTHROUGH
//           </h2>

//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Visualize <span className="text-primary">step by step</span> code
//             execution
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             With our step-by-step code walkthrough, you can visualize what
//             happens in the computer memory when each and every line of code
//             executes.
//           </p>

//           {/* <h3 className="text-2xl font-bold text-gray-900">
//             Visualize <span className="text-blue-500">step by step</span> code
//             execution
//           </h3>
//           <p className="text-gray-700">
//             With our step-by-step code walkthrough, you can visualize what
//             happens in the computer memory when each and every line of code
//             executes.
//           </p> */}
//           <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
//             <object
//               className="no-pointers"
//               data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewRealTimeNew.svg"
//             >
//               Feature Preview
//             </object>
//             {/* {`for(i = 5; i > 2; i--)
//   arr[i] = arr[i-1];
// arr[2] = pineapple();`} */}
//           </pre>
//           <div className="flex items-center justify-between">
//             <div className="flex space-x-2">
//               {[
//                 "basket-green",
//                 "basket-red",
//                 "basket-yellow",
//                 "basket-blue",
//               ].map((basket, index) => (
//                 <div
//                   key={index}
//                   className={`w-12 h-12 bg-${basket} flex items-center justify-center`}
//                 >
//                   <span className="text-xs text-white">{index}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="space-y-6">
//           <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
//             <object
//               className="no-pointers"
//               data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewVisualizeNew.svg"
//             >
//               Feature Preview
//             </object>
//             {/* {`int *ptr;
// ptr = malloc(5 * sizeof(int));
// ptr = realloc(ptr, 2 * sizeof(int));
// ptr = realloc(ptr, 6 * sizeof(int));`} */}
//           </pre>
//           {/* <div className="w-20 h-20 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-lg">
//             <span className="text-center text-sm">Stack</span>
//           </div> */}
//           <h2 className="text-xl font-semibold text-gray-800">LEARN FASTER</h2>
//           <h3 className="text-2xl font-bold text-gray-900">
//             Learn coding in a{" "}
//             <span className="text-blue-500">fun & faster</span> way
//           </h3>
//           <p className="text-gray-700">
//             Important and complex topics are connected to real-life events,
//             which makes the learning fun, and you will remember it forever.
//           </p>
//         </div>

//         {/* Quality Content Section */}
//         <div className="mt-16 flex flex-col">
//           <h2 className="text-xl font-semibold text-gray-800">
//             QUALITY CONTENT
//           </h2>
//           <h3 className="text-2xl font-bold text-gray-900">
//             Our contents are curated by top{" "}
//             <span className="text-blue-500">industry experts</span>
//           </h3>
//           <p className="text-gray-700 mt-4">
//             We handpick content from top-notch industry experts and convert it
//             into highly engaging visual videos with the help of animation.
//           </p>
//           <div className="flex justify-center space-x-5 mt-10">
//             <object
//               className="no-pointers"
//               data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewCompaniesTransparent.svg"
//             >
//               Feature Preview
//             </object>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeWalkthrough;

const CodeWalkthrough = () => {
  return (
    <div className="bg-white py-10 px-5 lg:px-20 flex flex-col min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-10 text-purple-600">
        See why learners choose us
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-grow">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            CODE WALKTHROUGH
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visualize <span className="text-primary">step by step</span> code
            execution
          </h2>
          <p className="text-lg text-muted-foreground">
            With our step-by-step code walkthrough, you can visualize what
            happens in the computer memory when each and every line of code
            executes.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
            <object
              className="no-pointers"
              data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewRealTimeNew.svg"
            >
              Feature Preview
            </object>
          </pre>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm text-gray-800">
            <object
              className="no-pointers"
              data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewVisualizeNew.svg"
            >
              Feature Preview
            </object>
          </pre>
          <h2 className="text-xl font-semibold text-gray-800">LEARN FASTER</h2>
          <h3 className="text-2xl font-bold text-gray-900">
            Learn coding in a{" "}
            <span className="text-blue-500">fun & faster</span> way
          </h3>
          <p className="text-gray-700">
            Important and complex topics are connected to real-life events,
            which makes the learning fun, and you will remember it forever.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">QUALITY CONTENT</h2>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">
            Our contents are curated by top{" "}
            <span className="text-blue-500">industry experts</span>
          </h3>
          <p className="text-gray-700 mt-4">
            We handpick content from top-notch industry experts and convert it
            into highly engaging visual videos with the help of animation.
          </p>
        </div>

        {/* SVG Section */}
        <div className="flex justify-center">
          <object
            className="no-pointers w-full max-w-md"
            data="https://assets.log2base2.com/Assets/homePage/FeaturePreviewCompaniesTransparent.svg"
            aria-label="Feature Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeWalkthrough;
