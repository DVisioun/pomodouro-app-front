import React from 'react'

function RightPanel() {
    return (
        <Panel right reveal dark>
            <View>
                <Page>
                    <Navbar title="Right Panel" />
                    <Block>Right panel content goes here</Block>
                </Page>
            </View>
        </Panel>
    )
}

export default RightPanel