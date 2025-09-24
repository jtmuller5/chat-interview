import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import * as readline from "readline";

/*
To read input from the command line:
rl.question('Enter something: ', (answer) => {
    console.log(`You entered: ${answer}`);
});
*/

/*
To close input stream:
rl.close();
*/

/*  
Generate AI response:
const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: answer,
    config: {
        systemInstruction: `System Instruction...`
    }
});

console.log("Response: ", response);
*/

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(message: string) {
  rl.question(message + "\n", async (answer) => {
    console.log("Echo: " + answer);
    rl.close();
  });
}

promptUser("What message would you like to leave?");
