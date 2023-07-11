import { ChangeEvent, FunctionComponent, useState } from "react";

interface TimePickerProps {
  onChangeValue: (hours: number) => void;
}

const TimePicker: FunctionComponent<TimePickerProps> = ({ onChangeValue }) => {
  const [time, setTime] = useState<number>(0);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setTime(value);
    onChangeValue(value);
  }

  return (
    <input
      step="1"
      max="23"
      value={time}
      onChange={handleInputChange}
      className="w-full"
      type="range"
    />
  );
};

export { TimePicker };
