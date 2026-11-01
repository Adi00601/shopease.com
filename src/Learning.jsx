// Create first component
// - single piece repetead many times
// reactjs reacts when changes occur

// what is component
// things which can get repeated in website can become a component  
// function App(){

//      return <Navbar></Navbar>;
  
// } keep navbar or anything on sameline of return else (
    // <navbar></navbar>
  //  ) or do like this
// u can return only one thing in return if want more than div and inside it give things which want to return


// use rfce and get initial code
// css has class here it is className


// import React from 'react'

// function Card() {
//   return (
//    <div className = 'full h-screen bg-zinc-200'>
//     <div className='w-52 px-3 py-4 bg-zinc-500 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md'>
//     <div className='w-full h-32 bg-zinc-300 '>
//         <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1782297040435-349d43efbf98?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//     </div>
//     <div className='w-full px-3 py-4'>
//         <h2>Amazon</h2>
//         <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?</p>
//     </div>
//     </div>
//    </div>
//   )
// }

// export default Card
// above code is about how to make a card in react

// how to reuse componenets?

// const data = ["harsh" , "adi" , "radhu"];
  // {data.map(()=>12)};
  // in above code first we create a data and we wrote 3 times 12 as we have three names in array


//Key Prop warning
//   {data.map((value,index)=><h1 key = {index}>hey</h1>)} by giving index we removed key prop warning , it comes beacause react uses vritual dom and here we have not given key to any h1 so




// small eg how to use data to show different things
// import React from "react";
// import Card from "./Components/Card";

// function App(){

//      const data = ["harsh" , "adi" , "radhu"];

//      return (
//       <div>
//       {data.map((elem,index)=>(<div key = {index} className="px-5 py-5 bg-zinc-500 rounded w-fit ">
//           {elem};
//           </div>
//       ))}
//       </div>
//      )
// }

// export default App; 





// how to reuse componenets
// import React from 'react'

// function Card() {

//    const data = [
//      { image: 'https://images.unsplash.com/photo-1782297040435-349d43efbf98?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name : "Amazon" , desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?" },
//      { image: 'https://images.unsplash.com/photo-1783717408828-56975eb28099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' , name : "Flipkart" , desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?"},
//      { image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D' , name : "Myntra" , desc : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?"}
//    ]

//   return (

//    <div className = 'full h-screen bg-zinc-200 flex items-center justify-center gap-50 '>
//    {data.map((elem,index)=>(

//     <div key = "index" className='w-52 px-3 py-4 bg-zinc-500 rounded-md'>
//     <div className='w-full h-32 bg-zinc-300 '>
//         <img className='w-full h-full object-cover' src = {elem.image} alt="" />
//     </div>
//     <div className='w-full px-3 py-4'>
//         <h2>{elem.name}</h2>
//         <p className='text-sm'>{elem.desc}</p>
//     </div>
//     </div>
// ))}

//    </div>
//   )
// }
// export default Card


// Fragments
      // <>
      // <Card/>
      // </>
// instead of div we write fragments it also returns more than 1 object



// Conditioning Rendering - here we have used condition rendering for knowmore instock or outofstock
// import React from 'react'

// function Card() {

//    const data = [
//      { image: 'https://images.unsplash.com/photo-1782297040435-349d43efbf98?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name : "Amazon" , desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?" , knowmore: true},
//      { image: 'https://images.unsplash.com/photo-1783717408828-56975eb28099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' , name : "Flipkart" , desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?" , knowmore: false},
//      { image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D' , name : "Myntra" , desc : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex?" , knowmore: false}
//    ]

//   return (

//    <div className = 'full h-screen bg-zinc-200 flex items-center justify-center gap-50 '>
//    {data.map((elem,index)=>(

//     <div key = "index" className='w-52 px-3 py-4 bg-zinc-500 rounded-md'>
//     <div className='w-full h-32 bg-zinc-300 '>
//         <img className='w-full h-full object-cover' src = {elem.image} alt="" />
//     </div>
//     <div className='w-full px-3 py-4'>
//         <h2>{elem.name}</h2>
//         <p className='text-sm'>{elem.desc}</p>
//         <button className={`px-4 py-2 ${elem.knowmore ? 'bg-green-300' : 'bg-red-300' }`}>{elem.knowmore? "instock":"outofstock"}</button>
//     </div>
//     </div>
// ))}

//    </div>
//   )
// }

// export default Card






// handling events - here we have used handling event at button , onclick , we can use multiple such event handlings
// import React from 'react'

// function Card() {

//     const data = [
//     { image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww' , download : true},
//     { image: 'https://images.unsplash.com/photo-1599894019794-50339c9ad89c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFydHxlbnwwfHwwfHx8MA%3D%3D' , download : false},
//     { image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFydHxlbnwwfHwwfHx8MA%3D%3D' , download : true}
//     ]

//   return (
//     <div className='w-full h-screen bg-zinc-300 flex  gap-10 items-center justify-center'>
//     {data.map((elem,value)=>(
//         <div className='w-70 h-60 bg-black'>
//         <div className='w-full h-35 p-3 bg-white'>
//             <img src={elem.image} alt="" srcset="" />
//         </div>
//         <div className='w-full h-25 bg-green-100 p-5 flex justify-center items-center'>
//             <button onClick={()=> {alert("lets go")}} className= {`w-full px-5 py-4 ${elem.download ? 'bg-green' : 'bg-red'}`}>
//              {elem.download ? "download" : "Nosong"}
//             </button>
//         </div>
//       </div>
//     ))}
//     </div>
//   )
// }

// export default Card




// state 
// state is a data and reacts takes care of it , whenever it changes react , reacts and updates 
//      const ans = useState(0);
    //  ans[0] = value;
    //  ans[1] = function;

  // Another eg
  // import React, { useState } from "react";
  // import Card from "./Components/Card";
  
  // function App(){
  //      const [score,setscore] = useState(10);
       
  //      return (
  //           <div>
  //           <h1>{score}</h1>
  //           <button onClick={()=> setscore(score+100)} className="px-2 py-2 bg-blue-300 text-white ">change</button>
  //           </div>
  //      )
  // }
  // export default App; 

  // Intermidate Eg:
 // import React, { useState } from 'react'
//  function App() {
//     const[val,setval] =  useState(12);
//    return (
//      <div>
//        <h1>{val}</h1>
//        <button onClick={()=>setval((val)=>val+1)} className='px-4 py-4 bg-blue-400 text-white rounded'>Change</button>
//      </div>
//    )
//  }
 

// Advance state
// import React, { useState } from 'react'

// function App() {
  
//   const[set,setval] = useState({ name:"harsh" , banned: false}); 

//   return (
//     <div>
//       <h1>Name : {set.name}</h1>
//      <h1>Banned : {set.banned.toString()}</h1>
//      <button onClick={()=>setval({...set, banned: !set.banned})} className='px-4 py-4 bg-blue-400 text-white rounded-full'>Change</button>
//     </div>
//   )
// }

// export default App


// More Advance state
// import React, { useState } from 'react'

// function App() {
  
//   const[set,setval] = useState({ name:"harsh" , banned: false}); 

//   return (
//     <div>
//       <h1>Name : {set.name}</h1>
//      <h1>Banned : {set.banned.toString()}</h1>
//      <button onClick={()=>setval({...set, banned: !set.banned})} className={`px-4 py-4 ${set.banned ? "bg-green-500" : "bg-red-500" } text-black rounded-full`}>Change</button>
//     </div>
//   )
// }

// export default App

// Part 2 of more advance
// usestate , doesnt update state immediatly, it updates after function updation to fix performance issue
// so we have to use async and await , and even after that after function ends it updates so keep this in mind

// Use state Arrays
// import React, { useState } from 'react'

// function App() {
//   const[val,setval] = useState([1,2,3,4,5,6]);

//   return (
//     <div>
//      {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setval(()=> val.filter((item,index)=> index!=val.length-1))} className='px-4 py-4 bg-blue-500 rounded-full text-white'>click</button>
//     </div>
//   )
// }

// export default App


// Part 3
// import React, { useState } from 'react'

// function App() {
//   const[val,setval] = useState([1,2,3,4,5,6]);

//   return (
//     <div>
//      {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setval(()=> val.filter((item,index)=> item % 2 !== 0))} className='px-4 py-4 bg-blue-500 rounded-full text-white'>click</button>
//     </div>
//   )
// }

// export default App

// Part 4
// how to do addition and update in array
// import React, { useState } from 'react'

// function App() {
//   const[val,setval] = useState([{name: "harsh" , age:24} , {name:"adi" , age:25} , {name:"kalu" , age:32}]);

//   return (
//     <div>
//      {val.map(item=><div><h1>{item.name}</h1> <h1>{item.age}</h1></div>)}
//       <button onClick={()=>setval(()=>val.map(item=> item.name === "kalu" ? ({name:"kalu" , age:33}) : item  ))} className='px-4 py-4 bg-blue-500 rounded-full text-white'>click</button>
//     </div>
//   )
// }

// export default App


// USE STATE HOOKS
// import React, { useState } from 'react'
// import { DiApple } from "react-icons/di";

// function App() {
//   const [val, setVal] = useState(false);

//   return (
//     <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
//       <div className='w-60 h-32 bg-white relative overflow-hidden'>
//         <div className={`flex w-full h-full transition-transform duration-500 ${val ? "-translate-x-full" : "translate-x-0"}`}>
//           <img
//             className='w-full h-full shrink-0 object-cover transition-transform'
//             src="https://images.unsplash.com/photo-1784908927302-4e9c0128e113?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <img
//             className='w-full h-full shrink-0 object-cover transition-transform'
//             src="https://images.unsplash.com/photo-1777813317629-6874ec3f6a26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
//             alt=""
//           />
//         </div>
//         <span
//           onClick={() => setVal(!val)}
//           className='w-10 h-10 bg-[#dadada7b] rounded-full absolute flex justify-center items-center bottom-2 left-1/2 -translate-x-1/2 cursor-pointer z-10'
//         >
//           <DiApple />
//         </span>
//       </div>
//     </div>
//   )
// }

// export default App


// ROPRS
// IT IS USED FOR REUSING OF COMPONENTS , consider u have a button and u have to use that button of different places so we will do a button comp and there data not hard code , go via parent comp and use in child comp
// import React from "react";
// import Card from "./components/Card";

// function App() {
//   return (
//     <div>
//       <Card val="1" colors="bg-green-600" />
//       <Card val="2" colors="bg-red-600" />
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function Card({ val, colors }) {
//   return (
//     <div>
//       <button className={`px-4 py-2 ${colors} text-white m-2`}>
//         {val}
//       </button>
//     </div>
//   );
// }

// export default Card;


// OUR DATA WILL BE IN MAIN COMP AND THROGH PROPS WE WILL SEND IT 
// import React, { useState } from "react";
// import Card from "./components/Card";

// function App() {

//   const data = [
//     {name : "John" , profession : "Painter" , image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" ,friend:false },
//      {name : "Amit" , profession : "Artistr" , image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" ,friend:false },
//       {name : "Rahul" , profession : "Player" , image:"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" ,friend:false },
//        {name : "Sumit" , profession : "Engineer" , image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" ,friend:false }
//   ];

// const [realdata, setdata] = useState(data);
// // where state is made there only we can modify it
// const handlefriends = (idx)=>{
//   setdata((previous)=> {
//     return previous.map((item,index)=>{
//          if(index === idx)
//          {
//             return {...item,friend:!item.friend}
//          }
//          return item;
//     })
//   })
// }
//   return (
//     <div>
//       <div className="w-full h-screen bg-zinc-300 gap-3 flex items-center justify-center">
//       {realdata.map((item,index)=>(
//       <Card idx={index} image={item.image} name={item.name} professions={item.profession} handleclick={handlefriends} friends={item.friend}/>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function Card({image,name,professions ,handleclick,friends,idx}) {
//   return (
//     <div className='w-52 bg-white rounded overflow-hidden'>
//       <div className="w-full h-55 bg-sky-200">
//         <img className="w-full h-full object-cover object-center" src={image} alt="" />
//       </div>
//         <div className="w-full p-3">
//           <h3>{name}</h3>
//           <h5>{professions}</h5>
//           <button onClick={()=>handleclick(idx)} className={`px-3 py-1 text-xs text-white ${friends ? "bg-green-300" : "bg-red-300"} rounded`}>{friends === false ? "Add Friend" : "Friends"}</button>
//       </div>
//     </div>

//   );
// }

// export default Card;


// small project
// import React, { useState } from "react";
// import Card from "./components/Card";
// import styles from "./style.module.css";

// function App() {

//   const data = [
//     {song:"One" , art:"Adi" , image:"https://images.unsplash.com/photo-1781882915155-2a5355116a74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" , fav:false},
//     {song:"Stay" , art:"Vivek" , image:"https://images.unsplash.com/photo-1785369989063-5512d5716735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" , fav:false},
//     {song:"Hello" , art:"Ramesh",image:"https://plus.unsplash.com/premium_photo-1785584592505-1f54b5c1e854?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" , fav:false},
//     {song:"Sorry" , art:"Suresh" , image:"https://images.unsplash.com/photo-1785849972025-d05be1dee8ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D" , fav:false},
//     {song:"Halo" , art:"King" , image:"https://images.unsplash.com/photo-1785905103477-9001845b0939?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" , fav:false}
//   ];

// const[realdata,setdata] = useState(data);
// const handle = (idx)=>{
//    setdata((previous)=>{
//       return previous.map((item,index)=>{
//           if(index === idx)
//           {
//             return {...item,fav:!item.fav}
//           }
//           return item;
//       })
//    })
// }

// const cnt = realdata.filter(item=>item.fav).length;

//   return (
//     <div className='w-full h-screen bg-zinc-100'> 
//     <div className='w-full h-30 flex items-center justify-center'>
//      <div className='w-full h-12 flex'>
//       <div className='w-35 h-12  ml-25 text-orange-400 flex items-center justify-center text-2xl font-bold'>Orange</div>
//       <div className='w-40 h-12 bg-orange-400 text-white flex items-center justify-center text-l font-bold ml-240 rounded-full'>Favourites {cnt}</div>
//      </div>

//     </div>
//     <div className="w-full h-172.5 flex items-center justify-center">
//     {realdata.map((item,index)=>(
//          <Card idx={index} image = {item.image} song = {item.song} art = {item.art} fav = {item.fav} handleclick = {handle} />
//     ))}
//     </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react'

// function Card({idx , image , song , art , fav , handleclick}) {

//   return (
//     <div className='w-50 h-30 m-5 bg-white'>
//       <div className='w-full h-20 flex'>
//         <div className='w-23 h-full flex items-center justify-center '>
//           <img className='w-18 h-15 rounded-md ' src={image} alt="" />
//         </div>
//         <div className='w-30 h-full'>
//          <div className='font-bold - text-l ml-2 mt-2'>
//           {song}
//           </div> 
//           <div className='text-xs ml-2 font-semibold'>
//             {art}
//           </div>
//         </div>
//       </div>
// <button onClick={() => handleclick(idx)} className={`w-30 h-10 ${fav === false ? "bg-orange-400" : "bg-blue-400"} flex items-center justify-center text-xs font-semibold rounded-full ml-10 mt-5 text-white`}>{fav === false ? "Add to Favourites" : "Added"}</button>
//     </div>
//   )
// }

// export default Card



// FILE HANDLING
// In file handling website gets reload and react main work is not to reload the website so how to do it

// useRef - here whereever we use elem there it will not reload
// import React, { useRef, useState } from "react";
// import Card from "./components/Card";
// import styles from "./components/style.module.css";

// function App() {
 
//   const name = useRef(null);
//   const age = useRef(null);
//   const handleclick = (data)=>{
//     data.preventDefault();
//     console.log(name.current.value , age.current.value);
//   }

//   return (
//      <form onSubmit={handleclick}>
//       <input ref={name} type="text" placeholder="Name"/>
//       <input ref={age} type="text" placeholder="age" id="" />
//       <input type="submit"></input>
//      </form>
//   );
// }
// export default App;


// controlled components
// import React, {useState} from "react";
// import Card from "./components/Card";
// import styles from "./components/style.module.css";

// function App() {
  
//   const[set,setval] = useState({name:""});
//   const handleclick = (data)=>{
//       data.preventDefault();
//       consosle.log(val);
//   }

//   return (
//      <form onSubmit={handleclick} action="">
//       <input onChange={(data)=>setval({...val,name:data.target.value})} type="text" placeholder="name"/>
//       <input type="submit" />
//      </form>
//   );
// }
// export default App;



// react hook form -> mainly this is used
//  import React, {useState} from "react";
//  import Card from "./components/Card";
//  import styles from "./components/style.module.css";
//  import { useForm } from "react-hook-form";
 
//  function App() {
//  const{register,handleSubmit} = useForm();
 
//    return (
//       <div>
//        <form onSubmit={handleSubmit(data=>console.log(data))} action="">
//          <input {...register('name')} type="text" name="" id="" placeholder="name"/>
//          <input {...register('age')} type="text" placeholder="age" />
//          <input type="submit" name="" id="" />
//        </form>
//       </div>
//    );
//  }
 
//  export default App;



// mini porject
// import React, { useState } from 'react';
// import Cards from './components/Cards';
// import Form from './components/Form';

// function App() {
//     const [users, setusers] = useState([]);

//     const handlesubmitdata = (data) => {
//         setusers([...users, data]);
//     };

//     const handleremove = (id) => {
//         setusers(users.filter((item, index) => index !== id));
//     };

//     return (
//         <div className="w-full h-screen bg-zinc-200">
//             <Cards handleremove={handleremove} users={users} />
//             <Form handlesubmitdata={handlesubmitdata} />
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import Card from './Card';

// function Cards({ users, handleremove }) {
//     return (
//         <div className="w-full h-160 bg-blue-200 flex items-center justify-center flex-wrap">
//             {users.map((item, index) => (
//                 <Card key={index} index={index} handleremove={handleremove} user={item}/>
//             ))}
//         </div>
//     );
// }

// export default Cards;

// import React from 'react';

// function Card({ user, handleremove, index }) {
//     return (
//         <div className="w-60 bg-white rounded-lg overflow-hidden m-3">

//             <div className="w-full h-25 bg-black flex items-center justify-center">
//                 <div className="w-40 h-20">
//                     <img
//                         src={user.image}
//                         alt={user.name}
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>

//             <div className="w-full h-35 bg-blue-500 text-white font-semibold pl-6 pt-4">
//                 <div>{user.name}</div>
//                 <div>{user.mail}</div>

//                 <button
//                     onClick={() => handleremove(index)}
//                     className="w-25 h-10 bg-red-600 text-white rounded-md mt-3"
//                 >
//                     Remove it
//                 </button>
//             </div>

//         </div>
//     );
// }

// export default Card;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Form({ handlesubmitdata }) {

//     const { register, handleSubmit, reset } = useForm();

//     const submit = (data) => {
//         handlesubmitdata(data);
//         reset();
//     };

//     return (
//         <form
//             onSubmit={handleSubmit(submit)}
//             className="p-10 flex flex-col gap-4"
//         >
//             <input
//                 {...register('name')}
//                 type="text"
//                 placeholder="name"
//                 className="p-3 border rounded"
//             />

//             <input
//                 {...register('mail')}
//                 type="text"
//                 placeholder="mail"
//                 className="p-3 border rounded"
//             />

//             <input
//                 {...register('image')}
//                 type="text"
//                 placeholder="image URL"
//                 className="p-3 border rounded"
//             />

//             <button
//                 type="submit"
//                 className="bg-green-600 text-white p-3 rounded"
//             >
//                 Add User
//             </button>
//         </form>
//     );
// }

// export default Form;


// ROUTING - GO FROM ONE PAGE TO ANOTHER AND OTHER THINGS
// IT IS USED SO THAT WHEN WE CLICK LINK TO GO TO NEXT PAGE THE PAGE DOESNT REFRESH 
// NOW WE HAVE DID ROUTES AND ROUTE SO THAT NAV BAR REMAINS STATIC 
// HOW TO HIGHLIGHT NAV BAR COMPONENTS WITH COLOR AND OTHER PROPERITES USING NAVLINK 
// WE CAN USE STYLE OR CLASSNAME FOR DESGINING

// import React from 'react'
// import Card from './Components/Card'
// import { Link, NavLink, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import User from './User'
// import About from './About'

// function App() {
//   return (
//     <div>
//         <nav className='flex justify-center gap-5 mt-3'>
//             <NavLink className={(e)=>{
//                 return [
//                     e.isActive ? "text-red-800" : "",
//                     e.isActive ? "text-2xl" : "",
//                 ].join(" ")
//             }} to="/">Home</NavLink>

//             <NavLink style={(e)=>{
//                 return {
//                     color:e.isActive ? "tomato" : "",
//                 }
//             }} to="/user">User</NavLink>

//             <NavLink to="/about">
//             {(e)=>{
//                 return <span className={[
//                     e.isActive ? "text-red-300" : "",
//                     e.isActive ? "text-2xl" : "",
//                 ].join(" ")} >About</span>
//             }}
//             </NavLink>

//         </nav>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/user" element={<User/>}/>
//             <Route path="/about" element={<About/>}/>
//         </Routes>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function Home() {
//   return (
//     <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>Home</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//   )
// }

// export default Home



// import React from 'react'

// function User() {
//   return (
//       <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>User</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//   )
// }

// export default User



// import React from 'react'

// function About() {
//   return (
//        <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>About</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//   )
// }

// export default About



// DYNAMIC ROUTING
// import React from 'react'
// import Card from './Components/Card'
// import { Link, NavLink, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import User from './User'
// import About from './About'
// import UserDetail from './UserDetail'


// function App() {
//   return (
//     <div>
//         <nav className='flex justify-center gap-5 mt-3'>
//             <NavLink className={(e)=>{
//                 return [
//                     e.isActive ? "text-red-800" : "",
//                     e.isActive ? "text-2xl" : "",
//                 ].join(" ")
//             }} to="/">Home</NavLink>

//             <NavLink style={(e)=>{
//                 return {
//                     color:e.isActive ? "tomato" : "",
//                 }
//             }} to="/user">User</NavLink>

//             <NavLink to="/about">
//             {(e)=>{
//                 return <span className={[
//                     e.isActive ? "text-red-300" : "",
//                     e.isActive ? "text-2xl" : "",
//                 ].join(" ")} >About</span>
//             }}
//             </NavLink>

//         </nav>
//         {/* <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/user" element={<User/>}/>
//             <Route path="/user/:name" element={<UserDetail/>}/>
//             <Route path="/about" element={<About/>}/>
//         </Routes> */}
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/user" element={<User/>}>
//             <Route path="/user/:name" element={<UserDetail/>}/>
//             </Route>
//             <Route path="/about" element={<About/>}/>
//         </Routes>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function Home() {
//   return (
//     <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>Home</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//   )
// }

// export default Home

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// function User() {
//   return (
//     <div>
//       <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>User</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//     <div className='w-30 h-10 bg-blue-300 flex justify-center items-center m-auto hover:bg-red-300 '>
//     <Link to="/user/Jack">Jack</Link>
//     </div>
//     <div className='w-30 h-10 bg-blue-300 flex justify-center items-center m-auto hover:bg-red-300 '>
//     <Link to="/user/Oggy">Oggy</Link>
//     </div>
//     <div className='w-30 h-10 bg-blue-300 flex justify-center items-center m-auto hover:bg-red-300 '>
//     <Link to="/user/Ninja">Ninja</Link>
//     </div>
//       <Outlet/>
//     </div>

   
//   )
// }

// export default User

// import React from 'react'

// function About() {
//   return (
//        <div className='w-1/2 m-auto mt-10'>
//         <h1 className='text-bold text-red-500 text-5xl mb-4'>About</h1>
//         <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, facere at aliquid ipsam possimus molestiae vero eveniet voluptates ex.</p>
//         <button className='p-3 bg-blue-300 text-white'>Explore More</button>
//     </div>
//   )
// }

// export default About




// USAGE WITH API
// CONNECTING FRONTEND TO BACKEND IS AJAX , FOR AJAX WE USE FETCH OR AXIOS
// USE FAKESTOREAPI.COM
// import React, { useState } from 'react'
// import Card from './Components/Card'
// import axios from 'axios';


// function App() {
    
//     const[products,setproducts] = useState([]);

//     const getproducts = ()=>{
//         const api = "https://fakestoreapi.com/products";

//     axios
//     .get(api).then(products =>{
//         console.log(products);
//         setproducts(products.data);
//     }).catch(error=>console.log(error))

//     };

//     const addproducts = ()=>{
//     const api = "https://fakestoreapi.com/products";

//     axios
//     .post(api,{

//     "id": 0,
//     "title": "string",
//     "price": 0.1,
//     "description": "string",
//     "category": "string",
//     "image": "http://example.com"

//     })
//     .then(res =>{
//         console.log(res);
//     })
//     .catch(error=>console.log(error))

//     };

//   return (
//     <div>
//     <button className='w-10 h-10 bg-red-300 m-3' onClick={getproducts}>Get</button>
//     <button className='w-10 h-10 bg-red-300' onClick={addproducts}>Add</button>
//     <hr className='mb-4'></hr>
//     <ul>
//         {products.length > 0 ? products.map(p=><li>{p.title}</li>) : "no products"}
//     </ul>
//     </div>
//   )
// }

// export default App


// LIFE CYCLE METHOD
// COMP MOUNT - creation
// COMP UPDATE - update
// COMP UNMOUNT - delete

// USE - USEEFFECT

