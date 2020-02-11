import React from 'react';
import Head from 'next/head'
import {initGA, logPageView} from '../../utils/ga';
import Footer from '../footer';

import "./styles.scss";

export default class Page extends React.Component {

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    const {
      title,
      description,
      children
    } = this.props;
    return (
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
          <meta name="theme-color" content="#181A1F" />
        </Head> 
        <div>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}
