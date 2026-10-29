'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface DashboardTemplateProps {
  children: ReactNode;
}

export default function DashboardTemplate({ children }: DashboardTemplateProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('DashboardTemplate mounted(ываы)');
  }, []);

  return (
    <div className="flex flex-1 flex-col rounded-lg border-4 border-dashed border-purple-400 p-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-widest text-purple-400">
          Dashboard Template
        </div>

        <div className="flex flex-col items-end">
          <label className="mb-1 text-[10px] font-bold uppercase text-purple-300">
            Volatile State (Template)
          </label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Сбросится при переходе..."
            className="w-64 rounded border-2 border-purple-100 bg-white p-2 text-sm text-black outline-none focus:border-purple-400"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
