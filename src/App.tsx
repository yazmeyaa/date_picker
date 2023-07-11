import { useState } from "react";
import { TransportDayPicker } from "./components/DoubleDatePicker";
import { DateRange } from "react-day-picker";

function App() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  return (
    <main className="h-screen w-full flex items-center justify-center flex-col gap-4">
      <h1>Date picker</h1>
      <TransportDayPicker defaultMonth={new Date()} callback={setRange} />
      <div>
        <SelectedDatas range={range} />
      </div>
    </main>
  );
}

interface SelectedDatasProps {
  range: DateRange | undefined;
}

function SelectedDatas({ range }: SelectedDatasProps) {
  if (!range) {
    return <h2>Выберите диапазон дат</h2>;
  } else {
    return (
      <div className="flex flex-col gap-4">
        <span>{range.from?.toString()}</span>
        <span>
          {range.to?.toString() || "Выберите дату возврата транспорта"}
        </span>
      </div>
    );
  }
}

export { App };
