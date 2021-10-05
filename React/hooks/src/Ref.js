import { useRef } from 'react';

function Ref() {
    const name = useRef(null);
    const age = useRef(null);

    const submit = () => {
        const payload = {
            name: name.current.value,
            age: age.current.value,
        };
        alert('submit: ' + JSON.stringify(payload));
    };
    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" ref={name}></input>
            </div>
            <div>
                <label>Name</label>
                <input type="number" ref={age}></input>
            </div>
            <button onClick={submit}>Submit</button>
        </form>
    );
}

export default Ref;
