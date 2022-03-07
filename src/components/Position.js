import {useState, useEffect, useRef} from 'react'


const Position = ({text}) => {
    const index = useRef(0)
    const [position, setPosition] = useState('')
    useEffect(() => {
        index.current = 0;
        setPosition('')
    }, [text])
    


useEffect(() => {
    const timeOutId = setTimeout(() => {
        setPosition((value) => value + text.charAt(index.current))
        index.current += 1;
        return () => {
            clearTimeout(timeOutId)
        }
    }, 500)
}, [position,text])
return (
    <p>{position}</p>
)
}

export default Position 