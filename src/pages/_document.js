/* eslint-disable react/display-name */
import React from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
import {
  default as Document,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import Drift from 'react-driftjs';

const getCache = () => {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;

  return cache;
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="A modern design system for your new landing and web pages."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
          />
          <meta
            property="og:title"
            content="SOFTLIX Agency | Modern Website Design & Mobile App Development"
          />
          <meta
            property="og:description"
            content="Looking for a professional website design or Software company? Look no further than SOFTLIX Agency. We create beautiful websites, Apps, Software using the latest technologies like Nextjs, Flutter, React Native & Firebase."
          />
          <meta
            property="og:url"
            content="https://thefront.maccarianagency.com/"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* <script
            type="text/javascript"
            src="../scripts/intercomScript.js"
          ></script> */}
          <script src="https://consent.cookiefirst.com/sites/softlix.tech-c7280872-7ff7-43ba-8c73-ae9eb1dbe444/consent.js"></script>
          <script
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line quotes
              __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/phlf7cpa';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line quotes
              __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1235651050576264');
fbq('track', 'PageView');`,
            }}
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line quotes
              __html: `window.__COOKIE_BANNER_SETTINGS__ = {"autoblock":[],"integration":{"apiKey":"c7280872-7ff7-43ba-8c73-ae9eb1dbe444","dataLayer":"dataLayer","stealthMode":true,"forcedLang":"inherit","silentMode":true},"widgetConfig":{"baseConsent":{"necessary":true,"performance":false,"functional":false,"advertising":false},"preConsent":{"necessary":true,"performance":false,"functional":false,"advertising":false},"lastConsentReset":null,"bulkConsent":null,"consentPolicy":1,"autoblockKnownServices":false,"cookieCategories":["necessary","performance","functional"],"enableFloatingButton":false,"hideOutsideEU":false,"tabsOnSettingsPanel":["settings","cookies","policy"],"showLanguageSwitcher":false,"languages":[{"value":"en","label":"English"}],"loadInlineScripts":true,"increaseLocationPrecision":true,"okAcceptsAll":true,"bannerToggles":false,"banner_continue_button_type":"disabled","privacyPolicyUrl":"https:\/\/softlix.tech\/privacy-policy","additionalLink":null,"scripts":[{"id":"4df3646a-4e5a-4700-a464-661f26e409df","name":"CookieFirst","unique_service_uuid":null,"logo_path":"cookiefirst.png","categories":["necessary"],"privacy_policy_url":"https:\/\/cookiefirst.com\/legal\/privacy-policy\/","privacy_settings_url":null,"content":"","consent_key":"cookiefirst","integration":"manual"}],"showPrivacyUrlInBanner":true,"branding":{"banner":{"show":false},"panel":{"show":false}},"denyBtn":"visible","backdropEnabled":false,"widget":{"type":"banner","location":"bottom","fontFamily":null,"buttonsOrder":[{"value":"accept","width":"100%"},{"value":"reject","width":"50%"},{"value":"adjust","width":"50%"}],"width":"100%"},"consentLifetime":31104000,"reconsent":[],"bannerNonEuCountries":["IS","NO","CH","GB"],"googleConsentModeEnabled":false,"version":"9c7ce620-4e06-463d-bdd5-d1faa245d248"}};var src = "https://consent.cookiefirst.com/banner.js";if(document.body || document.readyState === 'complete') {    var s = document.createElement("script");    s.src = src;    document.head.appendChild(s);} else {    var s = ['<script src="', src, '"></script>'];document.write(s.join(""));}`,
            }}
          ></script> */}
          {/* <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/21402567.js"
          ></script> */}{' '}
          <script
            dangerouslySetInnerHTML={{
              __html: `(window.intercomSettings = {
                api_base: 'https://api-iam.intercom.io',
                app_id: 'phlf7cpa',
              })`,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVFCLKQ');`,
            }}
          ></script>
        </Head>
        <body>
          <Drift appId="gv9ah6ni8h8b" />
          <Main />

          <NextScript />

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MVFCLKQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none', visibility: 'hidden' }}
              src="https://www.facebook.com/tr?id=1235651050576264&ev=PageView&noscript=1"
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  const cache = getCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // Take precedence over the CacheProvider in our custom _app.js
      enhanceComponent: (Component) => (props) =>
        (
          <CacheProvider value={cache}>
            <Component {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
