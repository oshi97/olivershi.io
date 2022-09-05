import { ChangeEvent, useState } from 'react'

type GenshinCharacters = Record<string, boolean>

const characters: GenshinCharacters = [
  'albedo',
  'aloy',
  'amber',
  'arataki itto',
  'barbara',
  'beidou',
  'bennett',
  'chongyun',
  'diluc',
  'diona',
  'eula',
  'fischl',
  'ganyu',
  'gorou',
  'hu tao',
  'jean',
  'kazuha',
  'kaeya',
  'ayaka',
  'keqing',
  'klee',
  'kujou sara',
  'lisa',
  'mona',
  'ningguang',
  'noelle',
  'qiqi',
  'raiden',
  'razor',
  'rosaria',
  'kokomi',
  'sayu',
  'shenhe',
  'sucrose',
  'childe',
  'thoma',
  'traveler',
  'venti',
  'xiangling',
  'xiao',
  'xingqiu',
  'xinyan',
  'yanfei',
  'yoimiya',
  'yun jin',
  'zhongli'
].reduce<GenshinCharacters>((previousValue, currentValue) => {
  previousValue[currentValue] = true
  return previousValue
}, {})

const CHARACTERS_LOCAL_STORAGE_KEY = 'genshin-checked-characters'
const localStorageCharacters = localStorage.getItem(CHARACTERS_LOCAL_STORAGE_KEY)

const defaultCharactersState = localStorageCharacters
  ? JSON.parse(localStorageCharacters)
  : characters

export default function Genshin() {
  const [checkedChars, setCheckedChars] =
    useState<GenshinCharacters>(defaultCharactersState)

  return (
    <div>
      <RandomTeamGenerator characters={checkedChars} />
      <CharacterSelection
        onChange={(e, c) => {
          const copy = { ...checkedChars }
          copy[c] = e.target.checked
          setCheckedChars(copy)
          localStorage.setItem(CHARACTERS_LOCAL_STORAGE_KEY, JSON.stringify(copy))
        }}
        characters={checkedChars}
      />
    </div>
  )
}

function RandomTeamGenerator({ characters }: { characters: GenshinCharacters }) {
  const [teams, setTeams] = useState<string[] | null>(null)
  const generateTeams = () => {
    const charactersArr = Object.keys(characters).filter(c => characters[c])
    const newTeams = []
    for (let i = 7; i >= 0; i--) {
      const index = Math.floor(Math.random() * charactersArr.length)
      newTeams.push(charactersArr[index])
      charactersArr.splice(index, 1)
    }
    setTeams(newTeams)
  }

  function renderTeams() {
    return (
      <div style={{ display: 'flex', margin: 10 }}>
        <TeamDisplay team={teams.slice(0, 4)} />
        <TeamDisplay team={teams.slice(4, 8)} />
      </div>
    )
  }

  return (
    <div>
      <button onClick={generateTeams}>Random Teams!</button>
      {teams && renderTeams()}
    </div>
  )
}

function TeamDisplay({ team }: { team: string[] }) {
  return (
    <div style={{ marginRight: 30 }}>
      {team.map(c => {
        return <div key={c}>{c}</div>
      })}
    </div>
  )
}

function CharacterSelection({
  onChange,
  characters
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void
  characters: GenshinCharacters
}) {
  return (
    <div>
      {Object.keys(characters).map(c => {
        return (
          <div key={c}>
            <input
              id={c}
              type='checkbox'
              checked={characters[c]}
              onChange={e => onChange(e, c)}
            />
            <label htmlFor={c}>{c}</label>
          </div>
        )
      })}
    </div>
  )
}
