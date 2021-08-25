import SliceZone from 'next-slicezone'

import resolver from '../sm-resolver.js'

import Prismic from '@prismicio/client'
const apiEndpoint = 'https://even-haven-heaven.prismic.io/api/v2'

const Page = (props) => {
  return (
    <SliceZone {...props} resolver={resolver} />
  )
}

export const getStaticProps = async function({ params: { uid } }) {
  const client = Prismic.client(apiEndpoint)
  const response = await client.getByUID('page', uid)
  return {
    props: response.data
  }
}

export const getStaticPaths = async function() {
  return {
    paths: ['/my-page'],
    fallback: false
  }
}

export default Page
