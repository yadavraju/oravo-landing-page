"use client";

import { motion } from "framer-motion";

export default function AutoFormattingAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        {/* Before text - messy */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.3, 0] }}
          transition={{ duration: 2, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200"
        >
          <p className="text-sm text-gray-600 font-mono">
            hey john,lets meet tomorrow at 2pm.dont forget the documents
          </p>
        </motion.div>

        {/* Arrow animation */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-indigo-600"
          >
            <path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* After text - formatted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="bg-white rounded-lg p-4 shadow-lg border border-indigo-200"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Hey John,</span>
              <br />
              <br />
              Let's meet tomorrow at 2 PM. Don't forget the documents.
              <br />
              <br />
              <span className="text-gray-600">Best regards</span>
            </p>
          </motion.div>

          {/* Checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 4.5 }}
            className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M5 12L10 17L20 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Formatting badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 5 }}
          className="flex gap-2 justify-center flex-wrap"
        >
          {["Capitalization", "Punctuation", "Spacing", "Grammar"].map(
            (badge, i) => (
              <motion.div
                key={badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 5 + i * 0.1 }}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
              >
                {badge}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
