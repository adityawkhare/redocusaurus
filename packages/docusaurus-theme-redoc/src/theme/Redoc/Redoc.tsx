import React from 'react';
import clsx from 'clsx';
import '../../global';
import { RedocStandalone, RedocRawOptions } from 'redoc';
import type { SpecProps } from '../../types/common';
import { useSpecOptions } from '../../utils/useSpecOptions';
import './styles.css';
import ServerRedoc from './ServerRedoc';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(
  props: Partial<SpecProps> & {
    className?: string;
    optionsOverrides?: RedocRawOptions;
  },
): JSX.Element {
  const { className, optionsOverrides, spec, url, themeId, isSpecFile } = props;
  const { options } = useSpecOptions(themeId, optionsOverrides);
  const isDevMode = process.env.NODE_ENV === 'development';

  if ((isDevMode && isSpecFile === false) || !spec) {
    return (
      <div className={clsx(['redocusaurus', className])}>
        <RedocStandalone specUrl={url} options={options} />
      </div>
    );
  }

  return <ServerRedoc {...props} spec={spec} />;
}

export default Redoc;
