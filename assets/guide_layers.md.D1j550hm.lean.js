import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DUqP40Ch.js";const o=JSON.parse('{"title":"🗂️ Layers in Nuxt I18n Micro","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/layers.md","filePath":"guide/layers.md","lastUpdated":1724243643000}'),e={name:"guide/layers.md"};function l(h,s,p,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="🗂️-layers-in-nuxt-i18n-micro" tabindex="-1">🗂️ Layers in <code>Nuxt I18n Micro</code> <a class="header-anchor" href="#🗂️-layers-in-nuxt-i18n-micro" aria-label="Permalink to &quot;🗂️ Layers in \`Nuxt I18n Micro\`&quot;">​</a></h1><h2 id="📖-introduction-to-layers" tabindex="-1">📖 Introduction to Layers <a class="header-anchor" href="#📖-introduction-to-layers" aria-label="Permalink to &quot;📖 Introduction to Layers&quot;">​</a></h2><p>Layers in <code>Nuxt I18n Micro</code> allow you to manage and customize localization settings flexibly across different parts of your application. By defining different layers, you can adjust the configuration for various contexts, such as overriding settings for specific sections of your site or creating reusable base configurations that can be extended by other parts of your application.</p><h2 id="🛠️-primary-configuration-layer" tabindex="-1">🛠️ Primary Configuration Layer <a class="header-anchor" href="#🛠️-primary-configuration-layer" aria-label="Permalink to &quot;🛠️ Primary Configuration Layer&quot;">​</a></h2><p>The <strong>Primary Configuration Layer</strong> is where you set up the default localization settings for your entire application. This layer is essential as it defines the global configuration, including the supported locales, default language, and other critical i18n settings.</p><h3 id="📄-example-defining-the-primary-configuration-layer" tabindex="-1">📄 Example: Defining the Primary Configuration Layer <a class="header-anchor" href="#📄-example-defining-the-primary-configuration-layer" aria-label="Permalink to &quot;📄 Example: Defining the Primary Configuration Layer&quot;">​</a></h3><p>Here’s an example of how you might define the primary configuration layer in your <code>nuxt.config.ts</code> file:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ar-SA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rtl&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The default locale for the entire app</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    translationDir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;locales&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Directory where translations are stored</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    meta: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Automatically generate SEO-related meta tags like \`alternate\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoDetectLanguage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Automatically detect and use the user&#39;s preferred language</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="🌱-child-layers" tabindex="-1">🌱 Child Layers <a class="header-anchor" href="#🌱-child-layers" aria-label="Permalink to &quot;🌱 Child Layers&quot;">​</a></h2><p>Child layers are used to extend or override the primary configuration for specific parts of your application. For instance, you might want to add additional locales or modify the default locale for a particular section of your site. Child layers are especially useful in modular applications where different parts of the application might have different localization requirements.</p><h3 id="📄-example-extending-the-primary-layer-in-a-child-layer" tabindex="-1">📄 Example: Extending the Primary Layer in a Child Layer <a class="header-anchor" href="#📄-example-extending-the-primary-layer-in-a-child-layer" aria-label="Permalink to &quot;📄 Example: Extending the Primary Layer in a Child Layer&quot;">​</a></h3><p>Suppose you have a section of your site that needs to support additional locales, or you want to disable a particular locale in a certain context. Here’s how you can achieve that by extending the primary configuration layer:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// basic/nuxt.config.ts (Primary Layer)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    meta: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    translationDir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;locales&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// extended/nuxt.config.ts (Child Layer)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../basic&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherit the base configuration from the &#39;basic&#39; layer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited from the base layer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited from the base layer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;de&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;de-DE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Added in the child layer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Override the default locale to French for this section</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoDetectLanguage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Disable automatic language detection in this section</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="🌐-using-layers-in-a-modular-application" tabindex="-1">🌐 Using Layers in a Modular Application <a class="header-anchor" href="#🌐-using-layers-in-a-modular-application" aria-label="Permalink to &quot;🌐 Using Layers in a Modular Application&quot;">​</a></h3><p>In a larger, modular Nuxt application, you might have multiple sections, each requiring its own i18n settings. By leveraging layers, you can maintain a clean and scalable configuration structure.</p><h3 id="📄-example-layered-configuration-in-a-modular-application" tabindex="-1">📄 Example: Layered Configuration in a Modular Application <a class="header-anchor" href="#📄-example-layered-configuration-in-a-modular-application" aria-label="Permalink to &quot;📄 Example: Layered Configuration in a Modular Application&quot;">​</a></h3><p>Imagine you have an e-commerce site with distinct sections like the main website, admin panel, and customer support portal. Each section might need a different set of locales or other i18n settings.</p><h4 id="primary-layer-global-configuration" tabindex="-1"><strong>Primary Layer (Global Configuration):</strong> <a class="header-anchor" href="#primary-layer-global-configuration" aria-label="Permalink to &quot;**Primary Layer (Global Configuration):**&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// nuxt.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    meta: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    translationDir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;locales&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoDetectLanguage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h4 id="child-layer-for-admin-panel" tabindex="-1"><strong>Child Layer for Admin Panel:</strong> <a class="header-anchor" href="#child-layer-for-admin-panel" aria-label="Permalink to &quot;**Child Layer for Admin Panel:**&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// admin/nuxt.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../nuxt.config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherit the global settings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;es&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;es-ES&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Specific to the admin panel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    meta: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Disable automatic meta generation in the admin panel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h4 id="child-layer-for-customer-support-portal" tabindex="-1"><strong>Child Layer for Customer Support Portal:</strong> <a class="header-anchor" href="#child-layer-for-customer-support-portal" aria-label="Permalink to &quot;**Child Layer for Customer Support Portal:**&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// support/nuxt.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../nuxt.config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherit the global settings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locales: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-EN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inherited</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;de&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, iso: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;de-DE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ltr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Specific to the support portal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultLocale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;de&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Default to German in the support portal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoDetectLanguage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Disable automatic language detection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>In this modular example:</p><ul><li>Each section (admin, support) has its own i18n settings, but they all inherit the base configuration.</li><li>The admin panel adds Spanish (<code>es</code>) as a locale and disables meta tag generation.</li><li>The support portal adds German (<code>de</code>) as a locale and defaults to German for the user interface.</li></ul><h2 id="📝-best-practices-for-using-layers" tabindex="-1">📝 Best Practices for Using Layers <a class="header-anchor" href="#📝-best-practices-for-using-layers" aria-label="Permalink to &quot;📝 Best Practices for Using Layers&quot;">​</a></h2><ul><li><strong>🔧 Keep the Primary Layer Simple:</strong> The primary layer should contain the most commonly used settings that apply globally across your application. Keep it straightforward to ensure consistency.</li><li><strong>⚙️ Use Child Layers for Specific Customizations:</strong> Only override or extend settings in child layers when necessary. This approach avoids unnecessary complexity in your configuration.</li><li><strong>📚 Document Your Layers:</strong> Clearly document the purpose and specifics of each layer in your project. This will help maintain clarity and make it easier for others (or future you) to understand the configuration.</li></ul>`,28)]))}const y=i(e,[["render",l]]);export{o as __pageData,y as default};
