import Head from 'next/head'

import "./styles.scss";

export default ({
  title,
  description,
  children
}) => (
  <div>
    <Head>
      <title>{title || 'Fozg.net'}</title>
      <meta name="description" content={description || "A Workspace social make your works better."} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta property="og:site_name" content="Fozg.net" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://fozg.net/" />
      <meta property="og:title" content="A Workspace Social | Fozg.net"/>
      <meta property="og:description" content="A Workspace social make your works better."/>
      <meta name="keywords" content="Workspace,Social,Fozg,Works,Blogs"/>
      <meta name="author" content="Phong (fozg) Dao"/>
      <link rel="icon" href="static/images/favicon.png" />
    </Head> 
    <div>
      {children}
    </div>
  </div>
)