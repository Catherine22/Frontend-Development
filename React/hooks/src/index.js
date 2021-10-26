import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import State from './State';
import Reducer from './Reducer';
import Effect from './Effect';
import Ref from './Ref';
import Context from './Context';
import Memo from './Memo';
import Callback from './Callback';

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
                        <code>useContext</code>
                    </pre>
                </h2>
                <Context />
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
            <section>
                <h2>
                    <pre>
                        <code>useMemo</code>
                    </pre>
                </h2>
                <Memo />
                <hr></hr>
            </section>
            <section>
                <h2>
                    <pre>
                        <code>useCallback</code>
                    </pre>
                </h2>
                <Callback />
                <hr></hr>
            </section>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
