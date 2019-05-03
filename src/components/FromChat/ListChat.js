import React from 'react'

const ListChat = (props) => {

    return (
        <div style={{ marginTop:10 }}>
            {
                props.listMsg.map( msg =>{
                    return <p key = { msg.key }>{ msg.message }</p>
                }) 
            }
        </div>        
    )

}

export default ListChat