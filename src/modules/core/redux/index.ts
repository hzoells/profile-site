/*
 * -----------
 * | WARNING |
 * -----------
 *
 * Guidelines to prevent circular imports:
 * - Do not import any `actions` or `selectors` from this file into any other redux files
 * - Explicitly import from the specific actions/selectors file
 * - Importing from this file into component files is safe
 *
 * -----------
 * | WARNING |
 * -----------
 */

import * as actions from './actions'
import * as selectors from './selectors'

export {actions as coreActions, selectors as coreSelectors}
