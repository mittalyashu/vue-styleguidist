import classDisplayNameHandler from './classDisplayNameHandler'
import classMethodHandler from './classMethodHandler'
import classPropHandler from './classPropHandler'
import componentHandler from './componentHandler'
import displayNameHandler from './displayNameHandler'
import eventHandler from './eventHandler'
import extendsHandler from './extendsHandler'
import methodHandler from './methodHandler'
import mixinsHandler from './mixinsHandler'
import propHandler from './propHandler'
import slotHandler from './slotHandler'
import { Handler } from '../parse-script'

const defaultHandlers: Handler[] = [
	// have to be first if they can be overridden
	extendsHandler,
	// have to be second as they can be overridden too
	mixinsHandler,
	displayNameHandler,
	componentHandler,
	methodHandler,
	propHandler,
	eventHandler,
	slotHandler,
	classDisplayNameHandler,
	classMethodHandler,
	classPropHandler
]

export default defaultHandlers
