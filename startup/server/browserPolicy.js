import { BrowserPolicy } from 'meteor/browser-policy-common';

// Api Sidebeep
BrowserPolicy.content.allowOriginForAll('api.sidebeep.com');

// Bootstrap
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');

// FontAwesome
BrowserPolicy.content.allowOriginForAll('use.fontawesome.com');

// Cdnjs Slick
BrowserPolicy.content.allowOriginForAll('cdnjs.cloudflare.com');

// Font Ionicons
BrowserPolicy.content.allowOriginForAll('unpkg.com');

// GraphQL Playground
BrowserPolicy.content.allowOriginForAll('graphcool-playground.netlify.com');
BrowserPolicy.content.allowOriginForAll('cdn.jsdelivr.net');

// Replace these with your own content URLs
BrowserPolicy.content.allowOriginForAll('cleverbeagle-assets.s3.amazonaws.com');
BrowserPolicy.content.allowOriginForAll('s3-us-west-2.amazonaws.com');
BrowserPolicy.content.allowFontOrigin('data:');
