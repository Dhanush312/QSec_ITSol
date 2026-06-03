// qsec/icons.jsx — consistent minimal line-icon set (stroke 1.5, rounded)
import React from 'react';
const { createElement: h } = React;

function Svg({ size = 24, children, stroke = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

/* ---- Service icons ---- */
const IconSupport = (p) => (
  <Svg {...p}>
    <path d="M4 13.5v-1.5a8 8 0 0 1 16 0v1.5" />
    <rect x="2.5" y="13" width="3.5" height="6" rx="1.5" />
    <rect x="18" y="13" width="3.5" height="6" rx="1.5" />
    <path d="M20 19v.5a3 3 0 0 1-3 3h-3" />
  </Svg>
);
const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 7.4 7 8.5 4.1-1.1 7-4.3 7-8.5V6l-7-3Z" />
    <path d="m9.2 11.8 2 2 3.6-3.8" />
  </Svg>
);
const IconCloud = (p) => (
  <Svg {...p}>
    <path d="M7 18h9.5a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 7.6 9.5 4.25 4.25 0 0 0 7 18Z" />
  </Svg>
);
const IconCamera = (p) => (
  <Svg {...p}>
    <path d="M3 8.5 17 5l1 3.5-14 3.6L3 8.5Z" />
    <path d="M5 12v6h11v-6" />
    <circle cx="10.5" cy="15" r="1.6" />
    <path d="M16 18v2" />
  </Svg>
);
const IconServer = (p) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="6" rx="1.8" />
    <rect x="4" y="14" width="16" height="6" rx="1.8" />
    <circle cx="7.5" cy="7" r=".6" fill="currentColor" />
    <circle cx="7.5" cy="17" r=".6" fill="currentColor" />
    <path d="M11 7h6M11 17h6" />
  </Svg>
);
const IconRefresh = (p) => (
  <Svg {...p}>
    <path d="M20 8a8 8 0 0 0-14.3-1.5M4 5v3.5h3.5" />
    <path d="M4 16a8 8 0 0 0 14.3 1.5M20 19v-3.5h-3.5" />
  </Svg>
);
const IconCode = (p) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.2" />
    <path d="M3 8.5h18" />
    <path d="m9.5 12.5-1.8 1.8 1.8 1.8M14.5 12.5l1.8 1.8-1.8 1.8" />
  </Svg>
);

/* ---- "Why us" / utility icons ---- */
const IconClock = (p) => (<Svg {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.8" /></Svg>);
const IconBolt = (p) => (<Svg {...p}><path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" /></Svg>);
const IconBadge = (p) => (<Svg {...p}><path d="M12 3.2 9.8 5l-2.8.1-.9 2.7-2 2 .8 2.7-.8 2.7 2 2 .9 2.7 2.8.1L12 21.8 14.2 20l2.8-.1.9-2.7 2-2-.8-2.7.8-2.7-2-2-.9-2.7L14.2 5 12 3.2Z" /><path d="m9.5 12 1.8 1.8 3.3-3.6" /></Svg>);
const IconTag = (p) => (<Svg {...p}><path d="M4 12.5V5a1 1 0 0 1 1-1h7.5L20 11.5a1.5 1.5 0 0 1 0 2.1l-6.4 6.4a1.5 1.5 0 0 1-2.1 0L4 12.5Z" /><circle cx="8.5" cy="8.5" r="1.3" /></Svg>);
const IconUsers = (p) => (<Svg {...p}><circle cx="9" cy="8.5" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 6.2a3 3 0 0 1 0 5.6M16.5 19a5.5 5.5 0 0 0-2.2-4.4" /></Svg>);
const IconLock = (p) => (<Svg {...p}><rect x="5" y="10.5" width="14" height="9.5" rx="2.2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /><circle cx="12" cy="15" r="1.2" /></Svg>);

/* ---- UI glyphs ---- */
const IconArrow = (p) => (<Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>);
const IconArrowUpRight = (p) => (<Svg {...p}><path d="M7 17 17 7M9 7h8v8" /></Svg>);
const IconCheck = (p) => (<Svg {...p}><path d="m5 12.5 4.5 4.5L19 7" /></Svg>);
const IconMenu = (p) => (<Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>);
const IconClose = (p) => (<Svg {...p}><path d="m6 6 12 12M18 6 6 18" /></Svg>);
const IconPhone = (p) => (<Svg {...p}><path d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4Z" /></Svg>);
const IconMail = (p) => (<Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2.4" /><path d="m4 7 8 6 8-6" /></Svg>);
const IconPin = (p) => (<Svg {...p}><path d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11Z" /><circle cx="12" cy="10" r="2.4" /></Svg>);
const IconWhatsApp = ({ size = 24, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.3.8 2.9-3-.8-.3.2A8.2 8.2 0 1 1 12 3.8Zm-3 4c-.2 0-.5 0-.7.4-.3.4-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.2 2.4 1 2.9.8 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4l-2-1c-.3-.1-.5-.2-.7.1l-.7 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.5-.6.3-.5v-.5l-.9-2.2c-.2-.5-.4-.5-.6-.5h-.4Z" />
  </svg>
);

Object.assign(window, {
  Svg, IconSupport, IconShield, IconCloud, IconCamera, IconServer, IconRefresh, IconCode,
  IconClock, IconBolt, IconBadge, IconTag, IconUsers, IconLock,
  IconArrow, IconArrowUpRight, IconCheck, IconMenu, IconClose, IconPhone, IconMail, IconPin, IconWhatsApp
});
