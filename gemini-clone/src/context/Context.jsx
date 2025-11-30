import React, { createContext, useState } from 'react'

export const Context =createContext()
const ContextProvider = (props) => {
  const[recentPrompt,setRecentPrompt]=useState("")
  const[showResult,setShowResult]=useState(false)
  const[loading,setLoading]=useState(false)
  const[resultData,setResultData]=useState("")
  const[input,setInput]=useState("")
  const[prevPrompt,setPrevPrompt]=useState([])

  function delayPara(index,nextWord){
    setTimeout(function(){
      setResultData((prev)=>prev+nextWord)
    },75 * index)
  }

  const onSent=async(prompt)=>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    let response
    if(prompt !== undefined){
      response= await runChat(prompt)
      setRecentPrompt(prompt)
    }else{
      setPrevPrompt((prev)=>[...prev,input])
      setRecentPrompt(input)
      response=await runChat(input)
    }
     // console.log(response);

    let responsArray=response.split("**")
    let newArray=""
    for(let i=0;i<responsArray.length;i++){
      if(i===0||i%2!==1){
        newArray +=responsArray[i]
      }else{
        newArray += "<b>" + responsArray[i]+ "<b>"
      }
    }
    //console.log(newArray)
    responsArray=newArray.split("*").join("<b>").split(" ")
    for(let i= 0; i<responsArray.length;i++){
      const nextWord=responsArray[i]
      delayPara(i,nextWord+" ")
    }
    setLoading(false)
    setInput("")
  }

  const newChat=async()=>{
    setLoading(false)
    setShowResult(false)
  }

  const contextValue={
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,

    onSent,
    showResult,
    loading,
    resultData,
    newChat,
  }
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider