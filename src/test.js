import React,{ useState} from 'react'

function test() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            {count}
        </div>
    )
}

export default test
