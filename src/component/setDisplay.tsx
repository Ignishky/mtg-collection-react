import Set from '../type/Set'

interface SetProps {
  set: Set
}

export const SetDisplay = ({ set }: SetProps) => {
  return (
    <div className="border bg-light">
      <img height='50px' src={set.icon} alt={set.code} />
      {set.name}
    </div>
  )
}
