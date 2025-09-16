// Import the GoogleGenAI module from the official "@google/genai" package
import { GoogleGenAI } from "@google/genai";

// Import the readline-sync module to get user input from the terminal
import readlineSync from 'readline-sync';

// Initialize the GoogleGenAI instance with your API key
const ai = new GoogleGenAI({
  apiKey: "AIzaSyASU_JT5ZB4AfTmhdd3hJUlDp77qXhy7T"  // WARNING: Never expose your API key in public code!
});

// Create a chat session with Gemini model (gemini-2.5-flash)
// No need to manually maintain history, the model handles it internally
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],  // Empty history; model will manage it automatically
});

// Start the main chat loop
main();

// Define the main function to handle user interaction
async function main () {
  // Prompt the user to ask a question or give an input
  const userProblem = readlineSync.question("Ask me Anything --> ");

  // Send the user's input to the Gemini chat model and wait for the response
  const response = await chat.sendMessage({
    message: userProblem,
  });

  // Output the model's response to the console
  console.log(response.text);

  // Call the main function again to continue the chat loop
  main();
}



// PROBLEM HAI --> HISTORY KO ARRAY ME MANUALLY BNANA PADTA THA AAP USSE AUTOMATE BHI KAR SKTE HO SEE THE ANOTHE FILE 
// Manually history ko bnane ki need nahi hai 
// yaha se is problem ka solution ho gya 
