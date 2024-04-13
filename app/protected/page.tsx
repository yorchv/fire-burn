"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getFood } from "@/lib/api/getItem";

const entries = [
  {
    id: 1,
    title:
      "🍕 Pizza Planet with a couple dashes of bad manners and more things to say just to fill up the space. And give them as many dashes as possible.",
    location: "Pizza Planet",
    createdBy: "@11232",
  },
  {
    id: 2,
    title: "Hot Dog",
    location: "Pizza Planet",
    createdBy: "@11232",
  },
  {
    id: 3,
    title: "Hamburguer",
    location: "Pizza Planet",
    createdBy: "@11232",
  },
];

export default function Component() {
  // const { data, error } = getFood();
  const [startEntry, setStartEntry] = useState(false);
  const [startPlusOneFire, setStartPlusOneFire] = useState(false);
  const [startPlusOneTrash, setStartPlusOneTrash] = useState(false);
  const [startPlusOneTry, setStartPlusOneTry] = useState(false);

  const [currentEntry, setCurrentEntry] = useState(entries[0]);

  const [totalFire, setTotalFire] = useState(0);
  const [totalTrash, setTotalTrash] = useState(0);
  const [totalTry, setTotalTry] = useState(0);

  const animationVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: [-80, -120], opacity: [1, 0] },
  };

  const entryAnimationVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -50, opacity: 0 },
  };

  const handleMoveToNextEntry = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const nextIndex = currentEntry.id % entries.length;
    setCurrentEntry(entries[nextIndex]);
    setStartEntry(false);
  };

  const handleClickFire = () => {
    setStartPlusOneFire(true);
    setTotalFire(totalFire + 1);
    setStartEntry(true);
    handleMoveToNextEntry();
  };

  const handleClickTrash = () => {
    setStartPlusOneTrash(true);
    setTotalTrash(totalTrash + 1);
    setStartEntry(true);
    handleMoveToNextEntry();
  };

  const handleClickTry = () => {
    setStartPlusOneTry(true);
    setTotalTry(totalTry + 1);
    setStartEntry(true);
    handleMoveToNextEntry();
  };

  return (
    <div className="flex items-center w-full min-h-screen justify-center bg-[#F9F7F3]">
      <div className="absolute top-2 right-4 flex gap-2">
        <span aria-label="Fire" role="img">
          <span className="font-bold font-babakOne text-[#EDDEA4]">Try</span> 👀
          ({totalTry})
        </span>
        <span aria-label="Fire" role="img">
          <span className="font-bold font-babakOne text-[#B5E2FA]">Trash</span>{" "}
          🗑️ ({totalTrash})
        </span>
        <span aria-label="Fire" role="img">
          <span className="font-bold font-babakOne text-[#F7A072]">Fire</span>{" "}
          🔥 ({totalFire})
        </span>
        <span>Account</span>
      </div>

      <Card className="flex flex-col p-4 max-w-full w-full h-[100vh] border-none justify-end bg-[#F9F7F3]">
        <CardContent className="p-0 flex flex-col gap-2 h-full justify-center">
          <motion.div
            className="flex flex-col gap-2 items-center"
            animate={startEntry ? "visible" : "hidden"}
            variants={entryAnimationVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              Created by{" "}
              <span className="font-bold">{currentEntry.createdBy}</span>
            </div>
            <div className="text-3xl md:text-5xl font-bold flex items-center flex-col">
              {currentEntry.title}
            </div>
            <div>
              <span>{`📍 @ ${currentEntry.location}`}</span>
            </div>
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-center pt-8">
          <div className="flex justify-center gap-8">
            <TooltipProvider delayDuration={100}>
              <div className="relative">
                <Tooltip>
                  <TooltipContent side="bottom">Try</TooltipContent>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.5, rotate: 10, opacity: 0.8 }}
                      whileTap={{ scale: 1.5, opacity: 0.8, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        className="border border-gray-200 dark:border-gray-800 text-4xl p-5 bg-[#EDDEA4]"
                        size="lg"
                        variant="outline"
                        onClick={handleClickTry}
                      >
                        <span aria-label="Eyes" role="img">
                          👀
                        </span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                </Tooltip>
                <motion.div
                  animate={startPlusOneTry ? "visible" : "hidden"}
                  variants={animationVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-2xl font-bold text-[#EDDEA4] absolute left-1/2"
                  onAnimationComplete={() => setStartPlusOneTry(false)}
                >
                  + 1
                </motion.div>
              </div>

              <div className="relative">
                <Tooltip>
                  <TooltipContent side="bottom">Trash</TooltipContent>
                  <TooltipTrigger asChild className="relative">
                    <motion.div
                      whileHover={{ scale: 1.5, opacity: 0.8 }}
                      whileTap={{ scale: 1.5, opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        className="border border-gray-200 dark:border-gray-800 text-4xl p-5 bg-[#B5E2FA]"
                        size="lg"
                        variant="outline"
                        onClick={handleClickTrash}
                      >
                        <span aria-label="Wastebasket" role="img">
                          🗑️
                        </span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                </Tooltip>
                <motion.div
                  animate={startPlusOneTrash ? "visible" : "hidden"}
                  variants={animationVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-2xl font-bold text-[#B5E2FA] absolute left-1/2"
                  onAnimationComplete={() => setStartPlusOneTrash(false)}
                >
                  + 1
                </motion.div>
              </div>
              <div className="relative">
                <Tooltip>
                  <TooltipContent side="bottom">Fire</TooltipContent>
                  <TooltipTrigger asChild className="relative">
                    <motion.div
                      whileHover={{ scale: 1.5, rotate: -10, opacity: 0.8 }}
                      whileTap={{ scale: 1.5, opacity: 0.8, rotate: -10 }}
                      transition={{ duration: 0.2 }}
                      className=" z-10"
                    >
                      <Button
                        className="border border-gray-200 dark:border-gray-800 text-4xl p-5 bg-[#F7A072] hover:bg-white"
                        size="lg"
                        variant="outline"
                        onClick={handleClickFire}
                      >
                        <span aria-label="Fire" role="img">
                          🔥
                        </span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                </Tooltip>
                <motion.div
                  animate={startPlusOneFire ? "visible" : "hidden"}
                  variants={animationVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-2xl font-bold text-[#F7A072] absolute top left-1/2 z-0"
                  onAnimationComplete={() => setStartPlusOneFire(false)}
                >
                  + 1
                </motion.div>
              </div>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
