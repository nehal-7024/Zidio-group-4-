import TodoList from "@/components/TodoList";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen p-6 bg-gray-500 hover:bg-gray-400">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-2 text-slate-900">Todo List</h1>
          <p className="text-slate-950">Stay organized and productive</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <Card className="p-4 backdrop-blur-lg border border-[#D3E4FD]/10 shadow-lg h-fit bg-slate-800 hover:bg-slate-700">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md bg-zinc-400 hover:bg-zinc-300" />
          </Card>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Index;
