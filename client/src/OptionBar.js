const optionStyle = {
    'background-color': 'white',
    display: 'flex',
    'flex-direction': 'row',
    'margin-top': '20px',
    position: 'sticky',
    top: "60px",
    'z-index': 9

}
function OptionBar () {

    return (
        <div style={optionStyle}>
            <h1>This is where the options will go</h1>
        </div>
    )

}

export default OptionBar