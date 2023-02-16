import React from "react";

function Die(props)
{
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "tomato"
    }
    return (
        <>
            {props.value === 1 &&
                <div class="dice first-face" style={styles} onClick={props.handleClick}>
                    <span class="dot"></span>
                </div>
            }

            {props.value === 2 && 
                <div class="dice second-face" style={styles} onClick={props.handleClick}>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            }

            {props.value === 3 && 
                <div class="dice third-face" style={styles} onClick={props.handleClick}>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            }

            {props.value === 4 && 
                <div class="dice fourth-face" style={styles} onClick={props.handleClick}>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            }

            {props.value === 5 && 
                <div class="dice fifth-face" style={styles} onClick={props.handleClick}>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    
                    <div class="column">
                        <span class="dot"></span>
                    </div>
                    
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            }

            {props.value === 6 && 
                <div class="dice sixth-face" style={styles} onClick={props.handleClick}>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                            <span class="dot"></span>
                    </div>
                </div>
            }
        </>
    )
}

export default Die;