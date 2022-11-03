import Set from '../type/Set'

interface SetProps {
  set: Set
}

export const SetDisplay = ({ set }: SetProps) => {
  return (
    <div className="border bg-light">
      {set.code}#{set.name}
    </div>
  )
}