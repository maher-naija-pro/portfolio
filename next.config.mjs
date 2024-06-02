import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};



// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "petaresearch-t4",
  project: "javascript-nextjs",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: truetranspileClientSDK: true,
  silent: false, // Can be used to suppress logs
});



