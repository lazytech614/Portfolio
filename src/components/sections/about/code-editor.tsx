'use client';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  loadingDone?: boolean;
}

const CodeEditor = ({ loadingDone = true }: CodeEditorProps) => {
  const codeLines = [
    { number: 1, content: '<span class="text-gray-500">&lt;</span><span class="text-red-400">!DOCTYPE</span><span class="text-white"> html</span><span class="text-gray-500">&gt;</span>' },
    { number: 2, content: '<span class="text-gray-500">&lt;</span><span class="text-red-400">html</span><span class="text-gray-500">&gt;</span>' },
    { number: 3, content: '<span class="text-gray-500 pl-4">&lt;</span><span class="text-red-400">head</span><span class="text-gray-500">&gt;</span>', indent: 1 },
    { number: 4, content: '<span class="text-gray-500">&lt;</span><span class="text-green-400">title</span><span class="text-gray-500">&gt;</span><span class="text-white">Frontend Developer</span><span class="text-gray-500">&lt;/</span><span class="text-green-400">title</span><span class="text-gray-500">&gt;</span>', indent: 2 },
    { number: 5, content: '<span class="text-gray-500">&lt;/</span><span class="text-red-400">head</span><span class="text-gray-500">&gt;</span>', indent: 1 },
    { number: 6, content: '<span class="text-gray-500">&lt;</span><span class="text-red-400">body</span><span class="text-gray-500">&gt;</span>', indent: 1 },
    { number: 7, content: '<span class="text-gray-500">&lt;</span><span class="text-green-400">h1</span><span class="text-gray-500">&gt;</span><span class="text-yellow-300">About Me</span><span class="text-gray-500">&lt;/</span><span class="text-green-400">h1</span><span class="text-gray-500">&gt;</span>', indent: 2 },
    { number: 8, content: '<span class="text-gray-500">&lt;</span><span class="text-green-400">p</span><span class="text-gray-500">&gt;</span><span class="text-white">Passionate frontend developer specializing in React & Next.js</span><span class="text-gray-500">&lt;/</span><span class="text-green-400">p</span><span class="text-gray-500">&gt;</span>', indent: 2 },
    { number: 9, content: '<span class="text-gray-500">&lt;</span><span class="text-green-400">div</span><span class="text-blue-400"> class</span><span class="text-gray-500">=</span><span class="text-orange-300">&quot;skills&quot;</span><span class="text-gray-500">&gt;</span>', indent: 2 },
    { number: 10, content: '<span class="text-white">Frontend: React, NextJS, TypeScript</span>', indent: 3 },
    { number: 11, content: '<span class="text-white">Styling: Tailwind CSS, Framer Motion</span>', indent: 3 },
    { number: 12, content: '<span class="text-gray-500">&lt;/</span><span class="text-green-400">div</span><span class="text-gray-500">&gt;</span>', indent: 2 },
    { number: 13, content: '<span class="text-gray-500">&lt;/</span><span class="text-red-400">body</span><span class="text-gray-500">&gt;</span>', indent: 1 },
    { number: 14, content: '<span class="text-gray-500">&lt;/</span><span class="text-red-400">html</span><span class="text-gray-500">&gt;</span>' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="my-16"
    >
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-[#0d1117] shadow-2xl">
        {/* VS Code Header */}
        <div className="flex items-center justify-between bg-[#21262d] px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#28ca42]"></div>
          </div>
          <div className="text-sm text-gray-400">about-me.html</div>
          <div className="w-16"></div>
        </div>
        
        {/* Code Content */}
        <div className="p-6 font-mono text-sm">
          <div className="flex">
            {/* Line Numbers */}
            <div className="mr-4 select-none text-gray-500">
              {codeLines.map((line) => (
                <div key={line.number} className="leading-6">
                  {line.number}.
                </div>
              ))}
            </div>
            
            {/* Code Lines */}
            <div className="flex-1">
              {codeLines.map((line) => (
                <div 
                  key={line.number} 
                  className="leading-6"
                  style={{ paddingLeft: `${(line.indent || 0) * 16}px` }}
                  dangerouslySetInnerHTML={{ __html: line.content }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Terminal */}
        <div className="bg-[#0d1117] px-6 pb-4">
          <div className="inline-block rounded bg-green-500 px-3 py-1 text-sm font-medium text-black">
            npm install awesome
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
