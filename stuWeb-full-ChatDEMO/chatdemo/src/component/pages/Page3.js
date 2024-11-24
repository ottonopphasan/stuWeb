import React, { useEffect, useState } from "react";

const Page3 = () => {
  const [messages, setMessages] = useState([]);

  // Function to retrieve and set messages from localStorage
  const fetchMessages = () => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages); // Update state with the latest messages
  };

  useEffect(() => {
    // Initial fetch of messages
    fetchMessages();

    // Set an interval to check for new messages every 2 seconds
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 2000); // 2 seconds interval

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Page 3</h1>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        messages.map((message, index) => (
          <div key={index} className="w-3/4 p-4 bg-white shadow rounded-lg mt-4">
            <h2 className="text-xl font-semibold mb-2">
              Message {index + 1}:
            </h2>
            <div>
              <p><strong>Topic:</strong> {message.topic || "No topic assigned"}</p> {/* Display the topic */}
              <p><strong>Type:</strong> {message.type}</p>
              <p><strong>Content:</strong> {message.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Page3;
