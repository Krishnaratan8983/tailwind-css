import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Frame from "./frame.svg";
import FrameTwo from "./frametwo.svg";

export default function DropdownPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [bounceMap, setBounceMap] = useState<{ [key: number]: boolean }>({});

  const messages = [
    {
      id: 1,
      name: "Cool guy",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci, blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet, tempus lectus ac, faucibus quam. Praesent euismod congue cursus. Phasellus tincidunt sem vitae neque egestas, ut egestas justo venenatis.",
    },
    { id: 2, name: "Someone", message: "Lorem ipsum" },
    { id: 3, name: "Someone else", message: "Lorem ipsum" },
    { id: 4, name: "Who else", message: "@Someone else Lorem Indeed!" },
    { id: 5, name: "No one", message: "Cool!" },
  ];

  const handleToggle = () => {
    if (!collapsed) {
      setCollapsed(true);
    } else {
      const newBounceMap: { [key: number]: boolean } = {};
      messages.slice(1).forEach((msg) => {
        newBounceMap[msg.id] = true;
      });
      setBounceMap(newBounceMap);
      setCollapsed(false);
      setTimeout(() => {
        setBounceMap({});
      }, 200);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="rounded-xl border-2 border-red-500 p-4"
        style={{
          width: "476px",
          backgroundColor: "#CECED9",
        }}
      >
        {/* Always show Cool guy */}
        {messages
          .filter((msg) => msg.name === "Cool guy")
          .map((msg) => {
            const bounce = bounceMap[msg.id];
            return (
              <div
                key={msg.id}
                className={`transition-all duration-300 ease-in-out flex space-x-4 items-start pt-4 border-t first:border-none ${
                  bounce ? "animate-bounceOnce origin-top" : ""
                }`}
              >
                <div className="w-10 h-10 rounded bg-red-600 shrink-0" />
                <div className="w-0 flex-1">
                  <h2 className="font-bold">{msg.name}</h2>
                  <p>{msg.message}</p>
                  <div className="flex space-x-2 mt-2">
                    <img src={Frame} alt="Frame icon" className="w-6 h-6" />
                    <img src={FrameTwo} alt="Frame icon" className="w-6 h-6" />
                  </div>
                  <div className="border-b border-red-300 mt-2 w-full h-[1px] opacity-70" />
                </div>
              </div>
            );
          })}

        {/* Animate remaining messages */}
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              key="messages"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {messages
                .filter((msg) => msg.name !== "Cool guy")
                .map((msg) => {
                  const bounce = bounceMap[msg.id];
                  return (
                    <div
                      key={msg.id}
                      className={`transition-all duration-300 ease-in-out flex space-x-4 items-start pt-4 border-t ${
                        bounce ? "animate-bounceOnce origin-top" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded bg-red-600 shrink-0" />
                      <div className="w-0 flex-1">
                        <h2 className="font-bold">{msg.name}</h2>
                        <p>{msg.message}</p>

                        {(msg.name === "No one") && (
                          <div className="flex space-x-2 mt-2">
                            <img
                              src={Frame}
                              alt="Frame icon"
                              className="w-6 h-6"
                            />
                            <img
                              src={FrameTwo}
                              alt="Frame icon"
                              className="w-6 h-6"
                            />
                          </div>
                        )}

                        {msg.name === "Someone else" && (
                          <div className="mt-2">
                            <img
                              src={FrameTwo}
                              alt="Frame icon"
                              className="w-6 h-6"
                            />
                          </div>
                        )}

                        {msg.name === "Who else" && (
                          <div className="mt-2">
                            <img
                              src={Frame}
                              alt="Frame icon"
                              className="w-6 h-6"
                            />
                          </div>
                        )}

                        <div className="border-b border-red-300 mt-2 w-full h-[1px] opacity-70" />
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="mt-4 text-center text-red-600 font-bold underline w-full"
        >
          {collapsed ? "Open" : "Close"}
        </button>
      </div>
    </div>
  );
}
