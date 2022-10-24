/* tslint:disable */

/* eslint-disable */
import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';

import { px } from '../helpers/normalize';
import { getIconColor } from './helper';

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconEyeclose: FC<SvgIconProps> = ({ size, color, ...rest }) => {
  const xml = `
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 9.72168C10.6623 9.72168 9.5856 10.7984 9.5856 12.1377C9.5856 12.8053 9.85048 13.3967 10.2905 13.8359C10.5836 14.1285 10.584 14.6034 10.2914 14.8965C9.99876 15.1897 9.52388 15.1901 9.23073 14.8975C8.52072 14.1887 8.0856 13.22 8.0856 12.1377C8.0856 9.97093 9.83293 8.22168 11.9996 8.22168C13.0699 8.22168 14.0598 8.65501 14.7641 9.37056C15.0547 9.66575 15.0509 10.1406 14.7557 10.4312C14.4605 10.7218 13.9857 10.718 13.6951 10.4228C13.2694 9.99035 12.6633 9.72168 11.9996 9.72168Z" fill="${getIconColor(
    color,
    0,
    '#999999'
  )}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2376 11.9607C15.6452 12.034 15.9163 12.4239 15.843 12.8316C15.5556 14.4294 14.2989 15.6889 12.7018 15.9788C12.2942 16.0528 11.9038 15.7824 11.8299 15.3748C11.7559 14.9673 12.0263 14.5769 12.4338 14.5029C13.4147 14.3249 14.19 13.5483 14.3666 12.5661C14.44 12.1584 14.8299 11.8874 15.2376 11.9607Z" fill="${getIconColor(
    color,
    1,
    '#999999'
  )}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 5.58398C10.2877 5.58398 8.6177 6.19775 7.14904 7.36009L7.14725 7.36151C5.73326 8.47357 4.49976 10.0919 3.56954 12.1378C4.49016 14.1728 5.71443 15.7803 7.11776 16.8821C7.44355 17.1379 7.5003 17.6093 7.24451 17.9351C6.98872 18.2609 6.51725 18.3177 6.19145 18.0619C4.48829 16.7247 3.07443 14.795 2.06042 12.4328C1.97911 12.2434 1.97934 12.0289 2.06104 11.8397C3.08485 9.46849 4.50709 7.52987 6.21908 6.18315C7.92423 4.83395 9.91584 4.08398 11.9996 4.08398C14.0974 4.08398 16.0881 4.84602 17.8013 6.20308C18.126 6.46027 18.1807 6.93198 17.9235 7.25667C17.6663 7.58136 17.1946 7.63608 16.8699 7.37889C15.3891 6.20595 13.7198 5.58398 11.9996 5.58398Z" fill="${getIconColor(
    color,
    2,
    '#999999'
  )}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9966 8.39155C19.3275 8.14245 19.7977 8.20878 20.0468 8.53972C20.7743 9.50615 21.4081 10.6137 21.938 11.8391C22.0201 12.0289 22.0202 12.2441 21.9382 12.434C19.8963 17.1644 16.2027 20.1888 11.9996 20.1888C11.0549 20.1888 10.1238 20.0354 9.23018 19.7372C8.83727 19.6061 8.62506 19.1812 8.75619 18.7883C8.88732 18.3954 9.31213 18.1832 9.70504 18.3143C10.4474 18.5621 11.2183 18.6888 11.9996 18.6888C15.3326 18.6888 18.5199 16.3345 20.4292 12.137C19.9703 11.129 19.4394 10.2269 18.8484 9.44181C18.5993 9.11088 18.6656 8.64066 18.9966 8.39155Z" fill="${getIconColor(
    color,
    3,
    '#999999'
  )}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4173 3.71918C20.7102 4.01207 20.7102 4.48695 20.4173 4.77984L4.64334 20.5538C4.35044 20.8467 3.87557 20.8467 3.58268 20.5538C3.28978 20.2609 3.28978 19.7861 3.58268 19.4932L19.3567 3.71918C19.6496 3.42629 20.1244 3.42629 20.4173 3.71918Z" fill="${getIconColor(
    color,
    4,
    '#999999'
  )}"/>
</svg>
`;

  return <SvgXml xml={xml} width={size} height={size} {...rest} />;
};

IconEyeclose.defaultProps = {
  size: px(16),
};

IconEyeclose = React.memo ? React.memo(IconEyeclose) : IconEyeclose;

export default IconEyeclose;
