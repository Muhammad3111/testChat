"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //useSWR
  const model = "gpt-3.5-turbo";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: session?.user?.name, content: input }],
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT has responded", {
        id: notification,
      });
    });
  };

  return (
    <div className="backdrop-blur-md">
      <form
        onSubmit={sendMessage}
        className="py-3 mb-10 px-4 space-x-5 flex w-2/3 mx-auto bg-gray-700/50 text-gray-400 rounded-xl text-md border border-black/40"
      >
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 "
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-2 py-2 rounded-md disabled:bg-transparent disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
