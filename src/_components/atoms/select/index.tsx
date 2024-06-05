import {
  Select as SelectCN,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/_components/ui/select'

interface IItem {
  label: string
  value: string
}

interface ISelect {
  placeholder?: string
  items: IItem[]
  onChange?: (value: string) => void
  defaultValue?: string
}

export function Select({
  placeholder,
  items,
  defaultValue,
  onChange,
}: ISelect) {
  return (
    <SelectCN onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectCN>
  )
}
