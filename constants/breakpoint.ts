export const BREAKPOINT_SM = 375;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 1264;
export const BREAKPOINT_XL = 1920;

export const MEDIA_CONDITION_SM = `max-width: ${BREAKPOINT_MD-1}px`;
export const MEDIA_CONDITION_MD = `min-width: ${BREAKPOINT_MD}px`;
export const MEDIA_CONDITION_LG = `min-width: ${BREAKPOINT_LG}px`;
export const MEDIA_CONDITION_XL = `min-width: ${BREAKPOINT_XL}px`;

export const MEDIA_QUERY_SM = `@media (${MEDIA_CONDITION_SM})`;
export const MEDIA_QUERY_MD = `@media (${MEDIA_CONDITION_MD})`;
export const MEDIA_QUERY_LG = `@media (${MEDIA_CONDITION_LG})`;
export const MEDIA_QUERY_XL = `@media (${MEDIA_CONDITION_XL})`;
