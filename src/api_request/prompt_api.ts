import axios from "axios";
import { input } from "@inquirer/prompts";
import "dotenv/config";
interface MessageResponse {
  id: string;
  created: string;
  model: string;
  choices: {
    message: {
      content: string;
      role: string;
    };
    index: number;
    finish_reason: string;
    seed: number;
  }[];
  usage: {
    prompt_tokens: 22;
    completion_tokens: 160;
    total_tokens: 182;
  };
}

// You must create .env file in the root directory of your project
// and add the key AI_PROMPT_KEY to it
// Example: AI_PROMPT_KEY=1234567890
export const getLocationApi = async () => {
  const API_KEY = process.env.AI_PROMPT_KEY;
  if (!API_KEY) {
    console.error("API Key not found");
    return;
  }
  if (API_KEY === "YOUR_API_KEY") {
    console.error("Please replace the API Key with your own");
    return;
  }
  console.log("Ask me anything! (Ctrl+C to exit)");
  let isContinue = true;
  while (isContinue) {
    try {
      const inputText = await input({
        message: "What would you like to know?",
        required: true,
      });
      console.log("Loading...");
      try {
        const response = await axios.post<MessageResponse>(
          "https://api.aimlapi.com/chat/completions",
          {
            model: "allenai/OLMo-7B-Instruct",
            messages: [
              {
                role: "user",
                content: inputText,
              },
            ],
            max_tokens: 512,
            stream: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        console.info("==> " + response.data.choices[0].message.content);
      } catch (apiError: any) {
        isContinue = false;
        console.log("Error when fetching data");
        console.error(apiError.response.data);
      }
    } catch (error) {
      isContinue = false;
      console.log("Exiting when prompt to input");
    }
  }
};
getLocationApi();
