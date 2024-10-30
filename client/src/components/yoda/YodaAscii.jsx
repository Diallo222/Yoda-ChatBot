import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const YodaAscii = ({ showDialog }) => {
  return (
    <motion.div className="">
      <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-sm xl:text-base font-silkscreen text-black font-bold text-center max-w-[300px] mx-auto">
        ⠀⠀⠀⠀⠀⠀⠀⢀⡠⢤⠋⠉⢉⡍⠟⠂⢤⡀⠀⠀⣀⠀⠀⠀⠀⠀
        <br />
        ⣤⣤⣤⠀⠀⢲⢴⠎⠗⠠⠶⠒⢈⠑⠒⠒⠄⠱⠶⠶⡯⠀⣤⣤⡴⢶
        <br />
        ⠻⡍⠉⠛⡟⠏⠈⠙⢏⣀⣀⣸⠉⠉⠉⠙⠀⣩⡝⠛⠋⠛⢩⡍⢡⠚
        <br />
        ⠀⠘⠣⣿⠛⣿⣿⡧⠄⠀⠀⢼⣽⣿⡟⠿⡤⠀⠸⠀⠘⣛⣺⠜⠃⠀
        <br />
        ⠀⠀⠀⣏⠒⠉⠉⠑⠦⢤⠀⢚⠉⠉⠑⠒⠁⢠⠤⢖⡒⢤⠈⠀⠀⠀
        <br />
        ⠀⠀⠀⠓⣤⠀⢸⢯⣤⣤⣤⣤⠙⡆⠀⠀⠀⠉⢠⣟⣃⢸⠀⠀⠀⠀
        <br />
        ⠀⠀⠀⠀⠀⣻⢤⠁⡀⠀⠀⠀⠀⠀⠀⢀⠠⠼⠒⠦⣄⠚⠀⠀⠀⠀
        <br />
        ⠀⠀⠀⠀⣤⠿⠈⡉⠑⡄⠀⠀⢲⡖⠂⠈⠀⡄⠀⠀⠻⣤⠀⠀⠀⠀
        <br />
        ⠀⠀⠀⠀⣿⢸⣿⣤⡟⣛⠛⢻⢿⣤⣌⣂⣉⡆⠀⠀⣀⣿⣀⠀⠀⠀
        <br />
        ⠀⠀⠀⣶⠛⠀⠸⡷⠶⠫⠖⣾⠿⡀⡙⠛⠋⠀⠀⠀⠇⠘⢹⠀⠀⠀
        <br />
        ⠀⠀⠀⣿⠀⠀⢨⡇⣤⠉⡉⣀⠀⠃⠁⠀⠀⠀⠀⠁⠀⣤⢾⠀⠀⠀
        <br />
        ⠀⠀⠀⠿⣀⠢⠘⡧⡄⠙⣤⢲⣤⠀⠀⠀⠀⣀⡠⠠⠟⢸⢸⠀⠀⠀
        <br />
        ⠀⠀⠀⠀⣿⠠⢴⣯⡷⢤⣿⣸⣻⣤⡶⣶⣶⣭⣥⣤⡄⢀⢸⠀⠀⠀
        <br />
        ⠀⠀⠀⠀⠻⣼⣟⣣⣯⣋⣹⣿⣿⣭⣟⣉⣿⣉⣹⣏⣻⣼⠚⠀⠀⠀
      </p>
      {showDialog && (
        <TypeAnimation
          sequence={[
            "Much to learn, you still have.",
            1500,
            "The greatest teacher, failure is.",
            2000,
            "Do or do not, there is no try.",
            1000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-md text-white mt-4 text-center bg-zinc-950 py-2 rounded-md"
        />
      )}
    </motion.div>
  );
};

export default YodaAscii;
