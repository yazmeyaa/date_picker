import { FunctionComponent, useEffect, useState } from "react";
import type { SelectRangeEventHandler, DateRange } from "react-day-picker";
import { setHours } from "date-fns";
import { DayPicker } from "react-day-picker";
import { TimePicker } from "./TimeRange";
import { ru } from 'date-fns/locale'

interface TransportDayPickerProps {
  defaultMonth: Date;
  callback: (range: DateRange | undefined) => void;
}

const TransportDayPicker: FunctionComponent<TransportDayPickerProps> = ({
  defaultMonth,
  callback,
}) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [takeCarTime, setLetCarTime] = useState(0);
  const [returnCarTime, setTakeCarTime] = useState(0);

  const handleChangeRange: SelectRangeEventHandler = (range) => {
    setRange(range); //* DateRange type here
  };

  useEffect(() => {
    setRange((prev) => {
      const newValue = structuredClone(prev);
      if (newValue) {
        if (newValue.from) {
          newValue.from = setHours(newValue.from, takeCarTime);
        }
        if (newValue.to) {
          newValue.to = setHours(newValue.to, returnCarTime);
        }
      }
      return newValue;
    });
  }, [takeCarTime, returnCarTime]);

  useEffect(() => {
    callback(range);
  }, [range]);

  return (
    <div className="rounded-xl border border-zinc-300">
      <DayPicker
        mode="range"
        numberOfMonths={2}
        showOutsideDays
        selected={range}
        onSelect={handleChangeRange}
        defaultMonth={defaultMonth}
        locale={ru}
      />
      <footer className="flex w-full justify-around border-t py-2">
        <section className="flex flex-col gap-2 basis-full px-4">
          <div className="w-full flex justify-between">
            <span>Получение транспорта</span>
            <span>{takeCarTime.toString().padStart(2, "0")}:00</span>
          </div>
          <TimePicker onChangeValue={setLetCarTime} />
        </section>

        <section className="flex flex-col gap-2 basis-full px-4">
          <div className="w-full flex justify-between">
            <span>Возврат транспорта</span>
            <span>{returnCarTime.toString().padStart(2, "0")}:00</span>
          </div>
          <TimePicker onChangeValue={setTakeCarTime} />
        </section>
      </footer>
    </div>
  );
};

export { TransportDayPicker };
