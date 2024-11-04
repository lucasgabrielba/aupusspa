
import * as React from "react"
import { addDays, format, Locale } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { Calendar } from "./calendar"

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  startDate: Date | null
  endDate: Date | null
  onStartDateChange: (date: Date | null) => void
  onEndDateChange: (date: Date | null) => void
  locale?: Locale
}

export default function DatePickerWithRange({
  className,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  locale = ptBR, 
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startDate || new Date(2022, 0, 20),
    to: endDate || addDays(new Date(2022, 0, 20), 20),
  })

  React.useEffect(() => {
    if (date?.from) {
      onStartDateChange(date.from)
    }
    if (date?.to) {
      onEndDateChange(date.to)
    }
  }, [date, onStartDateChange, onEndDateChange])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-auto justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yy", { locale })} -{" "}
                  {format(date.to, "dd/MM/yy", { locale })}
                </>
              ) : (
                format(date.from, "dd/MM/yy", { locale })
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
