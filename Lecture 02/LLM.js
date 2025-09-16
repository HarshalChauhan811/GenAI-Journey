import { GoogleGenAI } from "@google/genai";
// import readline from 'readline-sync';
import readlineSync from 'readline-sync';



const ai = new GoogleGenAI({ apiKey: "AIzaSyASU_JT5ZB4AfTmhdd3hJUlDp77qXhy7T" });

// ek array jo history ko maintain kaega 
const History = []

async function chat(userProblem) {  // ✅ userProblem passed here
  History.push({
    role:"user",
    parts:[{text:userProblem}]
  })
  const response = await ai.models.generateContent({
     model: "gemini-2.5-flash",
     contents:History

  });

  History.push({
    role:"model",
    parts:[{text:userProblem}]  // ✅ Push model reply instead of user input
  })

  console.log("\n");
  console.log(response.text);  // ✅ Print actual model response text
}

main();

async function main (){
  const userProblem = readlineSync.question("Ask me Anything --> ");  // yaha se question ask 
  await chat(userProblem);  // await ke baad hi main wala fn call hoga ans aane ke baad new question 
  main();  // chat krne pe baar baar questions ko puchte jate hai isliye yaha se call 
}


// PROBLEM HAI --> HISTORY KO ARRAY ME MANUALLY BNANA PADTA THA AAP USSE AUTOMATE BHI KAR SKTE HO SEE THE ANOTHE FILE 
