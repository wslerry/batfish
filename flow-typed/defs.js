import React from 'react';

declare type JsonValue =
  | string
  | number
  | boolean
  | Array<JsonValue>
  | { [string]: JsonValue };

// This is the shape of the configuration object *after* it has run through
// validateConfig.
declare type BatfishConfiguration = {
  siteBasePath: string,
  siteOrigin?: string,
  publicAssetsPath: string,
  applicationWrapperPath: string,
  stylesheets: Array<string | Array<string>>,
  browserslist: string | Array<string>,
  pagesDirectory: string,
  outputDirectory: string,
  temporaryDirectory: string,
  dataSelectors?: { [string]: (BatfishSiteData) => JsonValue },
  vendorModules?: Array<string>,
  hijackLinks: boolean,
  webpackLoaders?: Array<webpack$Rule>,
  webpackPlugins?: Array<Object>,
  webpackStaticIgnore?: webpack$Condition,
  babelPlugins?: Array<Function>,
  babelPresets?: Array<Function>,
  babelPresetEnvOptions?: Object,
  babelExclude: webpack$Condition,
  postcssPlugins?: Array<Function>,
  fileLoaderExtensions: Array<string>,
  jsxtremeMarkdownOptions: {
    prependJs?: Array<string>,
    remarkPlugins?: Array<Function>,
    rehypePlugins?: Array<Function>
  },
  includePromisePolyfill: boolean,
  inlineJs?: Array<InlineJsEntry>,
  production?: boolean,
  developmentDevtool: string | false,
  productionDevtool: string | false,
  clearOutputDirectory: boolean,
  unprocessedPageFiles?: Array<string>,
  ignoreWithinPagesDirectory?: Array<string>,
  webpackConfigClientTransform?: webpack$Configuration => webpack$Configuration,
  webpackConfigStaticTransform?: webpack$Configuration => webpack$Configuration,
  port: number,
  verbose: boolean
};

declare type InlineJsEntry = { filename: string, uglify?: boolean };

declare type BatfishPageData = {
  filePath: string,
  path: string,
  frontMatter: { [string]: JsonValue }
};

declare type BatfishSiteData = {
  pages: Array<BatfishPageData>
};

declare type BatfishPageModule = {
  component: React.Component<*, *>,
  props: {
    frontMatter: { [string]: JsonValue }
  }
};

declare type BatfishRouteData = {
  path: string,
  getPage: () => Promise<BatfishPageModule>,
  internalRouting?: boolean,
  is404?: true
};

declare type BatfishContext = {
  selectedConfig: {
    siteBasePath: string,
    siteOrigin: string,
    hijackLinks: boolean
  },
  routes: Array<BatfishRouteData>,
  notFoundRoute: BatfishRouteData
};

declare type BatfishLocation = {
  pathname: string,
  search?: string,
  hash?: string
};

declare type BatfishServer = {
  start: () => void,
  reload: (filename?: string) => void,
  browserSyncInstance: browserSync$server
};

declare module 'batfish-internal/context' {
  declare export var batfishContext: BatfishContext;
}

declare module 'batfish-internal/application-wrapper' {
  declare export default React.Element<*>
}
