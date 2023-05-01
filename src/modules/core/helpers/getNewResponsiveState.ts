import {mobileParser} from 'react-responsive-redux'
import {breakpoints} from 'lib/ui/styles'

import {PartialBy, Responsive} from 'lib/types'
import {PageContext} from 'modules/common/types'

export const getNewResponsiveState = (
  context: PageContext | undefined,
  isServer: boolean = false
): PartialBy<Responsive, 'fakeWidth'> => {
  let responsiveState

  if (isServer) {
    responsiveState = mobileParser(context?.req)
  } else {
    const isDesktop = window.innerWidth >= breakpoints.desktop

    const isTablet =
      window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop

    responsiveState = {
      desktop: isDesktop,
      mobile: !isDesktop,
      phone: !isDesktop && !isTablet,
      tablet: isTablet,
    }
  }

  return responsiveState
}
