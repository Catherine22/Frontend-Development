import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import State from './State';
import Reducer from './Reducer';
import Effect from './Effect';
import Ref from './Ref';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <section>
                <h2>
                    <pre>
                        <code>useState</code>
                    </pre>
                </h2>
                <State />
                <hr></hr>
            </section>
            <section>
                <h2>
                    <pre>
                        <code>useReducer</code>
                    </pre>
                </h2>
                <Reducer />
                <hr></hr>
            </section>
            <section>
                <h2>
                    <pre>
                        <code>useEffect</code>
                    </pre>
                </h2>
                <Effect />
                <hr></hr>
            </section>
            <section>
                <h2>
                    <pre>
                        <code>useRef</code>
                    </pre>
                </h2>
                <Ref />
                <hr></hr>
            </section>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
