import './Sidebar.css'
import 'react-virtualized/styles.css';
import { AutoSizer, List } from 'react-virtualized';

function Sidebar({ users }) {
    console.log(users)
    return (
        <div className='sidebar'>
            {/* <p className='title'>All Users(Scroll down to see more)</p> */}
            <AutoSizer>
                {({width,height}) => (
                    <List
                        width={width}
                        height={height}
                        rowHeight={100}
                        rowCount={users.length}
                        rowRenderer={({ key, index,style}) => {
                            const user = users[index]
                            return (
                                <div key={key} style={style} >
                                    <div className='list'>
                                    <p>Name:{user.userName}</p>
                                    <p>Age :{user.age} years</p>
                                    </div>
                                </div>
                            )
                        }}
                    />
                )}
            </AutoSizer>
        </div>
    )
}

export default Sidebar