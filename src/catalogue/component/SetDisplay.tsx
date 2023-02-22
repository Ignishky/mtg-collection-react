import Set from '../model/Set'

interface SetProps {
  set: Set
}

export const SetDisplay = ({ set }: SetProps) => {
  return (
    <div>
      <img height='50px' src={set.icon} alt={set.code + '#'} />
      {set.name}
    </div>
  )
}
