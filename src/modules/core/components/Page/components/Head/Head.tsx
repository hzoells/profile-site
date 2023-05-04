import React, {memo, useMemo} from 'react'

import {
  HOST_DOMAIN,
  IS_PRODUCTION,
  PAGE_FAVICONS_PATH,
  PAGE_IMAGES_PATH,
  PAGE_SITE_NAME,
  PAGE_STATIC_PATH,
} from 'modules/core/constants'

import {colors} from 'lib/ui/styles'

import {useRouter} from 'next/router'

import NextHead from 'next/head'

const DEFAULT_PAGE_TITLE = 'Profile Site'
const DEFAULT_PAGE_DESCRIPTION = 'Personal Profile Site'
const DEFAULT_PAGE_IMAGE = `${PAGE_IMAGES_PATH}/preview.png`

const usePageUrl = () => {
  const {asPath} = useRouter()
  return `${HOST_DOMAIN}${asPath}`
}

const getPageTitle = (title: string = DEFAULT_PAGE_TITLE) => `${title} - ${PAGE_SITE_NAME}`

const getPageDescription = (description: string = DEFAULT_PAGE_DESCRIPTION) => description

const getPageImage = (image?: string | null) => {
  if (!image) {
    return DEFAULT_PAGE_IMAGE
  }

  if (typeof image === 'string') {
    return image
  }
}

export interface HeadProps {
  description?: string
  image?: string | null
  title?: string
}

export function Head({description, image, title}: HeadProps) {
  const pageUrl = usePageUrl()
  const pageTitle = useMemo(() => getPageTitle(title), [title])
  const pageDescription = useMemo(() => getPageDescription(description), [description])
  const pageImage = useMemo(() => getPageImage(image), [image])
  const pageColor = colors.black

  return (
    <NextHead>
      <base href='/' />
      <meta charSet='utf-8' />
      <meta content='en' name='language' />
      <meta content='ie=edge' httpEquiv='x-ua-compatible' />
      <meta
        content='width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no'
        name='viewport'
      />
      <meta content={IS_PRODUCTION ? 'all' : 'noindex, nofollow'} name='robots' />

      <meta content='website' property='og:type' />
      <meta content={PAGE_SITE_NAME} name='application-name' />
      <meta content={PAGE_SITE_NAME} property='og:site_name' />
      <meta content={pageUrl} property='og:url' />

      <title>{pageTitle}</title>
      <meta content={pageTitle} itemProp='name' />
      <meta content={pageTitle} property='og:title' />

      <meta content={pageDescription} name='description' />
      <meta content={pageDescription} itemProp='description' />
      <meta content={pageDescription} property='og:description' />

      <meta content={pageImage} name='image' />
      <meta content={pageImage} itemProp='image' />
      <meta content={pageImage} property='og:image' />

      <link
        href={`${PAGE_FAVICONS_PATH}/favicon-32x32.png`}
        rel='icon'
        sizes='32x32'
        type='image/png'
      />
      <link
        href={`${PAGE_FAVICONS_PATH}/favicon-16x16.png`}
        rel='icon'
        sizes='16x16'
        type='image/png'
      />
      <link href={`${PAGE_FAVICONS_PATH}/favicon.ico`} rel='shortcut icon' />

      <link href={`${PAGE_STATIC_PATH}/manifest.json`} rel='manifest' />
      <meta content={`${PAGE_STATIC_PATH}/browserconfig.xml`} name='msapplication-config' />
      <meta content={pageColor} name='msapplication-TileColor' />
      <meta content={pageColor} name='theme-color' />
    </NextHead>
  )
}

export default memo(Head)
