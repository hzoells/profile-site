import {useEffect, useLayoutEffect} from 'react'

import {getIsServer} from 'lib/helpers'

export const useEnhancedEffect = getIsServer() ? useEffect : useLayoutEffect
