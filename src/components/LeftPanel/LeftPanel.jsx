import React from 'react'
import {
    Panel,
    View,
    Page,
    Navbar,
    Block,
} from 'framework7-react'

function LeftPanel() {
    return (
        <Panel left cover dark>
            <View>
                <Page>
                    <Navbar title="Left Panel" />
                    <Block>Left panel content goes here</Block>
                </Page>
            </View>
        </Panel>
    )
}

export default LeftPanel