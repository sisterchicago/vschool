import React, {useState, useRef} from "react"
import { ChromePicker } from 'react-color'
import { TextField, TextareaAutosize, Slider, Box, Button, Typography, FormControl, ButtonGroup } from "@mui/material"
import { ColorLensRounded } from '@mui/icons-material'


export default function App() {
    const [colorStateOne, setColorStateOne] = useState('lightblue')
    const [colorStateTwo, setColorStateTwo] = useState('teal')
    const [toggleStateOne, setToggleStateOne] = useState(false)
    const [toggleStateTwo, setToggleStateTwo] = useState(false)
    const [angle, setAngle] = useState(50)
    const [hardLine, setHardLine] = useState(60)
    const inputRef = useRef(null)

    const handleColorOneButton = () => {
        setToggleStateOne(prevState => !prevState)
    }
    const handleColorTwoButton = () => {
        setToggleStateTwo(prevState => !prevState)
    }
    const handleAngleSlider = (e, newAngle) => {
        setAngle(newAngle)
    }
    const handleAngleInput = (e) => {
        setAngle(e.target.value === '' ? '' : Number(e.target.value))
    }
    const handleHardLineSlider = (e, newHardLine) => {
        setHardLine(newHardLine)
    }
    const handleHardLineInput = (e) => {
        setHardLine(e.target.value === '' ? '' : Number(e.target.value))
    }

    return(
        <Box 
          sx={{ 
            width: '50%', 
            margin: '0 auto', 
            marginTop: '80px', 
            border: '5px solid grey', 
            textAlign: 'center', 
            padding: '10px' 
          }}
        >
            <Typography variant="h5">CSS Color Gradient Tool Generator</Typography>
            <FormControl>
                <TextareaAutosize 
                    style={{ 
                      width: 515, 
                      height: 300, 
                      background: `linear-gradient(${angle}deg, ${colorStateOne}, ${colorStateTwo} ${hardLine}%)` 
                    }}
                />
                <br />
                <TextareaAutosize 
                    readOnly 
                    style={{ width: 515, height: 100 }}
                    value={`background: linear-gradient(${angle}deg, ${colorStateOne} , ${colorStateTwo} ${hardLine}%)\n-moz-background: linear-gradient(${angle}deg, ${colorStateOne} , ${colorStateTwo} ${hardLine}%);\n-webkit: linear-gradient(${angle}deg, ${colorStateOne}, ${colorStateTwo} ${hardLine}%)`}
                />
                <br />
                <Box>
                    <Typography id='input-slider' gutterBottom>
                      Angle
                    </Typography>
                    <Slider 
                        style={{ width: '400px', marginRight: '20px'}}
                        aria-label='Angle'
                        defaultValue={angle}
                        max={360}
                        value={typeof angle === 'number' ? angle : 0}
                        onChange={handleAngleSlider}
                        text='Angle'
                    />
                    <TextField 
                        style={{ display: 'inline-block', width: '50px' }}
                        ref={inputRef}
                        variant='standard'
                        onChange={handleAngleInput}
                        value={angle}
                    />
                </Box>
                <Box>
                    <Typography id='input-slider' gutterBottom>
                        Hard Line
                    </Typography>
                    <Slider 
                        style={{ width: '400px', marginRight: '20px'}}
                        aria-label='Hard Line'
                        defaultValue={hardLine}
                        value={typeof hardLine === 'number' ? hardLine : 0}
                        onChange={handleHardLineSlider}
                        text='Hard Line'
                    />
                    <TextField 
                        style={{ display: 'inline-block', width: '50px' }}
                        variant='standard'
                        onChange={handleHardLineInput}
                        value={hardLine}
                    />
                </Box>
                <ButtonGroup style={{ marginTop: '20px'}}>
                    <Button
                        startIcon={<ColorLensRounded />}
                        name="color1" 
                        variant="contained" 
                        sx={{ 
                          display: "inline-block", 
                          height: 50, 
                          width: 200, 
                          backgroundColor: colorStateOne, 
                          padding: 0, 
                          marginRight: '120px' 
                        }}
                        onClick={handleColorOneButton}>
                            {toggleStateOne && <ChromePicker
                                name="gradientOne"
                                color={colorStateOne} 
                                onChange={(updatedColor) => setColorStateOne(updatedColor.hex)}
                              />}
                    Color 1</Button>
                    <Button 
                        startIcon={<ColorLensRounded />}
                        name="color2"
                        variant="contained" 
                        sx={{ 
                          display: "inline-block", 
                          height: 50, 
                          width: 200, 
                          backgroundColor: colorStateTwo, 
                          padding: 0 
                        }}
                        onClick={handleColorTwoButton}>
                            {toggleStateTwo && <ChromePicker
                                name="gradienTwo"
                                color={colorStateTwo} 
                                onChange={(updatedColor) => setColorStateTwo(updatedColor.hex)}
                            />}
                    Color 2</Button>
                </ButtonGroup>
            </FormControl>
        </Box>
    )
}
