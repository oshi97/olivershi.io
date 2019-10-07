import React from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

const ReactAce = () => (
	<div id='react-ace'>kjahk
		ace in the hole
		<AceEditor
			placeholder='Placeholder Text'
			mode='javascript'
			theme='monokai'
			name='blah2'
			fontSize={14}
			showPrintMargin={true}
			showGutter={true}
			highlightActiveLine={true}
			setOptions={{
				enableBasicAutocompletion: false,
				enableLiveAutocompletion: false,
				enableSnippets: false,
				showLineNumbers: true,
				tabSize: 2,
			}}
		/>
	</div>
)

export default ReactAce