import React, { useState } from 'react'
import "./PasswordGenerator.scss"
import copyImage from "../../../assets/images/copy1.png"

export const PasswordGenerator = () => {

  const [characterLength, setCharacterLength] = useState<number | string>("")
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumber, setIncludeNumber] = useState(true)
  const [includeSymbol, setIncludeSymbol] = useState(true)

  const [password, setPassword] = useState(() => generatePassword())


  function generatePassword(
    characterAmount = characterLength,
    includeUpper = includeUppercase,
    includeLower = includeLowercase,
    includeNumbers = includeNumber,
    includeSymbols = includeSymbol
  ) {
    const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz"
    const NUMBER_CHAR = "1234567890"
    const SYMBOL_CHAR = "!\"@#$%^&*()-=_+[]{}|;':,./<>?`~"

    let combinedCharacters: string | number = "";

    if (includeUpper) combinedCharacters += UPPERCASE_CHAR
    if (includeLower) combinedCharacters += LOWERCASE_CHAR
    if (includeNumbers) combinedCharacters += NUMBER_CHAR
    if (includeSymbols) combinedCharacters += SYMBOL_CHAR

    let password = ""
    for (let i = 0; i < characterAmount; i++) {
      password += combinedCharacters.charAt(Math.floor(Math.random() * combinedCharacters.length))
    }

    return password;

  }

  // const bars = [
  //   { id: 1, color: "#FF3A3A"},
  //   { id: 2, color: "#FF3A3A"},
  //   { id: 3, color: "#FFC225"},
  //   { id: 4, color: "#3OBF19"},
  // ]

  // const getBarColor = (barIndex: number) => {
  //   if(characterLength <=3 && barIndex === 1) {
  //     return "#FF3A3A"
  //   } else if (characterLength > 3 && characterLength <=6 && barIndex <= 2) {
  //     return "#FF3A3A"
  //   } else if (characterLength > 6 && characterLength <=9 && barIndex <= 3) {
  //     return "#FFC225"
  //   } else if (characterLength > 9 && barIndex <= 4) {
  //     return "#3OBF19"
  //   } 
  // }

  return (
    <div className='homepage-main-component'>
      <h2 className='homepage-main-component_title'>Password Generator</h2>
      <div className='homepage-main-component_character-length'>
        <h3>Character Length</h3>
        <h3>0</h3>
        <input type="range" min={1} max={16} step={1} />
      </div>
      <div className='homepage-main-component_options-field'>
        <div className='homepage-main-component_options-field_checkbox'>
          <input type="checkbox" name='upper' id='upper' />
          <label htmlFor="upper">Include Uppercase Letter</label>
        </div>
        <div className='homepage-main-component_options-field_checkbox'>
          <input type="checkbox" name='lower' id='lower' />
          <label htmlFor="lower">Include Lowercase Letter</label>
        </div>
        <div className='homepage-main-component_options-field_checkbox'>
          <input type="checkbox" name='numbers' id='numbers' />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className='homepage-main-component_options-field_checkbox'>
          <input type="checkbox" name='symbols' id='symbols' />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
      <div className='homepage-main-component_strenght-of-password'>
        <div className='homepage-main-component_strenght-of-password_name'>
          <h3>Strenght</h3>
          <h4>Low password strenght</h4>
        </div>
        {/* <div>
          {bars.map((bar) => (
            <div
              key={bar.id}
              className="bar"
              style={{ backgroundColor: getBarColor(bar.id) }} 
            ></div>
          ))}
        </div> */}
      </div>
      <input type="text" className='homepage-main-component_generated-password' />
      <button className='homepage-main-component_copy-button'>
        <img src={copyImage} className='homepage-main-component_copy-button_copy-icon' />
        Copy Password
      </button>
    </div>
  )
}
