import React from 'react'
import {
    View,
    Popup,
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
} from 'framework7-react'

function Popup() {
    return (
        < Popup id="my-popup" >
            <View>
                <Page>
                    <Navbar title="Popup">
                        <NavRight>
                            <Link popupClose>Close</Link>
                        </NavRight>
                    </Navbar>
                    <Block>
                        <p>Popup content goes here.</p>
                    </Block>
                </Page>
            </View>
        </ Popup >
    )
}

export default Popup