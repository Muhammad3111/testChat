import openai from "./chatgpt";

const query = async (messages: any, chatId: string, model: string) => {
  const res = await openai
    .createChatCompletion({
      model,
      messages,
    })
    .then((res) => res.data.choices[0].message?.content)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
};

export default query;
